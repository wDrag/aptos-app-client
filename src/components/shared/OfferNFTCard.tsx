import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib';

interface OfferNFTCardProps {
  tokenName: string;
  collectionName: string;
  tokenId: string;
  tokenUri: string;
  className?: string;
}

export const OfferNFTCard = (props: OfferNFTCardProps) => {
  const { tokenName, tokenUri, className } = props;

  return (
    <div
      className={cn(
        'flex flex-col w-64 gap-2 bg-[#2D2E2F] items-start justify-center rounded-2xl border border-solid border-[#D9D9D9] overflow-hidden pb-4',
        className
      )}
    >
      <AspectRatio ratio={1}>
        <img src={tokenUri} alt="Token" className="z-10 size-full rounded-2xl object-cover" />
      </AspectRatio>
      <div className="flex flex-col items-start gap-2 px-4">
        <span className="text-center text-xl font-bold text-white">{tokenName}</span>
      </div>

      <div className="flex w-full flex-col px-4">
        <Button className="w-full rounded-xl border-2 border-solid border-[#A66AFE] bg-[#A66AFE]/80 text-white/80 hover:bg-[#A66AFE]/60 focus:bg-[#A66AFE]/60">
          Make Offer
        </Button>
      </div>
    </div>
  );
};
