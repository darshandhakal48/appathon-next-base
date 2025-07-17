import { JobFormType } from "@/components/forms/schema";
import { Icons } from "@/components/ui/icons";

export type IconName = keyof typeof Icons;

export type SidebarLinkItem = {
    label: string;
    icon: IconName;
    href: string;
};

export type DashboardCard = { label: string; count: number; icon: IconName };
export type UserActivity = { color: string; status: string; message: string };
export type Job = {
    id: string;
    title: string;
    company: string;
    location: string;
    type: string;
    posted: string;
    expires: string;
    companyImage: string;
};
export interface Application extends Job {
    status: string;
    appliedDate: string;
}

export interface WorkForceProfileInfoProps {
    employeeName?: string;
    jobTitle?: string;
    under?: string;
    companyName?: string;
    companyField?: string;
    location: string;
    email: string;
    number: string;
}

export interface JobCardProps {
    id: number;
    role: string;
    startDate: string;
    endDate: string;
    logo: string;
    companyName: string;
    status: string;
    updatedBy: string;
    location: string;
    expiresIn: string;
    type: string;
}

export interface ConfirmJobDetailsProps {
    jobDetails: JobFormType;

    setStep: React.Dispatch<React.SetStateAction<1 | 2 | 3>>;
}
