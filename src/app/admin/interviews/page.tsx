import ApiWrapper from "@/features/api/api-wrapper";

import { Interview } from "@/lib/type";
import DashboardPageHeader from "@/components/dashboard/page-header";

import AdminInterviewClient from "./_component/client";
import HeaderAction from "./_component/header-action";
import AdminInterviewLoading from "./loading";

export default async function AdminInterviews() {
  // Adding delay to test loading.tsx
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <>
      <DashboardPageHeader title="Interviews">
        <HeaderAction />
      </DashboardPageHeader>
      <div className="mt-16 p-6">
        <ApiWrapper<Interview[]>
          fallback={<AdminInterviewLoading noHeader />}
          route="/superadmin-interviews-page-1"
        >
          {({ data }) => <AdminInterviewClient interviews={data} />}
        </ApiWrapper>
      </div>
    </>
  );
}
