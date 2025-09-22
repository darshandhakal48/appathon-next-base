"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import DashboardPageHeader from "@/components/dashboard/page-header";
import { PreviewAndProceed } from "@/components/multi-step-viewer";

export function NewJobPostingHeader() {
  const route = useRouter();
  return (
    <DashboardPageHeader title="Create New Job">
      <div className="flex items-center gap-4">
        <Button variant="outline" onClick={() => route.push("/")}>
          Cancel
        </Button>
        <Button variant="outline" onClick={() => route.push("/")}>
          Save as Draft
        </Button>
        <PreviewAndProceed />
      </div>
    </DashboardPageHeader>
  );
}
