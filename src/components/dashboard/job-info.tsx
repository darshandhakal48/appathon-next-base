
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
      className={cn("rounded bg-grayscale-surface-white", className)}
    >
      <div className="h-4 p-2.5" />

      <div className="flex flex-col items-start justify-center gap-4 self-stretch px-6 py-2">
        <div className="inline-flex items-center justify-between self-stretch">
          <div className="inline-flex flex-col items-start justify-start gap-2.5">
            <div className="inline-flex items-center justify-start gap-2">
              <Image
                alt="placeholder"
                width={40}
                height={40}
                className="soze-10 rounded-full"
                src="/_static/40x40.svg"
              />

              <div className="justify-center font-['Inter'] text-sm leading-tight font-normal text-gray-700">
                Rays IT Solutions
              </div>
            </div>
          </div>

          <div className="flex items-center justify-start gap-3">
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
        <div className="inline-flex items-center justify-start gap-1 self-stretch">
          <div className="text-Greyscale-text-grayscale-text-title justify-start text-2xl leading-loose font-semibold">
            {job?.title}
          </div>
        </div>
        <div className="inline-flex items-center justify-start gap-4 self-stretch">
          <div className="justify-start text-[10px] leading-none font-normal text-grayscale-text-caption">
            {job?.posted}
          </div>
          <div className="flex items-center justify-center gap-1 rounded-3xl bg-warning-surface-subtle px-2 py-1">
            <div className="text-warning-foreground justify-start text-[10px] leading-none font-normal">
              {job?.expires}
            </div>
          </div>
        </div>
        <div className="inline-flex items-center justify-start gap-4 self-stretch">
          <div className="flex items-center justify-center gap-2.5 rounded-sm bg-primary-surface-default/10 p-2">
            <div className="text-Greyscale-Text-Body justify-start text-[10px] leading-none font-normal">
              Remote
            </div>
          </div>
          <div className="flex items-center justify-center gap-2.5 rounded-sm bg-primary-surface-default/10 p-2">
            <div className="text-Greyscale-Text-Body justify-start text-[10px] leading-none font-normal">
              Full Time
            </div>
          </div>
        </div>
      </div>
      <div className="h-6 self-stretch p-2.5" />
      <div className="flex flex-col items-start justify-start gap-2.5 self-stretch px-6">
        <div className="flex flex-col items-start justify-start gap-4 self-stretch overflow-hidden rounded bg-success-surface-subtle/10 p-6">
          <div className="inline-flex items-center justify-between self-stretch">
            <div className="flex items-center justify-start gap-2">
              <div className="flex items-center justify-start gap-2.5 rounded-[999px] bg-grayscale-surface-white p-2">
                <Icons.sparkingStar className="text-success" />
              </div>
              <div className="flex h-8 items-center justify-start gap-2 rounded-[999px] bg-grayscale-surface-white px-4 py-1">
                <div className="text-success justify-start text-lg leading-7 font-semibold">
                  80%
                </div>
                <div className="outline-background-secondary h-4 w-0 outline outline-offset-[-0.50px]" />
                <div className="justify-start text-sm leading-tight font-normal text-grayscale-text-title">
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
          <div className="justify-start self-stretch">
            <span className="text-sm leading-tight font-semibold text-grayscale-text-subtitle">
              Your resume has scored an 80% match for this job! <br />
            </span>
            <span className="text-sm leading-tight font-normal text-grayscale-text-subtitle">
              This means your skills and experience closely align with the job
              requirements. You have a high chance of being shortlisted—consider
              applying now!
            </span>
          </div>
        </div>
      </div>
      <div className="h-6 self-stretch p-2.5" />
      <div className="flex flex-col items-start justify-center gap-4 self-stretch px-6 py-2">
        <div className="text-Greyscale-text-grayscale-text-title w-64 justify-start text-xl leading-7 font-semibold">
          About the job
        </div>
        <div className="flex flex-col items-start justify-start gap-6 self-stretch rounded-md">
          <div className="flex flex-col items-start justify-start gap-4 self-stretch">
            <div className="flex flex-col items-start justify-start gap-4 self-stretch">
              <div className="inline-flex items-center justify-start gap-4 self-stretch">
                <div className="inline-flex h-16 flex-1 flex-col items-start justify-start gap-1.5">
                  <div className="text-Greyscale-text-grayscale-text-title justify-start text-base leading-normal font-normal">
                    Industry Type
                  </div>
                  <div className="inline-flex items-start justify-start gap-2 self-stretch">
                    <div className="inline-flex flex-1 flex-col items-start justify-start gap-1.5">
                      <div className="inline-flex items-center justify-start self-stretch rounded-md bg-grayscale-surface-white py-2">
                        <div className="justify-start text-base leading-normal font-normal text-grayscale-text-caption">
                          IT
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inline-flex h-16 flex-1 flex-col items-start justify-start gap-1.5">
                  <div className="text-Greyscale-text-grayscale-text-title justify-start text-base leading-normal font-normal">
                    Experience Level
                  </div>
                  <div className="inline-flex items-start justify-start gap-2 self-stretch">
                    <div className="inline-flex flex-1 flex-col items-start justify-start gap-1.5">
                      <div className="inline-flex items-center justify-start self-stretch rounded-md bg-grayscale-surface-white py-2">
                        <div className="justify-start text-base leading-normal font-normal text-grayscale-text-caption">
                          Associate
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inline-flex h-16 flex-1 flex-col items-start justify-start gap-1.5">
                  <div className="text-Greyscale-text-grayscale-text-title justify-start text-base leading-normal font-normal">
                    Hourly Compensation
                  </div>
                  <div className="inline-flex items-start justify-start gap-2 self-stretch">
                    <div className="inline-flex flex-1 flex-col items-start justify-start gap-1.5">
                      <div className="inline-flex items-center justify-start self-stretch rounded-md bg-grayscale-surface-white py-2">
                        <div className="justify-start text-base leading-normal font-normal text-grayscale-text-caption">
                          USD 500-600
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center justify-start gap-4 self-stretch">
                <div className="inline-flex h-16 flex-1 flex-col items-start justify-start gap-1.5">
                  <div className="justify-start text-base leading-normal font-normal text-nowrap text-grayscale-text-title">
                    Work Experience (in years)
                  </div>
                  <div className="inline-flex items-start justify-start gap-2 self-stretch">
                    <div className="inline-flex flex-1 flex-col items-start justify-start gap-1.5">
                      <div className="inline-flex items-center justify-start self-stretch rounded-md bg-grayscale-surface-white py-2">
                        <div className="justify-start text-base leading-normal font-normal text-grayscale-text-caption">
                          5-6 years
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inline-flex flex-1 flex-col items-start justify-start gap-1.5">
                  <div className="text-Greyscale-text-grayscale-text-title justify-start text-base leading-normal font-normal">
                    Educatin
                  </div>
                  <div className="inline-flex items-start justify-start gap-2 self-stretch">
                    <div className="inline-flex flex-1 flex-col items-start justify-start gap-1.5">
                      <div className="inline-flex items-center justify-start self-stretch rounded-md bg-grayscale-surface-white py-2">
                        <div className="justify-start text-base leading-normal font-normal text-grayscale-text-caption">
                          Bachelor&apos;s Degree
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inline-flex flex-1 flex-col items-start justify-start gap-1.5 opacity-0">
                  <div className="text-Greyscale-text-grayscale-text-title justify-start text-base leading-normal font-normal">
                    Educatin
                  </div>
                  <div className="inline-flex items-start justify-start gap-2 self-stretch">
                    <div className="inline-flex flex-1 flex-col items-start justify-start gap-1.5">
                      <div className="inline-flex items-center justify-start self-stretch rounded-md bg-grayscale-surface-white py-2">
                        <div className="text-Greyscale-text-grayscale-text-caption justify-start text-base leading-normal font-normal">
                          Bachelor&apos;s Degree
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-1.5 self-stretch">
              <div className="justify-start text-base leading-normal font-normal text-grayscale-text-title">
                Skills
              </div>
              <div className="inline-flex items-start justify-start gap-2 self-stretch">
                <div className="inline-flex flex-1 flex-col items-start justify-start gap-1.5">
                  <div className="inline-flex flex-wrap content-center items-center justify-start gap-2.5 self-stretch rounded-md bg-grayscale-surface-white py-2">
                    <div className="flex items-center justify-center gap-2.5 bg-grayscale-surface-default p-1.5">
                      <div className="justify-start text-xs leading-none font-normal text-grayscale-text-subtitle">
                        Data Analysis
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2.5 bg-grayscale-surface-default p-1.5">
                      <div className="justify-start text-xs leading-none font-normal text-grayscale-text-subtitle">
                        Machine Learning
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2.5 bg-grayscale-surface-default p-1.5">
                      <div className="justify-start text-xs leading-none font-normal text-grayscale-text-subtitle">
                        Data Visualization
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2.5 bg-grayscale-surface-default p-1.5">
                      <div className="justify-start text-xs leading-none font-normal text-grayscale-text-subtitle">
                        Data Analysis
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2.5 bg-grayscale-surface-default p-1.5">
                      <div className="justify-start text-xs leading-none font-normal text-grayscale-text-subtitle">
                        Data Analysis
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2.5 bg-grayscale-surface-default p-1.5">
                      <div className="justify-start text-xs leading-none font-normal text-grayscale-text-subtitle">
                        Data Analysis
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2.5 bg-grayscale-surface-default p-1.5">
                      <div className="justify-start text-xs leading-none font-normal text-grayscale-text-subtitle">
                        Data Analysis
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2.5 bg-grayscale-surface-default p-1.5">
                      <div className="justify-start text-xs leading-none font-normal text-grayscale-text-subtitle">
                        Data Analysis
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2.5 bg-grayscale-surface-default p-1.5">
                      <div className="justify-start text-xs leading-none font-normal text-grayscale-text-subtitle">
                        Data Analysis
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-4 self-stretch">
            <div className="flex flex-col items-start justify-start gap-1.5 self-stretch">
              <div className="justify-start text-sm leading-tight font-normal text-grayscale-text-title">
                Overview
              </div>
              <div className="inline-flex items-start justify-start gap-2 self-stretch">
                <div className="inline-flex flex-1 flex-col items-start justify-start gap-1.5">
                  <div className="inline-flex items-center justify-start self-stretch rounded-md bg-grayscale-surface-white px-3 py-2">
                    <div className="flex-1 justify-start text-base leading-normal font-normal text-grayscale-text-subtitle">
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
            <div className="flex flex-col items-start justify-start gap-1.5 self-stretch">
              <div className="text-Greyscale-text-grayscale-text-title justify-start text-sm leading-tight font-normal">
                Requirements
              </div>
              <div className="inline-flex items-start justify-start gap-2 self-stretch">
                <div className="inline-flex flex-1 flex-col items-start justify-start gap-1.5">
                  <div className="inline-flex items-center justify-start self-stretch rounded-md bg-grayscale-surface-white px-3 py-2">
                    <div className="flex-1 justify-start">
                      <span className="text-base leading-normal font-normal text-grayscale-text-subtitle">
                        Must-Have Qualifications:
                        <br />
                      </span>
                      <span className="text-base leading-normal font-normal text-grayscale-text-subtitle">
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

