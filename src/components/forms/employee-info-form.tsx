import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Image from "next/image";
import { Eye } from "lucide-react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { EmployeeFormType } from "./schema";

function EmployeeInfoForm({ control }: { control: Control<EmployeeFormType> }) {
  return (
    <>
      <div className="bg-grayscale-surface-white p-6 grid grid-cols-1 gap-4">
        <span className="text-lg text-primary-sidebar-foreground">
          Employee Information
        </span>
        <div className="grid grid-cols-1 gap-5">
          <div className="grid grid-cols-2 gap-2.5">
            <FormField
              control={control}
              name="info.employeeName"
              render={({ field }) => (
                <FormItem>
                  <div className="grid grid-cols-1 gap-1.5">
                    <FormLabel>Employee Name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className=" border-secondary-border focus-visible:ring-0"
                        placeholder="John Rai"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="info.accountManager"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm text-primary-sidebar-foreground font-normal">
                    Account Manager
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
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem
                              value="Rajesh Hamal"
                              className="rounded-full"
                            >
                              <div className="flex justify-between items-center p-1 gap-4 shadow-sm rounded-full">
                                <div className="flex items-center gap-2">
                                  <span className="h-10 w-10 ">
                                    <Image
                                      src="/_static/profile-pic.jpg"
                                      alt="Candidate profile picture"
                                      width={899}
                                      height={1300}
                                      className="h-full w-full rounded-full object-fit"
                                    />
                                  </span>
                                  <span className="text-sm">Rajesh Hamal</span>
                                </div>
                                <span>
                                  <Eye className="h-4 w-4 text-grayscale-text-caption" />
                                </span>
                              </div>
                            </SelectItem>
                            <SelectItem
                              value="Ghost rider"
                              className="rounded-full"
                            >
                              <div className="flex justify-between items-center p-1 gap-4 shadow-sm rounded-full">
                                <div className="flex items-center gap-2">
                                  <span className="h-10 w-10 ">
                                    <Image
                                      src="/_static/profile-pic.jpg"
                                      alt="Candidate profile picture"
                                      width={899}
                                      height={1300}
                                      className="h-full w-full rounded-full object-fit"
                                    />
                                  </span>
                                  <span className="text-sm">Ghost rider</span>
                                </div>
                                <span>
                                  <Eye className="h-4 w-4 text-grayscale-text-caption" />
                                </span>
                              </div>
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="info.contactNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact No.</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className=" border-secondary-border focus-visible:ring-0"
                      placeholder="+46484648 464"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="info.industry"
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
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Technology & IT">
                            Technology & IT
                          </SelectItem>
                          <SelectItem value="Finance & Banking">
                            Finance & Banking
                          </SelectItem>
                          <SelectItem value="Healthcare & Medical">
                            Healthcare & Medical
                          </SelectItem>
                          <SelectItem value="Education & Training">
                            Education & Training
                          </SelectItem>
                          <SelectItem value="Construction & Real State">
                            Construction & Real State
                          </SelectItem>
                          <SelectItem value="Manufacturing & Engineering">
                            Manufacturing & Engineering
                          </SelectItem>
                          <SelectItem value="Retail & E-commerce">
                            Retail & E-commerce
                          </SelectItem>
                          <SelectItem value="Hospitility & Tourism">
                            Hospitility & Tourism
                          </SelectItem>
                          <SelectItem value="Marketing & Advertising">
                            Marketing & Advertising
                          </SelectItem>
                          <SelectItem value="Government & Public Sector">
                            Government & Public Sector
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="info.email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className=" border-secondary-border focus-visible:ring-0"
                      placeholder="john@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="info.about"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>About</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="border-secondary-border focus-visible:ring-0"
                      placeholder="john@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeInfoForm;
