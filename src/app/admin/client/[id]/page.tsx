"use client";
import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import ProfileInfo from "@/components/dashboard/profileInfo";
import { adminClientInfo } from "@/config/db";
import OverViewAndTimelineBtn from "@/components/dashboard/overview-timeline-btn";
import WorkforceActiveJobOpenings from "../../workforce/_component/workforceActiveJobOpenings";
import ClientInformation from "../_component/clientInformation";
import { AdminClientHeaderAction } from "./_components/client";
import DashboardPageHeader from "@/components/dashboard/page-header";

function SingleClientDetails() {
  const router = useRouter();

  const handleBackNavigation = () => {
    router.back();
  };

  return (
    <>
      <DashboardPageHeader title="Client">
        <AdminClientHeaderAction />
      </DashboardPageHeader>
      <div className="p-4 md:p-6">
        <div className="space-y-8 rounded-sm bg-grayscale-surface-white p-4 shadow-sm">
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
