import DashboardPageHeader from "@/components/dashboard/page-header";

import { Suspense } from "react";
import RecruiterInterviewClient from "../../_components/interviews-client";
import { PageHeaderAction } from "../../_components/dashboard-client";
import ApiWrapper from "@/features/api/api-wrapper";
import { Interview } from "@/lib/type";
import AdminInterviewClient from "@/app/admin/interviews/_component/client";
import AdminInterviewLoading from "@/app/admin/interviews/loading";

export default function RecruiterDashboardInterview() {
  return (
    <>
      <DashboardPageHeader title="Interview">
        <PageHeaderAction />
      </DashboardPageHeader>

       <div className="p-6">
              <ApiWrapper<Interview[]> fallback={<AdminInterviewLoading noHeader />} route="/superadmin-interviews">
                {({ data }) => <AdminInterviewClient interviews={data} />}
              </ApiWrapper>
            </div>
    </>
  );
}

function Suspensed() {
  // TODO: Load Data Here
  return <RecruiterInterviewClient />;
}
