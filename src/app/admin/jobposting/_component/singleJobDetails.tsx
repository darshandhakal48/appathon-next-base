import React from "react";
import Image from "next/image";
import { X } from "lucide-react";

import { recruiterDashbaordCards } from "@/config/db";
import { Button } from "@/components/ui/button";
import OverviewCard from "@/components/dashboard/overview-cards";

const details = {
  employeeInformation: {
    "Job Type": "In-Office",
    // "Industry Type" :
  },
  addressInformation: {},
};

function SingleJobDetails() {
  return (
    <>
      <div className="bg-grayscale- bg-grayscale-surface-white align-self col-span-3 self-start">
        <div className="flex items-center justify-between gap-4 p-4">
          {/* left */}
          <div className="flex gap-4">
            {/* <span> */}
            <X size={18} />
            {/* </span> */}
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border-2">
                  <Image
                    alt="company image"
                    src={`/_static/ray_it.jpg`}
                    width={18}
                    height={18}
                  />
                </span>
                <span className="text-pru text-primary-surface-default text-xs font-normal">
                  Rays It Solution
                </span>
              </div>
              <span className="text-grayscale-text-title text-xl font-semibold">
                Software Engineer
              </span>
            </div>
          </div>

          {/* right */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="text-primary-text-label-1 border-primary-border-default font-normal"
            >
              View all the application
            </Button>
            <Button
              variant="outline"
              className="text-primary-text-label-1 border-primary-border-default font-normal"
            >
              Edit
            </Button>
          </div>
        </div>

        {/* separator */}
        <div className="mb-4 border-1"></div>

        <div className="p-4">
          <div className="flex gap-4">
            {recruiterDashbaordCards.map((card) => (
              <OverviewCard data={card} key={card.icon} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleJobDetails;
