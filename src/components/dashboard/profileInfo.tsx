import React from "react";
import { Button } from "../ui/button";
import { WorkForceProfileInfoProps } from "@/lib/type";

function ProfileInfo({ profile }: { profile: WorkForceProfileInfoProps }) {
  return (
    <div className="inline-flex flex-col md:flex-row      gap-12 ">
      <div className="m-auto">
        <div className="h-[200px] w-[200px] rounded-full p-2 shadow-lg  ">
          <span className="text-primary-surface-default text-6xl h-full w-full rounded-full bg-grayscale-surface-default grid place-items-center">
            JD
          </span>
        </div>
      </div>

      <div className=" w-[100px]  h-0 md:w-0 md:h-[100px] m-auto p-[1px] bg-grayscale-surface-default "></div>

      <div className="grid grid-cols-1 gap-8 m-auto   ">
        <div className="grid grid-cols-1 gap-2">
          <span className="text-primary-surface-default font-semibold text-2xl">
            {profile.employeeName || profile.companyName}
          </span>
          <span className="font-semibold text-base text-foreground">
            {profile.jobTitle || profile.companyField}
          </span>
        </div>

        <div className="flex gap-8 items-center m-auto md:flex-row flex-col">
          <div className="grid grid-cols-1 gap-4">
            <span className="flex gap-4">
              <span className="text-grayscale-text-subtitle text-sm">icon</span>
              <span className="text-grayscale-text-subtitle text-sm">
                {profile.location}
              </span>
            </span>
            <span className="flex gap-4">
              <span className="text-grayscale-text-subtitle text-sm">icon</span>
              <span className="text-grayscale-text-subtitle text-sm">
                {profile.email}
              </span>
            </span>
            <span className="flex gap-4">
              <span className="text-grayscale-text-subtitle text-sm">icon</span>
              <span className="text-grayscale-text-subtitle text-sm">
                {profile.number}
              </span>
            </span>
          </div>
          {profile.employeeName && (
            <div>
              <Button
                variant="ghost"
                className="bg-grayscale-surface-disabled text-sidebar-primary-foreground text-sm font-normal hover:bg-grayscale-surface-disabled"
              >
                View Details
              </Button>
            </div>
          )}
        </div>

        {profile.employeeName && profile.under && (
          <div>
            <span className="text-grayscale-text-subtitle text-sm ">
              Under :{" "}
            </span>
            <span className="text-base font-semibold text-grayscale-text-subtitle">
              {profile.under}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileInfo;
