// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract DatasetNFT is ChainlinkClient, ERC721 {
    // Chainlink related variables
    address private oracle;
    bytes32 private jobId;
    uint256 private fee;

    // NFT Token details
    uint256 private nextTokenId;

    // Mapping from token ID to token URI
    mapping(uint256 => string) private _tokenURIs;

    // Events
    event DatasetValidated(bool isValidated);
    event NFTMinted(uint256 tokenId, address recipient);

    // Constructor
    constructor(
        string memory name,
        string memory symbol,
        address _oracle,
        bytes32 _jobId,
        uint256 _fee
    ) ERC721(name, symbol) {
        setPublicChainlinkToken();
        oracle = _oracle;
        jobId = _jobId;
        fee = _fee;
        nextTokenId = 1;
    }

    // Mapping RequestId to tokenURI
    mapping(bytes32 => string) public requestIdToTokenURI;

    // Function to request dataset validation
    function requestDatasetValidation(
        string memory datasetID,
        string memory uriParam
    ) public returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(
            jobId,
            address(this),
            this.fulfillValidation.selector
        );

        // Set the URL to perform the GET request on
        req.add("get", "https://datalynk.vercel.app/api/validateDataset");

        // Set the path to find the desired data in the API response
        req.add("path", "isValidated");

        // Set the parameters for your datasetID
        req.add("datasetID", datasetID);

        bytes32 newRequestId = sendChainlinkRequestTo(oracle, req, fee);

        // Store the tokenURI with the requestId
        requestIdToTokenURI[newRequestId] = uriParam;

        return newRequestId;
    }

    // Callback function for Chainlink oracle
    function fulfillValidation(
        bytes32 _requestId,
        bool _isValidated
    ) public recordChainlinkFulfillment(_requestId) {
        // Retrieve the tokenURI associated with the requestId
        string memory uriParam = requestIdToTokenURI[_requestId];

        if (_isValidated) {
            // Mint the NFT upon successful validation
            mintDatasetNFT(msg.sender, nextTokenId, uriParam);
            nextTokenId++;
        } else {
            emit DatasetValidated(false);
        }
    }

    // Internal function to mint an NFT
    function mintDatasetNFT(
        address recipient,
        uint256 tokenId,
        string memory uriParam
    ) internal {
        _mint(recipient, tokenId);
        _tokenURIs[tokenId] = uriParam;
        emit NFTMinted(tokenId, recipient);
    }

    // Override for tokenURI
    function tokenURI(
        uint256 tokenId
    ) public view override returns (string memory) {
        require(
            ERC721._exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );
        return _tokenURIs[tokenId];
    }
}
