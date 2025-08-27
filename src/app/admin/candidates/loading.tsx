import DashboardPageHeader from "@/components/dashboard/page-header";
import OverviewCardSkeleton from "@/components/skeletons/overview-card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export default function Loading() {
  return (
    <>
      <DashboardPageHeader title="Candidate" />
      <div className="p-4 md:p-6">
        <AdminCandidateSkeleton.Overview />
        <AdminCandidateSkeleton.Table />
      </div>
    </>
  )
}

function OverviewSectionSkeleton({ animate }: { animate?: boolean }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <OverviewCardSkeleton
          className={cn(animate && `animate-stagger-${Math.min(i, 4)}`)}
          key={i} />
      ))}
    </div>
  )

}
function TableSkeleton() {
  return (
    <div className="gap-1 bg-grayscale-surface-disabled/40">
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-[168px] w-full" />

    </div>
  )
}
export namespace AdminCandidateSkeleton {
  export const Overview = OverviewSectionSkeleton
  export const Table = TableSkeleton
}


