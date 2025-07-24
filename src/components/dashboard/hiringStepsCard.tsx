import React from "react";

import { DashboardCard } from "@/lib/type";
import { Icons } from "../ui/icons";

function HiringStepsCard({ data }: { data: DashboardCard }) {
    const Icon = Icons[data.icon];
    return (
        <div className="bg-grayscale-surface-white flex justify-center items-center gap-6 p-6 md:py-8 rounded-[6px] md:px-9 shadow-sm">
            <div className="bg-grayscale-surface-subtle rounded-full w-[52px] h-[52px]  flex justify-center items-center">
                <Icon className="h-[24px] w-[24px] text-primary-surface-default" />
            </div>
            <div className="flex flex-col">
                <span className="text-sm text-nowrap text-grayscale-text-body">
                    {data.label}
                </span>
                <span className="text-2xl font-bold text-grayscale-text-grayscale-text-title ">
                    {data.count}
                </span>
            </div>
        </div>
    );
}

export default HiringStepsCard;
