

import DashboardPageHeader from "@/components/dashboard/page-header";
import React from "react";
import { NewJobHeaderAction } from "../../_components/header-actions";
import JobPostingClient from "../../_components/job-posting-client";

function RecruiterJobPosting() {
  return (
    <>
      <DashboardPageHeader title="Job Posting">
        <NewJobHeaderAction type="recruiter" />
      </DashboardPageHeader>
      <JobPostingClient />
    </>
  );
}


export default RecruiterJobPosting;
