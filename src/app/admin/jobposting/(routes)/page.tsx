import ApiWrapper from "@/features/api/api-wrapper";

import { JobCardProps } from "@/lib/type";

import { AdminJobPostingClient } from "../_component/client";
import { JobPostingSkeleton } from "../loading";

function AdminJobPosting() {
  return (
    <>
      <ApiWrapper<JobCardProps[]>
        fallback={<JobPostingSkeleton />}
        route={`/superadmin-jobposting-page-1`}
      >
        {({ data }) => <AdminJobPostingClient jobs={data} />}
      </ApiWrapper>
    </>
  );
}

export default AdminJobPosting;
