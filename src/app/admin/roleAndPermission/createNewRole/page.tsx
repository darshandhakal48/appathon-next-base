"use client";
import DashboardPageHeader from "@/components/dashboard/page-header";
import CreateNewRoleForm from "@/components/forms/roleAndPermission/create-new-role-form";
import { NewRoleSchema, NewRoleType } from "@/components/forms/schema";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

function CreateNewRole() {
  const form = useForm<NewRoleType>({
    resolver: zodResolver(NewRoleSchema),
    defaultValues: {
      role: {
        roleName: "",
      },
      permission: {
        clientPage: {
          readonly: false,
          write: false,
        },
        interviewSchedulingPage: {
          readonly: false,
          write: false,
        },
        jobPostingPage: {
          readonly: false,
          write: false,
        },
        workForcePage: {
          readonly: false,
          write: false,
        },
      },
    },
  });

  const onSubmit = (formData: NewRoleType) => {
    console.log("Form Submitted ==> ", formData);
  };

  return (
    <>
      {/* <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <CreateNewRoleHeader />
                    <div className="p-4">
                        <div className="bg-grayscale-surface-white px-6 py-8 min-h-[85vh] shadow-sm">
                            <CreateNewRoleForm control={form.control} />
                        </div>
                    </div>
                </form>
            </Form> */}
    </>
  );
}

function CreateNewRoleHeader() {
  const router = useRouter();
  const handleNavigation = () => {
    router.back();
  };
  return (
    <>
      <DashboardPageHeader title="">
        <div
          className="flex items-center gap-2.5 cursor-pointer"
          onClick={handleNavigation}
        >
          <ArrowLeft className="h-6 w-6" />
          <span className="text-xl font-semibold">Create New Role</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Button
            variant="default"
            type="submit"
            className="text-base font-normal"
          >
            Save
          </Button>
        </div>
      </DashboardPageHeader>
    </>
  );
}
export default CreateNewRole;
