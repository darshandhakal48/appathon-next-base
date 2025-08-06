"use client";
import {
  addressInformation,
  personalInformation,
  professionalInformationColumn,
  professionalInformationData,
} from "@/config/db";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import InputBox from "./input-box";
import { PersonalInformationProps } from "@/lib/type";
import CustomTable from "@/components/dashboard/customTable";
import { Button } from "@/components/ui/button";

function Step2() {
  return (
    <div className="">
      <div className="mx-auto max-w-[80%] space-y-10">
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
        <div className="bg-background p-4">
          <span className="text-sidebar-primary-foreground text-lg font-semibold">
            For Professional Information
          </span>
          <CustomTable
            columns={professionalInformationColumn}
            data={professionalInformationData}
          />
        </div>

        {/* Screening questions */}
        <div className="bg-background p-4">
          <span className="text-sidebar-primary-foreground text-lg font-semibold">
            Screening Questions
          </span>
          <div className="flex flex-col gap-4 p-5">
            <p className="text-center text-lg font-normal">
              No questions added yet
            </p>
            <div className="flex flex-col items-center">
              <p className="text-subtitle text-base font-normal">
                Add a custom screening question to help you
                narrow down your applicant pool.
              </p>
              <p className="text-subtitle text-base font-normal">
                Tip: Choose a strong deal-breaker question you
                {"won't"} find an answer in resumes.
              </p>
            </div>
            <div className="mx-auto">
              <Button
                variant="outline"
                className="border-primary-border text-primary-border"
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
      <div className="mx-auto flex flex-col gap-6">
        <span className="text-sidebar-primary-foreground text-lg font-semibold">
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
        <div className="bg-background flex items-center justify-between p-4">
          <div className="text-primary-surface flex cursor-pointer items-center gap-4 text-base">
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
