"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";

import { userRoles } from "@/config/db";
import { Form } from "@/components/ui/form";
import DashboardPageHeader from "@/components/dashboard/page-header";

import {
  allPermissionComponent,
  allPermissionPages,
  schemaMapRolesAndPermission,
} from "../_lib/constant";
import { ActivePagePermissionType } from "../_lib/type";
import { filterActiveComponent } from "../_lib/utils";
import UserRoles from "./user-roles";

function RoleAndPermisiion() {
  // state responsible for displaying different roles based on page
  const [activePagePermission, setActivePagePermission] =
    useState<ActivePagePermissionType>("Candidate");

  // function that handles switch between pages
  const handleActivePermissionPage = (page: ActivePagePermissionType) => {
    setActivePagePermission(page);
  };

  const ActiveComponent = filterActiveComponent(activePagePermission);

  const candidateForm = useForm({
    resolver: zodResolver(schemaMapRolesAndPermission.Candidate.schema),
    defaultValues: schemaMapRolesAndPermission.Candidate.defaultValues,
  });

  const jobPostingForm = useForm({
    resolver: zodResolver(schemaMapRolesAndPermission["Job Posting"].schema),
    defaultValues: schemaMapRolesAndPermission["Job Posting"].defaultValues,
  });

  const interviewForm = useForm({
    resolver: zodResolver(schemaMapRolesAndPermission.Interview.schema),
    defaultValues: schemaMapRolesAndPermission.Interview.defaultValues,
  });

  const workforceForm = useForm({
    resolver: zodResolver(schemaMapRolesAndPermission.Workforce.schema),
    defaultValues: schemaMapRolesAndPermission.Workforce.defaultValues,
  });

  const clientForm = useForm({
    resolver: zodResolver(schemaMapRolesAndPermission.Client.schema),
    defaultValues: schemaMapRolesAndPermission.Client.defaultValues,
  });

  const analyticsForm = useForm({
    resolver: zodResolver(schemaMapRolesAndPermission.Analytics.schema),
    defaultValues: schemaMapRolesAndPermission.Analytics.defaultValues,
  });

  const onSubmit = (formData: any) => {
    console.log("form data ==> ", formData);
  };

  return (
    <>
      <RoleAndPermissonHeader />
      <div className="space-y-4 p-4">
        <div className="grid grid-cols-5 gap-4">
          {userRoles.map((data) => (
            <UserRoles key={data.id} role={data} />
          ))}
        </div>

        <div className="bg-grayscale-surface-white space-y-4 rounded-sm p-4 shadow-sm">
          <div className="space-y-2.5">
            <p className="text-grayscale-text-title text-lg font-semibold">
              Manage Permission
            </p>
            <p className="text-grayscale-text-caption text-sm font-normal">
              Manage candidate profiles, applications, and status updates`
            </p>
          </div>
          <div className="">
            <div className="flex items-center justify-between">
              <div className="space-x-4">
                {allPermissionPages.map((page) => (
                  <span
                    key={page}
                    className={` ${activePagePermission === page ? "text-primary-surface-default border-primary-surface-default border-b-2" : "text-grayscale-text-body"} text-sm font-normal hover:cursor-pointer`}
                    onClick={() =>
                      handleActivePermissionPage(
                        page as ActivePagePermissionType,
                      )
                    }
                  >
                    {page}
                  </span>
                ))}
              </div>
            </div>

            {activePagePermission === "Candidate" && (
              <Form {...candidateForm}>
                <form onSubmit={candidateForm.handleSubmit(onSubmit)}>
                  {ActiveComponent ? (
                    <ActiveComponent control={candidateForm.control} />
                  ) : (
                    <p>No such field</p>
                  )}
                </form>
              </Form>
            )}

            {activePagePermission === "Job Posting" && (
              <Form {...jobPostingForm}>
                <form onSubmit={jobPostingForm.handleSubmit(onSubmit)}>
                  {ActiveComponent ? (
                    <ActiveComponent control={jobPostingForm.control} />
                  ) : (
                    <p>No such field</p>
                  )}
                </form>
              </Form>
            )}

            {activePagePermission === "Interview" && (
              <Form {...interviewForm}>
                <form onSubmit={interviewForm.handleSubmit(onSubmit)}>
                  {ActiveComponent ? (
                    <ActiveComponent control={interviewForm.control} />
                  ) : (
                    <p>No such field</p>
                  )}
                </form>
              </Form>
            )}

            {activePagePermission === "Workforce" && (
              <Form {...workforceForm}>
                <form onSubmit={workforceForm.handleSubmit(onSubmit)}>
                  {ActiveComponent ? (
                    <ActiveComponent control={workforceForm.control} />
                  ) : (
                    <p>No such field</p>
                  )}
                </form>
              </Form>
            )}

            {activePagePermission === "Client" && (
              <Form {...clientForm}>
                <form onSubmit={clientForm.handleSubmit(onSubmit)}>
                  {ActiveComponent ? (
                    <ActiveComponent control={clientForm.control} />
                  ) : (
                    <p>No such field</p>
                  )}
                </form>
              </Form>
            )}

            {activePagePermission === "Analytics" && (
              <Form {...analyticsForm}>
                <form onSubmit={analyticsForm.handleSubmit(onSubmit)}>
                  {ActiveComponent ? (
                    <ActiveComponent control={analyticsForm.control} />
                  ) : (
                    <p>No such field</p>
                  )}
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export function RoleAndPermissonHeader() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(`/admin/roleAndPermission/createNewRole`);
  };
  return (
    <DashboardPageHeader title="Roles and Permission">
      <div
        className="text-primary-text-label-1 flex cursor-pointer items-center gap-2 space-x-1"
        onClick={handleNavigation}
      >
        <Plus height={20} />
        <span>Create New Role</span>
      </div>
    </DashboardPageHeader>
  );
}
export default RoleAndPermisiion;
