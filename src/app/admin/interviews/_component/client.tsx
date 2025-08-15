"use client";

import React from "react";
import InterviewCard from "@/components/dashboard/interview-card";
import { Interview } from "@/lib/type";
import { EmptyState } from "@/components/shared/empty-state";

export default function AdminInterviewClient({ interviews }: { interviews: Interview[] | null }) {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 bg-grayscale-surface-subtle md:grid-cols-2 lg:grid-cols-3">
        {
          interviews ?
            interviews.map(interview => <InterviewCard href={`/admin/interviews/${interview.id}`} interview={interview} key={interview.id} />) :
            <EmptyState title="" description="" />
        }
      </div>
    </>
  );
}

