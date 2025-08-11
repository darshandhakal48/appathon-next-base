
"use client"

import * as React from "react"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { Edit, Eye, Trash2, Check, X } from 'lucide-react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ActionMenu, createTableRowActions } from "@/components/ui/action-menu"
import { cn } from "@/lib/utils"

export type TimesheetEntry = {
  id: string
  date: string
  employeeName: string
  startTime: string
  endTime: string
  breakTime: string
  totalHours: string
  projectClientName: string
  taskDescription: string
  status: "Pending" | "Approved" | "Rejected"
}

const data: TimesheetEntry[] = [
  {
    id: "1",
    date: "04/05/2025",
    employeeName: "Henry Cavil",
    startTime: "10:00 AM",
    endTime: "06:00 PM",
    breakTime: "1hr(s)",
    totalHours: "8hr(s)",
    projectClientName: "Rays IT Solutions",
    taskDescription: "• Interviewed 4 candidates\n• Sent offer letters to 2 candidates",
    status: "Pending"
  },
  {
    id: "2",
    date: "04/05/2025",
    employeeName: "Jennifer Aniston",
    startTime: "10:00 AM",
    endTime: "06:00 PM",
    breakTime: "1hr(s)",
    totalHours: "8hr(s)",
    projectClientName: "Rays IT Solutions",
    taskDescription: "• Interviewed 4 candidates\n• Sent offer letters to 2 candidates",
    status: "Pending"
  }
]

export const columns: ColumnDef<TimesheetEntry>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "employeeName",
    header: "Employee Name",
  },
  {
    accessorKey: "startTime",
    header: "Start Time",
  },
  {
    accessorKey: "endTime",
    header: "End Time",
  },
  {
    accessorKey: "breakTime",
    header: "Break Time",
  },
  {
    accessorKey: "totalHours",
    header: "Total Hours",
  },
  {
    accessorKey: "projectClientName",
    header: "Project/Client Name",
  },
  {
    accessorKey: "taskDescription",
    header: "Task Description",
    cell: ({ row }) => {
      const description = row.getValue("taskDescription") as string
      return (
        <div className="max-w-[250px] min-w-[200px] text-gray-700">
          <div className="text-sm leading-relaxed whitespace-pre-line">
            {description}
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      const entry = row.original

      // Create action items using the helper function
      const actionItems = createTableRowActions(
        () => console.log("View details for:", entry.employeeName),
        () => console.log("Edit entry for:", entry.employeeName),
        () => console.log("Delete entry for:", entry.employeeName),
        () => console.log("Approve entry for:", entry.employeeName),
        () => console.log("Reject entry for:", entry.employeeName)
      )

      return (
        <div className="flex min-w-[120px] items-center gap-2">
          <Badge
            variant="secondary"
            className="x-3 bg-warning-surface-subtle py-1 font-medium text-grayscale-text-negative hover:bg-warning-surface-subtle"
          >
            {status}
          </Badge>
          <ActionMenu items={actionItems} />
        </div>
      )
    },
  },
]

export function TimesheetTable() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (

    <div className="grid overflow-x-auto">
      <Table className="min-w-full">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="border-b border-r-grayscale-border-lighter bg-grayscale-surface-white">
              {headerGroup.headers.map((header) => {
                const isStatusColumn = header.column.id === 'status'
                return (
                  <TableHead
                    key={header.id}
                    className={cn(`bg-grayscale-surface-white px-4 py-3 text-left text-sm font-medium text-title`,
                      isStatusColumn && 'sticky right-0 z-10 shadow-md')}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                className="border-b border-grayscale-border-lighter transition-colors hover:bg-grayscale-surface-default/40"
              >
                {row.getVisibleCells().map((cell) => {
                  const isStatusColumn = cell.column.id === 'status'
                  return (
                    <TableCell
                      key={cell.id}
                      className={cn('text-body px-4 py-4 text-sm', isStatusColumn && 'sticky right-0 z-10 bg-grayscale-surface-white shadow-md')}

                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
