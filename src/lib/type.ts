import { JobFormType } from "@/components/forms/schema";
import { Icons } from "@/components/ui/icons";

export type IconName = keyof typeof Icons;

export type SidebarLinkItem = {
  label: string;
  icon: IconName;
  href?: string;
  items?: SidebarLinkItem[]
};

export type PayrollCard = {
  label: string;
  value: string;
}

export type DashboardCard = { label: string; count: number; icon: IconName };
export type UserActivity = {
  color: string;
  status: string;
  message: string;
  id: number;
};
export type Job = {
  "Job Id": string;
  "Job Title": string;
  "No. of Positions": string;
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

export type SortDirection = "asc" | "desc" | null

export interface SortConfig<T> {
  key: keyof T
  direction: Exclude<SortDirection, null>
}

export interface Column<T> {
  key: keyof T
  header: string
  width?: string
  sortable?: boolean
  render?: (value: any, row: T) => React.ReactNode
  // New: Hide column from display but still accessible for custom rendering
  hidden?: boolean
}

export interface CustomCellConfig<T> {
  // Target column key where the custom cell will be rendered
  targetKey: keyof T
  // Source keys to combine (e.g., ['image', 'employeeName'])
  sourceKeys: (keyof T)[]
  // Custom render function for the combined cell
  render: (values: any[], row: T) => React.ReactNode
  // Header for the custom cell
  header: string
  // Width for the custom cell
  width?: string
  sortable?: boolean
}

export interface TableProps<T> {
  data: T[]
  excludeColumns?: (keyof T)[] // New prop to exclude specific columns
  columns?: Column<T>[]
  customCells?: CustomCellConfig<T>[]
  autoGenerateColumns?: boolean
  excludeIdColumns?: boolean
  onRowClick?: (row: T) => void
  loading?: boolean
  emptyMessage?: string
  className?: string
}

export interface WorkForceUserProps {
  id: number;
  employeeName: string;
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
export interface Employee {
  id: string;
  employeeName: string;
  basePay: number;
  bonus: number;
  deductions: number;
  tax: number;
  image: string;
  netPay: number;
}

export interface EmployeePayment {
  id: string;
  image: string;
  employeeName: string;
  payrollPeriod: string;
  netSalaryAmount: number;
  paymentStatus: string;
  dateOfPayment: string;
  modeOfPayment: string;
  action: string;
}

export type Interview = {
  id: string;
  status: string;
  interviewType: string;
  candidateName: string;
  jobTitle: string;
  client: string;
  date: string;
  timeRange: string;
  assignedTo: {
    initials: string;
    fullName: string;
  };
};
