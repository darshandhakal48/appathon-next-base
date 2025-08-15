import React from "react";
import { Clock8, Calendar } from "lucide-react";
import { IconArrowRight } from "@tabler/icons-react";
import { buttonVariants } from "../ui/button";
import { UserActivity } from "@/lib/type";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Typography } from "../shared/typography";
import { EmptyState } from "../shared/empty-state";

function RecentUserActivityCard({
  type,
  data,
}: {
  type: "admin" | "candidate";
  data: UserActivity;
}) {
  return (
    <div className="h-fit space-y-2 rounded-[8px] border-1 border-grayscale-border-lighter p-4">
      <div className="inline-flex items-center gap-2 rounded-3xl bg-grayscale-surface-subtle p-2">
        <div
          className={cn(
            "size-2.5 rounded-full",
            data.color === "success"
              ? "bg-success-surface-subtle"
              : "bg-warning-surface-subtle"
          )}
        ></div>
        <Typography type="sm">{data.status}</Typography>
      </div>
      <Typography color="title" weight="semibold">
        {data.message}
      </Typography>
      {type === "admin" && (
        <div className="grid gap-1 lg:grid-cols-2">
          <div className="inline-flex items-center gap-2 rounded-sm border-1 border-grayscale-border-lighter px-3 py-1.5">
            <Clock8 className="size-4 text-grayscale-text-subtitle" />
            <Typography type="sm" color="subtitle">
              09:00Am
            </Typography>
          </div>
          <div className="inline-flex items-center gap-2 rounded-sm border-1 border-grayscale-border-lighter p-2">
            <Calendar className="size-4 text-grayscale-text-subtitle" />
            <Typography
              type="sm"
              color="subtitle"
              className="text-secondary text-nowrap"
            >
              14 Dec 2024
            </Typography>
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
  data: UserActivity[] | null;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Typography color="title">Recent User Activities</Typography>
        {type === "admin" && (
          <Link
            href="/admin/jobposting"
            className={buttonVariants({ className: "no-underline! hover:underline!", variant: "link" })}>
            <Typography color="primary1">View All Activities</Typography>
          </Link>
        )}
      </div>
      {data ? (
        <div className="grid grid-cols-1 place-content-start gap-4 md:grid-cols-2">
          {data.map((data, i) => (
            <RecentUserActivityCard
              key={i + 1}
              data={data}
              type={type}
            />
          ))
          }
        </div>
      ) : (
        <EmptyState
          icon="clock4"
          className="col-span-2 size-full"
          title="No Recent Activity"
          description="There hasn't been any user activity recently. Activity will appear here when users interact with the software."
        />
      )}

      {type === "candidate" && (
        <div className="flex justify-center">
          <Link
            href="/candidate/jobSearch"
            className={buttonVariants({
              variant: "ghost",
              className:
                "text-primary-surface-default hover:text-primary-text-label",
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
