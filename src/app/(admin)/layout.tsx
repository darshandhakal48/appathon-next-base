"use client";

import { DashboardSidebar } from "@/components/dashboard/sidebar";
import React from "react";

function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <DashboardSidebar>{children}</DashboardSidebar>
        </>
    );
}

export default AdminLayout;
