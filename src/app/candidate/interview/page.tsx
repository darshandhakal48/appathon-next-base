import DashboardPageHeader from "@/components/dashboard/pageHeader";
import CandidateInterviewClient from "./_components/client";
import { Suspense } from "react";

export default function CandidateDashboardInterview() {
  return (
    <>
      <DashboardPageHeader children="Interview" />
      <Suspense>
        <CandidateInterviewClient />
      </Suspense>
    </>
  );
}
