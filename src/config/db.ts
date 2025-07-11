import {
    Application,
    DashboardCard,
    Job,
    UserActivity,
    WorkForceProfileInfoProps,
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

// export const workForceTableColumn =
