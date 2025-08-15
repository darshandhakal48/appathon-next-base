import DashboardPageHeader from "@/components/dashboard/page-header";
import HeaderAction from "./_component/header-action";
import ApiWrapper from "@/features/api/api-wrapper";
import AdminInterviewLoading from "./loading"
import AdminInterviewClient from "./_component/client";
import { Interview } from "@/lib/type";

export default async function AdminInterviews() {
  // Adding delay to test loading.tsx
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <>
      <DashboardPageHeader title="Interviews">
        <HeaderAction />
      </DashboardPageHeader>
      <div className="p-6">
        <ApiWrapper<Interview[]> fallback={<AdminInterviewLoading noHeader />} route="/superadmin-interviews">
          {({ data }) => <AdminInterviewClient interviews={data} />}
        </ApiWrapper>
      </div>
    </>
  );
}

