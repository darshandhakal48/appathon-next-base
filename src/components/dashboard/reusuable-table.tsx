
"use client"

import type React from "react"
import { useState, useMemo } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronUp, ChevronDown, ChevronsUpDown } from "lucide-react"
import type { Column, TableProps, SortConfig, SortDirection, CustomCellConfig } from "@/lib/type"

// Generic reusable table component
export function ReusableTable<T extends Record<string, any>>({
  data,
  columns,
  customCells = [],
  autoGenerateColumns = true,
  excludeIdColumns = true,
  onRowClick,
  loading = false,
  emptyMessage = "No data available",
  excludeColumns = [],
  className = "",
}: TableProps<T>) {
  const [sortConfig, setSortConfig] = useState<SortConfig<T> | null>(null)

  // Check if a key should be excluded (ID columns)

  const shouldExcludeColumn = (key: string): boolean => {
    const keyAsKeyof = key as keyof T

    // Check if it's in the excludeColumns array
    if (excludeColumns.includes(keyAsKeyof)) {
      return true
    }

    // Check if it's an ID column and excludeIdColumns is true
    if (!excludeIdColumns) return false
    const lowerKey = key.toLowerCase()
    return lowerKey === "id" || lowerKey === "_id" || lowerKey.endsWith("id")
  }
  // Auto-generate columns if not provided
  const processedBaseColumns = useMemo((): Column<T>[] => {
    let baseColumns: Column<T>[] = []

    // Always auto-generate columns if we have data
    if (data.length > 0) {
      const firstItem = data[0]
      baseColumns = Object.keys(firstItem)
        .filter((key) => !shouldExcludeColumn(key))
        .map((key) => ({
          key: key as keyof T,
          header: formatHeader(key),
          sortable: false,
        }))
    }

    // If no custom columns provided, return auto-generated ones
    if (!columns || columns.length === 0) {
      return baseColumns
    }

    // Merge auto-generated columns with custom column overrides
    const mergedColumns = baseColumns.map((baseCol) => {
      const customCol = columns.find((col) => col.key === baseCol.key)
      return customCol ? { ...baseCol, ...customCol } : baseCol
    })

    // Add any custom columns that don't exist in auto-generated ones
    const newCustomColumns = columns.filter(
      (customCol) => !baseColumns.some((baseCol) => baseCol.key === customCol.key),
    )

    return [...mergedColumns, ...newCustomColumns]
  }, [columns, data, excludeIdColumns])

  // Process custom cells and modify columns accordingly
  const processedColumns = useMemo((): Column<T>[] => {
    const processedCols = [...processedBaseColumns]

    customCells.forEach((customCell) => {
      // Hide source columns that are being combined
      customCell.sourceKeys.forEach((sourceKey) => {
        const colIndex = processedCols.findIndex((col) => col.key === sourceKey)
        if (colIndex !== -1) {
          processedCols[colIndex] = { ...processedCols[colIndex], hidden: true }
        }
      })

      // Add or modify the target column
      const targetIndex = processedCols.findIndex((col) => col.key === customCell.targetKey)
      if (targetIndex !== -1) {
        // Modify existing column
        processedCols[targetIndex] = {
          ...processedCols[targetIndex],
          header: customCell.header,
          width: customCell.width,
          sortable: customCell.sortable ?? processedCols[targetIndex].sortable,
          render: (value: any, row: T) => {
            const values = customCell.sourceKeys.map((key) => row[key])
            return customCell.render(values, row)
          },
        }
      } else {
        // Add new column
        processedCols.push({
          key: customCell.targetKey,
          header: customCell.header,
          width: customCell.width,
          sortable: customCell.sortable ?? false,
          render: (value: any, row: T) => {
            const values = customCell.sourceKeys.map((key) => row[key])
            return customCell.render(values, row)
          },
        })
      }
    })

    // Filter out hidden columns
    return processedCols.filter((col) => !col.hidden)
  }, [processedBaseColumns, customCells])

  // Sort data based on current sort configuration
  const sortedData = useMemo(() => {
    if (!sortConfig) return data
    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key]
      const bValue = b[sortConfig.key]
      if (aValue === bValue) return 0
      const comparison = aValue < bValue ? -1 : 1
      return sortConfig.direction === "desc" ? comparison * -1 : comparison
    })
  }, [data, sortConfig])

  // Handle column sorting
  const handleSort = (key: keyof T) => {
    let direction: SortDirection = "asc"
    if (sortConfig && sortConfig.key === key) {
      if (sortConfig.direction === "asc") {
        direction = "desc"
      } else if (sortConfig.direction === "desc") {
        direction = null
      }
    }
    setSortConfig(direction ? { key, direction } : null)
  }

  // Render cell content based on data type
  const renderCellContent = (value: any, column: Column<T>, row: T) => {
    if (column.render) {
      return column.render(value, row)
    }
    return formatCellValue(value)
  }

  // Render sort icon
  const renderSortIcon = (key: keyof T) => {
    if (!sortConfig || sortConfig.key !== key) {
      return <ChevronsUpDown className="ml-2 h-4 w-4" />
    }
    return sortConfig.direction === "asc" ? (
      <ChevronUp className="ml-2 h-4 w-4" />
    ) : (
      <ChevronDown className="ml-2 h-4 w-4" />
    )
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    )
  }

  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-muted-foreground">{emptyMessage}</div>
      </div>
    )
  }

  return (
    <div className={`rounded-md border${className}`}>
      <Table>
        <TableHeader>
          <TableRow>
            {processedColumns.map((column) => (
              <TableHead key={String(column.key)} style={{ width: column.width }} className="font-medium">
                {column.sortable ? (
                  <Button
                    variant="ghost"
                    onClick={() => handleSort(column.key)}
                    className="h-auto p-0 font-medium hover:bg-transparent"
                  >
                    {column.header}
                    {renderSortIcon(column.key)}
                  </Button>
                ) : (
                  column.header
                )}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedData.map((row, index) => (
            <TableRow
              key={index}
              className={onRowClick ? "hover:bg-muted/50 cursor-pointer" : ""}
              onClick={() => onRowClick?.(row)}
            >
              {processedColumns.map((column) => (
                <TableCell key={String(column.key)}>{renderCellContent(row[column.key], column, row)}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

// Helper function to format header names
function formatHeader(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase())
    .trim()
}

// Helper function to format cell values based on type
function formatCellValue(value: any): React.ReactNode {
  if (value === null || value === undefined) {
    return <span className="text-muted-foreground">-</span>
  }
  if (typeof value === "boolean") {
    return (
      <span
        className={`rounded-full px-2 py-1 text-xs font-medium${value
          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
          }`}
      >
        {value ? "Yes" : "No"}
      </span>
    )
  }
  if (typeof value === "number") {
    return value.toLocaleString()
  }
  if (value instanceof Date) {
    return value.toLocaleDateString()
  }
  if (Array.isArray(value)) {
    return value.join(", ")
  }
  if (typeof value === "object") {
    return JSON.stringify(value)
  }
  return String(value)
}

// Helper function to create employee name with avatar custom cell
export function createEmployeeCell<T>(
  imageKey: keyof T,
  nameKey: keyof T,
  targetKey: keyof T = nameKey,
): CustomCellConfig<T> {
  return {
    targetKey,
    sourceKeys: [imageKey, nameKey],
    header: "Employee",
    width: "200px",
    sortable: true,
    render: (values: any[], row: T) => {
      const [image, name] = values
      return (
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={image || "/placeholder.svg"} alt={String(name)} />
            <AvatarFallback>
              {String(name)
                .split(" ")
                .map((n: string) => n[0])
                .join("")
                .toUpperCase()
                .slice(0, 2)}
            </AvatarFallback>
          </Avatar>
          <span className="font-medium">{String(name)}</span>
        </div>
      )
    },
  }
}

