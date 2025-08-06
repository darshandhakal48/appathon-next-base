import { Skeleton } from "../ui/skeleton";
import { TypographySkeleton } from "./typography-skeleton";

export default function OverviewCardSkeleton() {
  return (
    <Skeleton className="4 flex h-fit items-center gap-2 rounded-[6px] bg-slate-200 p-4 md:gap-6 md:px-8 dark:bg-slate-700">
      <div className="flex size-[52px]! min-w-[52px] items-center justify-center rounded-full">
        <Skeleton className="size-6! bg-grayscale-surface-subtle" />
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <TypographySkeleton type="sm" />
        <TypographySkeleton type="2xl" />
      </div>
    </Skeleton>
  )
}
/*
 *
 * <div data-property-1="Default" className="self-stretch h-24 px-8 bg-Greyscale-Surface-White rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] inline-flex flex-col justify-center items-start gap-4">
    <div className="inline-flex justify-center items-center gap-6">
        <div className="w-12 h-12 relative bg-Greyscale-Surface-Subtle rounded-[48px] overflow-hidden">
            <div className="w-6 h-6 left-[14px] top-[14px] absolute overflow-hidden">
                <div className="w-5 h-5 left-[1px] top-[2px] absolute bg-Primary-Surface-Default" />
            </div>
        </div>
        <div className="inline-flex flex-col justify-center items-start gap-1">
            <div className="justify-start text-Greyscale-Text-Body text-sm font-normal font-['Roboto'] leading-tight">Applied</div>
            <div className="justify-start text-Greyscale-Text-Title text-2xl font-bold font-['Roboto'] leading-loose">0</div>
        </div>
    </div>
</div>
 *
 * */
