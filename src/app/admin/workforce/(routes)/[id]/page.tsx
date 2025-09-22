import DashboardPageHeader from "@/components/dashboard/page-header";
import React from "react";
import EmployeeDetails from "../../_component/employeeDetails";

function EmployeeInfo() {
  return (
    <>
      <DashboardPageHeader title="WorkForce" />
      <EmployeeDetails />
    </>
  );
}

export default EmployeeInfo;
