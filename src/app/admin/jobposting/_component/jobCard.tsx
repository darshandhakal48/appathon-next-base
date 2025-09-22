"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowLeftRight,
  Calendar,
  EllipsisVertical,
  MapPin,
} from "lucide-react";

import { JobCardProps } from "@/lib/type";

function JobCard({
  job,
  showJobDetails,
  handleActiveJobDetails,
}: {
  job: JobCardProps;
  showJobDetails: boolean;
  handleActiveJobDetails: (id: number) => void;
}) {
  const router = useRouter();
  return (
    <div
      className="bg-grayscale-surface-white cursor-pointer space-y-4 rounded-md p-4 shadow-sm"
      // onClick={() => router.push(`/admin/jobposting/${job["Job Id"]}`)}
      onClick={() => handleActiveJobDetails(job["JobId"])}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-success-surface-subtle/10 flex items-center gap-2 p-1">
            <span className="bg-success-surface-subtle h-2 w-2 rounded-full"></span>
            <span className="text-[12px] font-normal">{job["Status"]}</span>
          </div>
          <span className="bg-primary-surface-default/10 text-primary-surface-default p-1 text-[12px] font-normal">
            ID : {job["JobId"]}
          </span>
        </div>

        <EllipsisVertical />
      </div>

      <div>
        <span className="text-primary-surface-default text-lg font-semibold">
          {job["JobTitle"]}
        </span>
      </div>

      <div className="grid grid-cols-2">
        <div className="flex items-center gap-2">
          <div>
            <Image
              src={`${job.logo}`}
              alt="company image"
              width={40}
              height={40}
            />
          </div>
          <span className="text-grayscale-text-body text-sm font-normal">
            {job["ClientName"]}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <span className="text-grayscale-text-body text-sm font-normal">
            {job["City"]} ({job.type})
          </span>
        </div>
      </div>

      <div
        className={`bg-grayscale-surface-subtle flex items-center justify-between rounded-2xl px-2 py-1 ${showJobDetails ? "flex-col items-start gap-4" : ""} `}
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span className="text-grayscale-text-body text-xs">
              {job["Date"]}
            </span>
          </div>
          <ArrowLeftRight size={16} />
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span className="text-grayscale-text-body text-xs">
              {job["endDate"]}
            </span>
          </div>
        </div>
        <div className="bg-warning-surface-subtle text-grayscale-text-negative rounded-2xl px-2 py-1 text-xs font-normal">
          {job.expiresIn}
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-1">
          <span className="text-grayscale-text-caption text-[10px]">
            Updated by
          </span>
          <div className="flex items-center gap-2">
            <div className="bg-grayscale-slate-200 rounded-full p-2">
              <span className="text-secondary text-sm">WW</span>
            </div>
            <span className="text-secondary text-sm">{job["updatedBy"]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
