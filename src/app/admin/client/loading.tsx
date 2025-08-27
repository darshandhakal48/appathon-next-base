import DashboardPageHeader from "@/components/dashboard/page-header";
import ClientCardSkeleton from "@/components/skeletons/client-card-skeleton";

export default function Loading() {
  return (
    <>
      <DashboardPageHeader title="Clients" />
      <div className="p-4 md:p-6">
        <AdminClientSkeleton />
      </div>
    </>
  )
}

export function AdminClientSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {
        Array.from({ length: 8 }).map((_, i) => <ClientCardSkeleton key={i} />)
      }
    </div>
  )
}
