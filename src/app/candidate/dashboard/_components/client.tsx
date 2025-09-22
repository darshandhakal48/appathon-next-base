"use client";

import React from "react";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

import { DashboardCard, JobCardProps, UserActivity } from "@/lib/type";
import { buttonVariants } from "@/components/ui/button";
import OverviewCard from "@/components/dashboard/overview-cards";
import RecentUserActivities from "@/components/dashboard/recent-user-activities";
import BasicLayoutCard from "@/components/shared/basic-layout-card";
import JobCard from "@/components/shared/job-card";
import { Typography } from "@/components/shared/typography";

export const OverviewSection = ({
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

export const TopJobPickSection = ({
  activeJobs,
}: {
  activeJobs: JobCardProps[] | null;
}) => {
  return (
    <>
      <BasicLayoutCard className="space-y-5 border-0 shadow-none">
        <Typography color="title">Top Job picks for you</Typography>
        <div className="grid grid-cols-1 gap-4">
          {activeJobs?.map((job, i) => (
            <JobCard job={job} key={"candidate-dashboard-job-" + i} />
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            href="/candidate/jobSearch"
            className={buttonVariants({
              variant: "ghost",
              className:
                "text-primary-surface-default hover:text-primary-text-label",
            })}
          >
            Show All <IconArrowRight />
          </Link>
        </div>
      </BasicLayoutCard>
    </>
  );
};

export const UserActivitySection = ({
  userActivities,
}: {
  userActivities: UserActivity[] | null;
}) => {
  return (
    <BasicLayoutCard className="space-y-5 border-0 shadow-none">
      <RecentUserActivities data={userActivities} type="admin" />
    </BasicLayoutCard>
  );
};
