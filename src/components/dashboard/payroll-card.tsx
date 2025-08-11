import { PayrollCard as TPayrollCard } from "@/lib/type"
import { Typography } from "../shared/typography"

export default function PayrollCard({ data }: { data: TPayrollCard }) {
  return (
    <div className="bg-greyscale-surface-white flex min-w-36 flex-col gap-2 rounded p-4">
      <Typography type="base" color="subtitle">{data.label}</Typography>
      <Typography type="lg" weight="bold">{data.value}</Typography>
    </div>
  )
}
