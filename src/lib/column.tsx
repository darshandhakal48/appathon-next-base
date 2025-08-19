"use client";
import { UserAvatar } from "@/components/dashboard/user-avatar";
import { CandidateProps, Column, } from "./type";

export const candidateColumn: Column<CandidateProps>[] = [
  {
    key: "name",
    header: "Candidate Name",

    render: (value, row) => {
      return <UserAvatar name={value} avatar={row.avatar} size="md" />;
    }
  }
]
