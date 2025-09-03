"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { adminClientInfo, workForceProfileInfo } from "@/config/db";
// import { AdminCandidatesHeader } from "../page";
import { Button } from "@/components/ui/button";
import OverViewAndTimelineBtn from "@/components/dashboard/overview-timeline-btn";
import DashboardPageHeader from "@/components/dashboard/page-header";
import ProfileInfo from "@/components/dashboard/profileInfo";

import { AdminCandidatesHeaderAction } from "../_components/client";
import ClientInformation from "../../client/_component/clientInformation";

function SingleCandidateDetails() {
  const router = useRouter();

  const handleBackNavigation = () => {
    router.back();
  };
  return (
    <>
      <DashboardPageHeader title=" ">
        <AdminCandidatesHeaderAction />
      </DashboardPageHeader>
      <div className="p-4">
        <div className="bg-grayscale-surface-white space-y-8 rounded-sm p-4 shadow-sm">
          {/* back button */}
          <div className="flex items-center justify-between">
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
          </div>
          <div className="space-y-14">
            <div>
              <ProfileInfo profile={workForceProfileInfo} />
            </div>
            <OverViewAndTimelineBtn />
            <div className="bg-secondary-surface-default-10 items flex max-w-[50%] gap-4 p-4">
              <span>icon</span>
              <p className="text-primary-surface-default text-sm font-normal">
                “Candidate has strong JavaScript experience, good communication
                skills, and shows potential for client-facing roles. Lacks deep
                backend exposure, but willing to learn. Positive attitude noted
                in the interview.”
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
