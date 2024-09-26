import { SellingNFTCard } from '@/components/shared/SellingNFTCard';

interface NFT {
  collectionName: string;
  tokenName: string;
  tokenId: number;
  tokenUri: string;
  instantlySalePrice: number;
}

const ExchangeSellPage = () => {
  const NFTList: NFT[] = [
    {
      collectionName: 'Froggy',
      tokenName: 'Tree Froggy',
      tokenId: 1,
      tokenUri:
        'https://i.natgeofe.com/k/8fa25ea4-6409-47fb-b3cc-4af8e0dc9616/red-eyed-tree-frog-on-leaves-3-2.jpg',
      instantlySalePrice: 8,
    },
    {
      collectionName: 'Froggy',
      tokenName: 'Tree Froggy',
      tokenId: 2,
      tokenUri:
        'https://i.natgeofe.com/k/8fa25ea4-6409-47fb-b3cc-4af8e0dc9616/red-eyed-tree-frog-on-leaves-3-2.jpg',
      instantlySalePrice: 8,
    },
    {
      collectionName: 'Froggy',
      tokenName: 'Tree Froggy',
      tokenId: 3,
      tokenUri:
        'https://i.natgeofe.com/k/8fa25ea4-6409-47fb-b3cc-4af8e0dc9616/red-eyed-tree-frog-on-leaves-3-2.jpg',
      instantlySalePrice: 8,
    },
    {
      collectionName: 'Froggy',
      tokenName: 'Tree Froggy',
      tokenId: 4,
      tokenUri:
        'https://i.natgeofe.com/k/8fa25ea4-6409-47fb-b3cc-4af8e0dc9616/red-eyed-tree-frog-on-leaves-3-2.jpg',
      instantlySalePrice: 8,
    },
    {
      collectionName: 'Froggy',
      tokenName: 'Tree Froggy',
      tokenId: 5,
      tokenUri:
        'https://i.natgeofe.com/k/8fa25ea4-6409-47fb-b3cc-4af8e0dc9616/red-eyed-tree-frog-on-leaves-3-2.jpg',
      instantlySalePrice: 8,
    },
  ];

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden">
      <img src="/bg.png" alt="Background" className="absolute -z-10 h-screen w-screen" />
      <div className="container mt-20 flex w-full flex-col overflow-y-scroll p-10">
        <div className="mb-12 w-fit rounded-2xl border-2 border-solid border-[#D1F608] bg-transparent px-8 py-4 text-center text-xl text-white">
          Sell your <span className="text-[#D1F608]">NFT</span>
        </div>

        <div className="grid grid-cols-3 gap-12">
          {NFTList.map((nft) => (
            <SellingNFTCard
              key={nft.tokenId + nft.collectionName}
              collectionName={nft.collectionName}
              tokenName={nft.tokenName}
              tokenId={nft.tokenId}
              tokenUri={nft.tokenUri}
              instantlySalePrice={nft.instantlySalePrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExchangeSellPage;
