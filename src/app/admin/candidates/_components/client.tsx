"use client";

import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

export function AdminCandidatesHeaderAction() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(`/admin/candidates/addCandidates`);
  };

  return (
    <div
      className="text-primary-text-label-1 flex cursor-pointer items-center gap-2 space-x-1"
      onClick={handleNavigation}
    >
      <Plus height={20} />
      <span>Add New Candidate</span>
    </div>
  );
}
