import DashboardPageHeader from "@/components/dashboard/page-header";
import React from "react";
import TimesheetForm from "./_components/client";
import { TimesheetTable } from "./_components/data-table";

function AdminTimeSheet() {
  return (<div>
    <DashboardPageHeader title="Timesheet" />
    <TimesheetForm />
    <div className="m-6 grid overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <TimesheetTable />
    </div>
  </div>);
}

export default AdminTimeSheet;
