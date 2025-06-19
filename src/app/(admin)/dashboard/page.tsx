"use client";
import React from "react";
// import { FileCheck } from "lucide-react";
import HiringStepsCard from "@/components/dashboard/hiringStepsCard";
import BasicLayoutCard from "@/components/shared/basicLayoutCard";
import ActiveJobOpenings from "@/components/dashboard/activeJobOpenings";
import RecentUserActivities from "@/components/dashboard/recentUserActivities";

const hiringRounds = [
    {
        title: "Applied",
        icon: "icon",
        candidates: 4,
    },
    {
        title: "Screening",
        icon: "icon",
        candidates: 4,
    },
    {
        title: "Interviewing",
        icon: "icon",
        candidates: 4,
    },
    {
        title: "Offered",
        icon: "icon",
        candidates: 4,
    },
    {
        title: "Hired",
        icon: "icon",
        candidates: 4,
    },
    {
        title: "Rejected",
        icon: "icon",
        candidates: 4,
    },
];

const AdminDashboard = () => {
    return (
        <>
            {/* title */}
            <div className="bg-background border-1 p-4 bg">
                <span className="text-xl font-semibold">Dashboard</span>
            </div>

            {/* main section */}
            <div className="p-6 space-y-4">
                {/* cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    <HiringStepsCard />
                    <HiringStepsCard />
                    <HiringStepsCard />
                    <HiringStepsCard />
                    <HiringStepsCard />
                    <HiringStepsCard />
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
