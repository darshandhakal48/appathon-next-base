import { SidebarLinkItem } from "@/lib/type";

// interface Links {
//     label: string;
//     href: string;
//     icon: React.ComponentType;
// }

export const adminDashboardSidebarLink: SidebarLinkItem[] = [
  {
    label: "Dashboad",
    href: "/dashboard",
    icon: "dashboard",
  },
  {
    label: "Interviews",
    href: "/interviews",
    icon: "interviews",
  },
  {
    label: "Workforce",
    href: "/workforce",
    icon: "workforce",
  },
  {
    label: "Job Posting",
    href: "/jobposting",
    icon: "jobPosting",
  },
  {
    label: "Clients",
    href: "/client",
    icon: "clients",
  },
  {
    label: "Candidates",
    href: "/candidates",
    icon: "candidates",
  },
  {
    label: "Messaging",
    href: "/messaging",
    icon: "messaging",
  },
  {
    label: "Analytics",
    href: "/analytics",
    icon: "analytics",
  },
  {
    label: "Roles and Permissions",
    href: "/roleAndPermission",
    icon: "rolesAndPermissions",
  },
  {
    label: "Timesheet",
    href: "/timesheet",
    icon: "timeSheet",
  },
  {
    label: "Payroll",
    href: "/payroll",
    icon: "payroll",
  },
];

export const candidateDashboardSidebarLink: SidebarLinkItem[] = [
  {
    label: "Dashboad",
    href: "/candidate/dashboard",
    icon: "dashboard",
  },
  {
    label: "Interviews",
    href: "/candidate/interview",
    icon: "interviews",
  },
  {
    label: "Job Search",
    href: "/candidate/jobSearch",
    icon: "jobPosting",
  },
  {
    label: "Application Tracking",
    href: "/candidate/applicationTracking",
    icon: "clients",
  },
  {
    label: "Messaging",
    href: "/candidate/messaging",
    icon: "messaging",
  },
];
