"use client";

import JobCard from "@/components/shared/job-card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import JobInfo from "./job-info";
import { useRouter } from "next/navigation";

const CandidateJobSearchClient = () => {
  const [selectedJob, setSelectedJob] = useState(false);
  const router = useRouter();

  return (
    <div>
      <Header />

      <div
        className={cn("flex self-stretch p-6", {
          "grid-cols-1 md:grid-cols-2 grid": selectedJob,
        })}
      >
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 self-stretch",
            {
              "flex flex-col": selectedJob,
            }
          )}
        >
          <JobCard onClick={() => setSelectedJob(true)} />
          <JobCard onClick={() => setSelectedJob(true)} />
          <JobCard onClick={() => setSelectedJob(true)} />
          <JobCard onClick={() => setSelectedJob(true)} />
        </div>

        {selectedJob && (
          <div>
            <JobInfo />
          </div>
        )}
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="h-16 px-6 py-2 bg-white border-b border-background-secondary gap-8 overflow-hidden grid grid-cols-2">
      <div className="flex items-center gap-x-8">
        <p className="text-title text-xl text-nowrap font-semibold leading-7">
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
