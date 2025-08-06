import React from "react";

import HiringStepsCard from "@/components/dashboard/hiringStepsCard";
import BasicLayoutCard from "@/components/shared/basic-layout-card";
import ActiveJobOpenings from "@/components/dashboard/active-job-openings";
import RecentUserActivities from "@/components/dashboard/recent-user-activities";
import { apiClient } from "@/features/api/api-client";
import { DashboardCard, Job, UserActivity } from "@/lib/type";

export const OverviewSection = async ({ data }: { data: DashboardCard[] | null }) => {

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
      {data?.map((card, i) => (
        <HiringStepsCard data={card} key={i} />
      ))}
    </div>
  );
};

export const ActiveJobsSection = ({
  activeJobs,
}: {
  activeJobs: Job[] | null;
}) => {
  return (
    <BasicLayoutCard>
      <ActiveJobOpenings jobs={activeJobs} />
    </BasicLayoutCard>
  );
};

export const UserActivitySection = async ({ data }: { data: UserActivity[] | null }) => {
  return (
    <BasicLayoutCard>
      <RecentUserActivities data={data} type="admin" />
    </BasicLayoutCard>
  );
};

const delayedGetJobs = async () => {
  await new Promise((res) => setTimeout(res, 2000)); // 2-second delay
  return apiClient.get<Job[]>("/superadmin-active-jobs");
};
