import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib';

interface BuyingInstantlyNFTCardProps {
  tokenName: string;
  tokenId: number;
  tokenUri: string;
  downPaymentPrice: number;
  fullPaymentPrice: number;
  className?: string;
}

export const BuyingInstantlyNFTCard = (props: BuyingInstantlyNFTCardProps) => {
  const { tokenName, tokenId, tokenUri, downPaymentPrice, fullPaymentPrice, className } = props;

  return (
    <div
      className={cn(
        'flex flex-col w-64 bg-[#2D2E2F] items-start justify-center rounded-2xl border border-solid border-[#D9D9D9] overflow-hidden pb-4',
        className
      )}
    >
      <AspectRatio ratio={1} className="mb-2">
        <img src={tokenUri} alt="Token" className="z-10 size-full rounded-2xl object-cover" />
      </AspectRatio>
      <div className="flex w-full flex-col items-start justify-center gap-2 px-4">
        <span className="text-center text-xl font-bold text-white">
          {tokenName} #{tokenId}
        </span>
      </div>

      <div className="mt-2 flex w-full justify-between px-4">
        <div className="flex flex-col items-start">
          <span className="text-start text-sm text-white/80">Down Payment</span>
          <div className="flex items-center gap-1">
            <img src="/APT.png" alt="APT" className="size-4 rounded-full" />
            <span className="text-start text-sm text-white">{downPaymentPrice}</span>
          </div>
          <Button className="mt-4 h-fit w-full rounded-xl border-2 border-solid border-[#A66AFE] bg-[#A66AFE]/80 p-2 hover:bg-[#A66AFE]/60 focus:bg-[#A66AFE]/60">
            <span className="text-xs text-white/80">Down Payment</span>
          </Button>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-end text-sm text-white/80">Full Payment</span>
          <div className="flex items-end gap-1">
            <img src="/APT.png" alt="APT" className="size-4 rounded-full" />
            <span className="text-end text-sm text-white">{fullPaymentPrice}</span>
          </div>
          <Button className="mt-4 h-fit w-full rounded-xl border-2 border-solid border-[#D1F608] bg-[#D1F608]/80 p-2 hover:bg-[#D1F608]/60 focus:bg-[#D1F608]/60">
            <span className="text-xs text-black/80">Full Payment</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
