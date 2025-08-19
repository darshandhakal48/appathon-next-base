"use client";
import React from "react";
// import { AdminClientHeader } from "../page";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import ProfileInfo from "@/components/dashboard/profileInfo";
import { adminClientInfo } from "@/config/db";
import OverViewAndTimelineBtn from "@/components/dashboard/overview-timeline-btn";
import WorkforceActiveJobOpenings from "../../workforce/_component/workforceActiveJobOpenings";
import ClientInformation from "../_component/clientInformation";
import { AdminClientHeader } from "../_component/client";

function SingleClientDetails() {
  const router = useRouter();

  const handleBackNavigation = () => {
    router.back();
  };

  return (
    <>
      <AdminClientHeader />
      <div className="p-4">
        <div className="bg-grayscale-surface-white rounded-sm p-4 space-y-8 shadow-sm">
          {/* back button */}
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

          <div className="space-y-14">
            <div>
              <ProfileInfo profile={adminClientInfo} />
            </div>

            <OverViewAndTimelineBtn />

            <ClientInformation />

            <div className="mt-8">
              <WorkforceActiveJobOpenings />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleClientDetails;
