"use client";

import React, { useState } from "react";
import {
  JOB_BOARDS,
  JobPostingFormSchema,
  JobPostingFormType,
} from "@/schema/job-posting-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useGlobalModal } from "@/hooks/use-global-ui";
import { Form } from "@/components/ui/form";
import { JobFormSchema, JobFormType } from "@/components/forms/schema";

import ConfirmJobDetails from "../_component/confirmJobDetails";
import Step1 from "../_component/step1";
import Step2 from "../_component/step2";
import Step3 from "../_component/step3";
import Steps from "../_component/steps";

function CreateNewJob() {
  const form = useForm<JobPostingFormType>({
    resolver: zodResolver(JobPostingFormSchema),
    mode: "onTouched",
    defaultValues: {
      jobTitle: "",
      salary: { min: 0, max: 0, currency: "USD" },
      workExperience: undefined,
      educationLevel: undefined,
      skills: [],
      clientId: "",
      industry: undefined,
      jobType: undefined,
      employmentType: undefined,
      address: {
        country: undefined,
        state: "",
        city: "",
        street: "",
        postalCode: "",
      },
      jobDescription: "",
      requirements: "",
      jobBoards: [],
    },
  });

  const stepsFields = [
    // Step 1: Job Details (as per PDF "Job Details")
    {
      fields: [
        "jobTitle",
        "salary.min",
        "salary.max",
        "salary.currency",
        "workExperience",
        "educationLevel",
        "skills",
        "clientId",
        "industry",
        "jobType",
        "employmentType",
        "address.country",
        "address.city",
        "address.street",
        "address.state",
        "address.postalCode",
        "jobDescription",
        "requirements",
      ],
      component: (
        <div className="space-y-6">
          {/* Stepper */}
          <div className="flex items-start justify-center py-4 text-sm">
            <div className="grid w-full max-w-[107px] place-items-center space-y-1.5 text-center">
              <div className="bg-success-surface-subtle border-success-border-lighter grid size-8 place-content-center rounded-full border text-white">
                1
              </div>
              <Typography color="title" type="sm">
                Job Details
              </Typography>
            </div>
            <div className="bg-grayscale-surface-disabled mt-[17px] h-1.5 w-[87px] rounded-[30px]">
              <div className="bg-success-surface-subtle h-full w-[50%] rounded-[30px]" />
            </div>

            <div className="grid w-full max-w-[107px] place-items-center space-y-1.5 text-center">
              <div className="bg-grayscale-surface-disabled grid size-8 place-content-center rounded-full text-white">
                2
              </div>
              <Typography className="text-grayscale-surface-disabled" type="sm">
                Publish
              </Typography>
            </div>
          </div>
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <JobPostInfoForm control={form.control} />
              <JobAddressInfoForm control={form.control} />
            </div>

            {/* description */}
            <JobDescription control={form.control} />
          </div>{" "}
        </div>
      ),
    },

    // Step 2: Manage Job Board
    {
      fields: ["jobBoards"],
      component: (
        <div className="space-y-8">
          {/* Stepper */}
          <div className="flex items-start justify-center py-4 text-sm">
            <div className="grid w-full max-w-[107px] place-items-center space-y-1.5 text-center">
              <div className="bg-success-surface-subtle border-success-border-lighter grid size-8 place-content-center rounded-full border text-white">
                1
              </div>
              <Typography color="title" type="sm">
                Job Details
              </Typography>
            </div>
            <div className="bg-grayscale-surface-disabled mt-[17px] h-1.5 w-[87px] rounded-[30px]">
              <div className="bg-success-surface-subtle h-full w-full rounded-[30px]" />
            </div>

            <div className="grid w-full max-w-[107px] place-items-center space-y-1.5 text-center">
              <div className="bg-success-surface-subtle border-success-border-lighter grid size-8 place-content-center rounded-full border text-white">
                2
              </div>
              <Typography color="title" type="sm">
                Publish
              </Typography>
            </div>
          </div>
          <h2 className="text-lg font-semibold">Manage Job Board</h2>
          <FormField
            control={form.control}
            name="jobBoards"
            render={({ field }) => (
              <FormItem>
                <div className="rounded-lg border">
                  <div className="grid grid-cols-3 gap-3 border-b px-4 py-2 text-sm font-medium">
                    <div>Job Board Name</div>
                    <div>Type</div>
                    <div>Publish</div>
                  </div>
                  <div className="divide-y">
                    {JOB_BOARDS.map((board) => {
                      const checked = field.value?.includes(board);
                      return (
                        <div
                          key={board}
                          className="grid grid-cols-3 items-center px-4 py-2 text-sm"
                        >
                          <div>{board}</div>
                          <div>Free</div>
                          <div className="flex items-center justify-start">
                            <Switch
                              checked={!!checked}
                              onCheckedChange={(v) => {
                                const next = new Set(field.value ?? []);
                                if (v) {
                                  next.add(board);
                                } else {
                                  next.delete(board);
                                }
                                field.onChange(Array.from(next));
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      ),
    },

    // Step 5: Publish (summary action step, mirrors PDF footer actions)
    {
      fields: [], // no additional validation fields; final action step
      component: (
        <div className="space-y-8">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="grid h-6 w-6 place-items-center rounded-full border">
                4
              </div>
              <span>Manage Job Board</span>
            </div>
            <Separator className="flex-1" />
            <div className="flex items-center gap-2">
              <div className="bg-primary text-primary-foreground grid h-6 w-6 place-items-center rounded-full">
                5
              </div>
              <span className="font-medium">Publish</span>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Ready to Publish</h2>
            <p className="text-muted-foreground text-sm">
              Review your entries. You can go back to edit before publishing.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      {" "}
      <MultiStepFormProvider
        stepsFields={stepsFields}
        onStepValidation={async (step) => {
          // validate only step-bound fields
          const isValid = await form.trigger(step.fields as any, {
            shouldFocus: true,
          });
          return isValid;
        }}
      >
        <NewJobPostingHeader />
        <div className="p-4 md:p-6">
          <JobPostingForm form={form} />
        </div>
      </MultiStepFormProvider>
    </>
  );
}

export default CreateNewJob;
