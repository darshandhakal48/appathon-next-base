"use client";

import React from "react";

import { Interview } from "@/lib/type";
import { totalPages } from "@/lib/utils";
import useCustomPagination from "@/hooks/use-custom-pagination";
import InterviewCard from "@/components/dashboard/interview-card";
import { EmptyState } from "@/components/shared/empty-state";

export default function AdminInterviewClient({
  interviews,
}: {
  interviews: Interview[] | null;
}) {
  const { data: adminInterview, PaginationComponent } =
    useCustomPagination<Interview>({
      key: "interview",
      path: "/superadmin-interviews",
      totalPages: totalPages,
    });

  return (
    <>
      <div className="grid grid-cols-1 gap-6 bg-grayscale-surface-subtle md:grid-cols-2 lg:grid-cols-3">
        {adminInterview ? (
          adminInterview?.map((interview) => (
            <InterviewCard
              href={`/admin/interviews/${interview.id}`}
              interview={interview}
              key={interview.id}
            />
          ))
        ) : (
          <EmptyState title="" description="" />
        )}
      </div>
      <div className="mt-4">
        <PaginationComponent />
      </div>
    </>
  );
}
