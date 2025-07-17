"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import InterviewInfo from "@/components/dashboard/interview-info";
import { useRouter } from "next/navigation";
import DashboardPageHeader from "@/components/dashboard/pageHeader";

function CandidateOnlineInterview() {
    const router = useRouter();

    const handleNavigation = () => {
        router.push(`/admin/interviews/createInterview`);
    };
    return (
        <>
            <DashboardPageHeader>
                <span className="text-xl font-semibold">Interviews</span>
                <div className="space-x-1 gap-2.5">
                    <Button variant="outline">Drafts</Button>
                    <Button variant="default" onClick={handleNavigation}>
                        Schedule New Interview
                    </Button>
                </div>
            </DashboardPageHeader>
            <div className=" p-4">
                <InterviewInfo attachment={"attachment"} role="admin" />
            </div>
        </>
    );
}

export default CandidateOnlineInterview;
