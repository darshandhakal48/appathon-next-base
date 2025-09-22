import React from "react";
import { Control } from "react-hook-form";

import { WorkforceType } from "@/components/forms/schema";

import { workforcePermissionForPageData } from "../_lib/constant";
import PermissionTable from "./permission-table";

function WorkforcePermission({ control }: { control: Control<WorkforceType> }) {
  return (
    <PermissionTable<WorkforceType>
      control={control}
      pageData={workforcePermissionForPageData}
    />
  );
}

export default WorkforcePermission;
