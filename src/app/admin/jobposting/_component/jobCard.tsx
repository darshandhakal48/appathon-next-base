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
        <div className="bg-background p-4 space-y-4 rounded-md shadow-sm">
            <div className="flex justify-between items-center">
                <div className=" bg-success/10 flex items-center gap-2 p-1">
                    <span className="w-2 h-2 rounded-full bg-success"></span>
                    <span className="text-[12px] font-normal">
                        {job.status}
                    </span>
                </div>

                <EllipsisVertical />
            </div>

            <div>
                <span className="bg-primary-surface/10 text-primary-surface text-[12px] font-normal p-1">
                    ID : {job.id}
                </span>
            </div>
            <div>
                <span className=" text-primary-surface text-lg font-semibold">
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
                    <span className="text-sm font-normal text-grayscale-body">
                        {job.companyName}
                    </span>
                </div>
                <div className="flex gap-2 items-center">
                    <MapPin size={16} />
                    <span className="text-sm font-normal text-grayscale-body">
                        {job.location} ({job.type})
                    </span>
                </div>
            </div>

            <div className="flex items-center justify-between bg-muted py-1 px-2 rounded-2xl">
                <div className="flex items-center gap-4">
                    <div className="flex gap-2 items-center">
                        <Calendar size={16} />
                        <span className="text-xs text-grayscale-body ">
                            {job.startDate}
                        </span>
                    </div>
                    <ArrowLeftRight size={16} />
                    <div className="flex gap-2 items-center">
                        <Calendar size={16} />
                        <span className="text-xs text-grayscale-body ">
                            {job.endDate}
                        </span>
                    </div>
                </div>
                <div className="bg-warning text-xs font-normal py-1 px-2 rounded-2xl text-background">
                    {job.expiresIn}
                </div>
            </div>

            <div>
                <div className="flex flex-col gap-1">
                    <span className="text-gray-400 text-[10px]">
                        Updated by
                    </span>
                    <div className="flex items-center gap-2">
                        <div className="p-2 bg-sidebar-accent rounded-full">
                            <span className=" text-secondary text-sm">WW</span>
                        </div>
                        <span className="text-secondary text-sm">
                            {job.updatedBy}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobCard;
