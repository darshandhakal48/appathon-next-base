"use client";

import JobCard from "@/components/shared/job-card";
import { Input } from "@/components/ui/input";
import React from "react";
import JobInfo from "@/components/dashboard/job-info";
import BasicLayoutCard from "@/components/shared/basic-layout-card";
// import { candidateJobs } from "@/config/db";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { IconArrowRight } from "@tabler/icons-react";
import DashboardPageHeader from "@/components/dashboard/page-header";
import { Typography } from "@/components/shared/typography";

const CandidateJobSearchClient = () => {
  return (
    <div>
      <DashboardPageHeader title="">
        <Header />
      </DashboardPageHeader>
      <div className="grid grid-cols-1 place-content-start gap-4 p-6 lg:grid-cols-2">
        <div className="h-fit space-y-5">
          <p>Top Job picks for you</p>
          <div className="grid grid-cols-1 gap-4">
            {/* {candidateJobs.map((job, i) => (
              <JobCard job={job} key={"candidate-dashboard-job-" + i} />
            ))} */}
          </div>
          <div className="flex justify-center">
            <Link
              href="/recruiter/job-posting"
              className={buttonVariants({
                variant: "ghost",
                className:
                  "text-primary-surface-default hover:text-primary-text-label",
              })}
            >
              Show All <IconArrowRight />
            </Link>
          </div>
        </div>
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
    <div className="flex flex-1 items-center gap-x-8">
      <Typography color="title" type="xl">
        Top Job Picks
      </Typography>
      <Input
        icon="search"
        iconPosition="left"
        className="w-full max-w-[926px] px-[22px] py-3"
        placeholder="Job title, skills, company name"
      />
    </div>
  );
};

export default CandidateJobSearchClient;
