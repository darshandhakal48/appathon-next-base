import DashboardPageHeader from "@/components/dashboard/page-header";
import { ReusableTable } from "@/components/dashboard/reusuable-table";
import { candidateColumn } from "@/lib/column";
import { AdminCandidatesHeaderAction } from "./_components/client";
import ApiWrapper from "@/features/api/api-wrapper";
import { CandidateProps, DashboardCard } from "@/lib/type";
import { OverviewSection } from "../dashboard/_components/client";
import { AdminCandidateSkeleton } from "./loading";
import { EmptyState } from "@/components/shared/empty-state";
import { UserAvatar } from "@/components/dashboard/user-avatar";

function AdminCandidates() {
  return (
    <>
      <DashboardPageHeader title="Candidates">
        <AdminCandidatesHeaderAction />
      </DashboardPageHeader>
      <div className="space-y-4 bg-grayscale-surface-subtle p-6">
        <ApiWrapper<DashboardCard[]>
          fallback={<AdminCandidateSkeleton.Overview />}
          route="/superadmin-dashboard-cards"
        >
          {({ data }) => <OverviewSection cardsInfo={data} />}
        </ApiWrapper>

        <div className="bg-grayscale-surface-white shadow-sm">
          <ApiWrapper<CandidateProps[]> route="/superadmin-candidates" fallback={<AdminCandidateSkeleton.Table />}>
            {({ data }) => <>
              {
                data ?
                  <ReusableTable
                    excludeColumns={["avatar"]}
                    columns={candidateColumn}
                    data={data}
                  />

                  : <EmptyState title="No candidate found" description="User  created candidate will apperar here" />}
            </>
            }
          </ApiWrapper>
        </div>
      </div>
    </>
  );
}

export default AdminCandidates;
