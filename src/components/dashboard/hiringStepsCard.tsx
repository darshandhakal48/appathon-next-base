import React from "react";

import { DashboardCard } from "@/lib/type";
import { Icons } from "../ui/icons";
import { Typography } from "../shared/typography";

function HiringStepsCard({ data }: { data: DashboardCard }) {
  const Icon = Icons[data.icon];
  return (
    <div className="flex w-full max-w-[220px] flex-1 items-center justify-start gap-6 rounded-[6px] bg-grayscale-surface-white px-6 shadow-sm md:h-[100px] md:px-8">
      <Icon className="size-6! text-primary-surface-default" />

      <div className="flex flex-col">
        <Typography type="sm" className="text-wrap">{data.label}</Typography>
        <Typography type="2xl" weight="bold" color="title">
          {data.count}
        </Typography>
      </div>
    </div>
  );
}

export default HiringStepsCard;
