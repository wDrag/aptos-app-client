import { useSearchParams } from 'react-router-dom';

import { BuyingInstantlyNFTCard, OfferNFTCard } from '@/components/shared';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface NFT {
  collectionName: string;
  tokenName: string;
  tokenId: number;
  tokenUri: string;
  downPaymentPrice: number;
  fullPaymentPrice: number;
}

const ExchangeBuyPage = () => {
  const BuyNowNFTList: NFT[] = [
    {
      collectionName: 'Froggy',
      tokenName: 'Tree Froggy',
      tokenId: 1,
      tokenUri:
        'https://i.natgeofe.com/k/8fa25ea4-6409-47fb-b3cc-4af8e0dc9616/red-eyed-tree-frog-on-leaves-3-2.jpg',
      downPaymentPrice: 8,
      fullPaymentPrice: 20,
    },
    {
      collectionName: 'Froggy',
      tokenName: 'Tree Froggy',
      tokenId: 2,
      tokenUri:
        'https://i.natgeofe.com/k/8fa25ea4-6409-47fb-b3cc-4af8e0dc9616/red-eyed-tree-frog-on-leaves-3-2.jpg',
      downPaymentPrice: 8,
      fullPaymentPrice: 20,
    },
    {
      collectionName: 'Froggy',
      tokenName: 'Tree Froggy',
      tokenId: 3,
      tokenUri:
        'https://i.natgeofe.com/k/8fa25ea4-6409-47fb-b3cc-4af8e0dc9616/red-eyed-tree-frog-on-leaves-3-2.jpg',
      downPaymentPrice: 8,
      fullPaymentPrice: 20,
    },
    {
      collectionName: 'Froggy',
      tokenName: 'Tree Froggy',
      tokenId: 4,
      tokenUri:
        'https://i.natgeofe.com/k/8fa25ea4-6409-47fb-b3cc-4af8e0dc9616/red-eyed-tree-frog-on-leaves-3-2.jpg',
      downPaymentPrice: 8,
      fullPaymentPrice: 20,
    },
    {
      collectionName: 'Froggy',
      tokenName: 'Tree Froggy',
      tokenId: 5,
      tokenUri:
        'https://i.natgeofe.com/k/8fa25ea4-6409-47fb-b3cc-4af8e0dc9616/red-eyed-tree-frog-on-leaves-3-2.jpg',
      downPaymentPrice: 8,
      fullPaymentPrice: 20,
    },
  ];

  const AllItemsNFTList: NFT[] = [
    {
      collectionName: 'Bored Ape Yacht Club',
      tokenName: 'Bored Ape',
      tokenId: 1234,
      tokenUri:
        'https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31',
      downPaymentPrice: 40,
      fullPaymentPrice: 100,
    },
    {
      collectionName: 'Bored Ape Yacht Club',
      tokenName: 'Bored Ape',
      tokenId: 2415,
      tokenUri:
        'https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31',
      downPaymentPrice: 40,
      fullPaymentPrice: 100,
    },
    {
      collectionName: 'Bored Ape Yacht Club',
      tokenName: 'Bored Ape',
      tokenId: 5142,
      tokenUri:
        'https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31',
      downPaymentPrice: 40,
      fullPaymentPrice: 100,
    },
    {
      collectionName: 'Bored Ape Yacht Club',
      tokenName: 'Bored Ape',
      tokenId: 123,
      tokenUri:
        'https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31',
      downPaymentPrice: 40,
      fullPaymentPrice: 100,
    },
    {
      collectionName: 'Bored Ape Yacht Club',
      tokenName: 'Bored Ape',
      tokenId: 3,
      tokenUri:
        'https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31',
      downPaymentPrice: 40,
      fullPaymentPrice: 100,
    },
    {
      collectionName: 'Bored Ape Yacht Club',
      tokenName: 'Bored Ape',
      tokenId: 1521,
      tokenUri:
        'https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31',
      downPaymentPrice: 40,
      fullPaymentPrice: 100,
    },
    {
      collectionName: 'Bored Ape Yacht Club',
      tokenName: 'Bored Ape',
      tokenId: 5123,
      tokenUri:
        'https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31',
      downPaymentPrice: 40,
      fullPaymentPrice: 100,
    },
    {
      collectionName: 'Bored Ape Yacht Club',
      tokenName: 'Bored Ape',
      tokenId: 92,
      tokenUri:
        'https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31',
      downPaymentPrice: 40,
      fullPaymentPrice: 100,
    },
  ];

  const [searchParams, setSearchParams] = useSearchParams();
  const view = searchParams.get('view') ?? 'buyNow';

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden">
      <img src="/bg.png" alt="Background" className="absolute -z-10 h-screen w-screen" />
      <div className="container mt-20 flex w-full flex-col overflow-y-auto p-10">
        <Tabs defaultValue={view} className="w-full">
          <TabsList className="mb-8 flex w-fit justify-start gap-2 rounded-xl bg-transparent">
            <TabsTrigger
              className="rounded-xl border-2 border-solid border-transparent bg-transparent text-xl data-[state=active]:border-[#D1F608]"
              onClick={() => setSearchParams({ view: 'buyNow' })}
              value="buyNow"
            >
              Buy Now
            </TabsTrigger>
            <TabsTrigger
              className="rounded-xl border-2 border-solid border-transparent bg-transparent text-xl data-[state=active]:border-[#D1F608]"
              onClick={() => setSearchParams({ view: 'allItems' })}
              value="allItems"
            >
              All Items
            </TabsTrigger>
          </TabsList>
          <TabsContent value="buyNow">
            <div className="grid grid-cols-3 gap-12">
              {view === 'buyNow' &&
                BuyNowNFTList.map((nft) => (
                  <BuyingInstantlyNFTCard
                    key={nft.tokenId + nft.collectionName}
                    collectionName={nft.collectionName}
                    tokenName={nft.tokenName}
                    tokenId={nft.tokenId}
                    tokenUri={nft.tokenUri}
                    downPaymentPrice={nft.downPaymentPrice}
                    fullPaymentPrice={nft.fullPaymentPrice}
                  />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="allItems">
            <div className="grid grid-cols-3 gap-12">
              {view === 'allItems' &&
                AllItemsNFTList.map((nft) => (
                  <OfferNFTCard
                    key={nft.tokenId}
                    collectionName={nft.collectionName}
                    tokenName={nft.tokenName}
                    tokenId={nft.tokenId}
                    tokenUri={nft.tokenUri}
                    downPaymentPrice={nft.downPaymentPrice}
                    fullPaymentPrice={nft.fullPaymentPrice}
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ExchangeBuyPage;
