import DashboardPageHeader from "@/components/dashboard/page-header";
import CandidateInterviewClient from "./_components/client";
import { Suspense } from "react";

export default function CandidateDashboardInterview() {
  return (
    <>
      <DashboardPageHeader title="Interview" />
      <Suspense>
        <CandidateInterviewClient />
      </Suspense>
    </>
  );
}
