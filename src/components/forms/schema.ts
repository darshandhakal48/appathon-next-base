import * as z from "zod";

export const EmployeeInfoFormSchema = z.object({
  employeeName: z
    .string()
    .min(2, { message: "Employee name must be at least 2 characters" }),
  accountManager: z
    .string()
    .min(2, { message: "Manager must contain at least 2 characters" })
    .max(15, { message: "Manager must not be larger then 15 characters" }),
  contactNumber: z
    .string()
    .min(10, { message: "Contact number must be at least 10 characters" }),
  industry: z.string().min(1, { message: "Select a industry" }),
  email: z.string().email(),
  about: z.string().min(1, { message: "This field is required" }),
});

export const EmployeeAddressFormSchema = z.object({
  street: z.string().min(1, { message: "Enter your street" }),
  state: z.string().min(1, { message: "Enter your state" }),
  city: z.string().min(1, { message: "Enter your city" }),
  postalCode: z.string().min(1, { message: "Enter postal code" }),
  country: z.string().min(1, { message: "Enter your country" }),
});

export const AdditionalFormAttachmentSchema = z.object({
  // attachment: z
  //   .instanceof(FileList)
  //   .refine((file) => file?.length === 1, "Attach your File"),
  attachment: z.custom<FileList>(
    (val) => val instanceof FileList && val.length === 1,
    {
      message: "Attach your File",
    },
  ),
  others: z.instanceof(FileList).optional(),
});

export const EmployeeFormSchema = z.object({
  info: EmployeeInfoFormSchema,
  address: EmployeeAddressFormSchema,
  // Attachment: AdditionalFormAttachmentSchema,
});

export type AdditionalFormAttachmentType = z.infer<
  typeof AdditionalFormAttachmentSchema
>;

export type EmployeeAddressFormType = z.infer<typeof EmployeeAddressFormSchema>;

export type EmployeeInfoFormType = z.infer<typeof EmployeeInfoFormSchema>;

export type EmployeeFormType = z.infer<typeof EmployeeFormSchema>;

// ====================== admin / jobposting / create new job form schemas =====================
export const JobPostInfoFormSchema = z.object({
  jobTitle: z.string().min(1, { message: "Job title is required" }),
  clientName: z.string().min(1, { message: "Client name is required" }),
  salary: z
    .object({
      startingRange: z.coerce
        .number()
        .min(1, { message: "enter starting salary" }),
      endingRange: z.coerce.number().min(1, { message: "Enter ending salary" }),
      currency: z.string().min(1, { message: "Select a currency" }),
    })
    .refine((data) => data.startingRange < data.endingRange, {
      message: "ending price range should be greater than starting range",
      path: ["endingRange"],
    }),
  industry: z.string().min(1, { message: "Select industry" }),
  workExperience: z.string().min(1, { message: "Enter your work experience" }),
  jobType: z.string().min(1, { message: "Select job type" }),
});

export const JobAddressInfoFormSchema = z.object({
  street: z.string().min(1, { message: "Enter your street" }),
  state: z.string().min(1, { message: "Enter your state" }),
  city: z.string().min(1, { message: "Enter your city" }),
  postalCode: z.string().min(1, { message: "Enter postal code" }),
  country: z.string().min(1, { message: "Enter your country" }),
});

export const JobDescriptionFormSchema = z.object({
  description: z
    .string()
    .min(50, { message: "Job description must be atleast 50 character" }),
  requirement: z
    .string()
    .min(50, { message: "Job requirement must be atleast 50 characters" }),
});

export const JobFormSchema = z.object({
  jobInfo: JobPostInfoFormSchema,
  jobAddress: JobAddressInfoFormSchema,
  jobDescription: JobDescriptionFormSchema,
});

export const SalaryStructureSchema = z.object({
  templateName: z.string().min(1, "Template name is required"),
  level: z.string().min(1, "Level is required"),
  department: z.string().min(1, "Please select a department"),
  basic: z
    .string()
    .min(1, "Basic amount is required")
    .regex(/^\d+(\.\d{1,2})?$/, "Enter a valid amount"),
  hra: z
    .string()
    .min(1, "HRA amount is required")
    .regex(/^\d+(\.\d{1,2})?$/, "Enter a valid amount"),
  bonus: z.string().min(1, "Please select a bonus amount"),
  pf: z
    .string()
    .min(1, "PF amount is required")
    .regex(/^\d+(\.\d{1,2})?$/, "Enter a valid amount"),
  tax: z
    .string()
    .min(1, "Tax amount is required")
    .regex(/^\d+(\.\d{1,2})?$/, "Enter a valid amount"),
});

// export type Job
export type JobPostInfoType = z.infer<typeof JobPostInfoFormSchema>;
export type JobAddressInfoType = z.infer<typeof JobAddressInfoFormSchema>;
export type JobDescriptionType = z.infer<typeof JobAddressInfoFormSchema>;
export type JobFormType = z.infer<typeof JobFormSchema>;
export type SalaryStructureFormType = z.infer<typeof SalaryStructureSchema>;

// ================== messaging form schema and type ===============
export const ApplicationAcknowledgementSchema = z.object({
  sendTo: z.string().min(1, { message: "Enter email or job id or name" }),
  subjectName: z.string().min(1, { message: "Enter your subject name" }),
  message: z.string().min(1, { message: "Enter your message" }),
  yourName: z.string().min(1, { message: "Enter your name" }),
  position: z.string().min(1, { message: "Enter your posiiton" }),
  companyName: z.string().min(1, { message: "Enter your company name" }),
});

export const ApplicationFormSchema = z.object({
  ApplicationAcknowledgement: ApplicationAcknowledgementSchema,
  // Attachment: AdditionalFormAttachmentSchema,
});

export type ApplicationAcknowledgementType = z.infer<
  typeof ApplicationAcknowledgementSchema
>;
export type ApplicationFormType = z.infer<typeof ApplicationFormSchema>;

export const BasicMessageSchema = z.object({
  sendTo: z.string().min(1, { message: "Enter email or job id or name" }),
  subjectName: z.string().min(1, { message: "Enter your subject name" }),
  message: z.string().min(1, { message: "Enter your message" }),
});
export const CustomMessageSchema = z.object({
  BasicMessage: BasicMessageSchema,
  Attachment: AdditionalFormAttachmentSchema,
});
export type BasicMessageType = z.infer<typeof BasicMessageSchema>;
export type CustomMessageType = z.infer<typeof CustomMessageSchema>;

// ==> create new role schema (Role and permission)
export const RoleSchema = z.object({
  roleName: z.string().min(1, { message: "Role is required" }),
});
export const RolePermissionSchema = z.object({
  workForcePage: z.object({
    readonly: z.boolean().optional(),
    write: z.boolean().optional(),
  }),
  jobPostingPage: z.object({
    readonly: z.boolean().optional(),
    write: z.boolean().optional(),
  }),
  interviewSchedulingPage: z.object({
    readonly: z.boolean().optional(),
    write: z.boolean().optional(),
  }),
  clientPage: z.object({
    readonly: z.boolean().optional(),
    write: z.boolean().optional(),
  }),
});

export const NewRoleSchema = z.object({
  role: RoleSchema,
  permission: RolePermissionSchema,
});
export type RoleType = z.infer<typeof RoleSchema>;
export type RolePermissionType = z.infer<typeof RolePermissionSchema>;
export type NewRoleType = z.infer<typeof NewRoleSchema>;

const CandidatePermissionSchema = z.object({
  view: z.boolean(),
  create: z.boolean(),
  edit: z.boolean(),
  delete: z.boolean(),
  changeApplicationStatus: z.boolean(),
  addNotes: z.boolean(),
  viewProfile: z.boolean(),
  scheduleInterviews: z.boolean(),
});

export const CandidateSchema = z.object({
  superadmin: CandidatePermissionSchema,
  hiringManager: CandidatePermissionSchema,
  recruiter: CandidatePermissionSchema,
  interviewer: CandidatePermissionSchema,
});

export type CandidateSchemaType = z.infer<typeof CandidateSchema>;
export type CandidatePermissionSchemaType = z.infer<
  typeof CandidatePermissionSchema
>;

const JobPostingPermissionSchema = z.object({
  view: z.boolean(),
  create: z.boolean(),
  edit: z.boolean(),
  delete: z.boolean(),
  approve: z.boolean(),
  viewPublic: z.boolean(),
});

export const JobPostingSchema = z.object({
  superadmin: JobPostingPermissionSchema,
  hiringManager: JobPostingPermissionSchema,
  recruiter: JobPostingPermissionSchema,
  interviewer: JobPostingPermissionSchema,
});
export type JobPostingSchemaType = z.infer<typeof JobPostingSchema>;

const InterviewPermissionSchema = z.object({
  view: z.boolean(),
  create: z.boolean(),
  edit: z.boolean(),
  delete: z.boolean(),
  addFeedback: z.boolean(),
  viewAssigned: z.boolean(),
  confirmReschedule: z.boolean(),
});

export const InterviewSchema = z.object({
  superadmin: InterviewPermissionSchema,
  hiringManager: InterviewPermissionSchema,
  recruiter: InterviewPermissionSchema,
  interviewer: InterviewPermissionSchema,
});
export type InterviewSchemaType = z.infer<typeof InterviewSchema>;

const WorkforcePermissionSchema = z.object({
  view: z.boolean(),
  create: z.boolean(),
  edit: z.boolean(),
  delete: z.boolean(),
  assignRoles: z.boolean(),
  viewRoles: z.boolean(),
});

export const WorkforceSchema = z.object({
  superadmin: WorkforcePermissionSchema,
  hiringManager: WorkforcePermissionSchema,
  recruiter: WorkforcePermissionSchema,
  interviewer: WorkforcePermissionSchema,
});
export type WorkforceType = z.infer<typeof WorkforceSchema>;

const ClientPermissionSchema = z.object({
  view: z.boolean(),
  create: z.boolean(),
  edit: z.boolean(),
  delete: z.boolean(),
  addFeedback: z.boolean(),
  viewAssigned: z.boolean(),
  confirmReschedule: z.boolean(),
});

export const ClientSchema = z.object({
  superadmin: ClientPermissionSchema,
  hiringManager: ClientPermissionSchema,
  recruiter: ClientPermissionSchema,
  interviewer: ClientPermissionSchema,
});
export type ClientSchemaType = z.infer<typeof ClientSchema>;

const AnalyticsPermissionSchema = z.object({
  view: z.boolean(),
  advanced: z.boolean(),
  export: z.boolean(),
});

export const AnalyticsSchema = z.object({
  superadmin: AnalyticsPermissionSchema,
  hiringManager: AnalyticsPermissionSchema,
  recruiter: AnalyticsPermissionSchema,
  interviewer: AnalyticsPermissionSchema,
});
export type AnalyticsSchemaType = z.infer<typeof AnalyticsSchema>;

export type SchemaTypeMap = {
  Candidate: CandidateSchemaType;
  "Job Posting": JobPostingSchemaType;
  Interview: InterviewSchemaType;
  Workforce: WorkforceType;
  Client: ClientSchemaType;
  Analytics: AnalyticsSchemaType;
};

export type PageType = keyof SchemaTypeMap;
