import DashboardPageHeader from "@/components/dashboard/page-header";
import JobCardSkeleton from "@/components/skeletons/job-card-skeleton";

export default function AdminJobPostingLoading() {
  return (
    <>
      <DashboardPageHeader title="Job Posting" />
      <div className="p-6">
        <JobPostingSkeleton />
      </div>
    </>
  )
}

export const JobPostingSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 6 }).map((_, i) =>
        <JobCardSkeleton key={"job-posting-skeletoin-" + i} />
      )}
    </div>
  )
}
