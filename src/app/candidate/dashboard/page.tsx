import DashboardPageHeader from "@/components/dashboard/page-header";
import React from "react";
import CandidateDashboardClient from "./_components/client";

export default async function CandidateDashboard() {
  return (
    <>
      <DashboardPageHeader title="Dashboard" />
      <CandidateDashboardClient />
    </>
  );
}
