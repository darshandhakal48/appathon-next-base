"use client";
import React from "react";
import { AdminCandidatesHeader } from "../page";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import ProfileInfo from "@/components/dashboard/profileInfo";
import { adminClientInfo } from "@/config/db";
import OverViewAndTimelineBtn from "@/components/dashboard/overview-timeline-btn";
import ClientInformation from "../../client/_component/clientInformation";

function SingleCandidateDetails() {
    const router = useRouter();

    const handleBackNavigation = () => {
        router.back();
    };
    return (
        <>
            <AdminCandidatesHeader />
            <div className="p-4">
                <div className="bg-grayscale-surface-white rounded-sm p-4 space-y-8 shadow-sm">
                    {/* back button */}
                    <div className="flex justify-between items-center">
                        <Button
                            variant="ghost"
                            className="text-primary-text-label-1 hover:bg-grayscale-surface-white"
                            onClick={handleBackNavigation}
                        >
                            <span>
                                <ArrowLeft />
                            </span>
                            Back
                        </Button>
                        <Button
                            variant="outline"
                            className="border-primary-border-default text-primary-text-label-1"
                        >
                            Change Status
                        </Button>
                    </div>
                    <div className="space-y-14">
                        <div>
                            <ProfileInfo profile={adminClientInfo} />
                        </div>
                        <OverViewAndTimelineBtn />
                        <div className="p-4 bg-secondary-surface-default-10 flex items max-w-[50%] gap-4">
                            <span>icon</span>
                            <p className="text-primary-surface-default text-sm font-normal">
                                “Candidate has strong JavaScript experience,
                                good communication skills, and shows potential
                                for client-facing roles. Lacks deep backend
                                exposure, but willing to learn. Positive
                                attitude noted in the interview.”
                            </p>
                        </div>
                        <ClientInformation />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleCandidateDetails;
