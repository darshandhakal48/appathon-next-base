import DashboardPageHeader from "@/components/dashboard/page-header";
import BasicLayoutCard from "@/components/shared/basic-layout-card";
import OverviewCardSkeleton from "@/components/skeletons/overview-card";
import { TypographySkeleton } from "@/components/skeletons/typography-skeleton";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export default function DashboardLoading() {
  return (
    <>
      <DashboardPageHeader title="Dashboard" />
      <div className="space-y-4 p-6">
        <AdminDashboardSkeleton.Overview animate />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <AdminDashboardSkeleton.ActiveJobs />
          <AdminDashboardSkeleton.UserActivity />
        </div>
      </div>
    </>
  )
}

const OverviewSkeleton = ({ animate = false }: { animate?: boolean }) => (
  <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <OverviewCardSkeleton
        className={cn(animate && `animate-stagger-${Math.min(i, 4)}`)}
        key={i} />
    ))}
  </div>

)

const ActiveJobsSkeleton = () => (
  <BasicLayoutCard className="space-y-4">
    <div className="flex w-full flex-1 justify-between">
      <TypographySkeleton className="flex-1" width="1/2" color="default" />
      <TypographySkeleton
        className="flex flex-1 justify-end"
        width="1/2"
        color="default"
      />
    </div>
    <Skeleton className="size-full h-[240px] rounded-md border bg-grayscale-surface-default" />
  </BasicLayoutCard>
)


const UserActivitySkeleton = () => (
  <BasicLayoutCard className="space-y-4">
    <div className="flex w-full flex-1 justify-between">
      <TypographySkeleton className="flex-1" width="1/2" color="default" />
      <TypographySkeleton
        className="flex flex-1 justify-end"
        width="1/2"
        color="default"
      />
    </div>
    <Skeleton className="size-full h-[240px] rounded-md border bg-grayscale-surface-default" />
  </BasicLayoutCard>
)

export namespace AdminDashboardSkeleton {
  export const Overview = OverviewSkeleton
  export const ActiveJobs = ActiveJobsSkeleton
  export const UserActivity = UserActivitySkeleton
}


