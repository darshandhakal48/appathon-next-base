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

export const EmployeeAttachmentFormSchema = z.object({
    attachment: z.string(),
});

export const EmployeeFormSchema = z.object({
    info: EmployeeInfoFormSchema,
    address: EmployeeAddressFormSchema,
    attachment: EmployeeAttachmentFormSchema,
});

export type EmployeeAttachmentFormType = z.infer<
    typeof EmployeeAttachmentFormSchema
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
            endingRange: z.coerce
                .number()
                .min(1, { message: "Enter ending salary" }),
            currency: z.string().min(1, { message: "Select a currency" }),
        })
        .refine((data) => data.startingRange < data.endingRange, {
            message: "ending price range should be greater than starting range",
            path: ["endingRange"],
        }),
    industry: z.string().min(1, { message: "Select industry" }),
    workExperience: z
        .string()
        .min(1, { message: "Enter your work experience" }),
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
})

// export type Job
export type JobPostInfoType = z.infer<typeof JobPostInfoFormSchema>;
export type JobAddressInfoType = z.infer<typeof JobAddressInfoFormSchema>;
export type JobDescriptionType = z.infer<typeof JobAddressInfoFormSchema>;
export type JobFormType = z.infer<typeof JobFormSchema>;
export type SalaryStructureFormType = z.infer<typeof SalaryStructureSchema>




