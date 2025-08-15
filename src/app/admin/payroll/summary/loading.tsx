import { TypographySkeleton } from "@/components/skeletons/typography-skeleton";
import { Skeleton } from "@/components/ui/skeleton";
import PayrollSummary from "./page";



function OverviewSkeleton() {
  return (
    <div className="space-y-6">
      <TypographySkeleton />
      <Skeleton className="h-full max-h-[272px] w-full" />
    </div>


  )
}
function BreakdownSkeleton() {
  return (
    <div className="space-y-6">
      <TypographySkeleton />
      <Skeleton className="h-full max-h-[272px] w-full" />
    </div>

  )
}



export namespace PayrollSummarySkeleton {
  export const Overview = OverviewSkeleton;
  export const Breakdown = BreakdownSkeleton;
}


export default function SuperadminPayrollSummary() {
  return (
    <>
      <PayrollSummarySkeleton.Overview />
      <PayrollSummarySkeleton.Breakdown />
    </>
  )
}
