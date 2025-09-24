
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { candidateDashboardSidebarLink } from "@/config/dashboard";
import withCandidate from "@/hoc/withCandidate";
import React from "react";

function CandidateLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <DashboardSidebar links={candidateDashboardSidebarLink}>
        {children}
      </DashboardSidebar>
    </>
  );
}

export default withCandidate(CandidateLayout);
