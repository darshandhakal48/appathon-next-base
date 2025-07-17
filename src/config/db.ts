import {
    Application,
    CurrencyProps,
    DashboardCard,
    Job,
    JobCardProps,
    PersonalInformationProps,
    UserActivity,
    WorkForceProfileInfoProps,
} from "@/lib/type";
import { id } from "zod/v4/locales";
import { LucideProps } from "lucide-react";

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
        status: "Interview Scheduled",
        message:
            "Your interview for [Job Title] is set for [Date & Time]. Good luck!",
        color: "success",
    },
    {
        status: "Application Under Review",
        message:
            "Your application for [Job Title] is currently under review. We'll keep you posted.",
        color: "success",
    },
    {
        status: "Offer Extended",
        message:
            "Congratulations! You've received an offer for [Job Title]. Check the details now!",
        color: "success",
    },
    {
        status: "Application Rejected",
        message:
            "We appreciate your interest in [Company]. Unfortunately, we won't be moving forward with your application for [Job Title] at this time.",
        color: "success",
    },
];

export const candidateJobs: Job[] = [
    {
        id: "1",
        title: "Software Engineering",
        company: "Rays IT Solutions",
        location: "TX 4340, USA (Full Time)",
        type: "Full Time",
        posted: "3 weeks ago",
        expires: "Expires in 4 days",
        companyImage: "/_static/40x40.svg",
    },
    {
        id: "2",
        title: "Software Engineering",
        company: "Rays IT Solutions",
        location: "TX 4340, USA (Full Time)",
        type: "Full Time",
        posted: "3 weeks ago",
        expires: "Expires in 4 days",
        companyImage: "/_static/40x40.svg",
    },
    {
        id: "3",
        title: "Software Engineering",
        company: "Rays IT Solutions",
        location: "TX 4340, USA (Full Time)",
        type: "Full Time",
        posted: "3 weeks ago",
        expires: "Expires in 4 days",
        companyImage: "/_static/40x40.svg",
    },
    {
        id: "4",
        title: "Software Engineering",
        company: "Rays IT Solutions",
        location: "TX 4340, USA (Full Time)",
        type: "Full Time",
        posted: "3 weeks ago",
        expires: "Expires in 4 days",
        companyImage: "/_static/40x40.svg",
    },
    {
        id: "5",
        title: "Software Engineering",
        company: "Rays IT Solutions",
        location: "TX 4340, USA (Full Time)",
        type: "Full Time",
        posted: "3 weeks ago",
        expires: "Expires in 4 days",
        companyImage: "/_static/40x40.svg",
    },
];

export const candidateUserProfiles = [
    {
        name: "Walter White",
        recentMessage: "This is a message",
        time: "3 weeks ago",
        image: "/_static/40x40.svg",
    },
    {
        name: "Tony Stark",
        recentMessage: "This is a message",
        time: "4 weeks ago",
        image: "/_static/40x40.svg",
    },
    {
        name: "Captain America",
        recentMessage: "This is a message",
        time: "2 weeks ago",
        image: "/_static/40x40.svg",
    },
    {
        name: "Black Widow",
        recentMessage: "This is a message",
        time: "1 weeks ago",
        image: "/_static/40x40.svg",
    },
];

export const candidateApplication: Application[] = [
    {
        id: "1",
        title: "Software Engineering",
        company: "Rays IT Solutions",
        location: "TX 4340, USA (Full Time)",
        type: "Full Time",
        posted: "3 weeks ago",
        expires: "Expires in 4 days",
        companyImage: "/_static/40x40.svg",
        appliedDate: "2025-05-01",
        status: "shortlisted",
    },
    {
        id: "2",
        title: "Software Engineering",
        company: "Rays IT Solutions",
        location: "TX 4340, USA (Full Time)",
        type: "Full Time",
        posted: "3 weeks ago",
        expires: "Expires in 4 days",
        companyImage: "/_static/40x40.svg",
        appliedDate: "2025-05-01",
        status: "shortlisted",
    },
    {
        id: "3",
        title: "Software Engineering",
        company: "Rays IT Solutions",
        location: "TX 4340, USA (Full Time)",
        type: "Full Time",
        posted: "3 weeks ago",
        expires: "Expires in 4 days",
        companyImage: "/_static/40x40.svg",
        appliedDate: "2025-05-01",
        status: "shortlisted",
    },
    {
        id: "4",
        title: "Software Engineering",
        company: "Rays IT Solutions",
        location: "TX 4340, USA (Full Time)",
        type: "Full Time",
        posted: "3 weeks ago",
        expires: "Expires in 4 days",
        companyImage: "/_static/40x40.svg",
        appliedDate: "2025-05-01",
        status: "shortlisted",
    },
    {
        id: "5",
        title: "Software Engineering",
        company: "Rays IT Solutions",
        location: "TX 4340, USA (Full Time)",
        type: "Full Time",
        posted: "3 weeks ago",
        expires: "Expires in 4 days",
        companyImage: "/_static/40x40.svg",
        appliedDate: "2025-05-01",
        status: "shortlisted",
    },
];

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
};

export const DashboardUserActivity: UserActivity[] = [
    {
        status: "Interview Scheduled",
        message:
            "Your interview for [Job Title] is set for [Date & Time]. Good luck!",
        color: "success",
    },
    {
        status: "Application Under Review",
        message:
            "Your application for [Job Title] is currently under review. We'll keep you posted.",
        color: "success",
    },
    {
        status: "Offer Extended",
        message:
            "Congratulations! You've received an offer for [Job Title]. Check the details now!",
        color: "success",
    },
    {
        status: "Application Rejected",
        message:
            "We appreciate your interest in [Company]. Unfortunately, we won't be moving forward with your application for [Job Title] at this time.",
        color: "success",
    },
];

export const jobPostingData: JobCardProps[] = [
    {
        id: 2231251,
        role: "Software Engineering",
        startDate: "09/24/2024",
        endDate: "09/24/2024",
        companyName: "Rays IT Solutions",
        location: "TX 4340, USA",
        logo: "/_static/ray_it.jpg",
        expiresIn: "Expires in 4 days",
        status: "open",
        updatedBy: "Walter White",
        type: "Full Time",
    },
    {
        id: 4353343,
        role: "Frontend",
        startDate: "09/24/2024",
        endDate: "09/24/2024",
        companyName: "Aaramba IT",
        location: "London , Uk",
        logo: "/_static/ray_it.jpg",
        expiresIn: "Expires in 1 days",
        status: "open",
        updatedBy: "John Cena",
        type: "Part Time",
    },
    {
        id: 14354,
        role: "Backend",
        startDate: "09/24/2024",
        endDate: "09/24/2024",
        companyName: "Black Tech",
        location: "Delhi , India",
        logo: "/_static/ray_it.jpg",
        expiresIn: "Expires in 3 days",
        status: "open",
        updatedBy: "Darshan",
        type: "Hybrid",
    },
    {
        id: 8769596,
        role: "Research Intern",
        startDate: "09/24/2024",
        endDate: "09/24/2024",
        companyName: "Yeti Labs",
        location: "Pokhara , Nepal",
        logo: "/_static/ray_it.jpg",
        expiresIn: "Expires in 7 days",
        status: "open",
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
