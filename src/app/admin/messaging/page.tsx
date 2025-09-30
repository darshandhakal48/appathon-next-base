import React from "react";
import ApiWrapper from "@/features/api/api-wrapper";

import DashboardPageHeader from "@/components/dashboard/page-header";

import Messaging from "./_component/client";
import { AdminMessagingSkeleton } from "./loading";

function AdminMessaging() {
  return (
    <>
      <DashboardPageHeader title="Messaging" />
      <div className="mt-16 p-4 md:p-6">
        {/* <ApiWrapper<[]>
          route="/superadmin-messaging-profiles"
          fallback={<AdminMessagingSkeleton.ProfileList />}
        >
          {({ data }) => <MessagigProfileList profiles={data} />}
        </ApiWrapper> */}
        <Messaging />
      </div>
    </>
  );
}

export default AdminMessaging;
