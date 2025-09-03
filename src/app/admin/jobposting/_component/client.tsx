"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useApiState } from "@/features/api/use-api-state";
import { ChevronLeft, ChevronRight, Ellipsis, Plus, X } from "lucide-react";

import { Job, JobCardProps } from "@/lib/type";
import { totalPages } from "@/lib/utils";
import { useApiQuery } from "@/hooks/use-api";
import useCustomPagination from "@/hooks/use-custom-pagination";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import CustomPagination from "@/components/shared/custom-pagination";
import { EmptyState } from "@/components/shared/empty-state";

import JobCard from "./jobCard";
import SingleJobDetails from "./singleJobDetails";

export function AdminJobPostingClient({
  jobs,
}: {
  jobs: JobCardProps[] | null;
}) {
  const { data, PaginationComponent } = useCustomPagination<JobCardProps>({
    key: "job",
    path: "/superadmin-jobposting",
    totalPages: totalPages,
  });

  const [showJobDetails, setShowJobDetails] = useState<boolean>(false);

  console.log(`job prop data ==> `, jobs);

  return (
    <>
      {data ? (
        <>
          <div
            className={`no-scrollbar min-h-[76vh] overflow-y-auto ${showJobDetails ? "grid grid-cols-4 gap-4" : ""}`}
          >
            <div
              className={`grid grid-cols-1 gap-4 ${showJobDetails ? "" : "md:grid-cols-2 lg:grid-cols-3"}`}
            >
              {data.map((data) => (
                <JobCard
                  job={data}
                  key={data["Job Id"]}
                  showJobDetails={showJobDetails}
                />
              ))}
            </div>

            {/* single job  details */}
            {showJobDetails ? (
              <>
                <SingleJobDetails />
              </>
            ) : (
              <></>
            )}
          </div>
        </>
      ) : (
        <EmptyState
          title="No Jobs Available"
          icon="clock4"
          description="User created jobs will be available here"
          className="bg-grayscale-surface-white min-h-[70vh] w-full shadow-sm"
        />
      )}
      <div className="mt-6">
        <PaginationComponent />
      </div>
    </>
  );
}

export function AdminJobPostingHeaderAction() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(`/admin/jobposting/createNewJob`);
  };

  return (
    <>
      <div
        className="text-primary-text-label-1 flex cursor-pointer items-center gap-2 space-x-1"
        onClick={handleNavigation}
      >
        <Plus height={20} />
        <span>Create New Job Posting</span>
      </div>
    </>
  );
}
