import React from "react";

import { DashboardCard } from "@/lib/type";
import { Icons } from "../ui/icons";

function HiringStepsCard({ data }: { data: DashboardCard }) {
    const Icon = Icons[data.icon];
    return (
        <div className="bg-background flex justify-center items-center gap-6 p-6 md:py-8 rounded-[6px] md:px-9">
            <div className="bg-muted rounded-full w-[52px] h-[52px]  flex justify-center items-center">
                <Icon className="h-[24px] w-[24px] text-primary-surface" />
            </div>
            <div className="flex flex-col">
                <span className="text-sm text-nowrap">{data.label}</span>
                <span className="text-2xl font-bold">{data.count}</span>
            </div>
        </div>
    );
}

export default HiringStepsCard;
