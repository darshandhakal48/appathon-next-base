import React from "react";
import {
  EDUCATION_LEVELS,
  EMPLOYMENT_TYPES,
  JobPostingFormType,
} from "@/schema/job-posting-form-schema";
import { Control } from "react-hook-form";

import { clients, currency, industry, jobTypes } from "@/config/db";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Typography } from "../shared/typography";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { MultiCombobox } from "./interview/interview-form";
import { JobFormType } from "./schema";

const skills = [
  { id: "int-1", label: "Python", meta: "john@email.com" },
  { id: "int-2", label: "Java", meta: "sara@email.com" },
  { id: "int-3", label: "Frontend", meta: "sara@email.com" },
  { id: "int-4", label: "Backend", meta: "sara@email.com" },
];

function JobPostInfoForm({
  control,
}: {
  control: Control<JobPostingFormType>;
}) {
  return (
    <>
      <div className="bg-grayscale-surface-white border-grayscale-border-lighter grid grid-cols-1 gap-8 rounded-md border p-6">
        <Typography type="lg" color="title" weight="semibold">
          Job Post Information
        </Typography>
        <div className="grid grid-cols-1 gap-5">
          <div className="grid grid-cols-2 gap-2.5">
            <FormField
              control={control}
              name="jobTitle"
              render={({ field }) => (
                <FormItem>
                  <div className="grid grid-cols-1 gap-1.5">
                    <FormLabel>Job Title</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className="border-secondary-border focus-visible:ring-0"
                        placeholder="Software Engineer"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-error-surface-lighter" />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="clientId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-sidebar-foreground text-sm font-normal">
                    Client Name
                  </FormLabel>
                  <FormControl>
                    <div className="grid grid-cols-1 gap-1.5">
                      <Select
                        onValueChange={(value) => field.onChange(value)}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full cursor-pointer">
                          <SelectValue
                            placeholder={"Select Account Manager"}
                          ></SelectValue>
                        </SelectTrigger>
                        <SelectContent className="bg-grayscale-surface-white">
                          <SelectGroup>
                            {clients.map((client) => (
                              <SelectItem value={`${client}`} key={`${client}`}>
                                {client}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </FormControl>
                  <FormMessage className="text-error-surface-lighter" />
                </FormItem>
              )}
            />
            <div>
              <FormLabel className="mb-1.5">Salary</FormLabel>
              <div className="flex items-center gap-4">
                <FormField
                  control={control}
                  name="salary.min"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="number"
                          className="border-secondary-border px-0! pl-2! focus-visible:ring-0"
                          placeholder="$30000"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-error-surface-lighter" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="salary.max"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="number"
                          className="border-secondary-border px-0! pl-2! focus-visible:ring-0"
                          placeholder="$40000"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-error-surface-lighter" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="salary.currency"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select
                          onValueChange={(value) => {
                            field.onChange(value);
                          }}
                          value={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder={`USD`} />
                          </SelectTrigger>
                          <SelectContent className="bg-grayscale-surface-white">
                            <SelectGroup>
                              {currency.map((curr) => (
                                <SelectItem key={curr.code} value={curr.code}>
                                  {curr.code}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage className="text-error-surface-lighter" />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <FormField
              control={control}
              name="industry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Industry</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(value) => field.onChange(value)}
                      value={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={`Select Industry`} />
                      </SelectTrigger>
                      <SelectContent className="bg-grayscale-surface-white">
                        <SelectGroup>
                          {industry.map((data) => (
                            <SelectItem value={`${data}`} key={data}>
                              {data}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage className="text-error-surface-lighter" />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="workExperience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Work Experience</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="border-secondary-border focus-visible:ring-0"
                      placeholder="4+"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-error-surface-lighter" />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="jobType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Type</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(value) => field.onChange(value)}
                      value={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={`Select Job Type`} />
                      </SelectTrigger>
                      <SelectContent className="bg-grayscale-surface-white">
                        <SelectGroup>
                          {jobTypes.map((data) => (
                            <SelectItem value={`${data}`} key={data}>
                              {data}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage className="text-error-surface-lighter" />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="educationLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-sidebar-foreground text-sm font-normal">
                    Education Level
                  </FormLabel>
                  <FormControl>
                    <div className="grid grid-cols-1 gap-1.5">
                      <Select
                        onValueChange={(value) => field.onChange(value)}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full cursor-pointer">
                          <SelectValue
                            placeholder={"Select Account Manager"}
                          ></SelectValue>
                        </SelectTrigger>
                        <SelectContent className="bg-grayscale-surface-white">
                          <SelectGroup>
                            {EDUCATION_LEVELS.map((client) => (
                              <SelectItem value={`${client}`} key={`${client}`}>
                                {client}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </FormControl>
                  <FormMessage className="text-error-surface-lighter" />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="employmentType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-sidebar-foreground text-sm font-normal">
                    Employment Type
                  </FormLabel>
                  <FormControl>
                    <div className="grid grid-cols-1 gap-1.5">
                      <Select
                        onValueChange={(value) => field.onChange(value)}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full cursor-pointer">
                          <SelectValue
                            placeholder={"Select Account Manager"}
                          ></SelectValue>
                        </SelectTrigger>
                        <SelectContent className="bg-grayscale-surface-white">
                          <SelectGroup>
                            {EMPLOYMENT_TYPES.map((client) => (
                              <SelectItem value={`${client}`} key={`${client}`}>
                                {client}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </FormControl>
                  <FormMessage className="text-error-surface-lighter" />
                </FormItem>
              )}
            />{" "}
            <FormField
              control={control}
              name="skills"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-sidebar-foreground text-sm font-normal">
                    Skills
                  </FormLabel>
                  <FormControl>
                    <div className="grid grid-cols-1 gap-1.5">
                      <MultiCombobox
                        values={field.value || []}
                        onChange={field.onChange}
                        options={skills}
                        placeholder="Select interviewers"
                        searchPlaceholder="Search interviewer name, email or id"
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-error-surface-lighter" />
                </FormItem>
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default JobPostInfoForm;
