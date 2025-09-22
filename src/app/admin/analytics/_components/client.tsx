"use client";

import { useRouter } from "next/navigation";

import { TrendPoint } from "@/config/db";
import { Button } from "@/components/ui/button";
import CandidatePerformancePieChart from "@/components/dashboard/candidate-performance-pie-chart";
import FunnelPipeline, {
  FunnelStage,
} from "@/components/dashboard/FunnelPipeline";
import TimeToHireBarChart from "@/components/dashboard/hire-bar-chart";
import JobTrendsChart from "@/components/dashboard/job-trends-chart";
import BasicLayoutCard from "@/components/shared/basic-layout-card";
import { EmptyState } from "@/components/shared/empty-state";

export function AdminAnalyticsClient() {
  return <div></div>;
}
export function ApplicationOverviewSection({
  graphInfo,
}: {
  graphInfo: TrendPoint[] | null;
}) {
  return (
    <>
      {graphInfo ? (
        <>
          <BasicLayoutCard>
            <JobTrendsChart
              // monthly={JobTrendsMonthly}
              monthly={graphInfo}
              defaultView="monthly"
            />
          </BasicLayoutCard>
        </>
      ) : (
        <EmptyState title="" description="" icon="clock4" />
      )}
    </>
  );
}
export function TrackingApplicantsSection({
  graphInfo,
}: {
  graphInfo: FunnelStage[] | null;
}) {
  return (
    <>
      {graphInfo ? (
        <>
          <BasicLayoutCard>
            {" "}
            <FunnelPipeline stages={graphInfo} />
          </BasicLayoutCard>
        </>
      ) : (
        <EmptyState title="" description="" icon="clock4" />
      )}
    </>
  );
}
export function CandidatePerformaneSection({
  graphInfo,
}: {
  graphInfo: [] | null;
}) {
  return (
    // <div className="">
    <>
      {graphInfo ? (
        <>
          <BasicLayoutCard>
            <CandidatePerformancePieChart />
          </BasicLayoutCard>
        </>
      ) : (
        <EmptyState title="" description="" icon="clock4" />
      )}
    </>
    // </div>
  );
}
export function TimeToHireSection({ graphInfo }: { graphInfo: [] | null }) {
  return (
    // <div className="">
    <>
      {graphInfo ? (
        <>
          <BasicLayoutCard>
            <TimeToHireBarChart />
          </BasicLayoutCard>
        </>
      ) : (
        <EmptyState title="" description="" icon="clock4" />
      )}
    </>
    // </div>
  );
}

export function AnalyticsHeaderAction() {
  const route = useRouter();
  return <Button onClick={() => route.push("/")}>Export</Button>;
}
