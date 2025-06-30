"use client";

import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { adminDashboardSidebarLink } from "@/config/dashboard";
import React from "react";

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DashboardSidebar links={adminDashboardSidebarLink}>
        {children}
      </DashboardSidebar>
    </>
  );
}

export default AdminLayout;
