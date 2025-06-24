import BasicLayoutCard from "@/components/shared/basicLayoutCard";
import { Button } from "@/components/ui/button";
import React from "react";
import InterviewCard from "./_component/interviewCard";

function AdminInterviews() {
    return (
        <>
            {/* title */}
            <div className="bg-background border-1 p-4 bg flex justify-between items-center">
                <span className="text-xl font-semibold">Interviews</span>
                <div className="space-x-1 gap-2.5">
                    <Button variant="outline">Drafts</Button>
                    <Button variant="default">Schedule New Interview</Button>
                </div>
            </div>

            {/* main section */}
            <div className="p-6  grid grid-cols-3 gap-6 ">
                <BasicLayoutCard>
                    <InterviewCard />
                </BasicLayoutCard>
                <BasicLayoutCard>
                    <InterviewCard />
                </BasicLayoutCard>
                <BasicLayoutCard>
                    <InterviewCard />
                </BasicLayoutCard>
            </div>
        </>
    );
}

export default AdminInterviews;
