
"use client";

import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export function AdminClientHeaderAction() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(`/admin/client/addClient`);
  };

  return (
    <div
      className="flex cursor-pointer items-center gap-2 space-x-1 text-primary-text-label-1"
      onClick={handleNavigation}
    >
      <Plus height={20} />
      <span>Add New Client</span>
    </div>
  );
}
