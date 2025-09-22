import { z } from "zod";

/* ── Constants & Reusable Bits ────────────────────────────────────────────── */

export const CURRENCIES = [
  "USD",
  "EUR",
  "GBP",
  "AUD",
  "CAD",
  "JPY",
  "CNY",
] as const;

export const WORK_EXPERIENCE_LEVELS = [
  "Entry Level",
  "Mid Level",
  "Senior Level",
  "Executive",
  "Intern",
] as const;

export const EDUCATION_LEVELS = ["Bachelor", "Masters", "Phd"] as const;

export const INDUSTRIES = [
  "Technology",
  "Healthcare",
  "Finance",
  "Education",
] as const;

export const JOB_TYPES = ["On-site", "Hybrid", "Remote", "Field Work"] as const;

export const EMPLOYMENT_TYPES = [
  "Full-time",
  "Part-time",
  "Contract",
  "Internship",
] as const;

export const COUNTRIES = [
  "United Kingdom",
  "Australia",
  "Mexico",
  "Canada",
  "USA",
  "Germany",
  "Japan",
  "France",
  "Brazil",
  "India",
] as const;

export const JOB_BOARDS = [
  "UpSela Talent Careers Page",
  "Linkedin",
  "Google Jobs",
  "Jobsora",
  "Dr Jobs",
] as const;

const POSTAL_CODE_REGEX = /^[A-Za-z0-9 \-]{3,12}$/;

const LIMITS = {
  jobTitle: { min: 2, max: 100 },
  streetMax: 120,
  description: { min: 30, max: 4000 },
  requirements: { min: 10, max: 4000 },
};

/* ── Helper Types derived from the literal tuples ─────────────────────────── */

export type Currency = (typeof CURRENCIES)[number];
export type WorkExperience = (typeof WORK_EXPERIENCE_LEVELS)[number];
export type EducationLevel = (typeof EDUCATION_LEVELS)[number];
export type Industry = (typeof INDUSTRIES)[number];
export type JobType = (typeof JOB_TYPES)[number];
export type EmploymentType = (typeof EMPLOYMENT_TYPES)[number];
export type Country = (typeof COUNTRIES)[number];
export type JobBoard = (typeof JOB_BOARDS)[number];

/* ── Composable Schemas ───────────────────────────────────────────────────── */

export const salarySchema = z
  .object({
    min: z.coerce
      .number()
      .positive("Minimum salary must be greater than 0.")
      .finite("Minimum salary must be a valid number."),
    max: z.coerce
      .number()
      .positive("Maximum salary must be greater than 0.")
      .finite("Maximum salary must be a valid number."),
    currency: z.enum(CURRENCIES, {
      required_error: "Please choose a currency.",
    }),
  })
  .refine((v) => v.max >= v.min, {
    message: "Maximum salary must be greater than or equal to minimum salary.",
    path: ["max"],
  });

export const addressSchema = z.object({
  country: z.enum(COUNTRIES, { required_error: "Please select a country." }),
  state: z.string().min(1, "Please select a state."),
  city: z.string().min(1, "Please select a city."),
  street: z
    .string()
    .max(
      LIMITS.streetMax,
      `Street must be ${LIMITS.streetMax} characters or fewer.`,
    )
    .optional(),
  postalCode: z
    .string()
    .regex(POSTAL_CODE_REGEX, "Enter a valid postal code.")
    .optional(),
});

/* ── Root Form Schema ─────────────────────────────────────────────────────── */

export const JobPostingFormSchema = z
  .object({
    jobTitle: z
      .string()
      .min(
        LIMITS.jobTitle.min,
        `Job title must be at least ${LIMITS.jobTitle.min} characters.`,
      )
      .max(
        LIMITS.jobTitle.max,
        `Job title must be ${LIMITS.jobTitle.max} characters or fewer.`,
      ),

    salary: salarySchema,

    workExperience: z.enum(WORK_EXPERIENCE_LEVELS).optional(),

    educationLevel: z.enum(EDUCATION_LEVELS).optional(),

    skills: z.array(z.string().min(1, "Skill cannot be empty.")).optional(),

    clientId: z.string().min(1, "Please select a client."),

    industry: z.string().min(1, "Industry is required"),

    jobType: z.string().min(1, "Please select a job type"),

    employmentType: z.enum(EMPLOYMENT_TYPES, {
      required_error: "Please choose an employment type.",
    }),

    address: addressSchema,

    jobDescription: z
      .string()
      .min(
        LIMITS.description.min,
        "Please write a brief job description (at least 30 characters).",
      )
      .max(LIMITS.description.max, "Job description is too long."),

    requirements: z
      .string()
      .min(LIMITS.requirements.min, "Please add a brief list of requirements.")
      .max(LIMITS.requirements.max, "Requirements are too long.")
      .optional(),

    jobBoards: z.array(z.enum(JOB_BOARDS)).optional(),
  })
  .strict();

export type JobPostingFormType = z.infer<typeof JobPostingFormSchema>;
