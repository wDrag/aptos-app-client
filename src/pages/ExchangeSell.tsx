import { SellingNFTCard } from '@/components/shared/SellingNFTCard';
import { useTokensQuery } from '@/hooks/queries';

const ExchangeSellPage = () => {
  const { data: myNFTs = [] } = useTokensQuery();

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden">
      <img src="/bg.png" alt="Background" className="absolute -z-10 h-screen w-screen" />
      <div className="container mt-20 flex w-full flex-col overflow-y-scroll p-10">
        <div className="mb-12 w-fit rounded-2xl border-2 border-solid border-[#D1F608] bg-transparent px-8 py-4 text-center text-xl text-white">
          Sell your <span className="text-[#D1F608]">NFT</span>
        </div>

        <div className="grid grid-cols-4 gap-12">
          {myNFTs.map((nft) => (
            <SellingNFTCard
              key={nft.tokenId + nft.collectionName}
              tokenName={nft.tokenName}
              tokenId={nft.tokenId}
              tokenUri={nft.tokenUri}
              collectionName={nft.collectionName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExchangeSellPage;
