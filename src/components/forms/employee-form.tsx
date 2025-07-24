"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { EmployeeFormSchema, EmployeeFormType } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import EmployeeInfoForm from "./employee-info-form";
import EmployeeAddressForm from "./employee-address-form";
import EmployeeFormAttachment from "./employee-attachments-form";

function EmployeeForm() {
  const form = useForm<EmployeeFormType>({
    resolver: zodResolver(EmployeeFormSchema),
    defaultValues: {
      info: {
        employeeName: "",
        accountManager: "",
        contactNumber: "",
        industry: "",
        email: "",
        about: "",
      },
      address: {
        street: "",
        state: "",
        city: "",
        postalCode: "",
        country: "",
      },
    },
  });
  function onSubmit(values: EmployeeFormType) {
    console.log("values===> ", values);
  }
  return (
    <div>
      {" "}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <AddEmployeHeader />

          <div className="p-4 grid grid-cols-1 gap-4">
            <div className=" grid grid-cols-2 gap-4">
              <EmployeeInfoForm control={form.control} />
              <EmployeeAddressForm control={form.control} />
            </div>
            <EmployeeFormAttachment />
          </div>
        </form>
      </Form>
    </div>
  );
}

function AddEmployeHeader() {
  const router = useRouter();

  const handleNavigation = () => {
    router.back();
  };

  return (
    <>
      <div className="bg-grayscale-surface-white border-1 p-4 bg flex justify-between items-center">
        <div
          className="flex items-center gap-2.5 cursor-pointer"
          onClick={handleNavigation}
        >
          <ArrowLeft className="h-6 w-6" />
          <span className="text-xl font-semibold">Add Employee</span>
        </div>

        <div className="space-x-1 gap-2.5">
          <Button type="submit" variant="default">
            Save
          </Button>
          <Button
            type="button"
            variant="outline"
            className="bg-grayscale-surface-disabled hover:bg-grayscale-surface-disabled"
            onClick={handleNavigation}
          >
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
}

export default EmployeeForm;
