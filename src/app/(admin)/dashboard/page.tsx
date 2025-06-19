"use client";
import React from "react";
import { FileCheck } from "lucide-react";
import Card from "@/components/dashboard/card";

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
            <div className="p-6 h-full">
                {/* cards */}
                <div className="flex justify-between flex-wrap gap-4 md:gap-6">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    );
};

export default AdminDashboard;
