import React from "react";
import ApiWrapper from "@/features/api/api-wrapper";

import { TrendPoint } from "@/config/db";
import { DashboardCard } from "@/lib/type";
import { FunnelStage } from "@/components/dashboard/FunnelPipeline";
import DashboardPageHeader from "@/components/dashboard/page-header";

import { OverviewSection } from "../dashboard/_components/client";
import {
  AnalyticsHeaderAction,
  ApplicationOverviewSection,
  CandidatePerformaneSection,
  TimeToHireSection,
  TrackingApplicantsSection,
} from "./_components/client";
import { AdminAnalyticsSkeleton } from "./loading";

async function DashboardAnalytics() {
  // Adding delay to test loading.tsx
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <div>
      <DashboardPageHeader title="Analytics">
        <AnalyticsHeaderAction />
      </DashboardPageHeader>
      <div className="space-y-6 p-4 md:p-6">
        <ApiWrapper<DashboardCard[]>
          route="/superadmin-dashboard-cards"
          fallback={<AdminAnalyticsSkeleton.Overview />}
        >
          {({ data }) => <OverviewSection cardsInfo={data} />}
        </ApiWrapper>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ApiWrapper<TrendPoint[]>
            fallback={<AdminAnalyticsSkeleton.ApplicationOverview />}
            route="/superadmin-application-overview"
          >
            {({ data }) => <ApplicationOverviewSection graphInfo={data} />}
          </ApiWrapper>
          <ApiWrapper<FunnelStage[]>
            fallback={<AdminAnalyticsSkeleton.ApplicationOverview />}
            route="/superadmin-funnel-pipeline"
          >
            {({ data }) => <TrackingApplicantsSection graphInfo={data} />}
          </ApiWrapper>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.25fr_0.75fr]">
          <ApiWrapper<[]>
            fallback={<AdminAnalyticsSkeleton.ApplicationOverview />}
            route="/superadmin-application-overview"
          >
            {({ data }) => <CandidatePerformaneSection graphInfo={data} />}
          </ApiWrapper>
          <ApiWrapper<[]>
            fallback={<AdminAnalyticsSkeleton.ApplicationOverview />}
            route="/superadmin-application-overview"
          >
            {({ data }) => <TimeToHireSection graphInfo={data} />}
          </ApiWrapper>
        </div>
      </div>
    </div>
  );
}

export default DashboardAnalytics;
