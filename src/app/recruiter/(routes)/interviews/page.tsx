import DashboardPageHeader from "@/components/dashboard/page-header";

import { Suspense } from "react";
import RecruiterInterviewClient from "../../_components/interviews-client";
import { PageHeaderAction } from "../../_components/dashboard-client";

export default function RecruiterDashboardInterview() {
  return (
    <>
      <DashboardPageHeader title="Interview">
        <PageHeaderAction />
      </DashboardPageHeader>

      <Suspense fallback={<></>}>
        <Suspensed />
      </Suspense>
    </>
  );
}

function Suspensed() {
  // TODO: Load Data Here
  return <RecruiterInterviewClient />;
}
