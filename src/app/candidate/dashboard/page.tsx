import ActiveJobOpenings from "@/components/dashboard/activeJobOpenings";
import HiringStepsCard from "@/components/dashboard/hiringStepsCard";
import RecentUserActivities from "@/components/dashboard/recentUserActivities";
import BasicLayoutCard from "@/components/shared/basicLayoutCard";
import React from "react";

export default function CandidateDashboard() {
  return (
    <>
      {/* title */}
      <div className="h-16 px-6 flex items-center justify-start bg-white border-b border-background-secondary overflow-hidden ">
        <p className="text-title text-xl text-nowrap font-semibold ">
          Dashboard
        </p>
      </div>

      {/* main section */}
      <div className="p-6 space-y-4">
        {/* cards */}
        <div className="p-6">
          <p className="text-title font-normal">Your Application Overview</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <HiringStepsCard />
            <HiringStepsCard />
            <HiringStepsCard />
            <HiringStepsCard />
            <HiringStepsCard />
            <HiringStepsCard />
          </div>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-4  ">
          <BasicLayoutCard>
            <div>
              <p>Top Job picks for you</p>
            </div>
          </BasicLayoutCard>
          <BasicLayoutCard>
            <RecentUserActivities type="admin" />
          </BasicLayoutCard>
        </div>
      </div>
    </>
  );
}
