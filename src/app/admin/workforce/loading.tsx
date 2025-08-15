import { Skeleton } from "@/components/ui/skeleton"
import DashboardPageHeader from "@/components/dashboard/page-header";

export default function Loading() {
  return (
    <>
      <DashboardPageHeader title="Workforce" />
      <div className="p-4 md:p-6">
        <WorkForceLoadingSkeleton />
      </div>
    </>
  )
}

export const WorkForceLoadingSkeleton = () => {
  return (
    <Skeleton className="min-h-[272px] w-full bg-grayscale-surface-disabled/50" />
  )
}
