const about = () => {
  return (
    <div>
      <div className="bg-blue-500 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-4">About</h1>
          <div className="mb-8">
            <h2 className="text-xl font-bold text-white mb-2">1. About Us</h2>
            <p className="text-gray-200">
              At DataLynk, we believe in the power of data. The world is
              becoming increasingly data-driven, and we are here to help
              facilitate that transition. DataLynk is a marketplace for data,
              allowing data providers to tokenize their data and sell it to data
              consumers. We believe that data is an asset, and should be treated
              as such. DataLynk is built on the Ethereum blockchain, and uses
              Chainlink oracles to verify the data on-chain. We are excited to
              help usher in the next phase of the digital age.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold mb-2">
            2. Chainlink Oracle Integration
          </h2>
          <p className="text-gray-700">
            Chainlink is the industry standard for blockchain oracles, and is
            the most widely used oracle solution in the blockchain industry.
            Chainlink oracles are decentralized and secure, allowing for the
            verification of off-chain data on-chain. This allows for data to be
            verified on-chain, and thus allows for the creation of
            blockchain-verified data.
          </p>
        </div>
      </div>
      <div className="bg-blue-500 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-white mb-2">
            3. Blockchain-Verified Data
          </h2>
          <p className="text-gray-200">
            Blockchain-verified data is data that has been verified on-chain
            using Chainlink oracles. This allows for data to be verified
            on-chain, and thus allows for the creation of blockchain-verified
            data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
