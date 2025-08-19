import { Skeleton } from "../ui/skeleton";
import { TypographySkeleton } from "./typography-skeleton";

export default function ClientCardSkeleton() {
  return (
    <div className="space-y-8 bg-grayscale-surface-disabled/40 p-4 md:p-6">
      <div className="flex items-center justify-between gap-2">
        <Skeleton className="h-[62px] flex-1" />
        <Skeleton className="size-6" />
      </div>
      <TypographySkeleton />
      <div className="space-y-1">
        <TypographySkeleton type="xxs" />
        <Skeleton className="h-10 w-full max-w-[133px]" />
      </div>
    </div>
  )
}
