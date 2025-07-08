import MessagingProfileCard from "@/components/dashboard/messaging-profile-card";
import DashboardPageHeader from "@/components/dashboard/pageHeader";
import MessagingInbox from "./_components/messaging-inbox";
import MobileSidebar from "./_components/mobile-sidebar";

export default async function MessagingPage() {
  return (
    <>
      <DashboardPageHeader children="Messaging" />
      <MobileSidebar>
        <div className="p-6 grid h-[calc(100vh-70px)] grid-cols-1 md:grid-cols-[0.35fr_1fr] gap-4">
          <div className="flex-col gap-6 hidden md:flex">
            <MessagingProfileCard />
            <MessagingProfileCard />
            <MessagingProfileCard />
          </div>
          <div className="h-full">
            <MessagingInbox />
          </div>
        </div>
      </MobileSidebar>
    </>
  );
}
