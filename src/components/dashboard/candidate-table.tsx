"use client";

import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle } from "lucide-react";

type Candidate = {
  name: string;
  initials: string;
  date: string;
  match: number;
  skillMatch: string;
  experience: string;
  experienceValid: boolean;
  status: string;
};

const candidates: Candidate[] = [
  {
    name: "Wade Williams",
    initials: "WW",
    date: "2025/12/12",
    match: 85,
    skillMatch: "Strong (Python, SQL, AI)",
    experience: "5+ years (Required: 3+ years)",
    experienceValid: true,
    status: "Under Review",
  },
  {
    name: "Sasha Banks",
    initials: "SB",
    date: "2025/12/12",
    match: 81,
    skillMatch: "Strong (Python, SQL, AI)",
    experience: "2 years (Required: 3+ years)",
    experienceValid: false,
    status: "Under Review",
  },
  {
    name: "Sakura Hegi",
    initials: "SH",
    date: "2025/12/12",
    match: 67,
    skillMatch: "Moderate (Python, NoSQL)",
    experience: "1 year",
    experienceValid: false,
    status: "Under Review",
  },
  {
    name: "Peter Walson",
    initials: "PW",
    date: "2025/12/12",
    match: 40,
    skillMatch: "Missing SQL, AI knowledge",
    experience: "2 years (Required: 3+ years)",
    experienceValid: false,
    status: "Under Review",
  },
  {
    name: "Robert Brown",
    initials: "RB",
    date: "2025/12/12",
    match: 82,
    skillMatch: "Strong (Python, SQL, AI)",
    experience: "5+ years (Required: 3+ years)",
    experienceValid: true,
    status: "Under Review",
  },
  {
    name: "Daniel Clark",
    initials: "DC",
    date: "2024/12/12",
    match: 90,
    skillMatch: "Strong (Python, SQL, AI)",
    experience: "5+ years (Required: 3+ years)",
    experienceValid: true,
    status: "Under Review",
  },
  {
    name: "Emma Watson",
    initials: "EW",
    date: "2024/12/12",
    match: 70,
    skillMatch: "Moderate (Python, NoSQL)",
    experience: "2 years (Required: 3+ years)",
    experienceValid: false,
    status: "Under Review",
  },
];

const columns: ColumnDef<Candidate>[] = [
  {
    accessorKey: "initials",
    header: "Name",
    cell: ({ row }) => {
      const { name, initials } = row.original;
      return (
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 font-medium">
            {initials}
          </div>
          <span>{name}</span>
        </div>
      );
    },
  },
  { accessorKey: "date", header: "Date" },
  {
    accessorKey: "match",
    header: "Match %",
    cell: ({ row }) => (
      <span className="font-medium text-blue-600">{row.getValue("match")}%</span>
    ),
  },
  {
    accessorKey: "skillMatch",
    header: "Skill Match",
    cell: ({ row }) => {
      const skill = row.getValue("skillMatch") as string;
      let variant: "default" | "success" | "warning" | "destructive" = "default";
      if (skill.startsWith("Strong")) variant = "success";
      else if (skill.startsWith("Moderate")) variant = "warning";
      else variant = "destructive";
      return <Badge variant={variant}>{skill}</Badge>;
    },
  },
  {
    accessorKey: "experience",
    header: "Experience Match",
    cell: ({ row }) => {
      const valid = row.original.experienceValid;
      const icon = valid ? (
        <CheckCircle2 className="mr-1 h-4 w-4 text-green-500" />
      ) : (
        <XCircle className="mr-1 h-4 w-4 text-red-500" />
      );
      return (
        <div className="flex items-center">
          {icon}
          <span>{row.getValue("experience")}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge className="bg-orange-100 text-orange-800">{row.getValue("status")}</Badge>
    ),
  },
];

function AdminCandidates() {
  return (
    <div className="p-6">
      <h2 className="mb-4 text-xl font-semibold text-blue-600">
        Software Engineering
      </h2>
      <DataTable columns={columns} data={candidates} />
    </div>
  );
}

export default AdminCandidates;
