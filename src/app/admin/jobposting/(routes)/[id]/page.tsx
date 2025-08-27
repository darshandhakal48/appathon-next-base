"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { adminDashbaordCards, jobPostingData } from "@/config/db";
import OverviewCards from "@/components/dashboard/overview-cards";
import { AdminJobPostingHeaderAction } from "../../_component/client";
// import { AdminJobPostingHeader } from "../page";

function SingleJobDetails() {
    const params = useParams();
    console.log(params);

  const currentJobDetails = jobPostingData.filter(
    (job) => job["Job Id"] === Number(params.id)
  );
  console.log(currentJobDetails);
  return (
    <>
      <AdminJobPostingHeaderAction/>
      <div className="p-4">
        <div className="space-y-8 bg-grayscale-surface-white p-8">
          <div>
            <SingleJobDetailsHeader />
            <div className="space-y-4">
              <div className="font-semibold text-grayscale-text-body">
                Rays IT Solutions
              </div>
              <div className="flex items-center gap-4">
                <span className="rounded-sm bg-grayscale-surface-subtle p-1 text-sm font-normal text-grayscale-text-subtitle">
                  {currentJobDetails[0]["type"]}
                </span>
                <span className="rounded-sm bg-success-surface-subtle-2 p-1 text-sm font-normal text-grayscale-text-negative">
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
                        <div className="text-base font-normal text-grayscale-text-title">
                            Business Card
                        </div>
                        <div className="inline-flex flex-col">
                            {Object.entries(currentJobDetails[0]).map(
                                ([jobTitle, jobValue]) => {
                                    if (
                                        jobTitle == "Job Id" ||
                                        jobTitle == "Job Title" ||
                                        jobTitle == "Date" ||
                                        jobTitle == "Status" ||
                                        jobTitle == "City"
                                    ) {
                                        return (
                                            <div
                                                className="grid grid-cols-2 gap-8 border-b-[1px] border-grayscale-border-lighter py-2"
                                                key={jobTitle}
                                            >
                                                <span className="terxt-sm font-bold text-grayscale-text-title">
                                                    {jobTitle}
                                                </span>
                                                <span className="text-sm font-normal text-grayscale-text-body">
                                                    {jobValue}
                                                </span>
                                            </div>
                                        );
                                    }
                                }
                            )}
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
                <span className="text-xl font-semibold text-primary-surface-default">
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
