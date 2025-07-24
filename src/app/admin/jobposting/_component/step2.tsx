import { addressInformation, personalInformation } from "@/config/db";
import { Plus } from "lucide-react";
import React from "react";
import InputBox from "./inputBox";
import { PersonalInformationProps } from "@/lib/type";

function Step2() {
  return (
    <div className="space-y-10">
      <Information
        title="Personal Information"
        allInput={personalInformation}
      />
      <Information title="Address Information" allInput={addressInformation} />
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
  return (
    <>
      <div className="flex flex-col max-w-[80%] mx-auto gap-6 rounded-">
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
        <div className="flex justify-between items-center p-4 bg-background">
          <div className="flex items-center text-base gap-4 cursor-pointer text-primary-surface">
            <span>
              <Plus />
            </span>
            <span>Add Item</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Step2;
