import DashboardPageHeader from "@/components/dashboard/page-header";
import MessagingClient from "./_components/client";
import { Suspense } from "react";
import { candidateUserProfiles } from "@/config/db";

export default function MessagingPage() {
  return (
    <>
      <DashboardPageHeader title="Messaging" />
      <Suspense fallback={<p>Loading state goes here</p>}>
        <Suspensed />
      </Suspense>
    </>
  );
}

function Suspensed() {
  // Fetch Data from api
  return (
    <>
      <MessagingClient data={candidateUserProfiles} />
    </>
  );
}
