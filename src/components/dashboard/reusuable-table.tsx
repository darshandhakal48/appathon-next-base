"use client";

import type React from "react";

import { useState, useMemo } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown, ChevronsUpDown } from "lucide-react";
import type { Column, TableProps, SortConfig, SortDirection } from "@/lib/type";

// Generic reusable table component
export function ReusableTable<T extends Record<string, any>>({
    data,
    columns,
    autoGenerateColumns = true,
    onRowClick,
    loading = false,
    emptyMessage = "No data available",
    className = "",
}: TableProps<T>) {
    const [sortConfig, setSortConfig] = useState<SortConfig<T> | null>(null);

    // Auto-generate columns if not provided
    const tableColumns = useMemo((): Column<T>[] => {
        if (columns && columns.length > 0) {
            return columns;
        }

        if (!autoGenerateColumns || data.length === 0) {
            return [];
        }

        // Generate columns from the first data item
        const firstItem = data[0];
        return Object.keys(firstItem).map((key) => ({
            key: key as keyof T,
            header: formatHeader(key),
            sortable: true,
        }));
    }, [columns, autoGenerateColumns, data]);

    // Sort data based on current sort configuration
    const sortedData = useMemo(() => {
        if (!sortConfig) return data;

        return [...data].sort((a, b) => {
            const aValue = a[sortConfig.key];
            const bValue = b[sortConfig.key];

            if (aValue === bValue) return 0;

            const comparison = aValue < bValue ? -1 : 1;
            return sortConfig.direction === "desc"
                ? comparison * -1
                : comparison;
        });
    }, [data, sortConfig]);

    // Handle column sorting
    const handleSort = (key: keyof T) => {
        let direction: SortDirection = "asc";

        if (sortConfig && sortConfig.key === key) {
            if (sortConfig.direction === "asc") {
                direction = "desc";
            } else if (sortConfig.direction === "desc") {
                direction = null;
            }
        }

        setSortConfig(direction ? { key, direction } : null);
    };

    // Render cell content based on data type
    const renderCellContent = (value: any, column: Column<T>, row: T) => {
        if (column.render) {
            return column.render(value, row);
        }

        return formatCellValue(value);
    };

    // Render sort icon
    const renderSortIcon = (key: keyof T) => {
        if (!sortConfig || sortConfig.key !== key) {
            return <ChevronsUpDown className="ml-2 h-4 w-4" />;
        }

        return sortConfig.direction === "asc" ? (
            <ChevronUp className="ml-2 h-4 w-4" />
        ) : (
            <ChevronDown className="ml-2 h-4 w-4" />
        );
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center p-8">
                <div className="text-muted-foreground">Loading...</div>
            </div>
        );
    }

    if (data.length === 0) {
        return (
            <div className="flex items-center justify-center p-8">
                <div className="text-muted-foreground">{emptyMessage}</div>
            </div>
        );
    }

    return (
        <div className={`rounded-md border grid ${className}`}>
            <Table>
                <TableHeader>
                    <TableRow>
                        {tableColumns.map((column) => (
                            <TableHead
                                key={String(column.key)}
                                style={{ width: column.width }}
                                className="font-medium"
                            >
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
                            className={
                                onRowClick
                                    ? "cursor-pointer hover:bg-muted/50"
                                    : ""
                            }
                            onClick={() => onRowClick?.(row)}
                        >
                            {tableColumns.map((column) => (
                                <TableCell key={String(column.key)}>
                                    {renderCellContent(
                                        row[column.key],
                                        column,
                                        row
                                    )}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

// Helper function to format header names
function formatHeader(key: string): string {
    return key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase())
        .trim();
}

// Helper function to format cell values based on type
function formatCellValue(value: any): React.ReactNode {
    if (value === null || value === undefined) {
        return <span className="text-muted-foreground">-</span>;
    }

    if (typeof value === "boolean") {
        return (
            <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                    value
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                }`}
            >
                {value ? "Yes" : "No"}
            </span>
        );
    }

    if (typeof value === "number") {
        return value.toLocaleString();
    }

    if (value instanceof Date) {
        return value.toLocaleDateString();
    }

    if (Array.isArray(value)) {
        return value.join(", ");
    }

    if (typeof value === "object") {
        return JSON.stringify(value);
    }

    return String(value);
}
