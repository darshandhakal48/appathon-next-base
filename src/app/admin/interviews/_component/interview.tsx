import React from "react";
import { Button } from "@/components/ui/button";
import BasicLayoutCard from "@/components/shared/basic-layout-card";
import InterviewCard from "@/components/dashboard/interview-card";
import { useRouter } from "next/navigation";
import Link from "next/link";
import DashboardPageHeader from "@/components/dashboard/page-header";

function Interview() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/admin/interviews/createInterview");
  };
  return (
    <>
      {/* <div className="bg-grayscale-surface-white border-1 p-4 bg flex justify-between items-center"></div> */}
      <DashboardPageHeader title="Interviews">
        <div className="space-x-1 gap-2.5">
          <Button variant="outline">Drafts</Button>
          <Button variant="default" onClick={handleNavigation}>
            Schedule New Interview
          </Button>
        </div>
      </DashboardPageHeader>

      <div className="p-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-grayscale-surface-subtle ">
        <BasicLayoutCard>
          <Link href={`/admin/interviews/123`} className="cursor-pointer">
            <InterviewCard status="success" />
          </Link>
        </BasicLayoutCard>
        <BasicLayoutCard>
          <Link href={`/admin/interviews/123`} className="cursor-pointer">
            <InterviewCard status="error" />
          </Link>
        </BasicLayoutCard>
        <BasicLayoutCard>
          <Link href={`/admin/interviews/123`} className="cursor-pointer">
            <InterviewCard status="pending" />
          </Link>
        </BasicLayoutCard>
        <BasicLayoutCard>
          <Link href={`/admin/interviews/123`} className="cursor-pointer">
            <InterviewCard status="success" />
          </Link>
        </BasicLayoutCard>
      </div>
    </>
  );
}

export default Interview;
