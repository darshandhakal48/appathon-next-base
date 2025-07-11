import React from "react";
import CandidateJobSearchClient from "./_components/client";
import DashboardPageHeader from "@/components/dashboard/page-header";
import { Input } from "@/components/ui/input";

export default async function CandidateJobSearchPage() {
  return (
    <>
      <DashboardPageHeader title="Top Jobs Picks">
        <Input
          icon="search"
          iconPosition="left"
          containerClassName="outline-0"
          className="max-w-[390px] w-full rounded-full"
          placeholder="Job title, skills, company name"
        />
      </DashboardPageHeader>
      <CandidateJobSearchClient />;
    </>
  );
}
