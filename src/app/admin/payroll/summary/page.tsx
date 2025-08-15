import DashboardPageHeader from "@/components/dashboard/page-header"
import ApiWrapper from "@/features/api/api-wrapper"
import { PayrollBreakdownTable, PayrollEmployeePaymentStatus, PayrollOverview } from "./_components/client"
import { Employee, EmployeePayment, PayrollCard as TPayrollCard } from "@/lib/type"
import { PayrollSummarySkeleton } from "./loading"

export default function PayrollSummary() {
  return (
    <>
      <DashboardPageHeader title="Payroll Summary" />
      <div className="space-y-10 p-6">

        <ApiWrapper<TPayrollCard[]>
          fallback={<PayrollSummarySkeleton.Overview />}
          route="/superadmin-payroll-cards"
        >
          {
            ({ data }) => <PayrollOverview cardsInfo={data} />
          }
        </ApiWrapper>
        <ApiWrapper<Employee[]> route="/superadmin-payroll-breakdown" fallback={<PayrollSummarySkeleton.Breakdown />}>
          {
            ({ data }) => <PayrollBreakdownTable employees={data} />
          }
        </ApiWrapper>
        <ApiWrapper<EmployeePayment[]> route="/superadmin-payroll-payment-status" fallback={<PayrollSummarySkeleton.Breakdown />}>
          {
            ({ data }) => <PayrollEmployeePaymentStatus employeesPaymentStatus={data} />
          }
        </ApiWrapper>
      </div>
    </>
  )
}

