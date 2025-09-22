import React from "react";
import CandidateOnlineInterview from "@/components/dashboard/candidateOnlineInterview";
import DashboardPageHeader from "@/components/dashboard/page-header";

function OnlineInterview() {
  return (
    <>
      <DashboardPageHeader title="Interviews">
      </DashboardPageHeader>
      <div className="p-4 md:p-6">
        <CandidateOnlineInterview />
      </div>
    </>
  );
}

export default OnlineInterview;
