"use client";
import React from "react";
// import { FileCheck } from "lucide-react";
import HiringStepsCard from "@/components/dashboard/hiringStepsCard";
import BasicLayoutCard from "@/components/shared/basicLayoutCard";
import ActiveJobOpenings from "@/components/dashboard/activeJobOpenings";
import RecentUserActivities from "@/components/dashboard/recentUserActivities";
import DashboardPageHeader from "@/components/dashboard/pageHeader";
import { adminDashbaordCards } from "@/config/db";

const AdminDashboard = () => {
    return (
        <>
            {/* title */}
            {/* <div className="bg-background border-1 p-4 bg">
                <span className="text-xl font-semibold">Dashboard</span>
            </div> */}
            <DashboardPageHeader>Dashboard</DashboardPageHeader>

            {/* main section */}
            <div className="p-6 space-y-4 ">
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
                        <RecentUserActivities type="admin" />
                    </BasicLayoutCard>
                </div>
            </div>
        </>
    );
};

export default AdminDashboard;
