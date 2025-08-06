import React, { Suspense } from "react";
import { TypographySkeleton } from "@/components/skeletons/typography-skeleton";

import { Skeleton } from "@/components/ui/skeleton";
import BasicLayoutCard from "@/components/shared/basic-layout-card";
import DashboardPageHeader from "@/components/dashboard/page-header";
import { DashboardCard, Job, UserActivity } from "@/lib/type";
import OverviewCardSkeleton from "@/components/skeletons/overview-card";
import {
  ActiveJobsSection,
  OverviewSection,
  UserActivitySection,
} from "./_components/client";
import ApiWrapper from "@/features/api/api-wrapper";

const AdminDashboard = () => {
  return (
    <>
      <DashboardPageHeader title="Dashboard" />
      <div className="space-y-4 bg-grayscale-surface-subtle p-6">
        <ApiWrapper<DashboardCard[]>
          fallback={<DashboardSkeleton section="overview" />}
          route="/superadmin-dashboard-cards"
        >
          {(data) => <OverviewSection data={data.data} />
          }
        </ApiWrapper>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ApiWrapper<Job[]>
            fallback={<DashboardSkeleton section="jobs" />}
            route="/superadmin-active-jobs"
          >
            {(data) => <ActiveJobsSection activeJobs={data.data} />}
          </ApiWrapper>

          <ApiWrapper<UserActivity[]>
            fallback={<DashboardSkeleton section="activity" />}
            route="/superadmin-user-activity"
          >
            {(data) => <UserActivitySection data={data.data} />
            }
          </ApiWrapper>


        </div>
      </div>
    </>
  );
};

function DashboardSkeleton({
  section,
}: {
  section: "overview" | "jobs" | "activity";
}) {
  if (section === "overview")
    return (
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <OverviewCardSkeleton key={i} />
        ))}
      </div>
    );

  if (section === "jobs")
    return (
      <BasicLayoutCard className="space-y-4">
        <div className="flex w-full flex-1 justify-between">
          <TypographySkeleton className="flex-1" width="1/2" color="default" />
          <TypographySkeleton
            className="flex flex-1 justify-end"
            width="1/2"
            color="default"
          />
        </div>
        <Skeleton className="size-full h-[240px] rounded-md border bg-grayscale-surface-default" />
      </BasicLayoutCard>
    );

  return (
    <BasicLayoutCard className="space-y-4">
      <div className="flex w-full flex-1 justify-between">
        <TypographySkeleton className="flex-1" width="1/2" color="default" />
        <TypographySkeleton
          className="flex flex-1 justify-end"
          width="1/2"
          color="default"
        />
      </div>
      <Skeleton className="size-full h-[240px] rounded-md border bg-grayscale-surface-default" />
    </BasicLayoutCard>
  );
}

export default AdminDashboard;



