"use client";
import React from "react";
import { AdminJobPostingHeader } from "../page";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { adminDashbaordCards } from "@/config/db";
import HiringStepsCard from "@/components/dashboard/hiringStepsCard";
import {
    TableFieldCell,
    TableHeaderCell,
} from "@/components/dashboard/interview-info";

function SingleJobDetails() {
    return (
        <>
            <AdminJobPostingHeader />
            <div className="p-4">
                <div className="bg-grayscale-surface-white p-4 space-y-8">
                    <div>
                        <SingleJobDetailsHeader />
                        <div className="space-y-4">
                            <div className="text-grayscale-text-body font-semibold">
                                Rays IT Solutions
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="bg-grayscale-surface-subtle p-1 rounded-sm text-sm font-normal text-grayscale-text-subtitle">
                                    Remote Job
                                </span>
                                <span className="bg-success-surface-subtle-2 text-grayscale-text-negative p-1 rounded-sm text-sm font-normal ">
                                    In-Progress
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

                    <div className="px-6 grid grid-cols-5">
                        <div>
                            <TableHeaderCell />
                            <TableHeaderCell />
                            <TableHeaderCell />
                            <TableHeaderCell />
                        </div>
                        <div>
                            <TableFieldCell />
                            <TableFieldCell />
                            <TableFieldCell />
                            <TableFieldCell />
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
