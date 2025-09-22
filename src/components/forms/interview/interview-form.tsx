"use client";

import * as React from "react";
import Image from "next/image";
import {
  INTERVIEW_DURATIONS,
  INTERVIEW_MEETING_TYPES,
  INTERVIEW_TYPES,
  InterviewFormSchema,
  InterviewFormType,
} from "@/schema/interview-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconX } from "@tabler/icons-react";
import { format } from "date-fns";
import { CalendarIcon, ChevronDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Typography } from "@/components/shared/typography";

/* ------------------------------------------------------------------------------------------
 * Mock option data (replace with server data as needed)
 * ------------------------------------------------------------------------------------------ */

const candidates = [
  { id: "cand-1", label: "John Harrison", meta: "john@email.com" },
  { id: "cand-2", label: "Sara Morrison", meta: "sara@email.com" },
  { id: "cand-3", label: "Sarah Thompson", meta: "sara@email.com" },
  { id: "cand-4", label: "Michael Patel", meta: "sara@email.com" },
  { id: "cand-5", label: "Emily Chen", meta: "sara@email.com" },
  { id: "cand-6", label: "David Lee", meta: "sara@email.com" },
  { id: "cand-7", label: "Laura Smith", meta: "sara@email.com" },
];

const clients = [
  { id: "98234", label: "NextGen Systems" },
  { id: "21567", label: "Global Dynamics" },
  { id: "17483", label: "Future Vision Corp" },
  { id: "30659", label: "Synergy Technologies" },
  { id: "57842", label: "Smart Solutions Ltd" },
  { id: "45076", label: "Pioneering Tech Co" },
  { id: "81275", label: "Innovative Designs Inc" },
  { id: "74821", label: "Tech Innovators" },
];

const jobPosts = [
  { id: "jp-754434-1", label: "Data Science", meta: "754434" },
  { id: "jp-754434-2", label: "User Experience Design", meta: "754434" },
  { id: "jp-754434-3", label: "Product Management", meta: "754434" },
  { id: "jp-754434-4", label: "Web Development", meta: "754434" },
  { id: "jp-754434-5", label: "Cybersecurity", meta: "754434" },
  { id: "jp-754434-6", label: "Machine Learning", meta: "754434" },
  { id: "jp-754434-7", label: "Cloud Computing", meta: "754434" },
  { id: "jp-754434-8", label: "Mobile App Development", meta: "754434" },
];

const interviewers = [
  { id: "int-1", label: "John Harrison", meta: "john@email.com" },
  { id: "int-2", label: "Sara Morrison", meta: "sara@email.com" },
  { id: "int-3", label: "Jimmy Morrison", meta: "sara@email.com" },
  { id: "int-4", label: "Sarah Thompson", meta: "sara@email.com" },
  { id: "int-5", label: "Michael Patel", meta: "sara@email.com" },
  { id: "int-6", label: "Emily Chen", meta: "sara@email.com" },
  { id: "int-7", label: "David Lee", meta: "sara@email.com" },
  { id: "int-8", label: "Laura Smith", meta: "sara@email.com" },
];

/* ------------------------------------------------------------------------------------------
 * Small reusable combobox primitives (single & multi) using shadcn/ui Command
 * ------------------------------------------------------------------------------------------ */

function SingleCombobox({
  value,
  onChange,
  options,
  placeholder,
  searchPlaceholder,
  checkbox,
}: {
  value?: string;
  onChange: (v: string) => void;
  options: { id: string; label: string; meta?: string }[];
  placeholder?: string;
  searchPlaceholder?: string;
  checkbox?: boolean;
}) {
  const [open, setOpen] = React.useState(false);
  const current = options.find((o) => o.id === value);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className={cn(
            "w-full justify-between rounded-md! px-4! py-3! font-normal",
            !current && "text-grayscale-text-caption",
          )}
        >
          {current ? (
            <Typography color="body" type="sm" className="truncate">
              {current.label}
            </Typography>
          ) : (
            placeholder || "Select"
          )}
          <ChevronDown
            className={cn("size-4 transition-all ease-out", {
              "rotate-180": open,
            })}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
        <Command className="w-full">
          <CommandInput placeholder={searchPlaceholder || "Search..."} />
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandList>
            <CommandGroup>
              {options.map((o) => (
                <CommandItem
                  key={o.id}
                  value={`${o.label} ${o.meta ?? ""}`}
                  onSelect={() => {
                    onChange(o.id);
                    setOpen(false);
                  }}
                >
                  {checkbox && (
                    <Checkbox checked={value === o.id} className="size-3.5" />
                  )}
                  <div className="flex items-center gap-2">
                    <Image
                      src="/_static/marketing/user1.jpg"
                      alt={o.id}
                      width={24}
                      height={24}
                      className="size-6 rounded-full object-cover"
                    />
                    <div className="flex flex-col gap-0.5">
                      <Typography type="xs">{o.label}</Typography>
                      {o.meta ? (
                        <Typography type="xxs" color="subtitle">
                          {o.meta}
                        </Typography>
                      ) : null}
                    </div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export function MultiCombobox({
  values,
  onChange,
  options,
  placeholder,
  searchPlaceholder,
}: {
  values: string[];
  onChange: (v: string[]) => void;
  options: { id: string; label: string; meta?: string }[];
  placeholder?: string;
  searchPlaceholder?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const selected = options.filter((o) => values.includes(o.id));
  function toggle(id: string) {
    onChange(
      values.includes(id) ? values.filter((v) => v !== id) : [...values, id],
    );
  }
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          className={cn(
            "inline-flex shrink-0 items-center justify-center gap-2 text-sm transition-all outline-none focus-visible:ring-[3px]",
            "bg-grayscale-surface-white text-grayscale-text-caption border shadow-xs",
            "relative h-fit w-full justify-between rounded-md! px-4! py-3! font-normal",
            {
              "p-0.5!": values.length > 0,
            },
          )}
        >
          <>
            {selected.length ? (
              <div
                onClick={(e) => e.stopPropagation()}
                className="flex flex-wrap gap-1"
              >
                {selected.map((s) => (
                  <Badge
                    variant="secondary"
                    key={s.id}
                    className="flex items-center gap-2.5 rounded px-3 py-2.5 text-xs font-normal [&>svg]:pointer-events-auto"
                  >
                    {s.label}
                    <IconX
                      onClick={(e) => toggle(s.id)}
                      className="pointer-events-auto size-[14px] cursor-pointer"
                    />
                  </Badge>
                ))}
              </div>
            ) : (
              <span className="text-muted-foreground">
                {placeholder || "Select"}
              </span>
            )}
          </>

          <ChevronDown
            className={cn("size-4 transition-all ease-out", {
              "rotate-180": open,
            })}
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
        <Command>
          <CommandInput placeholder={searchPlaceholder || "Search..."} />
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandList>
            <CommandGroup>
              {options.map((o) => {
                const active = values.includes(o.id);
                return (
                  <CommandItem key={o.id} onSelect={() => toggle(o.id)}>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex flex-col">
                        <span>{o.label}</span>
                        {o.meta ? (
                          <span className="text-muted-foreground text-xs">
                            {o.meta}
                          </span>
                        ) : null}
                      </div>
                      {active ? <Badge>Selected</Badge> : null}
                    </div>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

/* ------------------------------------------------------------------------------------------
 * Form Component (layout & copy based on the provided Figma screenshots)
 * ------------------------------------------------------------------------------------------ */

export default function InterviewForm() {
  const form = useForm<InterviewFormType>({
    resolver: zodResolver(InterviewFormSchema),
    defaultValues: {
      candidateId: "",
      clientId: "",
      jobPostingId: "",
      interviewType: undefined,
      interviewerIds: [],
      date: undefined as unknown as Date,
      startTime: "",
      durationMinutes: undefined as unknown as number,
      meetingType: "Video Call",
      meetingLink: "",
      location: "",
      notes: "",
    },
    mode: "onSubmit",
  });

  const meetingType = form.watch("meetingType");

  function onSubmit(data: InterviewFormType) {
    toast("Interview scheduled", {
      description: (
        <pre className="mt-2 w-[360px] overflow-auto rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="mx-auto w-full max-w-3xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
          {/* Row 1: Candidate / Client */}
          <div className="grid gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="candidateId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Candidate</FormLabel>
                  <FormControl>
                    <SingleCombobox
                      value={field.value}
                      onChange={field.onChange}
                      options={candidates}
                      checkbox
                      placeholder="Select candidate"
                      searchPlaceholder="Search candidate name, email or id"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="clientId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Client</FormLabel>
                  <FormControl>
                    <SingleCombobox
                      value={field.value}
                      onChange={field.onChange}
                      options={clients}
                      placeholder="Select client"
                      searchPlaceholder="Search client or client id"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Row 2: Job Posting / Interview Type */}
          <div className="grid gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="jobPostingId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Posting</FormLabel>
                  <FormControl>
                    <SingleCombobox
                      value={field.value}
                      onChange={field.onChange}
                      options={jobPosts}
                      placeholder="Select job posting"
                      searchPlaceholder="Search job posts or job id"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="interviewType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Interview Type</FormLabel>
                  <FormControl>
                    <SingleCombobox
                      value={field.value}
                      onChange={field.onChange}
                      options={INTERVIEW_TYPES.map((t, i) => ({
                        id: `it-${i}`,
                        label: t,
                      }))}
                      placeholder="Select interview type"
                      searchPlaceholder="Search interview type"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Row 3: Interviewers */}
          <FormField
            control={form.control}
            name="interviewerIds"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Interviewers</FormLabel>
                <FormControl>
                  <MultiCombobox
                    values={field.value}
                    onChange={field.onChange}
                    options={interviewers}
                    placeholder="Select interviewers"
                    searchPlaceholder="Search interviewer name, email or id"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Row 4: Date / Start Time */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-between rounded px-4 py-3 text-left font-normal",
                            !field.value && "text-grayscale-text-caption",
                          )}
                        >
                          {field.value ? (
                            format(field.value, "dd MMM, yyyy")
                          ) : (
                            <span>Select a date</span>
                          )}{" "}
                          <CalendarIcon className="mr-2 h-4 w-4" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent align="start" className="p-0">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        captionLayout="dropdown"
                        autoFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="startTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Start Time</FormLabel>
                  <FormControl>
                    <Input
                      type="time"
                      id="time-picker"
                      step="0"
                      placeholder="10:30 AM"
                      defaultValue="10:30"
                      className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="durationMinutes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duration</FormLabel>
                  <FormControl>
                    <SingleCombobox
                      value={String(field.value ?? "")}
                      onChange={(v) => field.onChange(Number(v))}
                      options={INTERVIEW_DURATIONS.map((d) => ({
                        id: String(d),
                        label: `${d} minutes`,
                      }))}
                      placeholder="Select duration"
                      searchPlaceholder="Search duration"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Row 5:  Meeting Type */}
          <FormField
            control={form.control}
            name="meetingType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Meeting Type</FormLabel>
                <FormControl>
                  <RadioGroup
                    className="grid grid-cols-3 gap-3"
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    {INTERVIEW_MEETING_TYPES.map((t) => (
                      <div
                        key={t}
                        className="flex items-center space-x-2 rounded-md border p-3"
                      >
                        <RadioGroupItem id={`mt-${t}`} value={t} />
                        <label
                          htmlFor={`mt-${t}`}
                          className="text-sm leading-none font-medium"
                        >
                          {t}
                        </label>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Row 6: Meeting Link or Location (conditional) */}
          {meetingType !== "In Person" ? (
            <FormField
              control={form.control}
              name="meetingLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Meeting Link</FormLabel>
                  <FormControl>
                    <Input placeholder="https://..." {...field} />
                  </FormControl>
                  <FormDescription>
                    Paste the online meeting link
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          ) : (
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter location" {...field} />
                  </FormControl>
                  <FormDescription>
                    Required for in-person meetings
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {/* Row 7: Notes */}
          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Notes (Optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Any special instructions or focus areas for the interview..."
                    className="min-h-[120px] resize-y"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Optional notes (max 1000 characters)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => form.reset()}
            >
              Cancel
            </Button>
            <Button type="submit">Schedule</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
