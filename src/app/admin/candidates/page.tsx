"use client";
import HiringStepsCard from "@/components/dashboard/hiringStepsCard";
import DashboardPageHeader from "@/components/dashboard/page-header";
import { adminDashbaordCards, candidate } from "@/config/db";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { ReusableTable } from "@/components/dashboard/reusuable-table";
import { candidateColumn } from "@/lib/column";

function AdminCandidates() {
    const router = useRouter();

    const handleSingleCandidateNavigation = () => {
        router.push(`/admin/candidates/123`);
    };
    return (
        <>
            <AdminCandidatesHeader />
            <div className="p-6 space-y-4 bg-grayscale-surface-subtle">
                {/* cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {adminDashbaordCards.map((card) => (
                        <>
                            <HiringStepsCard data={card} />
                        </>
                    ))}
                </div>

                <div className="bg-grayscale-surface-white  shadow-sm">
                    <ReusableTable
                        data={candidate}
                        columns={candidateColumn}
                        onRowClick={handleSingleCandidateNavigation}
                    />
                </div>
            </div>
        </>
    );
}

export function AdminCandidatesHeader() {
    const router = useRouter();

    const handleNavigation = () => {
        router.push(`/admin/candidates/addCandidates`);
    };

    return (
        <>
            <DashboardPageHeader title="Candidates">
                <div
                    className="space-x-1  gap-2 flex items-center text-primary-text-label-1 cursor-pointer"
                    onClick={handleNavigation}
                >
                    <Plus height={20} />
                    <span>Add New Candidate</span>
                </div>
            </DashboardPageHeader>
        </>
    );
}
export default AdminCandidates;
