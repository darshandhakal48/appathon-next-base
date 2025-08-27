import React from "react";
import Messaging from "./_component/client";
import DashboardPageHeader from "@/components/dashboard/page-header";
import ApiWrapper from "@/features/api/api-wrapper";
import { AdminMessagingSkeleton } from "./loading";

function AdminMessaging() {
  return (
    <>
      <DashboardPageHeader title="Messaging" />
      <div className="p-4 md:p-6">
        <ApiWrapper<[]> route="/superadmin-messaging-profiles" fallback={<AdminMessagingSkeleton.ProfileList />}>
          {({ data }) => <MessagigProfileList profiles={data} />}
        </ApiWrapper>
      </div>
    </>
  );
}

export default AdminMessaging;
