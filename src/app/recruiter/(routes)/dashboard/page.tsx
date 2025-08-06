import DashboardPageHeader from "@/components/dashboard/page-header";
import React, { Suspense } from "react";
import RecruiterDashboardClient from "../../_components/dashboard-client";
import ErrorBoundary from "@/components/shared/error-boundary";
import ClientErrorFallback from "@/components/shared/error-fallback";

export default function RecruiterDashboard() {
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
  // TODO: Fetch data here

  return <RecruiterDashboardClient />;
}
