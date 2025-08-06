"use client";

import DashboardPageHeader from "@/components/dashboard/page-header";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import JobCard from "./_component/jobCard";
import { jobPostingData } from "@/config/db";

function AdminJobPosting() {
    return (
        <>
            <AdminJobPostingHeader />
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {jobPostingData.map((data) => (
                    <JobCard job={data} key={data["Job Id"]} />
                ))}
            </div>
        </>
    );
}

export function AdminJobPostingHeader() {
    const router = useRouter();

    const handleNavigation = () => {
        router.push(`/admin/jobposting/createNewJob`);
    };

    return (
        <>
            <DashboardPageHeader title="Job Posting">
                <div
                    className="space-x-1  gap-2 flex items-center text-primary-text-label-1 cursor-pointer"
                    onClick={handleNavigation}
                >
                    <Plus height={20} />
                    <span>Create New Job Posting</span>
                </div>
            </DashboardPageHeader>
        </>
    );
}

export default AdminJobPosting;
