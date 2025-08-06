"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { adminDashbaordCards, jobPostingData } from "@/config/db";
import HiringStepsCard from "@/components/dashboard/hiringStepsCard";
import { AdminJobPostingHeader } from "../page";

function SingleJobDetails() {
    const params = useParams();
    console.log(params);

    const currentJobDetails = jobPostingData.filter(
        (job) => job["Job Id"] === Number(params.id)
    );
    console.log(currentJobDetails);
    return (
        <>
            <AdminJobPostingHeader />
            <div className="p-4">
                <div className="bg-grayscale-surface-white p-8 space-y-8">
                    <div>
                        <SingleJobDetailsHeader />
                        <div className="space-y-4">
                            <div className="text-grayscale-text-body font-semibold">
                                Rays IT Solutions
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="bg-grayscale-surface-subtle p-1 rounded-sm text-sm font-normal text-grayscale-text-subtitle">
                                    {currentJobDetails[0]["type"]}
                                </span>
                                <span className="bg-success-surface-subtle-2 text-grayscale-text-negative p-1 rounded-sm text-sm font-normal ">
                                    {currentJobDetails[0]["Status"]}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {adminDashbaordCards.map((card) => (
                            <>
                                <HiringStepsCard data={card} />
                            </>
                        ))}
                    </div>

                    <div className="space-y-4">
                        <div className="text-grayscale-text-title font-normal text-base">
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
                                                className="grid grid-cols-2 border-b-[1px] border-grayscale-border-lighter gap-8 py-2"
                                                key={jobTitle}
                                            >
                                                <span className="text-grayscale-text-title font-bold terxt-sm">
                                                    {jobTitle}
                                                </span>
                                                <span className="text-grayscale-text-body text-sm font-normal">
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
        <div className="flex justify-between items-center">
            <button
                className="flex items-center gap-2.5 cursor-pointer"
                onClick={() => {
                    router.back();
                }}
            >
                <span>
                    <ArrowLeft className="text-grayscale-text-title" />
                </span>
                <span className="text-primary-surface-default font-semibold text-xl">
                    Software Engineering
                </span>
            </button>
            <div className="flex gap-2.5 items-center">
                <Button
                    variant="outline"
                    className="text-primary-text-label-1 border-primary-text-label-1 font-base"
                >
                    View all the applications
                </Button>
                <Button
                    variant="outline"
                    className="text-primary-text-label-1 border-primary-text-label-1 font-base"
                >
                    Edit
                </Button>
            </div>
        </div>
    );
}
export default SingleJobDetails;
