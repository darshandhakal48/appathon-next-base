import DashboardPageHeader from "@/components/dashboard/page-header";
import ApplicationTrackingClient from "./_components/client";

export default function ApplicationTracking() {
  return (
    <>
      <DashboardPageHeader title="Application Tracking" />
      <ApplicationTrackingClient />
    </>
  );
}
