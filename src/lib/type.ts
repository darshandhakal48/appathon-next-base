import { Dispatch, SetStateAction } from "react";

import { Icons } from "@/components/ui/icons";
import { JobFormType } from "@/components/forms/schema";

export type IconName = keyof typeof Icons;

export type SidebarLinkItem = {
  label: string;
  icon: IconName;
  href?: string;
  items?: SidebarLinkItem[];
};

export type PayrollCard = {
  label: string;
  value: string;
};

export type DashboardCard = { label: string; count: number; icon: IconName };
export type UserActivity = {
  color: string;
  status: string;
  message: string;
  id: number;
};

export interface Application extends JobCardProps {
  id: string;
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
  JobId: number;
  JobTitle: string;
  Date: string;
  endDate: string;
  logo: string;
  ClientName: string;
  Status: string;
  updatedBy: string;
  City: string;
  expiresIn: string;
  type: string;
  state: string;
  zipCode: string;
  salary?: number;
  workExperience?: string;
  industryType?: string;
  employeeType?: string;
  educationLevel?: string;
  jobType?: string;
  // salary? : number;
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

export type SortDirection = "asc" | "desc" | null;

export interface SortConfig<T> {
  key: keyof T;
  direction: Exclude<SortDirection, null>;
}

export interface Column<T> {
  key: keyof T;
  header: string;
  width?: string;
  sortable?: boolean;

  render?: (value: any, row: T) => React.ReactNode;
  // New: Hide column from display but still accessible for custom rendering
  hidden?: boolean;
}

export interface CustomCellConfig<T> {
  // Target column key where the custom cell will be rendered
  targetKey: keyof T;
  // Source keys to combine (e.g., ['image', 'employeeName'])
  sourceKeys: (keyof T)[];
  // Custom render function for the combined cell

  render: (values: any[], row: T) => React.ReactNode;
  // Header for the custom cell
  header: string;
  // Width for the custom cell
  width?: string;
  sortable?: boolean;
}

export interface TableProps<T> {
  data: T[];
  excludeColumns?: (keyof T)[]; // New prop to exclude specific columns
  columns?: Column<T>[];
  customCells?: CustomCellConfig<T>[];
  autoGenerateColumns?: boolean;
  excludeIdColumns?: boolean;
  onRowClick?: (row: T) => void;
  loading?: boolean;
  emptyMessage?: string;
  className?: string;
  enablePagination?: boolean;
  pageSize?: number;
  pageSizeOptions?: number[];
  showPageSizeSelector?: boolean;
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
  icon: IconName;
  link: string;
}

export interface UserRolesProps {
  role: string;
  assign: string;
  id: number;
}

export type PageId =
  | "View"
  | "Create"
  | "Edit"
  | "Delete"
  | "Change Application Status"
  | "Add Notes"
  | "View Profile"
  | "Schedule Interviews"
  | "View Public"
  | "Add Feedback"
  | "View Assigned"
  | "Confirm Reschedule"
  | "Assign Roles"
  | "View Roles"
  | "Advanced"
  | "Export"
  | "Approve";

export interface PermissionForPageProps {
  pageId: PageId;
  pageTitle: string;
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

export interface CustomPagianationProps {
  setActivePage: Dispatch<SetStateAction<number>>;
  activePage: number;
  totalPages: number;
}

export interface CustomPaginationHookProps<T> {
  // key: (string | number)[];
  key: string;
  path: string;
  totalPages: number;
  search_title_skil_company_id: string;
  search_city_state: string;
  filterFn?: (data: T[]) => T[];
}

export interface JobDetail {
  "Job Type": string;
  "Industry Type": string;
  "Client Name": string;
  "Work Experience (in years)": string;
  "Created on": string;
  "Updated by": string;
  Location: string;
  "Employment Type": string;
  "Experience Level": string;
  Salary: string;
  Education: string;
  Deadline: string;
}

export interface JobStatus {
  Applied: number;
  Screening: number;
  Interviewing: number;
  Offered: number;
  Hired: number;
  Rejected: number;
}

export interface JobData {
  "job detail": JobDetail;
  skills: string[];
  "Job Description": string;
  requirements: string[];
  companyName: string;
  companyImage: string;
  jobType: string;
  jobStatus: JobStatus;
}

export type JobStatusProp = "active" | "pending" | "draft" | "close";

export interface DateRangeType {
  from: Date | null;
  to: Date | null;
}

export interface FilterState {
  workExperience: string[];
  industryType: string[];
  employeeType: string[];
  jobType: string[];
  educationLevel: string[];
  salaryRange: { min: number; max: number };
  uploadedBy: string[];
}

export type SalaryRange = {
  min: number;
  max: number;
};

export interface IHandleJobPostingHeaderProps {
  searchJobTitle: string;
  setSearchJobTitle: React.Dispatch<React.SetStateAction<string>>;
  searchCityState: string;
  setSearchCityState: React.Dispatch<React.SetStateAction<string>>;
  selectedStatus: string;
  setSelectedStatus: React.Dispatch<React.SetStateAction<JobStatusProp>>;
  dateRange: DateRangeType;
  setDateRange: React.Dispatch<React.SetStateAction<DateRangeType>>;
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}
