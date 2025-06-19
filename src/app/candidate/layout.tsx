"use client";

import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { candidateDashboardSidebarLink } from "@/config/dashboard";
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

export default CandidateLayout;
