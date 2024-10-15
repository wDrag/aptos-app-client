import { useSearchParams } from 'react-router-dom';

import { BuyingInstantlyNFTCard, OfferNFTCard, SkeletonCards } from '@/components/shared';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  useGetExchangeAllInstantlyNFTQuery,
  useGetExchangeAllOfferNFTQuery,
} from '@/hooks/queries';
import { NFT } from '@/types';

const dummyNFT: NFT = {
  ownerAddress: 'dummy',
  collectionName: 'dummy',
  tokenId: 'dummy',
  tokenUri: 'dummy',
  tokenName: 'dummy',
};

const ExchangeBuyPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const view = searchParams.get('view') ?? 'buyNow';

  const { data: BuyNowNFTList = [dummyNFT] } = useGetExchangeAllInstantlyNFTQuery();

  const { data: AllItemsNFTList = [dummyNFT] } = useGetExchangeAllOfferNFTQuery();

  return (
    <div className="flex min-h-screen w-full flex-col bg-[url('/bg.png')] ">
      <div className="container mt-20 flex w-full flex-col p-10">
        <Tabs defaultValue={view} className="w-full">
          <TabsList className="mb-8 flex w-fit justify-start gap-2 rounded-xl bg-transparent">
            <TabsTrigger
              className="rounded-xl border-2 border-solid border-transparent bg-transparent text-xl data-[state=active]:border-[#D1F608]"
              onClick={() => {
                setSearchParams({ view: 'buyNow' });
              }}
              value="buyNow"
            >
              Buy Now
            </TabsTrigger>
            <TabsTrigger
              className="rounded-xl border-2 border-solid border-transparent bg-transparent text-xl data-[state=active]:border-[#D1F608]"
              onClick={() => {
                setSearchParams({ view: 'allItems' });
              }}
              value="allItems"
            >
              All Items
            </TabsTrigger>
          </TabsList>
          <TabsContent value="buyNow">
            <div className="grid grid-cols-4 gap-12">
              {view === 'buyNow' &&
                BuyNowNFTList.length > 0 &&
                BuyNowNFTList[0].ownerAddress !== 'dummy' &&
                BuyNowNFTList.map((nft) => (
                  <BuyingInstantlyNFTCard
                    key={nft.tokenId + nft.collectionName}
                    ownerAddress={nft.ownerAddress}
                    collectionName={nft.collectionName}
                    tokenName={nft.tokenName}
                    tokenId={nft.tokenId}
                    tokenUri={nft.tokenUri}
                  />
                ))}

              {view === 'buyNow' &&
                BuyNowNFTList.length > 0 &&
                BuyNowNFTList[0].ownerAddress === 'dummy' && <SkeletonCards skeletonCount={4} />}
            </div>
          </TabsContent>
          <TabsContent value="allItems">
            <div className="grid grid-cols-4 gap-12">
              {view === 'allItems' &&
                AllItemsNFTList.length > 0 &&
                AllItemsNFTList[0].ownerAddress !== 'dummy' &&
                AllItemsNFTList.map((nft) => (
                  <OfferNFTCard
                    key={nft.collectionName + nft.tokenId}
                    ownerAddress={nft.ownerAddress}
                    collectionName={nft.collectionName}
                    tokenName={nft.tokenName}
                    tokenId={nft.tokenId}
                    tokenUri={nft.tokenUri}
                  />
                ))}
              {view === 'allItems' &&
                AllItemsNFTList.length > 0 &&
                AllItemsNFTList[0].ownerAddress === 'dummy' && <SkeletonCards skeletonCount={4} />}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ExchangeBuyPage;
