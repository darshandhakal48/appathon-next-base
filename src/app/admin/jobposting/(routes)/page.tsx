import ApiWrapper from "@/features/api/api-wrapper";

import { Job, JobCardProps } from "@/lib/type";
import DashboardPageHeader from "@/components/dashboard/page-header";

import {
  AdminJobPostingClient,
  AdminJobPostingHeaderAction,
} from "../_component/client";
import { JobPostingSkeleton } from "../loading";

function AdminJobPosting() {
  return (
    <>
      <DashboardPageHeader title="Job Posting">
        <AdminJobPostingHeaderAction />
      </DashboardPageHeader>
      <div className="p-4 md:p-6">
        <ApiWrapper<JobCardProps[]>
          fallback={<JobPostingSkeleton />}
          route={`/superadmin-jobposting-page-1`}
        >
          {({ data }) => <AdminJobPostingClient jobs={data} />}
        </ApiWrapper>
      </div>
    </>
  );
}

export default AdminJobPosting;
