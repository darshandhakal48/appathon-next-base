"use client";

import React from "react";
import { Typography } from "../shared/typography";
import { Job } from "@/lib/type";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { ReusableTable } from "./reusuable-table";
import { useRouter } from "next/navigation";
import { EmptyState } from "../shared/empty-state";

function ActiveJobOpenings({ jobs }: { jobs: Job[] | null }) {
  const router = useRouter();
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Typography color="title">Active Jobs Opening</Typography>
        <Link
          href="/admin/jobposting"
          className={buttonVariants({ className: "no-underline! hover:underline!", variant: "link" })}>
          <Typography color="primary1">View All Jobs</Typography>
        </Link>
      </div>
      {jobs ?
        <ReusableTable<Job> data={jobs} excludeIdColumns={false} onRowClick={(job) => router.push(`/admin/jobposting/${job["Job Id"]}`)} /> :
        <EmptyState
          icon="clock4"
          title="No Active Jobs"
          description="There hasn't been any active job opening. Active Job opening will appear here when users interact with the software." />
      }
    </div>
  );
}

export default ActiveJobOpenings;
