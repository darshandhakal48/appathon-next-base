import {
  AddressInfoProps,
  AdminClientDataProps,
  Application,
  CandidateProps,
  ClientInfoProps,
  CurrencyProps,
  DashboardCard,
  Job,
  JobCardProps,
  MessagingTemplateProps,
  PermissionForPageProps,
  PersonalInformationProps,
  UserActivity,
  UserRolesProps,
  WorkForceProfileInfoProps,
  WorkForceUserProps,
} from "@/lib/type";

// ========== CANDIDATE - DASHBOARD ========== //
export const candidateDashboardCards: DashboardCard[] = [
  { label: "Applied", count: 0, icon: "folderOpen" },
  { label: "In Review", count: 3, icon: "headset" },
  { label: "Interview Scheduled", count: 5, icon: "user" },
  { label: "Offer Received", count: 5, icon: "user" },
  { label: "Rejected", count: 5, icon: "user" },
];

export const candidateUserActivity: UserActivity[] = [
  {
    id: 1,
    status: "Interview Scheduled",
    message:
      "Your interview for [Job Title] is set for [Date & Time]. Good luck!",
    color: "success",
  },
  {
    id: 2,
    status: "Application Under Review",
    message:
      "Your application for [Job Title] is currently under review. We'll keep you posted.",
    color: "success",
  },
  {
    id: 3,
    status: "Offer Extended",
    message:
      "Congratulations! You've received an offer for [Job Title]. Check the details now!",
    color: "success",
  },
  {
    id: 4,
    status: "Application Rejected",
    message:
      "We appreciate your interest in [Company]. Unfortunately, we won't be moving forward with your application for [Job Title] at this time.",
    color: "success",
  },
];

// export const candidateJobs: Job[] = [
//   {
//     "Job Title": "Software Engineering",
//     company: "Rays IT Solutions",
//     location: "TX 4340, USA (Full Time)",
//     type: "Full Time",
//     posted: "3 weeks ago",
//     expires: "Expires in 4 days",
//     companyImage: "/_static/40x40.svg",
//     "No. of Positions": "3",
//   },
//   {
//     "Job Title": "Software Engineering",
//     company: "Rays IT Solutions",
//     location: "TX 4340, USA (Full Time)",
//     type: "Full Time",
//     posted: "3 weeks ago",
//     expires: "Expires in 4 days",
//     companyImage: "/_static/40x40.svg",
//     "No. of Positions": "3",
//   },
//   {
//     "Job Title": "Software Engineering",
//     company: "Rays IT Solutions",
//     location: "TX 4340, USA (Full Time)",
//     type: "Full Time",
//     posted: "3 weeks ago",
//     expires: "Expires in 4 days",
//     companyImage: "/_static/40x40.svg",
//     "No. of Positions": "3",
//   },
//   {
//     "Job Title": "Software Engineering",
//     company: "Rays IT Solutions",
//     location: "TX 4340, USA (Full Time)",
//     type: "Full Time",
//     posted: "3 weeks ago",
//     expires: "Expires in 4 days",
//     companyImage: "/_static/40x40.svg",
//     "No. of Positions": "3",
//   },
//   {
//     "Job Title": "Software Engineering",
//     company: "Rays IT Solutions",
//     location: "TX 4340, USA (Full Time)",
//     type: "Full Time",
//     posted: "3 weeks ago",
//     expires: "Expires in 4 days",
//     companyImage: "/_static/40x40.svg",
//     "No. of Positions": "3",
//   },
// ];

export const candidateUserProfiles = [
  {
    id: "Walter White",
    name: "Walter White",
    recentMessage: "This is a message",
    time: "3 weeks ago",
    image: "/_static/profile-pic.jpg",
  },
  {
    id: "Tony Stark",
    name: "Tony Stark",
    recentMessage: "This is a message",
    time: "4 weeks ago",
    image: "/_static/profile-pic.jpg",
  },
  {
    id: "Captain America",
    name: "Captain America",
    recentMessage: "This is a message",
    time: "2 weeks ago",
    image: "/_static/profile-pic.jpg",
  },
  {
    id: "Black Widow",
    name: "Black Widow",
    recentMessage: "This is a message",
    time: "1 weeks ago",
    image: "/_static/profile-pic.jpg",
  },
];

// export const candidateApplication: Application[] = [
//   {
//     id: "1",
//     title: "Software Engineering",
//     company: "Rays IT Solutions",
//     location: "TX 4340, USA (Full Time)",
//     type: "Full Time",
//     posted: "3 weeks ago",
//     expires: "Expires in 4 days",
//     companyImage: "/_static/40x40.svg",
//     appliedDate: "2025-05-01",
//     status: "shortlisted",
//     noOfPositions: "4",
//   },
//   {
//     id: "2",
//     title: "Software Engineering",
//     company: "Rays IT Solutions",
//     location: "TX 4340, USA (Full Time)",
//     type: "Full Time",
//     posted: "3 weeks ago",
//     expires: "Expires in 4 days",
//     companyImage: "/_static/40x40.svg",
//     appliedDate: "2025-05-01",
//     status: "shortlisted",
//     noOfPositions: "4",
//   },
//   {
//     id: "3",
//     title: "Software Engineering",
//     company: "Rays IT Solutions",
//     location: "TX 4340, USA (Full Time)",
//     type: "Full Time",
//     posted: "3 weeks ago",
//     expires: "Expires in 4 days",
//     companyImage: "/_static/40x40.svg",
//     appliedDate: "2025-05-01",
//     status: "shortlisted",
//     noOfPositions: "4",
//   },
//   {
//     id: "4",
//     title: "Software Engineering",
//     company: "Rays IT Solutions",
//     location: "TX 4340, USA (Full Time)",
//     type: "Full Time",
//     posted: "3 weeks ago",
//     expires: "Expires in 4 days",
//     companyImage: "/_static/40x40.svg",
//     appliedDate: "2025-05-01",
//     status: "shortlisted",
//     noOfPositions: "4",
//   },
//   {
//     id: "5",
//     title: "Software Engineering",
//     company: "Rays IT Solutions",
//     location: "TX 4340, USA (Full Time)",
//     type: "Full Time",
//     posted: "3 weeks ago",
//     expires: "Expires in 4 days",
//     companyImage: "/_static/40x40.svg",
//     appliedDate: "2025-05-01",
//     status: "shortlisted",
//     noOfPositions: "4",
//   },
// ];

// ========== ADMIN - DASHBOARD ========== //
export const adminDashbaordCards: DashboardCard[] = [
  { label: "Applied", count: 0, icon: "folderOpen" },
  { label: "Screening", count: 10, icon: "folderOpen" },
  { label: "Interviewing", count: 3, icon: "headset" },
  { label: "Interview Scheduled", count: 5, icon: "user" },
  { label: "Offer Received", count: 5, icon: "user" },
  { label: "Rejected", count: 5, icon: "user" },
];

export const workForceProfileInfo: WorkForceProfileInfoProps = {
  // companyName: "Rays IT company",
  // companyField: "Information Technology",
  employeeName: "John Harrison",
  jobTitle: "Hiring Manager",
  email: "john@example.com",
  location: "2323 Sydney, NY",
  under: "Mathew Mchem",
  number: "+477 344 343",
  // image: "/_static/ray_it.jpg",
};

export const DashboardUserActivity: UserActivity[] = [
  {
    id: 1,
    status: "Interview Scheduled",
    message:
      "Your interview for [Job Title] is set for [Date & Time]. Good luck!",
    color: "success",
  },
  {
    id: 2,
    status: "Application Under Review",
    message:
      "Your application for [Job Title] is currently under review. We'll keep you posted.",
    color: "success",
  },
  {
    id: 3,
    status: "Offer Extended",
    message:
      "Congratulations! You've received an offer for [Job Title]. Check the details now!",
    color: "success",
  },
  {
    id: 4,
    status: "Application Rejected",
    message:
      "We appreciate your interest in [Company]. Unfortunately, we won't be moving forward with your application for [Job Title] at this time.",
    color: "success",
  },
];

export const jobPostingData: JobCardProps[] = [
  {
    "Job Id": 2231251,
    "Job Title": "Software Engineering",
    Date: "09/24/2024",
    endDate: "09/24/2024",
    "Client Name": "Rays IT Solutions",
    City: "TX 4340, USA",
    logo: "/_static/ray_it.jpg",
    expiresIn: "Expires in 4 days",
    Status: "open",
    updatedBy: "Walter White",
    type: "Full Time",
  },
  {
    "Job Id": 4353343,
    "Job Title": "Frontend",
    Date: "09/24/2024",
    endDate: "09/24/2024",
    "Client Name": "Aaramba IT",
    City: "London , Uk",
    logo: "/_static/ray_it.jpg",
    expiresIn: "Expires in 1 days",
    Status: "open",
    updatedBy: "John Cena",
    type: "Part Time",
  },
  {
    "Job Id": 14354,
    "Job Title": "Backend",
    Date: "09/24/2024",
    endDate: "09/24/2024",
    "Client Name": "Black Tech",
    City: "Delhi , India",
    logo: "/_static/ray_it.jpg",
    expiresIn: "Expires in 3 days",
    Status: "open",
    updatedBy: "Darshan",
    type: "Hybrid",
  },
  {
    "Job Id": 8769596,
    "Job Title": "Research Intern",
    Date: "09/24/2024",
    endDate: "09/24/2024",
    "Client Name": "Yeti Labs",
    City: "Pokhara , Nepal",
    logo: "/_static/ray_it.jpg",
    expiresIn: "Expires in 7 days",
    Status: "open",
    updatedBy: "Prakash Gurung",
    type: "Onsite",
  },
];

export const industry: string[] = [
  "Technology & IT",
  "Finance & Banking",
  "Healthcare & Medical",
  "Education & Training",
  "Construction & Real",
  "Manufacturing & Engineering",
  "Retail & E-commerce",
  "Hospitility & Tourism",
  "Marketing & Advertising",
  "Government & Public Sector",
];

export const clients: string[] = [
  "Prakash ",
  "Darshan",
  "Prajun",
  "Dev",
  "Reeha",
  "Ashmi",
  "Ayuash",
];

export const jobTypes: string[] = [
  "Web Development",
  "Frontend",
  "Backend",
  "Design",
];
// export const workForceTableColumn =

export const currency: CurrencyProps[] = [
  { code: "USD", sign: "$" }, // US Dollar
  { code: "EUR", sign: "€" }, // Euro
  { code: "GBP", sign: "£" }, // British Pound
  { code: "JPY", sign: "¥" }, // Japanese Yen
  { code: "AUD", sign: "A$" }, // Australian Dollar
  { code: "CAD", sign: "C$" }, // Canadian Dollar
  { code: "CHF", sign: "CHF" }, // Swiss Franc
  { code: "CNY", sign: "¥" }, // Chinese Yuan (Renminbi)
  { code: "INR", sign: "₹" }, // Indian Rupee
  { code: "NPR", sign: "₨" }, // Nepali Rupee
  { code: "KRW", sign: "₩" }, // South Korean Won
  { code: "SGD", sign: "S$" }, // Singapore Dollar
  { code: "NZD", sign: "NZ$" }, // New Zealand Dollar
  { code: "SEK", sign: "kr" }, // Swedish Krona
  { code: "NOK", sign: "kr" }, // Norwegian Krone
  { code: "DKK", sign: "kr" }, // Danish Krone
  { code: "ZAR", sign: "R" }, // South African Rand
  { code: "RUB", sign: "₽" }, // Russian Ruble
  { code: "BRL", sign: "R$" }, // Brazilian Real
  { code: "MXN", sign: "$" }, // Mexican Peso
  { code: "TRY", sign: "₺" }, // Turkish Lira
];

export const skills: string[] = [
  "Machine Learning",
  "Data Visualization",
  "Data Analysis",
  "Frontend",
  "Backend",
  "UI/UX",
  "Graphics Design",
  "Data Entry",
  "Content Writer",
];

export const personalInformation: PersonalInformationProps[] = [
  {
    label: "First Name",
    formFields: [
      {
        icon: "FileInput",
        iconLabel: "Input Field",
      },
      {
        icon: "CircleChevronDown",
        iconLabel: "Dropdown",
      },
      {
        icon: "Paperclip",
        iconLabel: "Attachment",
      },
      {
        icon: "ListPlus",
        iconLabel: "Multiple Choices",
      },
    ],
  },
  {
    label: "Middle Name",
    formFields: [
      {
        icon: "FileInput",
        iconLabel: "Input Field",
      },
      {
        icon: "CircleChevronDown",
        iconLabel: "Dropdown",
      },
      {
        icon: "Paperclip",
        iconLabel: "Attachment",
      },
      {
        icon: "ListPlus",
        iconLabel: "Multiple Choices",
      },
    ],
  },
  {
    label: "Last Name",
    formFields: [
      {
        icon: "FileInput",
        iconLabel: "Input Field",
      },
      {
        icon: "CircleChevronDown",
        iconLabel: "Dropdown",
      },
      {
        icon: "Paperclip",
        iconLabel: "Attachment",
      },
      {
        icon: "ListPlus",
        iconLabel: "Multiple Choices",
      },
    ],
  },
  {
    label: "Email",
    formFields: [
      {
        icon: "FileInput",
        iconLabel: "Input Field",
      },
      {
        icon: "CircleChevronDown",
        iconLabel: "Dropdown",
      },
      {
        icon: "Paperclip",
        iconLabel: "Attachment",
      },
      {
        icon: "ListPlus",
        iconLabel: "Multiple Choices",
      },
    ],
  },
  {
    label: "Contact Number",
    formFields: [
      {
        icon: "FileInput",
        iconLabel: "Input Field",
      },
      {
        icon: "CircleChevronDown",
        iconLabel: "Dropdown",
      },
      {
        icon: "Paperclip",
        iconLabel: "Attachment",
      },
      {
        icon: "ListPlus",
        iconLabel: "Multiple Choices",
      },
    ],
  },
  {
    label: "Resume",
    formFields: [
      {
        icon: "FileInput",
        iconLabel: "Input Field",
      },
      {
        icon: "CircleChevronDown",
        iconLabel: "Dropdown",
      },
      {
        icon: "Paperclip",
        iconLabel: "Attachment",
      },
      {
        icon: "ListPlus",
        iconLabel: "Multiple Choices",
      },
    ],
  },
];
export const addressInformation: PersonalInformationProps[] = [
  {
    label: "Street",
    formFields: [
      {
        icon: "FileInput",
        iconLabel: "Input Field",
      },
      {
        icon: "CircleChevronDown",
        iconLabel: "Dropdown",
      },
      {
        icon: "Paperclip",
        iconLabel: "Attachment",
      },
      {
        icon: "ListPlus",
        iconLabel: "Multiple Choices",
      },
    ],
  },
  {
    label: "State",
    formFields: [
      {
        icon: "FileInput",
        iconLabel: "Input Field",
      },
      {
        icon: "CircleChevronDown",
        iconLabel: "Dropdown",
      },
      {
        icon: "Paperclip",
        iconLabel: "Attachment",
      },
      {
        icon: "ListPlus",
        iconLabel: "Multiple Choices",
      },
    ],
  },
  {
    label: "City",
    formFields: [
      {
        icon: "FileInput",
        iconLabel: "Input Field",
      },
      {
        icon: "CircleChevronDown",
        iconLabel: "Dropdown",
      },
      {
        icon: "Paperclip",
        iconLabel: "Attachment",
      },
      {
        icon: "ListPlus",
        iconLabel: "Multiple Choices",
      },
    ],
  },
  {
    label: "Postal Code",
    formFields: [
      {
        icon: "FileInput",
        iconLabel: "Input Field",
      },
      {
        icon: "CircleChevronDown",
        iconLabel: "Dropdown",
      },
      {
        icon: "Paperclip",
        iconLabel: "Attachment",
      },
      {
        icon: "ListPlus",
        iconLabel: "Multiple Choices",
      },
    ],
  },
  {
    label: "Country",
    formFields: [
      {
        icon: "FileInput",
        iconLabel: "Input Field",
      },
      {
        icon: "CircleChevronDown",
        iconLabel: "Dropdown",
      },
      {
        icon: "Paperclip",
        iconLabel: "Attachment",
      },
      {
        icon: "ListPlus",
        iconLabel: "Multiple Choices",
      },
    ],
  },
];

export const professionalInformationColumn = [
  { key: "title", label: "" },
  { key: "mandatory", label: "Mandatory" },
  { key: "optional", label: "Optional" },
  { key: "disabled", label: "Disables" },
];

export const professionalInformationData = [
  {
    title: "Resume",
    mandatory: "checkbox",
    optional: "checkbox",
    disabled: "checkbox",
  },
  {
    title: "Work Experience",
    mandatory: "checkbox",
    optional: "checkbox",
    disabled: "checkbox",
  },
  {
    title: "Education Details",
    mandatory: "checkbox",
    optional: "checkbox",
    disabled: "checkbox",
  },
  {
    title: "Notice Period",
    mandatory: "checkbox",
    optional: "checkbox",
    disabled: "checkbox",
  },
];
export const jobBoardColumn = [
  { key: "jobBoardName", label: "Job Board Name" },
  { key: "type", label: "Type" },
  { key: "status", label: "Status" },
  { key: "action", label: "Action" },
];

export const jobBoardData = [
  {
    jobBoardName: "Resume",
    type: "free",
    status: "Published",
    action: "Publish",
  },
  {
    jobBoardName: "Work Experience",
    type: "free",
    status: "Published",
    action: "Unpublish",
  },
  {
    jobBoardName: "Education Details",
    type: "free",
    status: "Published",
    action: "Publish",
  },
  {
    jobBoardName: "Notice Period",
    type: "free",
    status: "Published",
    action: "Unpublish",
  },
];

// ========== RECRUITER - DASHBOARD ========== //
export const recruiterDashbaordCards: DashboardCard[] = [
  { label: "Applied", count: 0, icon: "folderOpen" },
  { label: "Screening", count: 10, icon: "folderOpen" },
  { label: "Interviewing", count: 3, icon: "mic" },
  { label: "Offered", count: 5, icon: "user" },
  { label: "Hired", count: 5, icon: "handshake" },
  { label: "Rejected", count: 5, icon: "userX" },
];

export const adminClientData: AdminClientDataProps[] = [
  {
    id: 6588,
    Date: "09/24/2024",
    "Company Name": "Yeti Labs",
    logo: "/_static/ray_it.jpg",
    "Assigned to": "Rheea",
    "Phone Number": "+850485048",
  },
  {
    id: 798,
    Date: "09/24/2024",
    "Company Name": "Upselsa",
    logo: "/_static/ray_it.jpg",
    "Assigned to": "Darshan",
    "Phone Number": "+850485048",
  },
  {
    id: 7979,
    Date: "09/24/2024",
    "Company Name": "Swoyef labs",
    logo: "/_static/ray_it.jpg",
    "Assigned to": "Dev Poudel",
    "Phone Number": "+850485048",
  },
  {
    id: 6775457,
    Date: "09/24/2024",
    "Company Name": "Theta Tech",
    logo: "/_static/ray_it.jpg",
    "Assigned to": "Darshan",
    "Phone Number": "+850485048",
  },
  {
    id: 879,
    Date: "09/24/2024",
    "Company Name": "Black Tech",
    logo: "/_static/ray_it.jpg",
    "Assigned to": "Akash Shrestha",
    "Phone Number": "+850485048",
  },
  {
    id: 879879,
    Date: "09/24/2024",
    "Company Name": "Websoft Technology",
    logo: "/_static/ray_it.jpg",
    "Assigned to": "Jasmine",
    "Phone Number": "+850485048",
  },
];

export const adminClientInfo: WorkForceProfileInfoProps = {
  companyName: "Rays IT company",
  companyField: "Information Technology",
  // employeeName: "John Harrison",
  // jobTitle: "Hiring Manager",
  email: "john@example.com",
  location: "2323 Sydney, NY",
  under: "Mathew Mchem",
  number: "+477 344 343",
};

export const clientInfo: ClientInfoProps = {
  Contact: "se30303",
  "Account Manager": "Darshan",
  Industry: "Development",
  About: "In-progress",
};

export const addressInfo: AddressInfoProps = {
  Street: "123 jon von",
  City: "Hamilton",
  State: "Texas",
  "Postal Code": 3370,
  Country: "USA",
};

// export const WorkForceUser: WorkForceUserProps[] = [
//   {
//     id: 1,
//     name: "Darshan",
//     email: "walter@gmail.com",
//     workNumber: 657657,
//     avatar: "/_static/profile-pic.jpg", // Add optional avatar field
//     jobTitle: "frontend",
//     phone: 65765675757,
//   },
//   {
//     id: 2,
//     name: "Darshan",
//     email: "walter@gmail.com",
//     workNumber: 657657,
//     avatar: "/_static/profile-pic.jpg", // Add optional avatar field
//     jobTitle: "frontend",
//     phone: 65765675757,
//   },
//   {
//     id: 3,
//     name: "Darshan",
//     email: "walter@gmail.com",
//     workNumber: 657657,
//     avatar: "/_static/profile-pic.jpg", // Add optional avatar field
//     jobTitle: "frontend",
//     phone: 65765675757,
//   },
//   {
//     id: 4,
//     name: "Darshan",
//     email: "walter@gmail.com",
//     workNumber: 657657,
//     avatar: "/_static/profile-pic.jpg", // Add optional avatar field
//     jobTitle: "frontend",
//     phone: 65765675757,
//   },
//   {
//     id: 5,
//     name: "Darshan",
//     email: "walter@gmail.com",
//     workNumber: 657657,
//     avatar: "/_static/profile-pic.jpg", // Add optional avatar field
//     jobTitle: "frontend",
//     phone: 65765675757,
//   },
// ];

export const candidate: CandidateProps[] = [
  {
    id: 4323423,
    name: "Dev Poudel",
    city: "Pokhara , Nepal",
    stage: "interview ",
    modifiedTime: "May 17 , 11:00am",
    avatar: "/_static/profile-pic.jpg",
  },
  {
    id: 543453,
    name: "Darshan",
    city: "Pokhara , Nepal",
    stage: "interview ",
    modifiedTime: "May 17 , 11:00am",
    avatar: "/_static/profile-pic.jpg",
  },
  {
    id: 3245252,
    name: "Prajun",
    city: "Pokhara , Nepal",
    stage: "interview ",
    modifiedTime: "May 17 , 11:00am",
    avatar: "/_static/profile-pic.jpg",
  },
  {
    id: 879678765,
    name: "Ayuash",
    city: "Pokhara , Nepal",
    stage: "interview ",
    modifiedTime: "May 17 , 11:00am",
    avatar: "/_static/profile-pic.jpg",
  },
  {
    id: 87686577654,
    name: "Reeha",
    city: "Pokhara , Nepal",
    stage: "interview ",
    modifiedTime: "May 17 , 11:00am",
    avatar: "/_static/profile-pic.jpg",
  },
  {
    id: 543465443,
    name: "Sagar",
    city: "Pokhara , Nepal",
    stage: "interview ",
    modifiedTime: "May 17 , 11:00am",
    avatar: "/_static/profile-pic.jpg",
  },
  {
    id: 5634563,
    name: "Ashura",
    city: "Pokhara , Nepal",
    stage: "interview ",
    modifiedTime: "May 17 , 11:00am",
    avatar: "/_static/profile-pic.jpg",
  },
];

export const messagingTemplate: MessagingTemplateProps[] = [
  {
    id: 1,
    title: "Application Acknowledgment",
    description: "Confirms receipt of the candidate’s application.",
    icon: "FilePenLine",
    link: "/admin/messaging/applicationAcknowledgement",
  },
  {
    id: 2,
    title: "Interview Invitation",
    description:
      "Schedules an interview and provides details like date, time, and location/meeting link.",
    icon: "FilePenLine",
    link: "/admin/messaging/applicationAcknowledgement",
  },
  {
    id: 3,
    title: "Application Status Update",
    description:
      "Informs the candidate about the progress of their application (e.g., moved to the next round, under review).",
    icon: "FilePenLine",
    link: "/admin/messaging/applicationAcknowledgement",
  },
  {
    id: 4,
    title: "Job Offer Email",
    description: "Confirms receipt of the candidate’s application.",
    link: "/admin/messaging/applicationAcknowledgement",
    icon: "FilePenLine",
  },
];

export const userRoles: UserRolesProps[] = [
  {
    id: 1,
    role: "Hiring Manager",
    assign: "2 users",
  },
  {
    id: 2,
    role: "IT Administrator",
    assign: "2 users",
  },
  {
    id: 3,
    role: "Recruiter",
    assign: "2 users",
  },
  {
    id: 4,
    role: "Interviewer",
    assign: "2 users",
  },
  {
    id: 5,
    role: "Restricted User",
    assign: "2 users",
  },
];

export const FunnelStages = [
  { label: "Applied", value: 18, color: "#5B21B6" },
  { label: "Screening", value: 14, color: "#1E3A8A" },
  { label: "Interviewing", value: 8, color: "#7C3AED" },
  { label: "Offered", value: 7, color: "#0E7490" },
  { label: "Hired", value: 5, color: "#6D28D9" },
  { label: "Rejected", value: 10, color: "#0B5C75" },
];

export type TrendPoint = {
  label: string;
  applications: number;
  hired: number;
  rejected: number;
};

export const JobTrendsMonthly: TrendPoint[] = [
  { label: "Jan", applications: 620, hired: 520, rejected: 360 },
  { label: "Feb", applications: 640, hired: 560, rejected: 400 },
  { label: "Mar", applications: 780, hired: 530, rejected: 350 },
  { label: "Apr", applications: 820, hired: 610, rejected: 500 },
  { label: "May", applications: 760, hired: 580, rejected: 450 },
  { label: "Jun", applications: 800, hired: 600, rejected: 520 },
  { label: "Jul", applications: 900, hired: 590, rejected: 480 },
  { label: "Aug", applications: 840, hired: 610, rejected: 430 },
  { label: "Sep", applications: 860, hired: 620, rejected: 470 },
  { label: "Oct", applications: 820, hired: 590, rejected: 400 },
  { label: "Nov", applications: 660, hired: 570, rejected: 360 },
  { label: "Dec", applications: 630, hired: 560, rejected: 380 },
];
