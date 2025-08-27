import { Skeleton } from "../ui/skeleton"
import { TypographySkeleton } from "./typography-skeleton"

export default function JobCardSkeleton() {
  return (
    <div
      className="flex flex-col items-start justify-start gap-4 rounded-md border border-grayscale-border-default bg-grayscale-surface-disabled/50 px-4 py-2 md:px-6 md:py-4"
    >
      <TypographySkeleton color="subtle" type="lg" />
      <div className="inline-flex items-center justify-start gap-8 self-stretch">
        <div className="flex items-center justify-start gap-2">
          <Skeleton className="size-10 rounded-full" />
          <TypographySkeleton type="sm" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="size-4 rounded-md" />
          <TypographySkeleton type="sm" />
        </div>
      </div>
      <div className="inline-flex items-center gap-8">
        <TypographySkeleton type="xxs" />
        <Skeleton className="h-4 w-10 rounded-sm" />
      </div>
    </div>
  );
}

