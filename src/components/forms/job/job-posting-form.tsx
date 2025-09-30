"use client";

import { useForm, UseFormReturn } from "react-hook-form";
import {
  Form,
} from "@/components/ui/form";
import {
  MultiStepFormContent,
  StepFields,
} from "@/components/multi-step-viewer";
import { JobPostingFormSchema, JobPostingFormType } from "@/schema/job-posting-form-schema";
import { NewJobPostingHeader } from "./form-header";
import { JOB_POSTING_FORM_STEPS } from "./form-steps";
import { MultiStepFormProvider } from "@/hooks/use-multi-step-viewer";
import useFormPersist from "react-hook-form-persist";
import { zodResolver } from "@hookform/resolvers/zod";

export default function JobPostingForm() {

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
  useFormPersist("job-posting", {
    ...form,
    storage: window.localStorage
  })


  const handleSubmit = form.handleSubmit(async (data: JobPostingFormType) => {
    // formAction.execute(data);
  });

  // -------------------- FORM WRAPPER --------------------
  return (
    <MultiStepFormProvider
      stepsFields={JOB_POSTING_FORM_STEPS(form)}
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
        <Form {...form}>
          <form id="job-posting-form" onSubmit={handleSubmit} className="">
            <MultiStepFormContent>
              <StepFields />
            </MultiStepFormContent>
          </form>
        </Form>
      </div>
    </MultiStepFormProvider>

  );
}
