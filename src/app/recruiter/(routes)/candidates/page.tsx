import HiringStepsCard from "@/components/dashboard/hiringStepsCard";
import DashboardPageHeader from "@/components/dashboard/page-header";
import { Button } from "@/components/ui/button";
import { candidateDashboardCards } from "@/config/db";
import { IconPlus } from "@tabler/icons-react";
import RecruiterCandidateTable from "../../_components/candidate-table";

export default function Page() {
  return (
    <>
      <DashboardPageHeader title="Candidates">
        <Button variant="ghost" className="text-primary-text-label-1"> <IconPlus /> Add New Candidate</Button>
      </DashboardPageHeader>
      <div className="w-ful flex flex-1 flex-wrap gap-4 p-6">
        {
          candidateDashboardCards.map((data, i) => (
            <HiringStepsCard data={data} key={"rc-card-" + i} />
          ))
        }

      </div>
      <RecruiterCandidateTable />
    </>
  )

    ;
}
