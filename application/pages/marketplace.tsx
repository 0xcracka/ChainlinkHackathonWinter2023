import TokenPage from "./[contractAddress]/[tokenId]";
import NFTGrid1 from "../components/NFT/NFTGrid1";

const marketplace = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-bold text-center mt-8">Marketplace</h1>
      <p className="text-center">
        Browse which NFTs are available from the collection.
      </p>
      <div className="max-w-3xl mx-auto mt-8 p-4 bg-white rounded-lg shadow">
        {/* <NFTGrid1
          // data={data}
          // isLoading={isLoading}
          emptyText={
            "Looks like there are no NFTs in this collection. Did you import your contract on the thirdweb dashboard? https://thirdweb.com/dashboard"
          }
        /> */}
      </div>
    </div>
  );
};

export default marketplace;
