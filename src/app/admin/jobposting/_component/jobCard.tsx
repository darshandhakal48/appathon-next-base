import { JobCardProps } from "@/lib/type";
import {
  ArrowLeftRight,
  Calendar,
  EllipsisVertical,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import React from "react";

function JobCard({ job }: { job: JobCardProps }) {
  return (
    <div className="bg-grayscale-surface-white p-4 space-y-4 rounded-md shadow-sm">
      <div className="flex justify-between items-center">
        <div className=" bg-success-surface-subtle/10 flex items-center gap-2 p-1">
          <span className="w-2 h-2 rounded-full bg-success-surface-subtle"></span>
          <span className="text-[12px] font-normal">{job.status}</span>
        </div>

        <EllipsisVertical />
      </div>

      <div>
        <span className="bg-primary-surface-default/10 text-primary-surface-default text-[12px] font-normal p-1">
          ID : {job.id}
        </span>
      </div>
      <div>
        <span className=" text-primary-surface-default text-lg font-semibold">
          {job.role}
        </span>
      </div>

      <div className="grid grid-cols-2 ">
        <div className="flex gap-2 items-center">
          <div>
            <Image
              src={`${job.logo}`}
              alt="company image"
              width={40}
              height={40}
            />
          </div>
          <span className="text-sm font-normal text-grayscale-text-body">
            {job.companyName}
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <MapPin size={16} />
          <span className="text-sm font-normal text-grayscale-text-body">
            {job.location} ({job.type})
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between bg-grayscale-surface-subtle py-1 px-2 rounded-2xl">
        <div className="flex items-center gap-4">
          <div className="flex gap-2 items-center">
            <Calendar size={16} />
            <span className="text-xs text-grayscale-text-body ">
              {job.startDate}
            </span>
          </div>
          <ArrowLeftRight size={16} />
          <div className="flex gap-2 items-center">
            <Calendar size={16} />
            <span className="text-xs text-grayscale-text-body ">
              {job.endDate}
            </span>
          </div>
        </div>
        <div className="bg-warning-surface-subtle text-xs font-normal py-1 px-2 rounded-2xl text-grayscale-text-negative">
          {job.expiresIn}
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-1">
          <span className="text-grayscale-text-caption text-[10px]">
            Updated by
          </span>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-grayscale-slate-200 rounded-full">
              <span className=" text-secondary text-sm">WW</span>
            </div>
            <span className="text-secondary text-sm">{job.updatedBy}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
