import ApiWrapper from "@/features/api/api-wrapper";

import { AdminClientDataProps, ClientInfoProps } from "@/lib/type";
import ClientCard from "@/components/dashboard/client-card";
import DashboardPageHeader from "@/components/dashboard/page-header";
import { EmptyState } from "@/components/shared/empty-state";

import AdminClientCard from "./_component/adminClientCard";
import { AdminClientSkeleton } from "./loading";
import { AdminClientHeaderAction } from "./[id]/_components/client";

export default async function AdminClient() {
  // Adding delay to test loading.tsx
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <>
      <DashboardPageHeader title="Client">
        <AdminClientHeaderAction />
      </DashboardPageHeader>
      <div className="mt-16 p-4 md:p-6">
        <ApiWrapper<AdminClientDataProps[]>
          fallback={<AdminClientSkeleton />}
          route="/superadmin-client-data"
        >
          {({ data }) => (
            <>
              {data ? (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {data.map((client, i) => (
                    <AdminClientCard client={client} key={i} />
                  ))}
                </div>
              ) : (
                <EmptyState title="" description="" icon="clock4" />
              )}
            </>
          )}
        </ApiWrapper>
      </div>
    </>
  );
}
