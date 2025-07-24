import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { JobFormType } from "./schema";
import { clients, currency, industry, jobTypes } from "@/config/db";

function JobPostInfoForm({ control }: { control: Control<JobFormType> }) {
  return (
    <>
      <div className="bg-grayscale-surface-white p-6 grid grid-cols-1 gap-4">
        <span className="text-lg text-primary-sidebar-foreground">
          Employee Information
        </span>
        <div className="grid grid-cols-1 gap-5 ">
          <div className="grid grid-cols-2 gap-2.5">
            <FormField
              control={control}
              name="jobInfo.jobTitle"
              render={({ field }) => (
                <FormItem>
                  <div className="grid grid-cols-1 gap-1.5 ">
                    <FormLabel>Job Title</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className=" border-secondary-border focus-visible:ring-0"
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
              name="jobInfo.clientName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm text-primary-sidebar-foreground font-normal">
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
                  name="jobInfo.salary.startingRange"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="number"
                          className=" border-secondary-border focus-visible:ring-0"
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
                  name="jobInfo.salary.endingRange"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="number"
                          className=" border-secondary-border focus-visible:ring-0"
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
                  name="jobInfo.salary.currency"
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
              name="jobInfo.industry"
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
              name="jobInfo.workExperience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Work Experience</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className=" border-secondary-border focus-visible:ring-0"
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
              name="jobInfo.jobType"
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
          </div>
        </div>
      </div>
    </>
  );
}

export default JobPostInfoForm;
