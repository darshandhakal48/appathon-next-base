"use client";
import { UserAvatar } from "@/components/dashboard/user-avatar";
import { CandidateProps, Column, WorkForceUserProps } from "./type";

export const userColumns: Column<WorkForceUserProps>[] = [
    { key: "id", header: "ID", width: "80px" },
    {
        key: "name",
        header: "Employee Name",

        render: (value, row) => {
            return <UserAvatar name={row.name} avatar={row.avatar} size="md" />;
        },
    },
    { key: "email", header: "Email Address" },
    { key: "jobTitle", header: "Job Title" },
    { key: "workNumber", header: "Work Number" },
    { key: "phone", header: "Phone Number" },
];

export const candidateColumn: Column<CandidateProps>[] = [
    {
        key: "name",
        header: "Candidate Name",

        render: (value, row) => {
            return <UserAvatar name={row.name} avatar={row.avatar} size="md" />;
        },
    },
    {
        key: "city",
        header: "City",
    },
    {
        key: "stage",
        header: "Stage",
    },
    {
        key: "modifiedTime",
        header: "Modified Time",
    },
];
