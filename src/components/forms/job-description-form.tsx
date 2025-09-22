import React from "react";
import { JobPostingFormType } from "@/schema/job-posting-form-schema";
import { Control } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";
import { JobFormType } from "./schema";

function JobDescriptionForm({
  control,
}: {
  control: Control<JobPostingFormType>;
}) {
  return (
    <>
      <div>
        <FormField
          control={control}
          name="jobDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write a brief job description here"
                  className="min-h-36"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-error-surface-lighter" />
            </FormItem>
          )}
        />
      </div>
      <div>
        <FormField
          control={control}
          name="requirements"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Requirements</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write a brief requirements here"
                  className="min-h-36"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-error-surface-lighter" />
            </FormItem>
          )}
        />
      </div>
    </>
  );
}

export default JobDescriptionForm;
