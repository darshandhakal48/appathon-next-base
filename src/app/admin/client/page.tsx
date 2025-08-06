"use client";
import DashboardPageHeader from "@/components/dashboard/page-header";
import { adminClientData } from "@/config/db";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import AdminClientCard from "./_component/adminClientCard";

function AdminClient() {
    return (
        <>
            <AdminClientHeader />
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {adminClientData.map((clientData) => (
                    <AdminClientCard key={clientData.id} client={clientData} />
                ))}
            </div>
        </>
    );
}

export function AdminClientHeader() {
    const router = useRouter();

    const handleNavigation = () => {
        router.push(`/admin/client/addClient`);
    };

    return (
        <>
            <DashboardPageHeader title="Clients">
                <div
                    className="space-x-1  gap-2 flex items-center text-primary-text-label-1 cursor-pointer"
                    onClick={handleNavigation}
                >
                    <Plus height={20} />
                    <span>Add New Client</span>
                </div>
            </DashboardPageHeader>
        </>
    );
}
export default AdminClient;
