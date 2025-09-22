import React from "react";
import { Control } from "react-hook-form";

import { InterviewSchemaType } from "@/components/forms/schema";

import { interviewPermissionForPageData } from "../_lib/constant";
import PermissionTable from "./permission-table";

function InterviewPermission({
  control,
}: {
  control: Control<InterviewSchemaType>;
}) {
  return (
    <PermissionTable<InterviewSchemaType>
      control={control}
      pageData={interviewPermissionForPageData}
    />
  );
}

export default InterviewPermission;
