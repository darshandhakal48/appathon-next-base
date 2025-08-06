"use client";
import {
    addressInformation,
    personalInformation,
    professionalInformationColumn,
    professionalInformationData,
} from "@/config/db";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import InputBox from "./inputBox";
import { PersonalInformationProps } from "@/lib/type";
import CustomTable from "@/components/dashboard/customTable";
import { Button } from "@/components/ui/button";

function Step2() {
    return (
        <div className="">
            <div className=" max-w-[80%] mx-auto space-y-10">
                {/* Personal Information */}
                <Information
                    title="Personal Information"
                    allInput={personalInformation}
                />

                {/* Address Information */}
                <Information
                    title="Address Information"
                    allInput={addressInformation}
                />

                {/* Professional Information */}
                <div className="bg-grayscale-surface-white p-4">
                    <span className="text-lg font-semibold text-sidebar-primary-foreground">
                        For Professional Information
                    </span>
                    <CustomTable
                        columns={professionalInformationColumn}
                        data={professionalInformationData}
                    />
                </div>

                {/* Screening questions */}
                <div className="bg-grayscale-surface-white p-4">
                    <span className="text-lg font-semibold text-sidebar-primary-foreground">
                        Screening Questions
                    </span>
                    <div className="flex flex-col gap-4 p-5">
                        <p className="text-lg font-normal text-center text-grayscale-text-title">
                            No questions added yet
                        </p>
                        <div className="flex flex-col items-center">
                            <p className="text-base text-subtitle font-normal">
                                Add a custom screening question to help you
                                narrow down your applicant pool.
                            </p>
                            <p className="text-base text-subtitle font-normal">
                                Tip: Choose a strong deal-breaker question you
                                {"won't"} find an answer in resumes.
                            </p>
                        </div>
                        <div className="mx-auto">
                            <Button
                                variant="outline"
                                className="border-primary-border-default text-primary-text-label-1"
                            >
                                Add a New Question
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Information({
    title,
    allInput,
}: {
    title: string;
    allInput: PersonalInformationProps[];
}) {
    const [expand, setExpand] = useState(false);
    return (
        <>
            <div className="flex flex-col mx-auto gap-6">
                <span className="text-lg font-semibold text-sidebar-primary-foreground">
                    {title}
                </span>
                <div className="flex flex-col gap-6">
                    {/* ============== */}
                    {allInput.map((info) => (
                        <>
                            <InputBox {...info} key={info.label} />
                        </>
                    ))}

                    {/* ============== */}
                </div>

                {/* Add new item */}
                <div className="flex justify-between items-center p-4 bg-grayscale-surface-white">
                    <div className="flex items-center text-base gap-4 cursor-pointer text-primary-surface-default">
                        {expand ? (
                            <></>
                        ) : (
                            <>
                                <span>
                                    <Plus />
                                </span>
                                <span>Add Item</span>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Step2;
