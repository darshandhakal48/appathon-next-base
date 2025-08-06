import React from "react";

import { DashboardCard } from "@/lib/type";
import { Icons } from "../ui/icons";

function HiringStepsCard({ data }: { data: DashboardCard }) {
  const Icon = Icons[data.icon || "user"];
  return (
    <div className="flex items-center justify-start gap-2 rounded-[6px] bg-grayscale-surface-white px-4 md:gap-6 md:px-8 md:py-4">
      <div className="flex size-[52px]! min-w-[52px] items-center justify-center rounded-full bg-grayscale-surface-subtle">
        <Icon className="size-6! text-primary-surface-default" />
      </div>
      <div className="flex flex-col">
        <span className="text-sm">{data.label}</span>
        <span className="text-2xl font-bold">{data.count}</span>
      </div>
    </div>
  );
}

export default HiringStepsCard;
/*

<div className="self-stretch inline-flex justify-start items-center gap-4">
    <div className="flex-1 bg-Greyscale-Surface-White rounded inline-flex flex-col justify-start items-start overflow-hidden">
        <div className="self-stretch h-4 p-2.5" />
        <div className="self-stretch h-12 p-6 flex flex-col justify-center items-center">
            <div className="self-stretch flex flex-col justify-center items-start gap-1">
                <div className="justify-start text-Greyscale-text-grayscale-text-title text-base font-normal font-['Roboto'] leading-normal">Your Application Overview</div>
            </div>
        </div>
        <div className="self-stretch px-6 pt-2 inline-flex justify-center items-center gap-6 overflow-hidden">
            <div className="flex-1 self-stretch flex justify-start items-start gap-4 flex-wrap content-start">
                <div data-property-1="Default" className="flex-1 h-24 px-8 bg-Greyscale-Surface-White rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] inline-flex flex-col justify-center items-start gap-4">
                    <div className="inline-flex justify-center items-center gap-6">
                        <div className="w-12 h-12 relative bg-Greyscale-Surface-Subtle rounded-[48px] overflow-hidden">
                            <div className="w-6 h-6 left-[14px] top-[14px] absolute overflow-hidden">
                                <div className="w-5 h-5 left-[1px] top-[2px] absolute bg-primary-surface-default-Default" />
                            </div>
                        </div>
                        <div className="inline-flex flex-col justify-center items-start gap-1">
                            <div className="justify-start text-Greyscale-Text-Body text-sm font-normal font-['Roboto'] leading-tight">Applied</div>
                            <div className="justify-start text-Greyscale-text-grayscale-text-title text-2xl font-bold font-['Roboto'] leading-loose">0</div>
                        </div>
                    </div>
                </div>
                <div data-property-1="Default" className="flex-1 h-24 px-8 bg-Greyscale-Surface-White rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] inline-flex flex-col justify-center items-start gap-4">
                    <div className="inline-flex justify-center items-center gap-6">
                        <div className="w-12 h-12 relative bg-Greyscale-Surface-Subtle rounded-[48px] overflow-hidden">
                            <div className="w-6 h-6 left-[14px] top-[14px] absolute overflow-hidden">
                                <div className="w-5 h-4 left-[2px] top-[1px] absolute bg-primary-surface-default-Default" />
                                <div className="w-2.5 h-2 left-[11px] top-[15px] absolute bg-primary-surface-default-Default" />
                            </div>
                        </div>
                        <div className="inline-flex flex-col justify-center items-start gap-1">
                            <div className="justify-start text-Greyscale-Text-Body text-sm font-normal font-['Roboto'] leading-tight">In Review</div>
                            <div className="justify-start text-Greyscale-text-grayscale-text-title text-2xl font-bold font-['Roboto'] leading-loose">1</div>
                        </div>
                    </div>
                </div>
                <div data-property-1="Default" className="flex-1 h-24 px-8 bg-Greyscale-Surface-White rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] inline-flex flex-col justify-center items-start gap-4">
                    <div className="inline-flex justify-center items-center gap-6">
                        <div className="w-12 h-12 relative bg-Greyscale-Surface-Subtle rounded-[48px] overflow-hidden">
                            <div className="w-6 h-6 left-[14px] top-[14px] absolute overflow-hidden">
                                <div className="w-4 h-2 left-[4px] top-[14px] absolute bg-primary-surface-default-Default" />
                                <div className="w-2.5 h-2.5 left-[7px] top-[2px] absolute bg-primary-surface-default-Default" />
                            </div>
                        </div>
                        <div className="inline-flex flex-col justify-center items-start gap-1">
                            <div className="justify-start text-Greyscale-Text-Body text-sm font-normal font-['Roboto'] leading-tight">Interview Scheduled</div>
                            <div className="justify-start text-Greyscale-text-grayscale-text-title text-2xl font-bold font-['Roboto'] leading-loose">5</div>
                        </div>
                    </div>
                </div>
                <div data-property-1="Default" className="flex-1 h-24 px-8 bg-Greyscale-Surface-White rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] inline-flex flex-col justify-center items-start gap-4">
                    <div className="inline-flex justify-center items-center gap-6">
                        <div className="w-12 h-12 relative bg-Greyscale-Surface-Subtle rounded-[48px] overflow-hidden">
                            <div className="w-6 h-6 left-[14px] top-[14px] absolute overflow-hidden">
                                <div className="w-4 h-2 left-[4px] top-[14px] absolute bg-primary-surface-default-Default" />
                                <div className="w-2.5 h-2.5 left-[7px] top-[2px] absolute bg-primary-surface-default-Default" />
                            </div>
                        </div>
                        <div className="inline-flex flex-col justify-center items-start gap-1">
                            <div className="justify-start text-Greyscale-Text-Body text-sm font-normal font-['Roboto'] leading-tight">Offer Received</div>
                            <div className="justify-start text-Greyscale-text-grayscale-text-title text-2xl font-bold font-['Roboto'] leading-loose">5</div>
                        </div>
                    </div>
                </div>
                <div data-property-1="Default" className="flex-1 h-24 px-8 bg-Greyscale-Surface-White rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] inline-flex flex-col justify-center items-start gap-4">
                    <div className="inline-flex justify-center items-center gap-6">
                        <div className="w-12 h-12 relative bg-Greyscale-Surface-Subtle rounded-[48px] overflow-hidden">
                            <div className="w-6 h-6 left-[14px] top-[14px] absolute overflow-hidden">
                                <div className="w-4 h-2 left-[4px] top-[14px] absolute bg-primary-surface-default-Default" />
                                <div className="w-2.5 h-2.5 left-[7px] top-[2px] absolute bg-primary-surface-default-Default" />
                            </div>
                        </div>
                        <div className="inline-flex flex-col justify-center items-start gap-1">
                            <div className="justify-start text-Greyscale-Text-Body text-sm font-normal font-['Roboto'] leading-tight">Rejected</div>
                            <div className="justify-start text-Greyscale-text-grayscale-text-title text-2xl font-bold font-['Roboto'] leading-loose">5</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="self-stretch h-4 p-2.5" />
    </div>
</div>


*/
