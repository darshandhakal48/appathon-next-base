"use client";

import React from "react";

import { DashboardCard } from "@/lib/type";
import { cn } from "@/lib/utils";

import { Typography } from "../shared/typography";
import { Icons } from "../ui/icons";
import { useSidebar } from "../ui/sidebar";

export default function OverviewCard({ data }: { data: DashboardCard }) {
  const sidebar = useSidebar();

  const Icon = Icons[data.icon] || Icons.folderOpen;
  return (
    <div
      className={cn(
        "bg-grayscale-surface-white flex flex-1 items-center gap-6 rounded-md px-6 md:h-[100px] md:px-8",
        { "justify-center md:px-2": sidebar.open },
      )}
    >
      <Icon className="text-primary-surface-default size-6" />

      <div className="flex flex-col">
        <Typography type="sm" className="text-wrap">
          {data.label}
        </Typography>
        <Typography type="2xl" weight="bold" color="title">
          {data.count}
        </Typography>
      </div>
    </div>
  );
}

/*
 
 <div data-property-1="Default" className="self-stretch h-24 px-8 bg-Greyscale-Surface-White rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-Greyscale-Border-Lighter inline-flex flex-col justify-center items-start gap-4">
    <div className="inline-flex justify-center items-center gap-6">
        <div className="w-12 h-12 relative bg-Greyscale-Surface-Subtle rounded-[48px] overflow-hidden">
            <div className="w-6 h-6 left-[14px] top-[14px] absolute overflow-hidden">
                <div className="w-4 h-5 left-[3px] top-[1px] absolute bg-Primary-Surface-Default" />
                <div className="w-2 h-2 left-[13px] top-[1px] absolute bg-Primary-Surface-Default" />
                <div className="w-2 h-1.5 left-[8px] top-[12px] absolute bg-Primary-Surface-Default" />
            </div>
        </div>
        <div className="inline-flex flex-col justify-center items-start gap-1">
            <div className="justify-start text-Greyscale-Text-Body text-sm font-normal font-['Roboto'] leading-tight">Applied</div>
            <div className="justify-start text-Greyscale-Text-Title text-2xl font-bold font-['Roboto'] leading-loose">15</div>
        </div>
    </div>
</div>

 */
