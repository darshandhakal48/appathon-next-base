import JobInfo from "@/app/candidate/jobSearch/_components/job-info";
import { cn } from "@/lib/utils";
import React from "react";

interface JobCardProps extends React.HTMLAttributes<HTMLDivElement> {
  job?: string;
}

const JobCard = (props: JobCardProps) => {
  const { job, className, ...attr } = props;
  return (
    <div
      {...attr}
      className={cn(
        "px-6 py-4 bg-background rounded-md  outline-1 outline-offset-[-1px] outline-background-secondary inline-flex flex-col justify-start items-start gap-4 hover:bg-background-secondary hover:outline-gray-300 cursor-pointer transition-all",
        className
      )}
    >
      <div className="self-stretch inline-flex justify-start items-start gap-2.5">
        <div className="inline-flex flex-col justify-start items-start">
          <div className="self-stretch justify-start text-primary-surface text-lg font-semibold leading-7">
            Software Engineering
          </div>
        </div>
      </div>
      <div className="self-stretch inline-flex justify-start items-center gap-8">
        <div className="flex justify-start items-center gap-2">
          <div
            data-size="lg"
            data-type="avatar image"
            className="w-10 h-10 relative"
          >
            <img
              className="w-10 h-10 left-0 top-0 absolute rounded-full"
              src="https://placehold.co/40x40"
            />
          </div>
          <div className="justify-center text-gray-700 text-sm font-normal font leading-tight">
            Rays IT Solutions
          </div>
        </div>
        <div className="flex justify-start items-center gap-2">
          <div className="w-4 h-4 relative overflow-hidden">
            <div className="w-3 h-3.5 left-[2px] top-[0.67px] absolute bg-Greyscale-Text-Subtitle" />
            <div className="w-1.5 h-1.5 left-[5.33px] top-[4px] absolute bg-Greyscale-Text-Subtitle" />
          </div>
          <div className="justify-center text-foreground text-sm font-normal   leading-tight">
            TX 4340, USA (Full Time)
          </div>
        </div>
      </div>
      <div className="self-stretch inline-flex justify-start items-center gap-8">
        <div className="justify-start text-caption text-[10px] font-normal   leading-none">
          3 weeks ago
        </div>
        <div className="px-2 py-1 bg-warning rounded-3xl flex justify-center items-center gap-1">
          <div className="justify-start text-negative text-[10px] font-normal   leading-none">
            Expires in 4 days
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
