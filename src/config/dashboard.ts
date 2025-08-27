import { SidebarLinkItem } from "@/lib/type";

// interface Links {
//     label: string;
//     href: string;
//     icon: React.ComponentType;
// }

export const adminDashboardSidebarLink: SidebarLinkItem[] = [
  {
    label: "Dashboad",
    href: "/admin/dashboard",
    icon: "dashboard",
  },
  {
    label: "Interviews",
    href: "/admin/interviews",
    icon: "interviews",
  },
  {
    label: "Workforce",
    href: "/admin/workforce",
    icon: "workforce",
  },
  {
    label: "Job Posting",
    href: "/admin/jobposting",
    icon: "jobPosting",
  },
  {
    label: "Clients",
    href: "/admin/client",
    icon: "clients",
  },
  {
    label: "Candidates",
    href: "/admin/candidates",
    icon: "candidates",
  },
  {
    label: "Messaging",
    href: "/admin/messaging",
    icon: "messaging",
  },
  {
    label: "Analytics",
    href: "/admin/analytics",
    icon: "analytics",
  },
  {
    label: "Roles and Permissions",
    href: "/admin/roleAndPermission",
    icon: "rolesAndPermissions",
  },
  {
    label: "Timesheet",
    href: "/admin/timesheet",
    icon: "timeSheet",
  },
  {
    "label": "Payroll",
    icon: "payroll",
    items: [
      {
        label: "Summary",
        href: "/admin/payroll/summary",
        icon: "empty",
      },
      {
        label: "Salary Structure",
        href: "/admin/payroll/salary-strcuture",
        icon: "empty",
      }
    ]
  }
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

export const recruiterDashboardSidebarLink: SidebarLinkItem[] = [
  {
    label: "Dashboad",
    href: "/recruiter/dashboard",
    icon: "dashboard",
  },
  {
    label: "Interviews",
    href: "/recruiter/interviews",
    icon: "interviews",
  },
  {
    label: "Job Posting",
    href: "/recruiter/job-posting",
    icon: "jobPosting",
  },
  {
    label: "Clients",
    href: "/recruiter/clients",
    icon: "clients",
  },
  {
    label: "Candidates",
    href: "/recruiter/candidates",
    icon: "candidates",
  },
];
