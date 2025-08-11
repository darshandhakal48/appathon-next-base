import DashboardPageHeader from "@/components/dashboard/page-header"
import ApiWrapper from "@/features/api/api-wrapper"
import { PayrollOverview } from "./_components/client"
import { PayrollCard as TPayrollCard } from "@/lib/type"
import { PayrollSummarySkeleton } from "./loading"

export default function PayrollSummary() {
  return (
    <>
      <DashboardPageHeader title="Payroll Summary" />
      <ApiWrapper<TPayrollCard[]>
        fallback={<PayrollSummarySkeleton.Overview />}
        route="/superadmin-payroll-cards"
      >
        {
          ({ data }) => <PayrollOverview data={data} />
        }
      </ApiWrapper>
    </>
  )
}

