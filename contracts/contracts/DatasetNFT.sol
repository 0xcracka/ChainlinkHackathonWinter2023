// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.6/ChainlinkClient.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract DatasetNFT is ChainlinkClient, ERC721 {
    // Chainlink related variables
    address private oracle;
    bytes32 private jobId;
    uint256 private fee;

    // NFT Token details
    uint256 private nextTokenId;

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
    ) public ERC721(name, symbol) {
        setPublicChainlinkToken();
        oracle = _oracle;
        jobId = _jobId;
        fee = _fee;
        nextTokenId = 1;
    }

    // Function to request dataset validation
    function requestDatasetValidation(
        string memory datasetID
    ) public returns (bytes32 requestId) {
        Chainlink.Request memory request = buildChainlinkRequest(
            jobId,
            address(this),
            this.fulfillValidation.selector
        );

        // Set your API endpoint and datasetID
        request.add("get", "http://your-api-endpoint");
        request.add("path", "isValidated"); // JSON path in the API response
        request.add("datasetID", datasetID);

        // Sends the request to the Chainlink node
        return sendChainlinkRequestTo(oracle, request, fee);
    }

    // Callback function for Chainlink oracle
    function fulfillValidation(
        bytes32 _requestId,
        bool _isValidated
    ) public recordChainlinkFulfillment(_requestId) {
        if (_isValidated) {
            // Mint the NFT upon successful validation
            mintDatasetNFT(msg.sender, nextTokenId, "Your tokenURI here");
            nextTokenId++;
        } else {
            emit DatasetValidated(false);
        }
    }

    // Internal function to mint an NFT
    function mintDatasetNFT(
        address recipient,
        uint256 tokenId,
        string memory tokenURI
    ) internal {
        _mint(recipient, tokenId);
        _setTokenURI(tokenId, tokenURI);
        emit NFTMinted(tokenId, recipient);
    }
}
