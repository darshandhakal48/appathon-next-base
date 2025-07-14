"use client";

import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { candidateDashboardSidebarLink } from "@/config/dashboard";
import { getAuth } from "@/lib/auth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function CandidateLayout({ children }: { children: React.ReactNode }) {
  const auth = getAuth();
  const router = useRouter();

  // useEffect(() => {
  //   if (auth.status === "unauthenticated") {
  //     router.push("/login");
  //   }
  // }, [router, auth.status]);

  return (
    <>
      <DashboardSidebar links={candidateDashboardSidebarLink}>
        {children}
      </DashboardSidebar>
    </>
  );
}

export default CandidateLayout;
