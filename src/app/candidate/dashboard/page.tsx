import DashboardPageHeader from "@/components/dashboard/page-header";
import React, { Suspense } from "react";
import CandidateDashboardClient from "./_components/client";
import { fetchJobs } from "@/actions/candidate-job-actions";

export default function CandidateDashboard() {
  return (
    <>
      <DashboardPageHeader title="Dashboard" />

      <Suspense
        fallback={
          <>
            {/* TODO: ADD PROPER LOADING SKELETON */}
            <p>Loading.....</p>
          </>
        }
      >
        <Suspensed />
      </Suspense>
    </>
  );
}

async function Suspensed() {
  const topJobPicks = await fetchJobs();

  if (!topJobPicks.data)
    throw new Error("Unable to get top job picks for you, Try Again!");

  return <CandidateDashboardClient jobs={topJobPicks.data} />;
}
