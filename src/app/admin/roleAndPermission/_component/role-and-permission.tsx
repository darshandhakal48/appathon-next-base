"use client";
import DashboardPageHeader from "@/components/dashboard/page-header";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import UserRoles from "./user-roles";
import { userRoles } from "@/config/db";

function RoleAndPermisiion() {
    return (
        <>
            <RoleAndPermissonHeader />
            <div className="p-4">
                <div className="p-4 bg-grayscale-surface-white shadow-sm rounded-sm min-h-[87vh]">
                    <div className="grid grid-cols-5 gap-4">
                        {userRoles.map((data) => (
                            <UserRoles key={data.id} role={data} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

function RoleAndPermissonHeader() {
    const router = useRouter();

    const handleNavigation = () => {
        router.push(`/admin/roleAndPermission/createNewRole`);
    };
    return (
        <DashboardPageHeader title="Roles and Permission">
            <div
                className="space-x-1  gap-2 flex items-center text-primary-text-label-1 cursor-pointer"
                onClick={handleNavigation}
            >
                <Plus height={20} />
                <span>Create New Role</span>
            </div>
        </DashboardPageHeader>
    );
}
export default RoleAndPermisiion;
