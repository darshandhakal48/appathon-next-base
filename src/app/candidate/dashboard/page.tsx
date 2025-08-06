import DashboardPageHeader from "@/components/dashboard/page-header";
import React, { Suspense } from "react";
import CandidateDashboardClient from "./_components/client";
import { handleApiRequest } from "@/features/api/helper";
import { Job } from "@/lib/type";
import { apiClient } from "@/features/api/api-client";
import ErrorBoundary from "@/components/shared/error-boundary";
import { candidateJobs } from "@/config/db";
import ClientErrorFallback from "@/components/shared/error-fallback";

export default function CandidateDashboard() {
  return (
    <>
      <DashboardPageHeader title="Dashboard" />

      <ErrorBoundary FallbackComponent={ClientErrorFallback}>
        <Suspense fallback={<p>Loading.....</p>}>
          <DashboardChild />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

async function DashboardChild() {
  const [allJobs, allUsers] = await Promise.all([
    handleApiRequest(
      () => apiClient.get<Job[]>("/jobs"),
      "Failed to fetch jobs"
    ),
    handleApiRequest(
      () => apiClient.get<Job[]>("/users"),
      "Failed to fetch users"
    ),
  ]);

  return <CandidateDashboardClient jobs={candidateJobs} />;
}
