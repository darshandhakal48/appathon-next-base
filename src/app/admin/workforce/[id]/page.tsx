import DashboardPageHeader from "@/components/dashboard/pageHeader";
import React from "react";
import EmployeeDetails from "../_component/employeeDetails";

function EmployeeInfo() {
    return (
        <>
            <DashboardPageHeader>WorkForce</DashboardPageHeader>
            <EmployeeDetails />
        </>
    );
}

export default EmployeeInfo;
