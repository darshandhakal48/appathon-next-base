import { cn } from "@/lib/utils";
import { IconCheck } from "@tabler/icons-react";
import { Divide } from "lucide-react";
import React from "react";

interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: { label: string; status: string }[];
}

export default function Timeline({ steps, className, ...attr }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute top-4 z-10 w-full px-5">
        <div className="h-px bg-border w-full" />
      </div>

      {/* <div className="absolute top-0 z-10 w-full flex items-center justify-around px-8 text-center">
        {steps.map((step, index) => (
          <p
            className="text-[10px] text-caption text-center"
            key={"timeline-caption-" + index}
          >
            {step.label}
          </p>
        ))}
      </div> */}

      <div className="flex items-center justify-between z-20 absolute top-0 left-0 w-full">
        {steps.map((step, index) => (
          <div
            key={index}
            className="grid place-content-center place-items-center"
          >
            {/* Step Circle */}
            <div
              className={`size-8 rounded-full border-2 grid place-content-center ${
                step.status === "completed"
                  ? "bg-success border-success"
                  : "text-primary-surface-disabled bg-warning-foreground border-muted"
              }`}
            >
              <IconCheck
                className={cn("size-4 text-white", {
                  "text-gray-300": step.status !== "completed",
                })}
              />
            </div>

            {/* Step Label */}
            <div
              className={`mt-4 text-sm ${
                step.status === "completed"
                  ? "text-grayscale-body font-medium"
                  : "text-gray-400"
              }`}
            >
              {step.label}
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
}
