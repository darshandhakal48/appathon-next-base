"use client";

import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export function AdminClientHeader() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(`/admin/client/addClient`);
  };

  return (
    <div
      className="space-x-1  gap-2 flex items-center text-primary-text-label-1 cursor-pointer"
      onClick={handleNavigation}
    >
      <Plus height={20} />
      <span>Add New Client</span>
    </div>
  );
}
