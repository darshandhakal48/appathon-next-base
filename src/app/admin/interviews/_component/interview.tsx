import React from "react";
import { Button } from "@/components/ui/button";
import BasicLayoutCard from "@/components/shared/basic-layout-card";
import InterviewCard from "@/components/dashboard/interview-card";
import { useRouter } from "next/navigation";

function Interview() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/admin/interviews/createInterview");
  };
  return (
    <>
      <div className="bg-background border-1 p-4 bg flex justify-between items-center">
        <span className="text-xl font-semibold">Interviews</span>

        <div className="space-x-1 gap-2.5">
          <Button variant="outline">Drafts</Button>
          <Button variant="default" onClick={handleNavigation}>
            Schedule New Interview
          </Button>
        </div>
      </div>

      <div className="p-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <BasicLayoutCard>
          <InterviewCard status="success " />
        </BasicLayoutCard>
        <BasicLayoutCard>
          <InterviewCard status="error" />
        </BasicLayoutCard>
        <BasicLayoutCard>
          <InterviewCard status="pending" />
        </BasicLayoutCard>
        <BasicLayoutCard>
          <InterviewCard status="success" />
        </BasicLayoutCard>
      </div>
    </>
  );
}

export default Interview;
