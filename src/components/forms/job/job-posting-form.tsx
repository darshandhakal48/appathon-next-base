"use client";

// --- Import your production schema + enums (from the refactor) ---
import {
  COUNTRIES,
  CURRENCIES,
  EDUCATION_LEVELS,
  EMPLOYMENT_TYPES,
  INDUSTRIES,
  JOB_BOARDS,
  JOB_TYPES,
  JobPostingFormSchema,
  WORK_EXPERIENCE_LEVELS,
  type JobPostingFormType,
} from "@/schema/job-posting-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useAction } from "next-safe-action/hooks";
import { useForm, UseFormReturn } from "react-hook-form";
import * as z from "zod";

import { MultiStepFormProvider } from "@/hooks/use-multi-step-viewer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  FormFooter,
  FormHeader,
  MultiStepFormContent,
  NextButton,
  PreviousButton,
  StepFields,
  SubmitButton,
} from "@/components/multi-step-viewer";
import { Typography } from "@/components/shared/typography";

import JobAddressInfoForm from "../job-address-info-form";
import JobPostInfoForm from "../job-post-info-form";
import JobDescription from "./job-description";

// --- Mocked lists to mirror the PDF screenshot (replace with API in prod) ---
const STATES = [
  "Arizona",
  "Michigan",
  "North Carolina",
  "Georgia",
  "Illinois",
  "Ohio",
  "New York",
  "California",
  "Texas",
  "Florida",
];

const CITIES = [
  "Dallas",
  "Boston",
  "San Francisco",
  "Los Angeles",
  "Miami",
  "Houston",
  "Atlanta",
  "Seattle",
  "Chicago",
  "New York City",
];

const CLIENTS = [
  { id: "98234", name: "NextGen Systems" },
  { id: "21567", name: "Global Dynamics" },
  { id: "17483", name: "Future Vision Corp" },
  { id: "30659", name: "Synergy Technologies" },
  { id: "57842", name: "Smart Solutions Ltd" },
  { id: "45076", name: "Pioneering Tech Co" },
  { id: "81275", name: "Innovative Designs Inc" },
  { id: "74821", name: "Tech Innovators" },
  { id: "rays-it", name: "Rays IT" },
];

const SKILLS = [
  "Problem Solving",
  "Creative Thinking",
  "Critical Analysis",
  "Research Skills",
  "Collaboration",
  "Time Management",
  "Adaptability",
];

export default function JobPostingForm({
  form,
}: {
  form: UseFormReturn<JobPostingFormType>;
}) {
  //   const formAction = useAction(serverAction, {
  //     onSuccess: () => {
  //       form.reset();
  //     },
  //     onError: () => {
  //       // surface toast in your app shell if needed
  //     },
  //   });

  const handleSubmit = form.handleSubmit(async (data: JobPostingFormType) => {
    // formAction.execute(data);
  });

  //   const { isExecuting, hasSucceeded } = formAction;

  // -------------------- STEP DEFINITIONS --------------------

  // -------------------- SUCCESS VIEW --------------------
  //   if (hasSucceeded) {
  //     return (
  //       <div className="w-full gap-2 rounded-md border p-2 sm:p-5 md:p-8">
  //         <motion.div
  //           initial={{ opacity: 0, y: -16 }}
  //           animate={{ opacity: 1, y: 0 }}
  //           transition={{ duration: 0.4, stiffness: 300, damping: 25 }}
  //           className="h-full px-3 py-6"
  //         >
  //           <motion.div
  //             initial={{ scale: 0.5 }}
  //             animate={{ scale: 1 }}
  //             transition={{
  //               delay: 0.3,
  //               type: "spring",
  //               stiffness: 500,
  //               damping: 15,
  //             }}
  //             className="mx-auto mb-4 flex w-fit justify-center rounded-full border p-2"
  //           >
  //             <Check className="size-8" />
  //           </motion.div>
  //           <h2 className="mb-2 text-center text-2xl font-bold text-pretty">
  //             Thank you
  //           </h2>
  //           <p className="text-muted-foreground text-center text-lg text-pretty">
  //             Form submitted successfully, we will get back to you soon
  //           </p>
  //         </motion.div>
  //       </div>
  //     );
  //   }

  // -------------------- FORM WRAPPER --------------------
  return (
    <div>
      <Form {...form}>
        <form id="job-posting-form" onSubmit={handleSubmit} className="">
          <MultiStepFormContent>
            {/* <FormHeader /> */}
            <StepFields />
          </MultiStepFormContent>
        </form>
      </Form>
    </div>
  );
}
