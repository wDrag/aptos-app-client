import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib';

interface OfferNFTCardProps {
  collectionName: string;
  tokenName: string;
  tokenId: number;
  tokenUri: string;
  downPaymentPrice: number;
  fullPaymentPrice: number;
  className?: string;
}

export const OfferNFTCard = (props: OfferNFTCardProps) => {
  const {
    collectionName,
    tokenName,
    tokenId,
    tokenUri,
    downPaymentPrice,
    fullPaymentPrice,
    className,
  } = props;

  return (
    <div
      className={cn(
        'flex flex-col w-96 bg-[#2D2E2F] items-start justify-center gap-3 rounded-2xl border border-solid border-[#D9D9D9] overflow-hidden pb-4',
        className
      )}
    >
      <AspectRatio ratio={1}>
        <img src={tokenUri} alt="Token" className="z-10 size-full rounded-2xl object-cover" />
      </AspectRatio>
      <div className="flex flex-col items-start gap-2 px-4">
        <span className="text-center text-xl font-bold text-white">
          {tokenName} #{tokenId}
        </span>
        <span className="text-center text-base text-white/60">Collection: {collectionName}</span>
      </div>

      <div className="flex w-full flex-col gap-3 px-4">
        <div className="flex w-full justify-between px-4">
          <div className="flex flex-col items-start gap-3">
            <span className="text-start text-xl font-bold text-white">Down Payment</span>
            <div className="flex items-center gap-1">
              <span className="text-start text-xl text-white">{downPaymentPrice}</span>
              <img src="/APT.png" alt="APT" className="size-5 rounded-full" />
            </div>
          </div>
          <div className="flex flex-col items-end gap-3">
            <span className="text-end text-xl font-bold text-white">Full Payment</span>
            <div className="flex items-end gap-1">
              <span className="text-end text-xl text-white">{fullPaymentPrice}</span>
              <img src="/APT.png" alt="APT" className="size-5 rounded-full" />
            </div>
          </div>
        </div>
        <Button className="w-full border-2 border-solid border-[#A66AFE] bg-[#A66AFE]/80 text-white/80 hover:bg-[#A66AFE]/60 focus:bg-[#A66AFE]/60">
          Make Offer
        </Button>
      </div>
    </div>
  );
};
