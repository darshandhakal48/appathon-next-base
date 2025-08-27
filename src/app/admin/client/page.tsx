import DashboardPageHeader from "@/components/dashboard/page-header";
import { AdminClientHeader } from "./_component/client";
import ApiWrapper from "@/features/api/api-wrapper";
import { ClientInfoProps } from "@/lib/type";
import { AdminClientSkeleton } from "./loading";
import ClientCard from "@/components/dashboard/client-card";
import { EmptyState } from "@/components/shared/empty-state";

export default async function AdminClient() {
  // Adding delay to test loading.tsx
  await new Promise((resolve) => setTimeout(resolve, 5000));


  return (
    <>
      <DashboardPageHeader title="Client">
        <AdminClientHeader />
      </DashboardPageHeader>
      <div className="p-4 md:p-6">
        <ApiWrapper<ClientInfoProps[]> fallback={<AdminClientSkeleton />} route="/superadmin-clients">
          {({ data }) => <>{data ? <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {
              data.map((client) => <ClientCard />)
            }
          </div>
            : <EmptyState title="" description="" icon="clock4" />}</>}
        </ApiWrapper>
      </div>
    </>
  );
}

