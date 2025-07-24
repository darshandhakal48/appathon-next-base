"use client";
import React from "react";
// import { FileCheck } from "lucide-react";
import HiringStepsCard from "@/components/dashboard/hiringStepsCard";
import BasicLayoutCard from "@/components/shared/basic-layout-card";
import ActiveJobOpenings from "@/components/dashboard/active-job-openings";
import RecentUserActivities from "@/components/dashboard/recent-user-activities";
import DashboardPageHeader from "@/components/dashboard/pageHeader";
import { adminDashbaordCards, DashboardUserActivity } from "@/config/db";

const AdminDashboard = () => {
  return (
    <>
      {/* title */}

      <DashboardPageHeader>Dashboard</DashboardPageHeader>

      {/* main section */}
      <div className="p-6 space-y-4 bg-grayscale-surface-subtle ">
        {/* cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {adminDashbaordCards.map((card) => (
            <>
              <HiringStepsCard data={card} />
            </>
          ))}
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-4  ">
          <BasicLayoutCard>
            <ActiveJobOpenings />
          </BasicLayoutCard>
          <BasicLayoutCard>
            <RecentUserActivities data={DashboardUserActivity} type="admin" />
          </BasicLayoutCard>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
