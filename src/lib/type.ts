import { JobFormType } from "@/components/forms/schema";
import { Icons } from "@/components/ui/icons";

export type IconName = keyof typeof Icons;

export type SidebarLinkItem = {
    label: string;
    icon: IconName;
    href: string;
};

export type DashboardCard = { label: string; count: number; icon: IconName };
export type UserActivity = {
    color: string;
    status: string;
    message: string;
    id: number;
};
export type Job = {
    id: string;
    title: string;
    noOfPositions: string;
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
    image?: string;
}

export interface JobCardProps {
    "Job Id": number;
    "Job Title": string;
    Date: string;
    endDate: string;
    logo: string;
    "Client Name": string;
    Status: string;
    updatedBy: string;
    City: string;
    expiresIn: string;
    type: string;
}

export type ProfileRole = "Candidate" | "Company" | "Hiring  Manager";

export interface ConfirmJobDetailsProps {
    jobDetails: JobFormType;

    setStep: React.Dispatch<React.SetStateAction<1 | 2 | 3>>;
}

export interface CurrencyProps {
    code: string;
    sign: string;
}

export interface FormFieldsProps {
    icon: IconName;
    iconLabel: string;
}
export interface PersonalInformationProps {
    label: string;
    formFields: FormFieldsProps[];
}

export type DefaultModalSizes = "sm" | "md" | "lg" | "xl" | "full";

export interface Option {
    value: string;
    label: string;
    image?: string;
}

export interface AdminClientDataProps {
    id: number;
    Date: string;
    "Company Name": string;
    logo: string;
    "Assigned to": string;
    "Phone Number": string;
}

export type AdminFormType = "employee" | "client" | "candidates";

export interface ClientInfoProps {
    Contact: string;
    "Account Manager": string;
    Industry: string;
    About: string;
}
export interface AddressInfoProps {
    Street: string;
    City: string;
    State: string;
    "Postal Code": number;
    Country: string;
}

// ==== tabnle interfaces =====
export interface Column<T> {
    key: keyof T;
    header: string;
    render?: (value: T[keyof T], row: T) => React.ReactNode;
    sortable?: boolean;
    width?: string;
}

export interface TableProps<T> {
    data: T[];
    columns?: Column<T>[];
    autoGenerateColumns?: boolean;
    onRowClick?: (row: T) => void;
    loading?: boolean;
    emptyMessage?: string;
    className?: string;
}

export type SortDirection = "asc" | "desc" | null;
export type SortConfig<T> = {
    key: keyof T;
    direction: SortDirection;
};

export interface WorkForceUserProps {
    id: number;
    name: string;
    email: string;
    workNumber: number;
    isActive?: boolean;
    avatar?: string; // Add optional avatar field
    jobTitle: string;
    phone: number;
}

export interface CandidateProps {
    id: number;
    name: string;
    city: string;
    stage: string;
    modifiedTime: string;
    avatar?: string;
}

export interface MessagingTemplateProps {
    id: number;
    title: string;
    description: string;
    icon: string;
}
