"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { adminDashbaordCards, jobPostingData } from "@/config/db";
import { Button } from "@/components/ui/button";
import OverviewCards from "@/components/dashboard/overview-cards";

import { AdminJobPostingHeaderAction } from "../../_component/client";

// import { AdminJobPostingHeader } from "../page";

function SingleJobDetails() {
  const params = useParams();
  console.log(params);

  const currentJobDetails = jobPostingData.filter(
    (job) => job["Job Id"] === Number(params.id),
  );
  console.log(currentJobDetails);
  return (
    <>
      <AdminJobPostingHeaderAction />
      <div className="p-4">
        <div className="bg-grayscale-surface-white space-y-8 p-8">
          <div>
            <SingleJobDetailsHeader />
            <div className="space-y-4">
              <div className="text-grayscale-text-body font-semibold">
                Rays IT Solutions
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-grayscale-surface-subtle text-grayscale-text-subtitle rounded-sm p-1 text-sm font-normal">
                  {currentJobDetails[0]["type"]}
                </span>
                <span className="bg-success-surface-subtle-2 text-grayscale-text-negative rounded-sm p-1 text-sm font-normal">
                  {currentJobDetails[0]["Status"]}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {adminDashbaordCards.map((card) => (
              <OverviewCards data={card} key={card.label} />
            ))}
          </div>

          <div className="space-y-4">
            <div className="text-grayscale-text-title text-base font-normal">
              Business Card
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SingleJobDetailsHeader() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between">
      <button
        className="flex cursor-pointer items-center gap-2.5"
        onClick={() => {
          router.back();
        }}
      >
        <span>
          <ArrowLeft className="text-grayscale-text-title" />
        </span>
        <span className="text-primary-surface-default text-xl font-semibold">
          Software Engineering
        </span>
      </button>
      <div className="flex items-center gap-2.5">
        <Button
          variant="outline"
          className="font-base border-primary-text-label-1 text-primary-text-label-1"
        >
          View all the applications
        </Button>
        <Button
          variant="outline"
          className="font-base border-primary-text-label-1 text-primary-text-label-1"
        >
          Edit
        </Button>
      </div>
    </div>
  );
}
export default SingleJobDetails;
