"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Job } from "@/lib/type";
import { cn } from "@/lib/utils";
import React from "react";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { IconMapPin } from "@tabler/icons-react";
import { Card, CardContent } from "../ui/card";
import { Typography } from "./typography";

interface JobCardProps extends React.HTMLAttributes<HTMLDivElement> {
  job?: Job;
}

const JobCard = (props: JobCardProps) => {
  const { job, className, ...attr } = props;
  return (
    <div
      {...attr}
      className={cn(
        "0 flex cursor-pointer flex-col items-start justify-start gap-4 rounded-md border border-grayscale-border-default bg-grayscale-surface-white px-6 py-4 transition-all",
        "hover:border-secondary-surface-default-1 hover:bg-grayscale-surface-default/30",
        className
      )}
    >
      <Typography type="lg" color="primary" font="sans-secondary">
        {job?.["Job Title"]}
      </Typography>
      <div className="inline-flex items-center justify-start gap-8 self-stretch">
        <div className="flex items-center justify-start gap-2">
          <Image
            alt="placeholder"
            width={40}
            height={40}
            className="soze-10 rounded-full"
            src="/_static/40x40.svg"
          />

          <Typography type="sm">{job?.company}</Typography>
        </div>
        <div className="flex items-center gap-2">
          <IconMapPin className="size-4 text-grayscale-text-subtitle" />
          <Typography type="sm">{job?.location}</Typography>
        </div>
      </div>
      <div className="inline-flex items-center gap-8">
        <Typography type="xxs" color="caption">
          {job?.posted}
        </Typography>
        <Badge variant="warning">{job?.expires}</Badge>
      </div>
    </div>
  );
};

export default JobCard;
