import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { X } from "lucide-react";

import { recruiterDashbaordCards } from "@/config/db";
import { JobCardProps, JobData } from "@/lib/type";
import { Button } from "@/components/ui/button";
import OverviewCard from "@/components/dashboard/overview-cards";

const details = {
  employeeInformation: {
    "Job Type": "In-Office",
    // "Industry Type" :
  },
  addressInformation: {},
};

const jobData: JobData = {
  "job detail": {
    "Job Type": "In-Office",
    "Industry Type": "IT",
    "Client Name": "Rays IT",
    "Work Experience (in years)": "5-6 years",
    "Created on": "16 July , 2025",
    "Updated by": "nathaniel Brooks",
    Location: "45 street Richardson, Dallas, TX",
    "Employment Type": "Full Time",
    "Experience Level": "Associate",
    Salary: "USDb 500-600",

    Education: "Bachelor's Degree",
    Deadline: "12 Aug, 2025",
  },
  skills: [
    "Stratistical Insigts",
    "Predictive Analytics",
    "Graphical Data Representation",
    "Quantitative Analysis",
    "Explatory data Analysis",
    "Predictive Analytics",
    "Graphical Data Representation",
  ],
  "Job Description":
    "We are seeking a passionate and experienced HR Manager to join our growing team. The ideal candidate will be responsible for managing the full HR lifecycle, including recruitment, employee engagement, performance management, and compliance. You will play a key role in building a positive company culture, driving employee satisfaction, and supporting organizational growth.",
  requirements: [
    "Bachelors degree in Human Resources, Business Administration, or related field.",
    "5+ years of experience in HR management roles.",
    "Strong knowledge of employment laws and HR best practices.",
    "Excellent communication, leadership, and interpersonal skills.",
    "Ability to handle confidential information with discretion.",
  ],

  companyName: "Rays It Solution",
  companyImage: "/_static/ray_it.jpg",
  jobType: "Software Engineer",
  jobStatus: {
    Applied: 10,
    Screening: 8,
    Interviewing: 5,
    Offered: 3,
    Hired: 3,
    Rejected: 2,
  },
};

function SingleJobDetails({
  setShowJobDetails,
  activeJobDetails,
}: {
  setShowJobDetails: Dispatch<SetStateAction<boolean>>;
  activeJobDetails: JobCardProps | undefined;
}) {
  console.log("=========> ", activeJobDetails);
  const handleClose = () => {
    setShowJobDetails(false);
  };

  return (
    <>
      <div className="bg-grayscale- bg-grayscale-surface-white align-self col-span-3 self-start shadow-sm">
        <div className="flex items-center justify-between gap-4 p-4">
          {/* left */}
          <div className="flex gap-4">
            {/* <span> */}
            <X size={18} onClick={handleClose} />
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

        <div className="space-y-6 p-4">
          <div className="flex gap-4">
            {recruiterDashbaordCards.map((card) => (
              <OverviewCard data={card} key={card.icon} />
            ))}
          </div>

          <div className="gap- grid grid-cols-2 gap-4">
            {Object.entries(jobData["job detail"]).map(
              ([jobTitle, jobValue]) => {
                // if (
                //   jobTitle == "Job Id" ||
                //   jobTitle == "Job Title" ||
                //   jobTitle == "Date" ||
                //   jobTitle == "Status" ||
                //   jobTitle == "City"
                // ) {
                return (
                  <div
                    className="border-grayscale-border-lighter grid grid-cols-2 gap-8 py-2"
                    key={jobTitle}
                  >
                    <span className="text-grayscale-text-title text-xs font-normal">
                      {jobTitle}
                    </span>
                    <span className="text-grayscale-text-body text-xs font-bold">
                      {jobValue}
                    </span>
                  </div>
                );
                // }
              },
            )}
          </div>

          {/* skills */}
          <div>
            <span className="text-grayscale-text-title text-xs font-normal">
              Skills
            </span>
            <div className="flex flex-wrap gap-2.5">
              {jobData["skills"].map((skill, i) => (
                <span
                  key={i}
                  className="bg-grayscale-surface-default rounded-sm p-1.5 text-xs font-normal"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Job description */}
          <div>
            <span className="text-grayscale-text-title text-xs font-normal">
              Job Description
            </span>
            <div className="border-grayscale-border-lighter text-grayscale-text-body rounded-sm border p-1.5 text-xs font-normal">
              {jobData["Job Description"]}
            </div>
          </div>

          {/* Requirements */}
          <div>
            <span className="text-grayscale-text-title text-xs font-normal">
              Requirements
            </span>
            <div className="border-grayscale-border-lighter text-grayscale-text-body rounded-sm border p-1.5 text-xs font-normal">
              <span className="text-grayscale-text-title text-xs font-normal">
                Must-Have Qualifications
              </span>
              <ul className="ml-4 list-disc">
                {jobData["requirements"].map((data) => (
                  <li key={data}>{data}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleJobDetails;
