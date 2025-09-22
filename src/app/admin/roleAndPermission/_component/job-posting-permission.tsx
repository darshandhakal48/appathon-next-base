import React from "react";
import { Control } from "react-hook-form";

import { JobPostingSchemaType } from "@/components/forms/schema";

import { jobPostingPermissionForPageData } from "../_lib/constant";
import PermissionTable from "./permission-table";

function JobPostingPermission({
  control,
}: {
  control: Control<JobPostingSchemaType>;
}) {
  return (
    <PermissionTable<JobPostingSchemaType>
      control={control}
      pageData={jobPostingPermissionForPageData}
    />
  );
}

export default JobPostingPermission;
