"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function HeaderAction() {
  const router = useRouter()
  const handleNavigation = () => {
    router.push("/admin/interviews/createInterview");
  };

  return (
    <div className="gap-2.5 space-x-1">
      <Button variant="outline">Drafts</Button>
      <Button variant="default" onClick={handleNavigation}>
        Schedule New Interview
      </Button>
    </div>

  )
}
