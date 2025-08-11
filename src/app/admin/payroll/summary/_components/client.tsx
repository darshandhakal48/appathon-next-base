import PayrollCard from "@/components/dashboard/payroll-card"
import { PayrollCard as TPayrollCard } from "@/lib/type"

export const PayrollOverview = ({ data }: { data: TPayrollCard[] | null }) => {
  console.log("Payroll Data ==> ", data)
  return (
    <div className="flex gap-4 p-6">
      {data?.map((info, i) => <PayrollCard data={info} key={"superadmin-payroll-" + i} />)}
    </div>
  )
}
