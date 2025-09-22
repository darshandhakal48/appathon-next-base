import React from "react";
import { JobPostingFormType } from "@/schema/job-posting-form-schema";
import { BrainCog } from "lucide-react";
import { Control } from "react-hook-form";

import { Button } from "@/components/ui/button";
import JobDescriptionForm from "@/components/forms/job-description-form";
import { JobFormType } from "@/components/forms/schema";

function JobDescription({ control }: { control: Control<JobPostingFormType> }) {
  return (
    <div className="bg-grayscale-surface-white grid grid-cols-1 gap-4 p-6">
      <div className="flex items-center gap-7.5">
        <span className="text-sidebar-primary-foreground text-lg font-semibold">
          Description
        </span>
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
