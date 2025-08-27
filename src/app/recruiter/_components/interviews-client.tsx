"use client";
import InterviewCard from "@/components/dashboard/interview-card";
import BasicLayoutCard from "@/components/shared/basic-layout-card";
import { useRouter } from "next/navigation";
import React from "react";

const RecruiterInterviewClient = () => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 gap-6">
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

export default RecruiterInterviewClient;
