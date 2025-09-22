import React from "react";
import { Control } from "react-hook-form";

import { AnalyticsSchemaType } from "@/components/forms/schema";

import { analyticstPermissionForPageData } from "../_lib/constant";
import PermissionTable from "./permission-table";

function ClientPermission({
  control,
}: {
  control: Control<AnalyticsSchemaType>;
}) {
  return (
    <PermissionTable<AnalyticsSchemaType>
      control={control}
      pageData={analyticstPermissionForPageData}
    />
  );
}

export default ClientPermission;
