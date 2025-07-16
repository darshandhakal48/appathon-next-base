import React from "react";
import { Control } from "react-hook-form";
import { JobFormType } from "./schema";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";

function JobDescriptionForm({ control }: { control: Control<JobFormType> }) {
    return (
        <>
            <div>
                <FormField
                    control={control}
                    name="jobDescription.description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Job Description</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Enter your job description here"
                                    className="min-h-36"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <div>
                <FormField
                    control={control}
                    name="jobDescription.requirement"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Job Description</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Enter your job requirement here"
                                    className="min-h-36"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
        </>
    );
}

export default JobDescriptionForm;
