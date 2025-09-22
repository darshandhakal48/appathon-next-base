import React from "react";
import { apiClient } from "@/features/api/api-client";

import { DashboardCard, Job, UserActivity } from "@/lib/type";
import ActiveJobOpenings from "@/components/dashboard/active-job-openings";
import OverviewCard from "@/components/dashboard/overview-cards";
import RecentUserActivities from "@/components/dashboard/recent-user-activities";
import BasicLayoutCard from "@/components/shared/basic-layout-card";

export const OverviewSection = async ({
  cardsInfo,
}: {
  cardsInfo: DashboardCard[] | null;
}) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
      {cardsInfo?.map((card, i) => (
        <OverviewCard data={card} key={i} />
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

export const UserActivitySection = async ({
  userActivities,
}: {
  userActivities: UserActivity[] | null;
}) => {
  return (
    <BasicLayoutCard>
      <RecentUserActivities data={userActivities} type="admin" />
    </BasicLayoutCard>
  );
};

const delayedGetJobs = async () => {
  await new Promise((res) => setTimeout(res, 2000)); // 2-second delay
  return apiClient.get<Job[]>("/superadmin-active-jobs");
};
