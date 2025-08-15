"use client";

import PayrollCard from "@/components/dashboard/payroll-card"
import { ReusableTable } from "@/components/dashboard/reusuable-table"
import { GlobalDropdown } from "@/components/shared/global-dropdown";
import { GlobalPopover } from "@/components/shared/global-popover";
import { Typography } from "@/components/shared/typography"
import { Employee, EmployeePayment, PayrollCard as TPayrollCard } from "@/lib/type"
import { cn } from "@/lib/utils";
import { IconDots } from "@tabler/icons-react";
import Image from "next/image"

export const PayrollOverview = ({ cardsInfo: data }: { cardsInfo: TPayrollCard[] | null }) => {
  console.log("Payroll Data ==> ", data)
  return (
    <div className="grid grid-cols-3 gap-4 lg:grid-cols-[0.75fr_0.75fr_0.75fr_1fr_1fr]">
      {data?.map((info, i) => <PayrollCard data={info} key={"superadmin-payroll-" + i} />)}
    </div>
  )
}

export const PayrollBreakdownTable = ({ employees }: { employees: Employee[] | null }) => {
  return (
    <div className="space-y-4">
      <Typography color="title">Payroll Breakdown</Typography>
      {employees ?
        <ReusableTable<Employee>
          excludeColumns={["image"]}
          columns={[
            {
              key: "employeeName",
              header: "Employee Name",
              sortable: false,
              render: (value, row) => (
                <div className="flex items-center gap-3">
                  <Image
                    src={row.image || "/_static/40x40.svg"}
                    width={32}
                    height={32}
                    alt={value}
                    className="size-8 rounded-full object-cover"
                  />
                  <span className="font-medium">{value}</span>
                </div>
              ),
            },
          ]} data={employees} />
        : <></>
      }
    </div>
  )
}
export const PayrollEmployeePaymentStatus = ({ employeesPaymentStatus }: { employeesPaymentStatus: EmployeePayment[] | null }) => {
  return (
    <div className="space-y-4">
      <Typography color="title"> Employee Payment Status  </Typography>
      {employeesPaymentStatus ?
        <ReusableTable<EmployeePayment>
          excludeColumns={["image"]}
          columns={[
            {
              key: "employeeName",
              header: "Employee Name",
              sortable: false,
              render: (value, row) => (
                <div className="flex items-center gap-3">
                  <Image
                    src={row.image || "/_static/40x40.svg"}
                    width={32}
                    height={32}
                    alt={value}
                    className="size-8 rounded-full object-cover"
                  />
                  <span className="font-medium">{value}</span>
                </div>
              ),
            },
            {
              key: "paymentStatus",
              header: "Payment Status",
              render: (value) => <div className={cn({
                "px-2 py-1 bg-success-surface-subtle w-fit text-grayscale-text-negative rounded-lg": value === "Paid"
              })}>{value}</div>
            },
            {
              key: "action",
              header: "Action",
              render: (value) => (
                <GlobalDropdown content={<>
                  <p>Popover Content</p>
                </>}>
                  <div className={cn("flex cursor-pointer justify-center")}>
                    <IconDots className="size-4" />
                  </div>
                </GlobalDropdown>
              )
            }
          ]} data={employeesPaymentStatus} />
        : <></>
      }
    </div>
  )
}
