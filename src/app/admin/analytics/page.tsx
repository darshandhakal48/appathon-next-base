import DashboardPageHeader from "@/components/dashboard/page-header";
import React from "react";
import { AnalyticsHeaderAction, ApplicationOverviewSection, CandidatePerformaneSection, TimeToHireSection, TrackingApplicantsSection } from "./_components/client";
import ApiWrapper from "@/features/api/api-wrapper";
import { DashboardCard } from "@/lib/type";
import { OverviewSection } from "../dashboard/_components/client";
import { AdminAnalyticsSkeleton, } from "./loading";

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
        <div className="gridc-cols-1 grid gap-2 md:grid-cols-2">
          <ApiWrapper<[]> fallback={<AdminAnalyticsSkeleton.ApplicationOverview />} route="/superadmin-application-overview">
            {({ data }) => <ApplicationOverviewSection graphInfo={data} />}
          </ApiWrapper>
          <ApiWrapper<[]> fallback={<AdminAnalyticsSkeleton.ApplicationOverview />} route="/superadmin-application-overview">
            {({ data }) => <TrackingApplicantsSection graphInfo={data} />}
          </ApiWrapper>

        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.25fr_0.75fr]">
          <ApiWrapper<[]> fallback={<AdminAnalyticsSkeleton.ApplicationOverview />} route="/superadmin-application-overview">
            {({ data }) => <CandidatePerformaneSection graphInfo={data} />}
          </ApiWrapper>
          <ApiWrapper<[]> fallback={<AdminAnalyticsSkeleton.ApplicationOverview />} route="/superadmin-application-overview">
            {({ data }) => <TimeToHireSection graphInfo={data} />}
          </ApiWrapper>

        </div>
      </div>

    </div>
  );

}

export default DashboardAnalytics;
