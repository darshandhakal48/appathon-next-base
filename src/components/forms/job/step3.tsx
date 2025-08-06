import CustomTable from "@/components/dashboard/customTable";
import { jobBoardColumn, jobBoardData } from "@/config/db";
import React from "react";

function Step3() {
    return (
        <div className="p-4 bg-background space-y-4">
            <p className="text-lg font-semibold text-sidebar-primary-foreground">
                Manage Job Board
            </p>
            <CustomTable columns={jobBoardColumn} data={jobBoardData} />
        </div>
    );
}

export default Step3;
