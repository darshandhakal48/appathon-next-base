"use client";
import BasicLayoutCard from "@/components/shared/basicLayoutCard";
import { Button } from "@/components/ui/button";
import InterviewCard from "./_component/interviewCard";
import { useState } from "react";
import ScheduleInterview from "./_component/scheduleInterview";

function AdminInterviews() {
    const [modal, setModal] = useState<boolean>(false);

    const openModal = () => {
        setModal((prev) => !prev);
    };

    return (
        <>
            {/* title */}
            <div className="bg-background border-1 p-4 bg flex justify-between items-center">
                <span className="text-xl font-semibold">Interviews</span>
                <div className="space-x-1 gap-2.5">
                    <Button variant="outline">Drafts</Button>
                    <Button variant="default" onClick={openModal}>
                        Schedule New Interview
                    </Button>
                </div>
            </div>

            {/* main section */}
            {modal ? (
                <>
                    <div className="p-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                        <BasicLayoutCard>
                            <InterviewCard status="success " />
                        </BasicLayoutCard>
                        <BasicLayoutCard>
                            <InterviewCard status="error" />
                        </BasicLayoutCard>
                        <BasicLayoutCard>
                            <InterviewCard status="pending" />
                        </BasicLayoutCard>
                        <BasicLayoutCard>
                            <InterviewCard status="success" />
                        </BasicLayoutCard>
                    </div>
                </>
            ) : (
                <>
                    <div className="mt-10 flex justify-center items-center  ">
                        <div className="grid grid-cols-1 gap-5 ">
                            <ScheduleInterview />
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default AdminInterviews;
