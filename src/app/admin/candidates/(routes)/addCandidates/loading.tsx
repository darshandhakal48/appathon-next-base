
import DashboardPageHeader from "@/components/dashboard/page-header"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <>
      <DashboardPageHeader title="Add Candidates" />
      <div className="p-4 md:p-6">
        <div className="grid h-full max-h-[352px] grid-cols-2 gap-6">
          <Skeleton className="size-full" />
          <Skeleton className="size-full" />
        </div>
        <Skeleton className="mt-6 size-full max-h-[176px]" />
      </div>
    </>
  )
}
