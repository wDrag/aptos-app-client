import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { HTML_SPACE, cn } from '@/lib';

interface SellingNFTCardProps {
  tokenName: string;
  tokenId: number;
  tokenUri: string;
  instantlySalePrice: number;
  className?: string;
}

export const SellingNFTCard = (props: SellingNFTCardProps) => {
  const { tokenName, tokenId, tokenUri, instantlySalePrice, className } = props;

  return (
    <div
      className={cn(
        'flex flex-col w-64 bg-[#2D2E2F] items-start justify-center gap-3 rounded-2xl border border-solid border-[#D9D9D9] overflow-hidden pb-4',
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
      </div>

      <div className="flex w-full flex-col items-start justify-center gap-2 px-4">
        <div className="flex items-center">
          <span className="text-base text-white/60">Sell instantly for</span>
          <span className="text-start text-base text-white">
            {HTML_SPACE}
            {instantlySalePrice} APT
          </span>
          <img src="/APT.png" alt="APT" className="mx-1 size-4 rounded-full" />
        </div>
        <span className="text-center text-base text-white/60">or put up for offers</span>
      </div>

      <div className="mt-1 flex w-full justify-between gap-3 px-4">
        <Button className="w-full rounded-xl border-2 border-solid border-[#A66AFE] bg-[#A66AFE]/80 text-white/80 hover:bg-[#A66AFE]/60 focus:bg-[#A66AFE]/60">
          Sell Instantly
        </Button>
        <Button className="w-full rounded-xl border-2 border-solid border-[#D1F608] bg-[#D1F608]/80 text-black/80 hover:bg-[#D1F608]/60 focus:bg-[#D1F608]/60">
          Listing
        </Button>
      </div>
    </div>
  );
};
