import { z } from "zod";

export const INTERVIEW_DURATIONS = [30, 45, 60, 75, 90, 120] as const;
export const INTERVIEW_MEETING_TYPES = ["Video Call", "Phone Call", "In Person"] as const;
export const INTERVIEW_TYPES = [
    "Technical Interview",
    "Behavioral Interview",
    "HR Interview",
    "Panel Interview",
    "Portfolio Review",
    "Final Interview",
] as const;

export const InterviewFormSchema = z
    .object({
        candidateId: z
            .string({ required_error: "Please select a candidate." })
            .min(1, "Please select a candidate."),
        clientId: z
            .string({ required_error: "Please select a client." })
            .min(1, "Please select a client."),
        jobPostingId: z
            .string({ required_error: "Please select a job posting." })
            .min(1, "Please select a job posting."),
        interviewType: z.enum(INTERVIEW_TYPES, {
            errorMap: () => ({ message: "Please choose an interview type." }),
        }),
        interviewerIds: z
            .array(z.string().min(1))
            .min(1, "Please add at least one interviewer."),
        date: z.coerce.date({
            required_error: "Please choose a date.",
            invalid_type_error: "Please choose a valid date.",
        }),
        startTime: z
            .string({ required_error: "Please set a start time." })
            .trim()
            .regex(
                /^((0?[1-9])|(1[0-2]))\s?:\s?([0-5][0-9])\s?(AM|PM)$/i,
                "Please enter a valid time (e.g., 07:30 AM)."
            ),
        durationMinutes: z
            .coerce.number({
                required_error: "Please select a duration.",
                invalid_type_error: "Please select a valid duration.",
            })
            .int()
            .refine((v) => INTERVIEW_DURATIONS.includes(v as (typeof INTERVIEW_DURATIONS)[number]), {
                message: "Please select a valid duration.",
            }),
        meetingType: z.enum(INTERVIEW_MEETING_TYPES, {
            errorMap: () => ({ message: "Please choose a meeting type." }),
        }),
        meetingLink: z
            .string()
            .trim()
            .transform((v) => (v === "" ? undefined : v))
            .optional()
            .refine((v) => !v || /^https?:\/\/.+/i.test(v), {
                message: "Please paste a valid meeting link (https://...).",
            }),
        location: z
            .string()
            .trim()
            .transform((v) => (v === "" ? undefined : v))
            .optional(),
        notes: z
            .string()
            .trim()
            .max(1000, "Keep notes under 1,000 characters.")
            .optional(),
    })
    .superRefine((data, ctx) => {
        // Date must be today or later
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        if (data.date < today) {
            ctx.addIssue({
                path: ["date"],
                code: z.ZodIssueCode.custom,
                message: "Please choose a date today or later.",
            });
        }

        // Conditional: meetingLink vs location based on meetingType
        if (data.meetingType === "In Person") {
            if (!data.location) {
                ctx.addIssue({
                    path: ["location"],
                    code: z.ZodIssueCode.custom,
                    message: "Please enter the meeting location.",
                });
            }
            if (data.meetingLink) {
                ctx.addIssue({
                    path: ["meetingLink"],
                    code: z.ZodIssueCode.custom,
                    message: "Remove the link for in-person meetings.",
                });
            }
        } else {
            // Video/Phone require a meeting link
            if (!data.meetingLink) {
                ctx.addIssue({
                    path: ["meetingLink"],
                    code: z.ZodIssueCode.custom,
                    message: "Please paste the meeting link.",
                });
            }
            if (data.location) {
                ctx.addIssue({
                    path: ["location"],
                    code: z.ZodIssueCode.custom,
                    message: "Remove the location for online/phone meetings.",
                });
            }
        }
    });

export type InterviewFormType = z.infer<typeof InterviewFormSchema>;
