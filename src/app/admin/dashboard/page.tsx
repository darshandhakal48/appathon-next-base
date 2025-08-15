import React from "react";
import DashboardPageHeader from "@/components/dashboard/page-header";
import { DashboardCard, Job, UserActivity } from "@/lib/type";
import {
  ActiveJobsSection,
  OverviewSection,
  UserActivitySection,
} from "./_components/client";
import ApiWrapper from "@/features/api/api-wrapper";
import { AdminDashboardSkeleton } from "./loading";

const AdminDashboard = async () => {
  // Adding delay to test loading.tsx
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <>
      <DashboardPageHeader title="Dashboard" />

      <div className="space-y-4 bg-grayscale-surface-subtle p-6">
        <ApiWrapper<DashboardCard[]>
          fallback={<AdminDashboardSkeleton.Overview />}
          route="/superadmin-dashboard-cards"
        >
          {({ data }) => <OverviewSection cardsInfo={data} />}
        </ApiWrapper>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ApiWrapper<Job[]>
            fallback={<AdminDashboardSkeleton.ActiveJobs />}
            route="/superadmin-active-jobs"
          >
            {(data) => <ActiveJobsSection activeJobs={data.data} />}
          </ApiWrapper>

          <ApiWrapper<UserActivity[]>
            fallback={<AdminDashboardSkeleton.UserActivity />}
            route="/superadmin-user-activity"
          >
            {(data) => <UserActivitySection userActivities={data.data} />}
          </ApiWrapper>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
