import React from "react";
import { Control } from "react-hook-form";
import { NewRoleType } from "../schema";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { permissionForPageData } from "@/config/db";

function CreateNewRoleForm({ control }: { control: Control<NewRoleType> }) {
    return (
        <div className="space-y-8">
            <FormField
                control={control}
                name="role.roleName"
                render={({ field }) => (
                    <FormItem className=" grid md:grid-cols-4">
                        <div className="space-y-1.5">
                            <FormLabel>Role Name</FormLabel>
                            <FormControl className="border-[1px] border-grayscale-border-disabled">
                                <Input
                                    type="text"
                                    {...field}
                                    placeholder="Enter role name"
                                />
                            </FormControl>
                            <FormMessage className="text-error-surface-lighter" />
                        </div>
                    </FormItem>
                )}
            />
            <div className="border-[1px] border-grayscale-border-default bg-grayscale-surface-subtle  rounded-md">
                <div className="grid grid-cols-3 gap-8 border-b-[1px] border-grayscale-border-default bg-grayscale-surface-subtle px-4 py-1 mx-1">
                    <p className="text-grayscale-text-title text-sm font-normal">
                        Permissions
                    </p>
                    <p className="text-grayscale-text-title text-sm font-medium">
                        Read Only
                    </p>
                    <p className="text-grayscale-text-title text-sm font-medium">
                        Write
                    </p>
                </div>

                {permissionForPageData.map((data) => (
                    <div
                        className="grid grid-cols-3 gap-8 border-b-[1px] border-grayscale-border-default bg-grayscale-surface-subtle px-4 py-1 mx-1"
                        key={data.pageId}
                    >
                        <p className="text-grayscale-text-title text-sm py-2 font-normal">
                            {data.pageTitle}
                        </p>
                        <FormField
                            control={control}
                            name={`permission.${data.pageId}.readonly`}
                            render={({ field }) => (
                                <FormItem className=" py-2">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            className={`${
                                                field.value
                                                    ? "border-none bg-primary-surface-default text-grayscale-surface-white"
                                                    : "border-grayscale-text-caption bg-grayscale-surface-white "
                                            }`}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name={`permission.${data.pageId}.write`}
                            render={({ field }) => (
                                <FormItem className="py-2">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            className={`${
                                                field.value
                                                    ? "border-none bg-primary-surface-default text-grayscale-surface-white"
                                                    : "border-grayscale-text-caption bg-grayscale-surface-white "
                                            }`}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CreateNewRoleForm;
