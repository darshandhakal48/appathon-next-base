import React from "react";
import { WorkforceTable, WorkforceHeaderAction } from "./_component/client";
import DashboardPageHeader from "@/components/dashboard/page-header";
import ApiWrapper from "@/features/api/api-wrapper";
import { WorkForceUserProps } from "@/lib/type";
import { WorkForceLoadingSkeleton } from "./loading";

export default async function AdminWorkForce() {

  // Adding delay to test loading.tsx
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <>
      <DashboardPageHeader title="Workforce">
        <WorkforceHeaderAction />
      </DashboardPageHeader>
      <div className="p-4 md:p-6">
        <ApiWrapper<WorkForceUserProps[]> fallback={<WorkForceLoadingSkeleton />} route="/superadmin-workforce">
          {({ data }) => <WorkforceTable users={data} />}
        </ApiWrapper>
      </div>
    </>
  );
}

