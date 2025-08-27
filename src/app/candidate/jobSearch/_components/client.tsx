"use client";

import JobCard from "@/components/shared/job-card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import JobInfo from "./job-info";
import { useRouter } from "next/navigation";
// import { candidateJobs } from "@/config/db";
import { Job } from "@/lib/type";

const CandidateJobSearchClient = () => {
  const router = useRouter();

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 self-stretch p-6"
      )}
    >
      {/* {candidateJobs.map((job, i) => (
        <JobCard
          job={job}
          key={"candidate-dashboard-job-" + i}
          onClick={() => router.push(`/candidate/jobSearch/${job.id}`)}
        />
      ))} */}
    </div>
  );
};

export default CandidateJobSearchClient;
