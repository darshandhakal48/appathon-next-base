import { Application } from "@/lib/type";
import { cn } from "@/lib/utils";
import { IconDotsVertical, IconMapPin } from "@tabler/icons-react";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Calendar } from "lucide-react";

interface ApplicationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  application: Application;
}

export default function ApplicationCard(props: ApplicationCardProps) {
  const { className, application, ...attr } = props;
  return (
    <div
      className={cn(
        "self-stretch px-6 py-4 bg-background rounded-md outline-2 outline-offset-[-1px] outline-border flex flex-col justify-start items-start gap-4",
        className
      )}
      {...attr}
    >
      <div className="self-stretch inline-flex justify-between items-start">
        <div className="h-8 pl-2.5 pr-3 py-px bg-green-500/10 rounded flex justify-start items-center gap-2">
          <div
            className={cn("size-2 bg-gray-500 rounded-full", {
              "bg-green-500": application.status === "shortlisted",
            })}
          />
          <p className="text-center text-xs font-normal font-sans-secondary leading-none">
            Shortlisted
          </p>
        </div>
        <Button variant="ghost" size="icon">
          <IconDotsVertical className="text-caption size-5" />
        </Button>
      </div>

      <p className="text-primary-surface text-lg font-semibold  leading-7">
        {application.title}
      </p>
      <div className="self-stretch inline-flex justify-start items-center gap-8">
        <div className="flex justify-start items-center gap-2">
          <Image
            src={application.companyImage}
            width={40}
            height={40}
            alt="user profile"
            className="size-10 rounded-full"
          />
          <p className="justify-center text-gray-700 text-sm font-normal font-sans-secondary leading-tight">
            {application.company}
          </p>
        </div>
        <div className="flex justify-start items-center gap-2">
          <IconMapPin className="size-3" />
          <p className="text-sm font-normal leading-tight">
            {application.location}
          </p>
        </div>
      </div>
      <div className="self-stretch inline-flex justify-start items-center gap-8">
        <div className="px-4 py-2 bg-muted rounded-[999px] flex justify-start items-center gap-6 overflow-hidden">
          <div className="flex justify-start items-center gap-2">
            <Calendar className="size-3" />
            <p className="justify-center text-foreground text-xs font-normal leading-none">
              {application.appliedDate}
            </p>
          </div>
        </div>
      </div>
      <div className="inline-flex justify-start items-center gap-2">
        <p className=" text-caption text-[10px] font-normal leading-none">
          Last Updated
        </p>
        <p className="px-2 py-1 bg-muted rounded flex justify-center items-center gap-2.5 text-caption text-[10px] font-normal leading-none">
          {application.appliedDate}
        </p>
      </div>
    </div>
  );
}
