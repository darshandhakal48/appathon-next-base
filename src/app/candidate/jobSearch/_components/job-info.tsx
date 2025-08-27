import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Job } from "@/lib/type";
import { cn } from "@/lib/utils";
import { IconFileText } from "@tabler/icons-react";
import Image from "next/image";

interface JobInfoProps extends React.HTMLAttributes<HTMLDivElement> {
  job?: Job;
}

export default function JobInfo(props: JobInfoProps) {
  const { className, job, ...attr } = props;
  return (
    <div
      {...attr}
      className={cn("bg-grayscale-surface-white rounded", className)}
    >
      <div className="h-4 p-2.5" />

      <div className="px-6 py-2 flex flex-col self-stretch justify-center items-start gap-4">
        <div className="inline-flex self-stretch justify-between items-center">
          <div className="inline-flex flex-col justify-start items-start gap-2.5">
            <div className="inline-flex justify-start items-center gap-2">
              <Image
                alt="placeholder"
                width={40}
                height={40}
                className="soze-10 rounded-full"
                src="/_static/40x40.svg"
              />

              <div className="justify-center text-gray-700 text-sm font-normal font-['Inter'] leading-tight">
                Rays IT Solutions
              </div>
            </div>
          </div>

          <div className="flex justify-start items-center gap-3">
            <Button className="">
              Apply
              <Icons.externalLink />
            </Button>
            <Button size="icon" variant="ghost" className="p-0">
              <Icons.share />
            </Button>
            <Button size="icon" variant="ghost" className="p-0">
              <Icons.bookmark />
            </Button>
          </div>
        </div>
        <div className="self-stretch inline-flex justify-start items-center gap-1">
          <div className="justify-start text-Greyscale-text-grayscale-text-title text-2xl font-semibold leading-loose">
            {job?.["Job Title"]}
          </div>
        </div>
        <div className="self-stretch inline-flex justify-start items-center gap-4">
          <div className="justify-start text-grayscale-text-caption text-[10px] font-normal leading-none">
            {job?.posted}
          </div>
          <div className="px-2 py-1 bg-warning-surface-subtle rounded-3xl flex justify-center items-center gap-1">
            <div className="justify-start text-warning-foreground text-[10px] font-normal leading-none">
              {job?.expires}
            </div>
          </div>
        </div>
        <div className="self-stretch inline-flex justify-start items-center gap-4">
          <div className="p-2 bg-primary-surface-default/10 rounded-sm flex justify-center items-center gap-2.5">
            <div className="justify-start text-Greyscale-Text-Body text-[10px] font-normal leading-none">
              Remote
            </div>
          </div>
          <div className="p-2 bg-primary-surface-default/10 rounded-sm flex justify-center items-center gap-2.5">
            <div className="justify-start text-Greyscale-Text-Body text-[10px] font-normal leading-none">
              Full Time
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-6 p-2.5" />
      <div className="self-stretch px-6 flex flex-col justify-start items-start gap-2.5">
        <div className="self-stretch p-6 bg-success-surface-subtle/10 rounded flex flex-col justify-start items-start gap-4 overflow-hidden">
          <div className="self-stretch inline-flex justify-between items-center">
            <div className="flex justify-start items-center gap-2">
              <div className="p-2 bg-grayscale-surface-white rounded-[999px] flex justify-start items-center gap-2.5">
                <Icons.sparkingStar className="text-success" />
              </div>
              <div className="h-8 px-4 py-1 bg-grayscale-surface-white rounded-[999px] flex justify-start items-center gap-2">
                <div className="justify-start text-success text-lg font-semibold leading-7">
                  80%
                </div>
                <div className="w-0 h-4 outline outline-offset-[-0.50px] outline-background-secondary" />
                <div className="justify-start text-grayscale-text-title text-sm font-normal leading-tight">
                  Strong Match
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              className="text-primary-surface-default hover:text-primary-surface-default"
            >
              Show Details
              <IconFileText />
            </Button>
          </div>
          <div className="self-stretch justify-start">
            <span className="text-grayscale-text-subtitle text-sm font-semibold leading-tight">
              Your resume has scored an 80% match for this job! <br />
            </span>
            <span className="text-grayscale-text-subtitle text-sm font-normal leading-tight">
              This means your skills and experience closely align with the job
              requirements. You have a high chance of being shortlisted—consider
              applying now!
            </span>
          </div>
        </div>
      </div>
      <div className="self-stretch h-6 p-2.5" />
      <div className="self-stretch px-6 py-2 flex flex-col justify-center items-start gap-4">
        <div className="w-64 justify-start text-Greyscale-text-grayscale-text-title text-xl font-semibold leading-7">
          About the job
        </div>
        <div className="self-stretch rounded-md flex flex-col justify-start items-start gap-6">
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="self-stretch inline-flex justify-start items-center gap-4">
                <div className="flex-1 h-16 inline-flex flex-col justify-start items-start gap-1.5">
                  <div className="justify-start text-Greyscale-text-grayscale-text-title text-base font-normal leading-normal">
                    Industry Type
                  </div>
                  <div className="self-stretch inline-flex justify-start items-start gap-2">
                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
                      <div className="self-stretch py-2 bg-grayscale-surface-white rounded-md inline-flex justify-start items-center">
                        <div className="justify-start text-grayscale-text-caption text-base font-normal leading-normal">
                          IT
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 h-16 inline-flex flex-col justify-start items-start gap-1.5">
                  <div className="justify-start text-Greyscale-text-grayscale-text-title text-base font-normal leading-normal">
                    Experience Level
                  </div>
                  <div className="self-stretch inline-flex justify-start items-start gap-2">
                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
                      <div className="self-stretch py-2 bg-grayscale-surface-white rounded-md inline-flex justify-start items-center">
                        <div className="justify-start text-grayscale-text-caption text-base font-normal leading-normal">
                          Associate
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 h-16 inline-flex flex-col justify-start items-start gap-1.5">
                  <div className="justify-start text-Greyscale-text-grayscale-text-title text-base font-normal leading-normal">
                    Hourly Compensation
                  </div>
                  <div className="self-stretch inline-flex justify-start items-start gap-2">
                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
                      <div className="self-stretch py-2 bg-grayscale-surface-white rounded-md inline-flex justify-start items-center">
                        <div className="justify-start text-grayscale-text-caption text-base font-normal leading-normal">
                          USD 500-600
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-center gap-4">
                <div className="flex-1 h-16 inline-flex flex-col justify-start items-start gap-1.5">
                  <div className="justify-start text-grayscale-text-title text-base text-nowrap font-normal leading-normal">
                    Work Experience (in years)
                  </div>
                  <div className="self-stretch inline-flex justify-start items-start gap-2">
                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
                      <div className="self-stretch py-2 bg-grayscale-surface-white rounded-md inline-flex justify-start items-center">
                        <div className="justify-start text-grayscale-text-caption text-base font-normal leading-normal">
                          5-6 years
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
                  <div className="justify-start text-Greyscale-text-grayscale-text-title text-base font-normal leading-normal">
                    Educatin
                  </div>
                  <div className="self-stretch inline-flex justify-start items-start gap-2">
                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
                      <div className="self-stretch py-2 bg-grayscale-surface-white rounded-md inline-flex justify-start items-center">
                        <div className="justify-start text-grayscale-text-caption text-base font-normal leading-normal">
                          Bachelor&apos;s Degree
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 opacity-0 inline-flex flex-col justify-start items-start gap-1.5">
                  <div className="justify-start text-Greyscale-text-grayscale-text-title text-base font-normal leading-normal">
                    Educatin
                  </div>
                  <div className="self-stretch inline-flex justify-start items-start gap-2">
                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
                      <div className="self-stretch py-2 bg-grayscale-surface-white rounded-md inline-flex justify-start items-center">
                        <div className="justify-start text-Greyscale-text-grayscale-text-caption text-base font-normal leading-normal">
                          Bachelor&apos;s Degree
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
              <div className="justify-start text-grayscale-text-title text-base font-normal leading-normal">
                Skills
              </div>
              <div className="self-stretch inline-flex justify-start items-start gap-2">
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
                  <div className="self-stretch py-2 bg-grayscale-surface-white rounded-md inline-flex justify-start items-center gap-2.5 flex-wrap content-center">
                    <div className="p-1.5 bg-grayscale-surface-default flex justify-center items-center gap-2.5">
                      <div className="justify-start text-grayscale-text-subtitle text-xs font-normal leading-none">
                        Data Analysis
                      </div>
                    </div>
                    <div className="p-1.5 bg-grayscale-surface-default flex justify-center items-center gap-2.5">
                      <div className="justify-start text-grayscale-text-subtitle text-xs font-normal leading-none">
                        Machine Learning
                      </div>
                    </div>
                    <div className="p-1.5 bg-grayscale-surface-default flex justify-center items-center gap-2.5">
                      <div className="justify-start text-grayscale-text-subtitle text-xs font-normal leading-none">
                        Data Visualization
                      </div>
                    </div>
                    <div className="p-1.5 bg-grayscale-surface-default flex justify-center items-center gap-2.5">
                      <div className="justify-start text-grayscale-text-subtitle text-xs font-normal leading-none">
                        Data Analysis
                      </div>
                    </div>
                    <div className="p-1.5 bg-grayscale-surface-default flex justify-center items-center gap-2.5">
                      <div className="justify-start text-grayscale-text-subtitle text-xs font-normal leading-none">
                        Data Analysis
                      </div>
                    </div>
                    <div className="p-1.5 bg-grayscale-surface-default flex justify-center items-center gap-2.5">
                      <div className="justify-start text-grayscale-text-subtitle text-xs font-normal leading-none">
                        Data Analysis
                      </div>
                    </div>
                    <div className="p-1.5 bg-grayscale-surface-default flex justify-center items-center gap-2.5">
                      <div className="justify-start text-grayscale-text-subtitle text-xs font-normal leading-none">
                        Data Analysis
                      </div>
                    </div>
                    <div className="p-1.5 bg-grayscale-surface-default flex justify-center items-center gap-2.5">
                      <div className="justify-start text-grayscale-text-subtitle text-xs font-normal leading-none">
                        Data Analysis
                      </div>
                    </div>
                    <div className="p-1.5 bg-grayscale-surface-default flex justify-center items-center gap-2.5">
                      <div className="justify-start text-grayscale-text-subtitle text-xs font-normal leading-none">
                        Data Analysis
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
              <div className="justify-start text-grayscale-text-title text-sm font-normal leading-tight">
                Overview
              </div>
              <div className="self-stretch inline-flex justify-start items-start gap-2">
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
                  <div className="self-stretch px-3 py-2 bg-grayscale-surface-white rounded-md inline-flex justify-start items-center">
                    <div className="flex-1 justify-start text-grayscale-text-subtitle text-base font-normal leading-normal">
                      We are seeking a passionate and experienced HR Manager to
                      join our growing team. The ideal candidate will be
                      responsible for managing the full HR lifecycle, including
                      recruitment, employee engagement, performance management,
                      and compliance. You will play a key role in building a
                      positive company culture, driving employee satisfaction,
                      and supporting organizational growth.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
              <div className="justify-start text-Greyscale-text-grayscale-text-title text-sm font-normal leading-tight">
                Requirements
              </div>
              <div className="self-stretch inline-flex justify-start items-start gap-2">
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
                  <div className="self-stretch px-3 py-2 bg-grayscale-surface-white rounded-md inline-flex justify-start items-center">
                    <div className="flex-1 justify-start">
                      <span className="text-grayscale-text-subtitle text-base font-normal leading-normal">
                        Must-Have Qualifications:
                        <br />
                      </span>
                      <span className="text-grayscale-text-subtitle text-base font-normal leading-normal">
                        Bachelor’s degree in Human Resources, Business
                        Administration, or related field.
                        <br />
                        5+ years of experience in HR management roles.
                        <br />
                        Strong knowledge of employment laws and HR best
                        practices.
                        <br />
                        Excellent communication, leadership, and interpersonal
                        skills.
                        <br />
                        Ability to handle confidential information with
                        discretion.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
