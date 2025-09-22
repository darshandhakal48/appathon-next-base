import { PermissionForPageProps } from "@/lib/type";
import {
  AnalyticsSchema,
  AnalyticsSchemaType,
  CandidateSchema,
  CandidateSchemaType,
  ClientSchema,
  ClientSchemaType,
  InterviewSchema,
  InterviewSchemaType,
  JobPostingSchema,
  JobPostingSchemaType,
  WorkforceSchema,
  WorkforceType,
} from "@/components/forms/schema";

import AnalyticePermission from "../_component/analytics-permission";
import CandidatePermission from "../_component/candidate-permission";
import ClientPermission from "../_component/client-permission";
import InterviewPermission from "../_component/interview-permission";
import JobPostingPermission from "../_component/job-posting-permission";
import WorkforcePermission from "../_component/workforce-permission";
import {
  ActivePagePermissionType,
  IHandlePagePermission,
  RoleAndPermissionType,
} from "./type";

export const allPermissionPages: ActivePagePermissionType[] = [
  "Candidate",
  "Job Posting",
  "Interview",
  "Workforce",
  "Client",
  "Analytics",
];

export const allPermissionComponent: IHandlePagePermission<any>[] = [
  {
    page: "Candidate",
    component: CandidatePermission,
  },
  {
    page: "Analytics",
    component: AnalyticePermission,
  },
  {
    page: "Client",
    component: ClientPermission,
  },
  {
    page: "Interview",
    component: InterviewPermission,
  },
  {
    page: "Job Posting",
    component: JobPostingPermission,
  },
  {
    page: "Workforce",
    component: WorkforcePermission,
  },
];

export const roles: RoleAndPermissionType[] = [
  "Superadmin",
  "Hiring Manager",
  "Recruiter",
  "Interviewer",
] as const;

export const candidatePermissionForPageData: PermissionForPageProps[] = [
  { pageId: "View", pageTitle: "view" },
  { pageId: "Create", pageTitle: "create" },
  {
    pageId: "Edit",

    pageTitle: "edit",
  },
  { pageId: "Delete", pageTitle: "delete" },
  {
    pageId: "Change Application Status",
    pageTitle: "changeApplicationStatus",
  },
  {
    pageId: "Add Notes",
    pageTitle: "addNotes",
  },
  {
    pageId: "View Profile",
    pageTitle: "viewProfile",
  },
  {
    pageId: "Schedule Interviews",
    pageTitle: "scheduleInterviews",
  },
];
export const jobPostingPermissionForPageData: PermissionForPageProps[] = [
  { pageId: "View", pageTitle: "view" },
  { pageId: "Create", pageTitle: "create" },
  { pageId: "Edit", pageTitle: "edit" },
  { pageId: "Delete", pageTitle: "delete" },
  { pageId: "Approve", pageTitle: "approve" },
  { pageId: "View Public", pageTitle: "viewPublic" },
];
export const interviewPermissionForPageData: PermissionForPageProps[] = [
  { pageId: "View", pageTitle: "view" },
  { pageId: "Create", pageTitle: "create" },
  { pageId: "Edit", pageTitle: "edit" },
  { pageId: "Delete", pageTitle: "delete" },
  { pageId: "Add Feedback", pageTitle: "addFeedback" },
  { pageId: "View Assigned", pageTitle: "viewAssigned" },
  { pageId: "Confirm Reschedule", pageTitle: "confirmReschedule" },
];
export const workforcePermissionForPageData: PermissionForPageProps[] = [
  { pageId: "View", pageTitle: "view" },
  { pageId: "Create", pageTitle: "create" },
  { pageId: "Edit", pageTitle: "edit" },
  { pageId: "Delete", pageTitle: "delete" },
  { pageId: "View Roles", pageTitle: "viewRoles" },
  { pageId: "Assign Roles", pageTitle: "assignRoles" },
];
export const clientPermissionForPageData: PermissionForPageProps[] = [
  { pageId: "View", pageTitle: "view" },
  { pageId: "Create", pageTitle: "create" },
  { pageId: "Edit", pageTitle: "edit" },
  { pageId: "Delete", pageTitle: "delete" },
  { pageId: "Add Feedback", pageTitle: "addFeedback" },
  { pageId: "View Assigned", pageTitle: "viewAssigned" },
  { pageId: "Confirm Reschedule", pageTitle: "confirmReschedule" },
];
export const analyticstPermissionForPageData: PermissionForPageProps[] = [
  { pageId: "View", pageTitle: "view" },
  { pageId: "Export", pageTitle: "export" },
  { pageId: "Advanced", pageTitle: "advanced" },
];

export const schemaMapRolesAndPermission = {
  Candidate: {
    schema: CandidateSchema,
    defaultValues: {
      hiringManager: {
        addNotes: false,
        changeApplicationStatus: false,
        create: false,
        delete: false,
        edit: false,
        scheduleInterviews: false,
        view: false,
        viewProfile: false,
      },
      interviewer: {
        addNotes: false,
        changeApplicationStatus: false,
        create: false,
        delete: false,
        edit: false,
        scheduleInterviews: false,
        view: false,
        viewProfile: false,
      },
      recruiter: {
        addNotes: false,
        changeApplicationStatus: false,
        create: false,
        delete: false,
        edit: false,
        scheduleInterviews: false,
        view: false,
        viewProfile: false,
      },
      superadmin: {
        addNotes: false,
        changeApplicationStatus: false,
        create: false,
        delete: false,
        edit: false,
        scheduleInterviews: false,
        view: false,
        viewProfile: false,
      },
    } satisfies CandidateSchemaType,
  },
  "Job Posting": {
    schema: JobPostingSchema,
    defaultValues: {
      superadmin: {
        view: false,
        create: false,
        edit: false,
        delete: false,
        approve: false,
        viewPublic: false,
      },
      hiringManager: {
        view: false,
        create: false,
        edit: false,
        delete: false,
        approve: false,
        viewPublic: false,
      },
      recruiter: {
        view: false,
        create: false,
        edit: false,
        delete: false,
        approve: false,
        viewPublic: false,
      },
      interviewer: {
        view: false,
        create: false,
        edit: false,
        delete: false,
        approve: false,
        viewPublic: false,
      },
    } satisfies JobPostingSchemaType,
  },
  Interview: {
    schema: InterviewSchema,
    defaultValues: {
      superadmin: {
        view: false,
        create: false,
        edit: false,
        delete: false,
        addFeedback: false,
        viewAssigned: false,
        confirmReschedule: false,
      },
      hiringManager: {
        view: false,
        create: false,
        edit: false,
        delete: false,
        addFeedback: false,
        viewAssigned: false,
        confirmReschedule: false,
      },
      recruiter: {
        view: false,
        create: false,
        edit: false,
        delete: false,
        addFeedback: false,
        viewAssigned: false,
        confirmReschedule: false,
      },
      interviewer: {
        view: false,
        create: false,
        edit: false,
        delete: false,
        addFeedback: false,
        viewAssigned: false,
        confirmReschedule: false,
      },
    } satisfies InterviewSchemaType,
  },
  Workforce: {
    schema: WorkforceSchema,
    defaultValues: {
      superadmin: {
        view: false,
        create: false,
        edit: false,
        delete: false,
        assignRoles: false,
        viewRoles: false,
      },
      hiringManager: {
        view: false,
        create: false,
        edit: false,
        delete: false,
        assignRoles: false,
        viewRoles: false,
      },
      recruiter: {
        view: false,
        create: false,
        edit: false,
        delete: false,
        assignRoles: false,
        viewRoles: false,
      },
      interviewer: {
        view: false,
        create: false,
        edit: false,
        delete: false,
        assignRoles: false,
        viewRoles: false,
      },
    } satisfies WorkforceType,
  },
  Client: {
    schema: ClientSchema,
    defaultValues: {
      superadmin: {
        view: false,
        create: false,
        edit: false,
        delete: false,
        addFeedback: false,
        viewAssigned: false,
        confirmReschedule: false,
      },
      hiringManager: {
        view: false,
        create: false,
        edit: false,
        delete: false,
        addFeedback: false,
        viewAssigned: false,
        confirmReschedule: false,
      },
      interviewer: {
        view: false,
        create: false,
        edit: false,
        delete: false,
        addFeedback: false,
        viewAssigned: false,
        confirmReschedule: false,
      },
      recruiter: {
        view: false,
        create: false,
        edit: false,
        delete: false,
        addFeedback: false,
        viewAssigned: false,
        confirmReschedule: false,
      },
    } satisfies ClientSchemaType,
  },
  Analytics: {
    schema: AnalyticsSchema,
    defaultValues: {
      superadmin: {
        view: false,
        advanced: false,
        export: false,
      },
      hiringManager: {
        view: false,
        advanced: false,
        export: false,
      },
      interviewer: {
        view: false,
        advanced: false,
        export: false,
      },
      recruiter: {
        view: false,
        advanced: false,
        export: false,
      },
    } satisfies AnalyticsSchemaType,
  },
};
