import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib';

export const SkeletonCards = ({
  skeletonCount,
  className,
}: {
  skeletonCount: number;
  className?: string;
}) => {
  return Array.from({ length: skeletonCount }, (_, i) => (
    <Skeleton key={i} className={cn('flex flex-col w-72 h-72 rounded-2xl pb-4', className)} />
  ));
};
