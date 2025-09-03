"use client";

import React from "react";
import { useRouter } from "next/navigation";

import InterviewCard from "@/components/dashboard/interview-card";
import BasicLayoutCard from "@/components/shared/basic-layout-card";

const CandidateInterviewClient = () => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
      <BasicLayoutCard
        onClick={() => router.push("/candidate/interview/123")}
        className="cursor-pointer"
      >
        {/* <InterviewCard status="success" /> */}
      </BasicLayoutCard>

      <BasicLayoutCard className="cursor-pointer">
        {/* <InterviewCard status="pending" /> */}
      </BasicLayoutCard>

      <BasicLayoutCard className="cursor-pointer">
        {/* <InterviewCard status="error" /> */}
      </BasicLayoutCard>

      <BasicLayoutCard className="cursor-pointer">
        {/* <InterviewCard status="error" /> */}
      </BasicLayoutCard>
    </div>
  );
};

export default CandidateInterviewClient;
