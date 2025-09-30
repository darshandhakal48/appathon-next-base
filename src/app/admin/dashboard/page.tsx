import React from "react";
import ApiWrapper from "@/features/api/api-wrapper";

import { FunnelStages, JobTrendsMonthly, TrendPoint } from "@/config/db";
import { DashboardCard, JobCardProps, UserActivity } from "@/lib/type";
import FunnelPipeline, {
  FunnelStage,
} from "@/components/dashboard/FunnelPipeline";
import JobTrendsChart from "@/components/dashboard/job-trends-chart";
import DashboardPageHeader from "@/components/dashboard/page-header";
import BasicLayoutCard from "@/components/shared/basic-layout-card";

import { AdminAnalyticsSkeleton } from "../analytics/loading";
import ApplicantsOverview from "./_components/applicants-overview";
import {
  ActiveJobsSection,
  OverviewSection,
  UserActivitySection,
} from "./_components/client";
import { AdminDashboardSkeleton } from "./loading";

const AdminDashboard = async () => {
  // Adding delay to test loading.tsx
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <>
      <DashboardPageHeader title="Dashboard" />

      <div className="mt-16 space-y-4 bg-grayscale-surface-subtle p-6">
        <ApiWrapper<DashboardCard[]>
          fallback={<AdminDashboardSkeleton.Overview />}
          route="/superadmin-dashboard-cards"
        >
          {({ data }) => <OverviewSection cardsInfo={data} />}
        </ApiWrapper>

        {/* charts */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <BasicLayoutCard>
            <ApiWrapper<TrendPoint[]>
              fallback={<AdminAnalyticsSkeleton.ApplicationOverview />}
              route="/superadmin-application-overview"
            >
              {({ data }) => (
                <JobTrendsChart
                  // monthly={JobTrendsMonthly}
                  monthly={data ?? []}
                  defaultView="monthly"
                />
              )}
            </ApiWrapper>
          </BasicLayoutCard>
          <BasicLayoutCard>
            <ApiWrapper<FunnelStage[]>
              fallback={<AdminAnalyticsSkeleton.FunnelChart />}
              route="/superadmin-funnel-pipeline"
            >
              {({ data }) => <FunnelPipeline stages={data ?? []} />}
            </ApiWrapper>
          </BasicLayoutCard>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ApiWrapper<JobCardProps[]>
            fallback={<AdminDashboardSkeleton.ActiveJobs />}
            route="/superadmin-active-jobs-page-1"
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
