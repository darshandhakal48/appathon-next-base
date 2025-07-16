import React from "react";
import {
    Table,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableBody,
} from "../ui/table";
import Image from "next/image";

export type Column = {
    key: string;
    label: string;
};

export type RowData = Record<string, string>;

export type CustomTableProps<T> = {
    columns: Column[];
    data: T[];
};

function CustomTable<T extends RowData>({
    columns,
    data,
}: CustomTableProps<T>) {
    return (
        <div className="grid grid-cols-1">
            <Table>
                <TableHeader>
                    <TableRow>
                        {columns.map((title) => (
                            <TableHead key={title.key as string}>
                                {title.label}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((job) => (
                        <TableRow key={job.jobId}>
                            {columns.map((col) => {
                                const value = job[col.key];
                                if (col.key === "name" && "profilePic" in job) {
                                    return (
                                        <TableCell
                                            className="font-medium flex items-center gap-2"
                                            key={col.key as string}
                                        >
                                            <span className="h-10 w-10 ">
                                                <Image
                                                    src={`${job["profilePic"]}`}
                                                    alt="Candidate profile picture"
                                                    width={899}
                                                    height={1300}
                                                    className="h-full w-full rounded-full object-fit"
                                                />
                                            </span>
                                            <span>{value}</span>
                                        </TableCell>
                                    );
                                }
                                return (
                                    <>
                                        <TableCell key={col.key as string}>
                                            {value}
                                        </TableCell>
                                    </>
                                );
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default CustomTable;
