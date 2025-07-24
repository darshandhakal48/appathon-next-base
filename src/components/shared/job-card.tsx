"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Job } from "@/lib/type";
import { cn } from "@/lib/utils";
import React from "react";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { IconMapPin } from "@tabler/icons-react";
import { Card, CardContent } from "../ui/card";

interface JobCardProps extends React.HTMLAttributes<HTMLDivElement> {
  job?: Job;
}

const JobCard = (props: JobCardProps) => {
  const { job, className, ...attr } = props;
  return (
    <div
      {...attr}
      className={cn(
        "px-6 py-4 bg-grayscale-surface-white rounded-md  outline-1 outline-offset-[-1px] outline-background-secondary inline-flex flex-col justify-start items-start gap-4 hover:bg-grayscale-surface-default/30 hover:outline-background-secondary/70 cursor-pointer transition-all",
        className
      )}
    >
      <div className="self-stretch inline-flex justify-start items-start gap-2.5">
        <div className="inline-flex flex-col justify-start items-start">
          <div className="self-stretch justify-start text-primary-surface-default text-lg font-semibold leading-7">
            {job?.title}
          </div>
        </div>
      </div>
      <div className="self-stretch inline-flex justify-start items-center gap-8">
        <div className="flex justify-start items-center gap-2">
          <Image
            alt="placeholder"
            width={40}
            height={40}
            className="soze-10 rounded-full"
            src="/_static/40x40.svg"
          />

          <div className="justify-center text-gray-700 text-sm font-normal font leading-tight">
            {job?.company}
          </div>
        </div>
        <div className="flex justify-start items-center gap-2">
          <IconMapPin className="size-4 text-foreground" />
          <div className="justify-center text-foreground text-sm font-normal leading-tight">
            {job?.location}
          </div>
        </div>
      </div>
      <div className="self-stretch inline-flex justify-start items-center gap-8">
        <div className="justify-start text-grayscale-text-caption text-[10px] font-normal   leading-none">
          {job?.posted}
        </div>
        <Badge variant="warning">{job?.expires}</Badge>
      </div>
    </div>
  );
};

export function JobCardSkeleton() {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="space-y-3">
          {/* Job Title */}
          <Skeleton className="h-5 w-48" />

          {/* Company Info */}
          <div className="flex items-center space-x-3">
            <Skeleton className="h-8 w-8 rounded-full" />
            <div className="space-y-1">
              <Skeleton className="h-4 w-32" />
              <div className="flex items-center space-x-2">
                <Skeleton className="h-3 w-3" />
                <Skeleton className="h-3 w-24" />
              </div>
            </div>
          </div>

          {/* Tags and Button */}
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <Skeleton className="h-6 w-16 rounded-full" />
              <Skeleton className="h-6 w-20 rounded-full" />
            </div>
            <Skeleton className="h-8 w-20" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default JobCard;
