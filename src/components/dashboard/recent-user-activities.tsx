import React from "react";
import { Clock8, Calendar } from "lucide-react";
import { IconArrowRight } from "@tabler/icons-react";
import { Button, buttonVariants } from "../ui/button";
import { UserActivity } from "@/lib/type";
import { cn } from "@/lib/utils";
import Link from "next/link";

function RecentUserActivityCard({
  type,
  data,
}: {
  type: "admin" | "candidate";
  data: UserActivity;
}) {
  return (
    <div className="border-1 rounded-[8px] p-4 space-y-2 h-fit">
      <div className="bg-muted rounded-3xl inline-flex items-center p-2 gap-2">
        <div
          className={cn(
            "size-2.5 rounded-full",
            data.color === "success" ? "bg-success" : "bg-warning"
          )}
        ></div>
        <span className="text-sm text-secondary">{data.status}</span>
      </div>
      <div>{data.message}</div>
      {type === "admin" && (
        <div className="grid lg:grid-cols-2 gap-1">
          <div className="border-1 rounded-sm inline-flex items-center p-2 gap-2">
            {/* <span className="text-secondary">icon</span> */}
            <Clock8 className="text-secondary" size={18} />
            <span className="text-secondary">09:00Am</span>
          </div>
          <div className="border-1 rounded-sm inline-flex items-center p-2 gap-2">
            {/* <span className="text-secondary">icon</span> */}
            <Calendar className="text-secondary" size={18} />
            <span className="text-secondary">14 Dec 2024</span>
          </div>
        </div>
      )}
    </div>
  );
}

// TODO: Take data as argument, and dashboard type
function RecentUserActivities({
  type,
  data,
}: {
  type: "admin" | "candidate";
  data: UserActivity[];
}) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <span className="text-base">Recent User Activities</span>
        {type === "admin" && (
          <span className="text-base text-primary-surface">View All Jobs</span>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-content-start">
        {data.map((data) => (
          <RecentUserActivityCard data={data} type={type} />
        ))}
      </div>

      {type === "candidate" && (
        <div className="flex justify-center">
          <Link
            href="/candidate/jobSearch"
            className={buttonVariants({
              variant: "ghost",
              className: "text-primary-surface hover:text-primary-text-label",
            })}
          >
            Show All <IconArrowRight />
          </Link>
        </div>
      )}
    </div>
  );
}

export default RecentUserActivities;
