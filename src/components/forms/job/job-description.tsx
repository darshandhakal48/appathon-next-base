import JobDescriptionForm from "@/components/forms/job-description-form";
import { JobFormType } from "@/components/forms/schema";
import { Button } from "@/components/ui/button";
import { BrainCog } from "lucide-react";
import React from "react";
import { Control } from "react-hook-form";

function JobDescription({ control }: { control: Control<JobFormType> }) {
  return (
    <div className="p-6 grid grid-cols-1 gap-4 bg-grayscale-surface-white">
      <div className="flex items-center gap-7.5">
        <span className="text-lg text-sidebar-primary-foreground font-semibold">
          Description
        </span>
        <Button
          variant="outline"
          className="text-base font-normal text-primary-text-label-1 shadow-lg"
        >
          {" "}
          <span>
            <BrainCog />
          </span>{" "}
          Generate with AI
        </Button>
      </div>

      {/* description and requirements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <JobDescriptionForm control={control} />
      </div>
    </div>
  );
}

export default JobDescription;
