import React, { JSX } from "react";
import { Control, FieldValues } from "react-hook-form";

export type RoleAndPermissionType =
  | "Superadmin"
  | "Hiring Manager"
  | "Recruiter"
  | "Interviewer";

export type ActivePagePermissionType =
  | "Candidate"
  | "Job Posting"
  | "Interview"
  | "Workforce"
  | "Client"
  | "Analytics";

export interface IHandlePagePermission<T> {
  page: ActivePagePermissionType;
  component: React.ComponentType<T>;
}

// export interface IHandlePagePermission<T extends FieldValues> {
//   page: ActivePagePermissionType;
//   component: React.ComponentType<{ control: Control<T> }>;
// }
