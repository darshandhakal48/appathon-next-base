"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Job } from "@/lib/type";
import useCustomPagination from "@/hooks/use-custom-pagination";

import { EmptyState } from "../shared/empty-state";
import { Typography } from "../shared/typography";
import { buttonVariants } from "../ui/button";
import { ReusableTable } from "./reusuable-table";

function ActiveJobOpenings({ jobs }: { jobs: Job[] | null }) {
  const router = useRouter();

  const { data, PaginationComponent } = useCustomPagination<Job>({
    key: "activeJob",
    path: "/superadmin-active-jobs",
    totalPages: 10,
  });
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Typography color="title">Active Jobs Opening</Typography>
        <Link
          href="/admin/jobposting"
          className={buttonVariants({
            className: "no-underline! hover:underline!",
            variant: "link",
          })}
        >
          <Typography color="primary1">View All Jobs</Typography>
        </Link>
      </div>
      {data ? (
        <ReusableTable<Job>
          data={data}
          excludeIdColumns={false}
          onRowClick={(job) =>
            router.push(`/admin/jobposting/${job["Job Id"]}`)
          }
        />
      ) : (
        <EmptyState
          icon="clock4"
          title="No Active Jobs"
          description="There hasn't been any active job opening. Active Job opening will appear here when users interact with the software."
        />
      )}
      <div>
        <PaginationComponent />
      </div>
    </div>
  );
}

export default ActiveJobOpenings;
