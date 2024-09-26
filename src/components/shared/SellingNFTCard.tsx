import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib';

interface SellingNFTCardProps {
  collectionName: string;
  tokenName: string;
  tokenId: number;
  tokenUri: string;
  instantlySalePrice: number;
  className?: string;
}

export const SellingNFTCard = (props: SellingNFTCardProps) => {
  const { collectionName, tokenName, tokenId, tokenUri, instantlySalePrice, className } = props;

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

      <div className="flex w-full flex-col justify-between gap-3 px-4">
        <Button className="w-full border-2 border-solid border-[#A66AFE] bg-[#A66AFE]/80 text-white/80 hover:bg-[#A66AFE]/60 focus:bg-[#A66AFE]/60">
          Sell Instantly for {instantlySalePrice} APT
        </Button>
        <Button className="w-full border-2 border-solid border-[#D1F608] bg-[#D1F608]/80 text-black/80 hover:bg-[#D1F608]/60 focus:bg-[#D1F608]/60">
          Listing and wait for offers
        </Button>
      </div>
    </div>
  );
};
