import { TypographySkeleton } from "./typography-skeleton"
import { Skeleton } from "../ui/skeleton"

export default function TableSkeleton() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <TypographySkeleton color="disabled" className="flex-1" />
        <TypographySkeleton className="flex-1" />
      </div>
      <div className="rounded-md border-1">
        <div className="rounded-xl border-1 border-grayscale-border-lighter">
          <div>
            <Skeleton className="size-full max-h-10" />
            <div>
              {
                Array.from({ length: 4 }).map((_, i) => <Skeleton className="size-full min-h-10 bg-grayscale-surface-disabled" key={i} />)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
