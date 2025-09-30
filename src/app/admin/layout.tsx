
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { adminDashboardSidebarLink, adminSidebarBottmLinks } from "@/config/dashboard";
import withAdmin from "@/hoc/withAdmin";
import React from "react";

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DashboardSidebar links={adminDashboardSidebarLink} bottomLinks={adminSidebarBottmLinks}>
        {children}
      </DashboardSidebar>
    </>
  );
}

export default withAdmin(AdminLayout);
