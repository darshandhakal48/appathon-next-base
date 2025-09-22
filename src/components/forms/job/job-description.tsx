import React from "react";
import { JobPostingFormType } from "@/schema/job-posting-form-schema";
import { BrainCog } from "lucide-react";
import { Control } from "react-hook-form";

import { Button } from "@/components/ui/button";
import JobDescriptionForm from "@/components/forms/job-description-form";
import { JobFormType } from "@/components/forms/schema";
import { Typography } from "@/components/shared/typography";

function JobDescription({ control }: { control: Control<JobPostingFormType> }) {
  return (
    <div className="bg-grayscale-surface-white border-grayscale-border-lighter grid grid-cols-1 gap-8 rounded-md border p-6">
      <div className="flex items-center gap-7.5">
        <Typography type="lg" color="title" weight="semibold">
          Description
        </Typography>
        <Button
          variant="outline"
          className="text-primary-text-label-1 text-base font-normal shadow-lg"
        >
          {" "}
          <span>
            <BrainCog />
          </span>{" "}
          Generate with AI
        </Button>
      </div>

      {/* description and requirements */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <JobDescriptionForm control={control} />
      </div>
    </div>
  );
}

export default JobDescription;
