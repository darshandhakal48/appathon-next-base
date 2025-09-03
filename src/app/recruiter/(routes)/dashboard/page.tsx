import DashboardPageHeader from "@/components/dashboard/page-header";
import React, { Suspense } from "react";
import RecruiterDashboardClient from "../../_components/dashboard-client";
import ErrorBoundary from "@/components/shared/error-boundary";
import ClientErrorFallback from "@/components/shared/error-fallback";
import ApiWrapper from "@/features/api/api-wrapper";
import { AdminDashboardSkeleton } from "@/app/admin/dashboard/loading";
import { ActiveJobsSection, OverviewSection, UserActivitySection } from "@/app/admin/dashboard/_components/client";
import { DashboardCard, Job, UserActivity } from "@/lib/type";

export default function RecruiterDashboard() {
  return (
    <>
      <DashboardPageHeader title="Dashboard" />

      <div className="space-y-4 bg-grayscale-surface-subtle p-6">
             <ApiWrapper<DashboardCard[]>
               fallback={<AdminDashboardSkeleton.Overview />}
               route="/recruiter-dashboard-cards"
             >
               {({ data }) => <OverviewSection cardsInfo={data} />}
             </ApiWrapper>
     
             <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
               <ApiWrapper<Job[]>
                 fallback={<AdminDashboardSkeleton.ActiveJobs />}
                 route="/recruiter-active-jobs"
               >
                 {(data) => <ActiveJobsSection activeJobs={data.data} />}
               </ApiWrapper>
     
               <ApiWrapper<UserActivity[]>
                 fallback={<AdminDashboardSkeleton.UserActivity />}
                 route="/superadmin-user-activity"
               >
                 {(data) => <UserActivitySection userActivities={data.data} />}
               </ApiWrapper>
             </div>
      </div>
    </>
  );
}

async function DashboardChild() {
  // TODO: Fetch data here

  return <RecruiterDashboardClient />;
}
