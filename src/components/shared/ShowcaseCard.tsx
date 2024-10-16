import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn, fromIpfs, getNameWithoutId } from '@/lib';

interface ShowcaseCardProps {
  tokenName: string;
  collectionName: string;
  tokenId: string;
  tokenUri: string;
  className?: string;
}

export const ShowcaseCard = (props: ShowcaseCardProps) => {
  const { tokenName, tokenId, tokenUri, className } = props;

  return (
    <div
      className={cn(
        'flex flex-col relative w-72 bg-[#2D2E2F] items-start justify-center gap-3 rounded-2xl border border-solid border-[#D9D9D9] overflow-hidden pb-4',
        className
      )}
    >
      <div className="absolute right-2 top-2 z-50 flex h-8 w-fit items-center justify-end rounded-md bg-[#d6ff44] px-2">
        <span className="text-end text-xs font-semibold text-black">Bound NFT</span>
      </div>
      <AspectRatio ratio={1}>
        <img
          src={fromIpfs(tokenUri)}
          alt="Token"
          className="z-10 size-full rounded-2xl object-cover"
        />
      </AspectRatio>
      <div className="flex flex-col items-start gap-2 px-4">
        <span className="text-start text-xl font-bold text-white">
          {getNameWithoutId(tokenName)}
          <br />#{tokenId}
        </span>
      </div>
    </div>
  );
};
