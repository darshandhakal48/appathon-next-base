
import ClientCard from "@/components/dashboard/client-card";
import DashboardPageHeader from "@/components/dashboard/page-header";
import React from "react";
function AdminClient() {
  return (
    <>
      <DashboardPageHeader title="Clients" />
      <div className="flex flex-wrap gap-4 p-6">
        <ClientCard />
        <ClientCard />
        <ClientCard />
        <ClientCard />
      </div>

    </>
  );
}
export default AdminClient;
