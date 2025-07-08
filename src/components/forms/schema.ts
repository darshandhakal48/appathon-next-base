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
