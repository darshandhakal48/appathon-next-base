"use client";

import DashboardPageHeader from "@/components/dashboard/page-header";
import React from "react";
import { AdminJobPostingClient, AdminJobPostingHeaderAction } from "../_component/client";
import ApiWrapper from "@/features/api/api-wrapper";
import { Job } from "@/lib/type";
import { JobPostingSkeleton } from "../loading";

function AdminJobPosting() {
  return (
    <>
      <DashboardPageHeader title="Job Posting">
        <AdminJobPostingHeaderAction />
      </DashboardPageHeader>
      <div className="p-4 md:p-6">
        <ApiWrapper<Job[]> fallback={<JobPostingSkeleton />} route="/superadmin-jobposting">
          {({ data }) => <AdminJobPostingClient jobs={data} />}
        </ApiWrapper>
      </div>

    </>
  );
}

export default AdminJobPosting;
