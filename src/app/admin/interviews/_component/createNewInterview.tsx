"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ScheduleInterview from "./scheduleInterview";
import { useRouter } from "next/navigation";
import DashboardPageHeader from "@/components/dashboard/pageHeader";

function CreateNewInterview() {
  const router = useRouter();

  const handleNavigation = () => {
    router.back();
  };
  return (
    <>
      {/* title */}
      <DashboardPageHeader>
        <div
          className="flex items-center gap-2.5 cursor-pointer"
          onClick={handleNavigation}
        >
          <ArrowLeft className="h-6 w-6" />
          <span className="text-xl font-semibold">Create New Interview</span>
        </div>

        <div className="space-x-1 gap-2.5">
          <Button variant="default">Schedule</Button>
          <Button
            variant="outline"
            className="bg-grayscale-surface-disabled hover:bg-grayscale-surface-disabled"
            onClick={handleNavigation}
          >
            Cancel
          </Button>
        </div>
      </DashboardPageHeader>

      {/* main body */}
      <div className="my-10 flex justify-center items-center  ">
        <div className="grid grid-cols-1 gap-5 ">
          <ScheduleInterview />
        </div>
      </div>
    </>
  );
}

export default CreateNewInterview;
