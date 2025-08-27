import DashboardPageHeader from "@/components/dashboard/page-header";

export default function Loading() {
  return (
    <>
      <DashboardPageHeader title="Messaging" />
      <div className="p-4 md:p-6">
        <AdminMessagingSkeleton.ProfileList />
        <AdminMessagingSkeleton.MessageBox />
      </div>
    </>
  )
}
function ProfileListSkeleton() {
  return (
    <div className="bg-grayscale-surface-disabled/40">

    </div>
  )
}
function MessageBoxSkeleton() {
  return (
    <div className="bg-grayscale-surface-disabled/40">

    </div>
  )
}
export namespace AdminMessagingSkeleton {
  export const ProfileList = ProfileListSkeleton
  export const MessageBox = MessageBoxSkeleton
}
