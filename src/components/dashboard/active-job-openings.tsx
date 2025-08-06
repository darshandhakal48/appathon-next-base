import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Typography } from "../shared/typography";
import { Job } from "@/lib/type";

function ActiveJobOpenings({ jobs }: { jobs: Job[] | null }) {
    return (
        <div className="space-y-4">
            <div className="flex justify-between">
                <Typography color="title">Active Jobs Opening</Typography>
                <Typography color="primary1">View All Jobs</Typography>
            </div>
            <div className="rounded-md border-1">
                <Table className="rounded-xl border-1 border-grayscale-border-lighter">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-bold">Job ID</TableHead>
                            <TableHead className="font-bold">
                                Job Title
                            </TableHead>
                            <TableHead className="font-bold">
                                No. of Positions
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {jobs ? (
                            jobs.length === 0 ? (
                                <p>No JObs</p>
                            ) : (
                                jobs?.map((job, i) => {
                                    console.log("JOB ==== > ", job);
                                    return (
                                        job && (
                                            <TableRow key={"job-" + i}>
                                                <TableCell className="text-sm">
                                                    {job.id}
                                                </TableCell>
                                                <TableCell>
                                                    {job.title}
                                                </TableCell>
                                                <TableCell>
                                                    {job.noOfPositions}
                                                </TableCell>
                                            </TableRow>
                                        )
                                    );
                                })
                            )
                        ) : (
                            <p> No JObs </p>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default ActiveJobOpenings;
