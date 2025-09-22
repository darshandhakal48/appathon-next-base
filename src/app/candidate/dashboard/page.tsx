import React from "react";
import ApiWrapper from "@/features/api/api-wrapper";

import { DashboardCard, JobCardProps, UserActivity } from "@/lib/type";
import DashboardPageHeader from "@/components/dashboard/page-header";
import { OverviewSection } from "@/app/admin/dashboard/_components/client";

import { TopJobPickSection, UserActivitySection } from "./_components/client";
import { CandidateDashboardSkeleton } from "./loading";

export default function CandidateDashboard() {
  return (
    <>
      <DashboardPageHeader title="Dashboard" />

      <div className="space-y-4 bg-grayscale-surface-subtle p-6">
        <ApiWrapper<DashboardCard[]>
          fallback={<CandidateDashboardSkeleton.Overview />}
          route="/superadmin-dashboard-cards"
        >
          {({ data }) => <OverviewSection cardsInfo={data} />}
        </ApiWrapper>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ApiWrapper<JobCardProps[]>
            fallback={<CandidateDashboardSkeleton.TopJobPicks />}
            route="/superadmin-jobposting"
          >
            {({data}) => <TopJobPickSection activeJobs={data} />}
          </ApiWrapper>

          <ApiWrapper<UserActivity[]>
            fallback={<CandidateDashboardSkeleton.UserActivity />}
            route="/superadmin-user-activity"
          >
            {({data}) => <UserActivitySection userActivities={data} />}
          </ApiWrapper>
        </div>
      </div>
    </>
  );
}

/*
import React from "react";
import ApiWrapper from "@/features/api/api-wrapper";

import { DashboardCard, Job, UserActivity } from "@/lib/type";
import DashboardPageHeader from "@/components/dashboard/page-header";

import {
  ActiveJobsSection,
  OverviewSection,
  UserActivitySection,
} from "./_components/client";
import { CandidateDashboardSkeleton } from "./loading";

const AdminDashboard = async () => {
  // Adding delay to test loading.tsx
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <>
      <DashboardPageHeader title="Dashboard" />

      <div className="bg-grayscale-surface-subtle space-y-4 p-6">
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



*/
