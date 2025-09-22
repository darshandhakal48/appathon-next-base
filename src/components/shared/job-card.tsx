"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { IconMapPin } from "@tabler/icons-react";
import { Typography } from "./typography";
import { JobCardProps as Job } from "@/lib/type";

interface JobCardProps extends React.HTMLAttributes<HTMLDivElement> {
  job?: Job;
}

const JobCard = (props: JobCardProps) => {
  const { job, className, ...attr } = props;
  return (
    <div
      {...attr}
      className={cn(
        "flex cursor-pointer flex-col items-start justify-start gap-4 rounded-md border border-grayscale-border-default bg-grayscale-surface-white px-6 py-4 transition-all",
        "hover:border-secondary-surface-default-1 hover:bg-grayscale-surface-default/30",
        className
      )}
    >
      <Typography type="lg" color="primary">
        {job?.["Job Title"]}
      </Typography>
      <div className="inline-flex items-center justify-start gap-8 self-stretch">
        <div className="flex items-center justify-start gap-2">
          <Image
            alt="placeholder"
            width={40}
            height={40}
            className="soze-10 rounded-full"
            src={job?.logo||"/_static/ray_it.jpg"}
          />

          <Typography color="primary" type="sm">{job?.["Client Name"]}</Typography>
        </div>
        <div className="flex items-center gap-2">
          <IconMapPin className="size-4 text-grayscale-text-subtitle" />
          <Typography type="sm">{job?.City}</Typography>
        </div>
      </div>
      <div className="inline-flex items-center gap-8">
        <Typography type="xxs" color="caption">
          {job?.Date}
        </Typography>
        <Badge variant="warning">Experies in {job?.expiresIn}</Badge>
      </div>
    </div>
  );
};

export default JobCard;
