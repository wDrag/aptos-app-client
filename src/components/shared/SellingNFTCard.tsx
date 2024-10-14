import { useWallet } from '@aptos-labs/wallet-adapter-react';
import NiceModal from '@ebay/nice-modal-react';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { useGetOracleFloorPriceQuery } from '@/hooks/queries';
import { HTML_SPACE, cn } from '@/lib';
import { ListForOfferModal, ListInstantlyModal } from '@/modals';

interface SellingNFTCardProps {
  tokenName: string;
  collectionName: string;
  tokenId: string;
  tokenUri: string;
  className?: string;
}

export const SellingNFTCard = (props: SellingNFTCardProps) => {
  const { account } = useWallet();

  const { tokenName, collectionName, tokenId, tokenUri, className } = props;

  const { data: listInstantlyPrice = 3 } = useGetOracleFloorPriceQuery({
    ownerAddress: account?.address || '',
    collectionName,
    tokenId,
  });

  return (
    <div
      className={cn(
        'flex flex-col w-72 bg-[#2D2E2F] items-start justify-center gap-3 rounded-2xl border border-solid border-[#D9D9D9] overflow-hidden pb-4',
        className
      )}
    >
      <AspectRatio ratio={1}>
        <img src={tokenUri} alt="Token" className="z-10 size-full rounded-2xl object-cover" />
      </AspectRatio>
      <div className="flex flex-col items-start gap-2 px-4">
        <span className="text-center text-xl font-bold text-white">{tokenName}</span>
      </div>

      <div className="flex w-full flex-col items-start justify-center gap-2 px-4">
        <div className="flex items-center">
          <span className="text-base text-white/60">Sell instantly for</span>
          <span className="text-start text-base text-white">
            {HTML_SPACE}
            {listInstantlyPrice} APT
          </span>
          <img src="/APT.png" alt="APT" className="mx-1 size-4 rounded-full" />
        </div>
        <span className="text-center text-base text-white/60">or put up for offers</span>
      </div>

      <div className="mt-1 flex w-full justify-between gap-3 px-4">
        <Button
          onClick={() => {
            NiceModal.show(ListInstantlyModal, {
              onClose: () => {
                // eslint-disable-next-line no-console
                console.log('ListInstantlyModal closed');
              },
              tokenUri,
              tokenName,
              tokenId,
              collectionName,
              ownerAddress: account?.address || '',
              listInstantlyPrice,
            });
          }}
          className="w-full rounded-xl border-2 border-solid border-[#A66AFE] bg-[#A66AFE]/80 text-white/80 hover:bg-[#A66AFE]/60 focus:bg-[#A66AFE]/60"
        >
          Sell Instantly
        </Button>
        <Button
          onClick={() => {
            NiceModal.show(ListForOfferModal, {
              onClose: () => {
                // eslint-disable-next-line no-console
                console.log('ListInstantlyModal closed');
              },
              tokenUri,
              tokenName,
              tokenId,
              collectionName,
              ownerAddress: account?.address || '',
            });
          }}
          className="w-full rounded-xl border-2 border-solid border-[#D1F608] bg-[#D1F608]/80 text-black/80 hover:bg-[#D1F608]/60 focus:bg-[#D1F608]/60"
        >
          Listing
        </Button>
      </div>
    </div>
  );
};
