"use client";

import JobCard from "@/components/shared/job-card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import JobInfo from "../_components/job-info";
import { useRouter } from "next/navigation";
import BasicLayoutCard from "@/components/shared/basic-layout-card";
import { candidateJobs } from "@/config/db";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { IconArrowRight } from "@tabler/icons-react";
import DashboardPageHeader from "@/components/dashboard/page-header";

const CandidateJobSearchClient = () => {
  const [selectedJob, setSelectedJob] = useState(false);
  const router = useRouter();

  return (
    <div>
      <DashboardPageHeader title="Jobs" />
      <div className="p-6 grid grid-cols-1  lg:grid-cols-2 gap-4  place-content-start">
        <BasicLayoutCard className="space-y-5 h-fit">
          <p>Top Job picks for you</p>
          <div className="grid grid-cols-1 gap-4">
            {candidateJobs.map((job, i) => (
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
        {
          <BasicLayoutCard className="h-fit">
            <JobInfo />
          </BasicLayoutCard>
        }
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="h-16 px-6 py-2 bg-grayscale-surface-white border-b border-grayscale-border-default gap-8 overflow-hidden grid grid-cols-2">
      <div className="flex items-center gap-x-8">
        <p className="text-grayscale-text-title text-xl text-nowrap font-semibold leading-7">
          Top Job Picks
        </p>
        <Input
          icon="search"
          iconPosition="left"
          className="max-w-[390px] w-full"
          placeholder="Job title, skills, company name"
        />
      </div>
    </div>
  );
};

export default CandidateJobSearchClient;
