import OverviewCardSkeleton from "@/components/skeletons/overview-card";
import { TypographySkeleton } from "@/components/skeletons/typography-skeleton";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import DashboardPageHeader from "@/components/dashboard/page-header";

export default function AdminAnalyticsLoading() {
  return (
    <>
      <DashboardPageHeader title="Analytics" />
      <div className="space-y-6 p-4 md:p-6">
        <AdminAnalyticsSkeleton.Overview />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <AdminAnalyticsSkeleton.ApplicationOverview />
          <AdminAnalyticsSkeleton.FunnelChart />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.25fr_0.75fr]">
          <AdminAnalyticsSkeleton.ProjectOverview />
          <AdminAnalyticsSkeleton.TimeToHire />
        </div>
      </div>
    </>
  )
}
function ApplicationOverviewSkeleton() {
  return (
    <div className="h-[430px] w-full space-y-6 rounded-md bg-grayscale-surface-disabled/40 p-4 md:p-6">

      <TypographySkeleton />
      <div className="flex items-center justify-center gap-2">
        {Array.from({ length: 3 }).map(() => <Skeleton className="w-4 rounded-sm px-2 py-1" />)}
      </div>
      <Skeleton className="h-[210px] w-full" />
      <div className="flex items-center gap-3">
        <TypographySkeleton />
        <TypographySkeleton />
        <TypographySkeleton />
      </div>

    </div>
  )
}
function FunnelChartSkeleton() {
  return (
    <div className="space-y-6 rounded-md bg-grayscale-surface-disabled/40 p-4 md:p-6">
      <div className="flex items-center justify-between space-y-4">
        <TypographySkeleton className="min-w-10" />
        <Skeleton className="h-8 w-[172px] rounded-md" />
      </div>
      <Skeleton className="h-full max-h-[318px] w-full max-w-[487px]" />
    </div>
  )
}

function ProjectOverviewSkeleton() {
  return (
    <div className="space-y-6 rounded-md bg-grayscale-surface-disabled/40 p-4 md:p-6">
      <TypographySkeleton />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Skeleton className="size-full flex-1" />
        <Skeleton className="size-full max-w-[373px] flex-1" />
      </div>
    </div>
  )
}
function TimeToHireSkeleton() {
  return (
    <div className="space-y-6 rounded-md bg-grayscale-surface-disabled/40 p-4 md:p-6">
      <TypographySkeleton />
      <div className="grid grid-cols-2">
        <Skeleton className="size-full max-w-[203px]" />
        <Skeleton className="size-full flex-1" />
      </div>
      <Skeleton className="h-[68px] w-full p-4 md:p-6" />
    </div>
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
export namespace AdminAnalyticsSkeleton {
  export const Overview = OverviewSectionSkeleton
  export const ApplicationOverview = ApplicationOverviewSkeleton
  export const TimeToHire = TimeToHireSkeleton
  export const ProjectOverview = ProjectOverviewSkeleton
  export const FunnelChart = FunnelChartSkeleton
}


