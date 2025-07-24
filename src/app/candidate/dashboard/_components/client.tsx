"use client";

import HiringStepsCard from "@/components/dashboard/hiring-steps-card";

import RecentUserActivities from "@/components/dashboard/recent-user-activities";
import BasicLayoutCard from "@/components/shared/basic-layout-card";
import JobCard from "@/components/shared/job-card";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  candidateDashboardCards,
  candidateJobs,
  candidateUserActivity,
} from "@/config/db";
import { Job } from "@/lib/type";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

export default function CandidateDashboardClient({
  jobs,
}: {
  jobs?: Job[] | null;
}) {
  // query i job
  return (
    <div className="p-6 space-y-4 bg-grayscale-surface-subtle">
      {/* cards */}
      <BasicLayoutCard className="shadow-none space-y-4">
        <p className="text-grayscale-text-title text-base font-normal leading-normal">
          Your Application Overview
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-6 lg:gap-4">
          {candidateDashboardCards.map((card, i) => {
            return (
              <HiringStepsCard
                key={"candidate-dashboard-card-" + i}
                data={card}
              />
            );
          })}
        </div>
      </BasicLayoutCard>

      <div className="grid grid-cols-1  lg:grid-cols-2 gap-4  place-content-start">
        <BasicLayoutCard className="space-y-5">
          <p>Top Job picks for you</p>
          <div className="grid grid-cols-1 gap-4">
            {jobs?.map((job, i) => (
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
        <BasicLayoutCard className="h-fit">
          <RecentUserActivities type="candidate" data={candidateUserActivity} />
        </BasicLayoutCard>
      </div>
    </div>
  );
}
