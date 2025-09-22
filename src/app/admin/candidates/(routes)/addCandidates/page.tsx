import EmployeeForm from "@/components/forms/employee-form";
import React from "react";

async function AddCandidates() {
  // Adding delay to test loading.tsx
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return <>
    <EmployeeForm type="candidates" />
  </>;
}

export default AddCandidates;
