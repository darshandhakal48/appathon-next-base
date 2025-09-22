import React from "react";
import { Control } from "react-hook-form";

import { CandidateSchemaType } from "@/components/forms/schema";

import { candidatePermissionForPageData } from "../_lib/constant";
import PermissionTable from "./permission-table";

function CandidatePermission({
  control,
}: {
  control: Control<CandidateSchemaType>;
}) {
  return (
    <PermissionTable<CandidateSchemaType>
      control={control}
      pageData={candidatePermissionForPageData}
    />
  );
}

export default CandidatePermission;
