"use client"

import { PayrollCard as TPayrollCard } from "@/lib/type"
import { Typography } from "../shared/typography"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"

export default function PayrollCard({ data }: { data: TPayrollCard }) {
  const { label, value } = data;
  const isCost = label === "Total Payroll Cost"
  const router = useRouter()
  const isPending = label.trim() === "Pending Approvals"
  return (
    <div className={cn("bg-greyscale-surface-white flex flex-col gap-2 rounded p-4",
      {
        "w-full max-w-96 bg-primary-surface-subtle text-grayscale-text-negative ": isCost,
        "max-w-[275px] col-span-2 md:col-span-1": isPending
      }
    )}>
      {
        isPending ?
          <div className="flex w-fit items-center gap-1 rounded-sm bg-[#FFA5001A] p-2">
            <div className="size-1.5 rounded-full bg-[#FFA500]" />
            <Typography type="xxs" >{label}</Typography>
          </div> :
          <Typography type="base" color="subtitle" className={cn({ "text-grayscale-text-negative": isCost })}>{label}</Typography>

      }
      <div className="flex items-center justify-between">
        <Typography type="lg" weight="bold" className={cn({ "text-grayscale-text-negative": isCost })}>{value}</Typography>
        {isPending && <Button onClick={() => router.push("/")} variant="link">Review Payroll</Button>}
      </div>
    </div>
  )
}
