import React from "react";
import { Control } from "react-hook-form";

import { ClientSchemaType } from "@/components/forms/schema";

import { clientPermissionForPageData } from "../_lib/constant";
import PermissionTable from "./permission-table";

function ClientPermission({ control }: { control: Control<ClientSchemaType> }) {
  return (
    <PermissionTable<ClientSchemaType>
      control={control}
      pageData={clientPermissionForPageData}
    />
  );
}

export default ClientPermission;
