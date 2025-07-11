import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const activeJobsOpening = [
    {
        "Job ID": "se001",
        "Job Title": "Software Engineering",
        "No. of Positions": 2,
    },
    {
        "Job ID": "js9343",
        "Job Title": "It Consultant",
        "No. of Positions": 3,
    },
    {
        "Job ID": "ce4442",
        "Job Title": "Accountant",
        "No. of Positions": 1,
    },
    {
        "Job ID": "de4444",
        "Job Title": "Computer Engineering",
        "No. of Positions": 2,
    },
    {
        "Job ID": "se34334",
        "Job Title": "Data Engineering",
        "No. of Positions": 1,
    },
];

function ActiveJobOpenings() {
    return (
        <div className="space-y-4">
            <div className="flex justify-between">
                <span className="text-base">Active Jobs Opening</span>
                <span className="text-base text-primary-surface">
                    View All Jobs
                </span>
            </div>
            <div>
                <Table className="border-1">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px] font-bold">
                                Job ID
                            </TableHead>
                            <TableHead className="font-bold">
                                Job Title
                            </TableHead>
                            <TableHead className="font-bold">
                                No. of Positions
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {activeJobsOpening.map((job) => (
                            <TableRow key={job["Job ID"]}>
                                <TableCell className="text-sm">
                                    {job["Job ID"]}
                                </TableCell>
                                <TableCell>{job["Job Title"]}</TableCell>
                                <TableCell>{job["No. of Positions"]}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default ActiveJobOpenings;
