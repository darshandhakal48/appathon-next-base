import React from "react";
import { Control } from "react-hook-form";
import { ApplicationFormType } from "../schema";
import { Typography } from "@/components/shared/typography";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function ApplicationForm({
    control,
}: {
    control: Control<ApplicationFormType>;
}) {
    return (
        <div className="bg-grayscale-surface-white p-6 grid grid-cols-1 gap-6 shadow-sm rounded-sm">
            <Typography type="lg" color="title" className="font-semibold">
                Application Acknowledgement
            </Typography>
            <div className="grid grid-cols-1 gap-5">
                <FormField
                    control={control}
                    name="ApplicationAcknowledgement.sendTo"
                    render={({ field }) => (
                        <FormItem className="flex flex-col gap-0">
                            <FormLabel className="text-grayscale-text-title font-normal text-sm">
                                Send To
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="Job Id, Name , Email"
                                    className=" border-secondary-border focus-visible:ring-0"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-error-surface-lighter" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="ApplicationAcknowledgement.subjectName"
                    render={({ field }) => (
                        <FormItem className="flex flex-col gap-0">
                            <FormLabel className="text-grayscale-text-title font-normal text-sm">
                                Subject Name
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="Thank you for your application"
                                    className=" border-secondary-border focus-visible:ring-0"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-error-surface-lighter" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="ApplicationAcknowledgement.message"
                    render={({ field }) => (
                        <FormItem className="flex flex-col gap-0">
                            <FormLabel className="text-grayscale-text-title font-normal text-sm">
                                Message
                            </FormLabel>
                            <FormControl>
                                <Textarea
                                    {...field}
                                    placeholder="I came across your profile and was impressed by your experience in [Relevant Skill/Industry]. We have an exciting opening for a [Job Title] role at [Company Name], and I believe you’d be a great fit!
I’ve attached the job description for your reference. Let me know if you're interested, and we can schedule a quick chat."
                                    className="outline-none focus-visible:ring-0 min-h-24"
                                />
                            </FormControl>
                            <FormMessage className="text-error-surface-lighter" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="ApplicationAcknowledgement.yourName"
                    render={({ field }) => (
                        <FormItem className="flex flex-col gap-0">
                            <FormLabel className="text-grayscale-text-title font-normal text-sm">
                                Your Name
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="Ashura"
                                    className=" border-secondary-border focus-visible:ring-0"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-error-surface-lighter" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="ApplicationAcknowledgement.position"
                    render={({ field }) => (
                        <FormItem className="flex flex-col gap-0">
                            <FormLabel className="text-grayscale-text-title font-normal text-sm">
                                Position
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="Hiring Manager"
                                    className=" border-secondary-border focus-visible:ring-0"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-error-surface-lighter" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="ApplicationAcknowledgement.companyName"
                    render={({ field }) => (
                        <FormItem className="flex flex-col gap-0">
                            <FormLabel className="text-grayscale-text-title font-normal text-sm">
                                Company Name
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="Upsela Talent Solutions"
                                    className=" border-secondary-border focus-visible:ring-0"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-error-surface-lighter" />
                        </FormItem>
                    )}
                />
            </div>
        </div>
    );
}

export default ApplicationForm;
