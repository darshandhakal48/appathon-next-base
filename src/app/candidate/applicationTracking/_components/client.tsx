"use client";

import ApplicationCard from "@/components/dashboard/application-card";
import Spacer from "@/components/shared/spacer";
import Timeline from "@/components/shared/timeline";
import { Button } from "@/components/ui/button";
import { candidateApplication } from "@/config/db";
import { Application } from "@/lib/type";

import { IconChevronDown, IconDotsVertical } from "@tabler/icons-react";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const steps = [
  { label: "Archived", status: "completed" },
  { label: "Screening", status: "upcoming" },
  { label: "Interviewing", status: "upcoming" },
  { label: "Offered", status: "upcoming" },
  { label: "Hired", status: "upcoming" },
  { label: "Rejected", status: "upcoming" },
];

export default function ApplicationTrackingClient() {
  const [selectedApplication, setSelectedApplication] =
    useState<Application | null>(null);

  useEffect(() => {
    setSelectedApplication(candidateApplication[0]);
  }, [candidateApplication]);

  return (
    <>
      <div className="self-stretch p-6 inline-flex flex-col  gap-4 overflow-hidden">
        <p className="h-12 py-6 text-title text-base font-normal  leading-normal">
          Recent Applied Jobs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex-1 inline-flex flex-col  gap-5">
            {candidateApplication.map((application, i) => (
              <ApplicationCard
                key={"candidate-application-" + i}
                application={application}
              />
            ))}
          </div>

          <div className="flex-1 inline-flex flex-col justify-center">
            <div className="self-stretch bg-background rounded flex flex-col  overflow-hidden">
              <Spacer />
              <div className="self-stretch px-6 py-2 flex flex-col justify-center gap-4">
                <div className="self-stretch inline-flex justify-between items-center">
                  <Button
                    variant="ghost"
                    className="pl-2.5 pr-3 py-px hover:bg-green-500/15 bg-green-500/10 rounded gap-2"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <p className="text-xs font-normal font-sans-secondary leading-none">
                      Shortlisted
                    </p>
                  </Button>
                  <div className="flex items-center gap-2">
                    <p className="text-caption text-[10px] font-normal leading-none">
                      Last Updated
                    </p>
                    <p className="px-2 py-1 bg-muted rounded grid place-content-center text-caption text-[10px] font-normal leading-none">
                      3 weeks ago
                    </p>
                  </div>
                </div>

                <p className=" text-title text-2xl font-semibold  leading-loose">
                  Software Engineering
                </p>

                <Image
                  src="https://placehold.co/48x48"
                  width={40}
                  height={40}
                  alt="user profile"
                  className="size-10 rounded-full"
                />

                <div className="px-4 py-2 w-fit bg-muted rounded-full flex items-center gap-3 overflow-hidden">
                  <Calendar className="size-3" />
                  <p className="text-xs leading-none">09/24/2024</p>
                </div>
                <div className="self-stretch inline-flex  items-center gap-4 text-[10px] font-normal leading-none">
                  <p className="px-2 py-1 bg-secondary/10 rounded-sm flex justify-center items-center">
                    Onsite
                  </p>

                  <p className="px-2 py-1 bg-secondary/10 rounded-sm flex justify-center items-center">
                    Full Time
                  </p>
                </div>
              </div>
              <Spacer />
              <div className="p-6 flex flex-col gap-6">
                <p className="w-64 text-title text-lg font-semibold leading-7">
                  Timeline Progress
                </p>
                <Timeline steps={steps} />
                {/* --------- TIMELINE ---------  */}
              </div>
              <Spacer />
              <div className="self-stretch bg-background rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex flex-col  overflow-hidden">
                <div className="w-[1409px] h-3 p-2.5" />
                <div className="self-stretch h-16 px-6 flex flex-col justify-center items-center">
                  <div className="self-stretch inline-flex justify-between items-center">
                    <p className="flex-1  text-title text-base font-normal  leading-normal">
                      Attachments
                    </p>
                  </div>
                </div>
                <div className="self-stretch px-6 py-2 inline-flex  items-center gap-4 overflow-hidden">
                  <div className="px-2 py-3 bg-white rounded  shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10)] inline-flex flex-col  gap-2 overflow-hidden">
                    <div className="w-44 h-24 relative bg-pink-700 rounded-sm overflow-hidden">
                      <Image
                        src="/_static/profile-pic.jpg"
                        width={173}
                        height={244}
                        alt="user profile"
                        className="w-44 h-60 left-0 top-0 absolute object-cover"
                      />
                    </div>
                    <div className="self-stretch inline-flex justify-center items-center gap-2">
                      <div className="flex-1 justify-center text-blue-800 text-xs font-medium font-sans-secondary leading-tight">
                        henry-anderson-resume.pdf
                      </div>
                      <IconDotsVertical />
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-6 p-2.5" />
              </div>
              <div className="self-stretch bg-background rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex flex-col  overflow-hidden">
                <div className=" h-3 p-2.5" />
                <div className="self-stretch h-16 px-6 flex flex-col justify-center items-center">
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className="flex-1  text-title text-base font-normal  leading-normal">
                      Cover Letter
                    </div>
                  </div>
                </div>
                <div className="self-stretch px-6 py-2 inline-flex  items-center gap-4 overflow-hidden">
                  <div className="px-6 py-3.5 bg-muted rounded-lg outline outline-offset-[-1px] outline-Greyscale-Border-Lighter inline-flex flex-col  gap-2">
                    <div className="justify-center">
                      <span className="text-sm font-normal  leading-tight">
                        Johnathan Blake 12 Evergreen Drive Brooklyn, NY 11201
                        john.blake@example.com (555) 123-4567 January 12, 2025
                        <br />
                        <br />
                        Ms. Linda Cooper Hiring Manager BrisTech Solutions 45
                        Ocean Avenue Manhattan, NY 10024
                        <br />
                        <br />
                        Subject: Application for Software Developer Position
                        <br />
                        <br />
                        Dear Ms. Cooper,
                        <br />
                        <br />I am writing to apply for the position of Software
                        Developer at BrisTech Solutions, as advertised on your
                        company website. With over five years of experience in
                        building scalable web applications and a keen interest
                        in contributing to innovative projects, I am excited
                        about the possibility of joining your esteemed team.
                        <br />
                        During my time at Falcon Technologies, I led a team in
                        developing an internal task management platform that
                        reduced project turnaround time by 30%. Additionally, I
                        played a key role in integrating machine learning
                        algorithms to improve data analysis processes for our
                        clients. My proficiency in JavaScript, Python, and cloud
                        services like AWS has allowed me to tackle complex
                        challenges and deliver practical solutions.
                        <br />
                        At BrisTech Solutions, I&apos;m particularly drawn to
                        your work in AI-driven customer experience tools. Your
                        mission to revolutionize the tech landscape aligns with
                        my passion for crafting forward-thinking, user-focused
                        applications. I am confident that my experience with
                        backend development, API integrations, and system
                        optimization will make me a valuable asset to your team.
                        <br />
                        Here are some highlights of my career so far:
                        <br />
                      </span>
                      <span className=" text-sm font-normal  leading-tight">
                        Developed a CRM tool that streamlined communication for
                        over 50 clients, resulting in a 20% increase in customer
                        retention.
                        <br />
                        Built a payment gateway integration for an e-commerce
                        platform, ensuring PCI compliance and improving
                        transaction security.
                        <br />
                        Mentored junior developers, enhancing team productivity
                        and fostering a collaborative work environment.
                        <br />
                      </span>
                      <span className="text-sm font-normal  leading-tight">
                        I would welcome the opportunity to discuss how my skills
                        can benefit BrisTech Solutions. Thank you for
                        considering my application, and I look forward to the
                        possibility of contributing to your company&apos;s
                        success.
                        <br />
                        <br />
                        Sincerely, Johnathan Blake
                      </span>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-6 p-2.5" />
              </div>
              <div className="self-stretch px-6 py-2 flex flex-col justify-center gap-4">
                <div className="w-64  text-title text-lg font-semibold  leading-7">
                  About the job
                </div>
                <div className="self-stretch rounded-md flex flex-col  gap-6">
                  <div className="self-stretch flex flex-col  gap-4">
                    <div className="self-stretch flex flex-col  gap-4">
                      <div className="self-stretch flex-wrap flex-col md:flex-row inline-flex  md:items-center gap-4">
                        <div className="flex-1 h-16 inline-flex flex-col  gap-1.5">
                          <div className=" text-title text-base font-normal  leading-normal">
                            Industry Type
                          </div>
                          <div className="self-stretch inline-flex  gap-2">
                            <div className="flex-1 inline-flex flex-col  gap-1.5">
                              <div className="self-stretch py-2 bg-white rounded-md inline-flex  items-center">
                                <div className=" text-caption text-base font-normal  leading-normal">
                                  IT
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 h-16 inline-flex flex-col  gap-1.5">
                          <div className=" text-title text-base font-normal  leading-normal">
                            Experience Level
                          </div>
                          <div className="self-stretch inline-flex  gap-2">
                            <div className="flex-1 inline-flex flex-col  gap-1.5">
                              <div className="self-stretch py-2 bg-white rounded-md inline-flex  items-center">
                                <div className=" text-caption text-base font-normal  leading-normal">
                                  Associate
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 h-16 inline-flex flex-col  gap-1.5">
                          <div className=" text-title text-base font-normal  leading-normal">
                            Hourly Compensation
                          </div>
                          <div className="self-stretch inline-flex  gap-2">
                            <div className="flex-1 inline-flex flex-col  gap-1.5">
                              <div className="self-stretch py-2 bg-white rounded-md inline-flex  items-center">
                                <div className=" text-caption text-base font-normal  leading-normal">
                                  USD 500-600
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch inline-flex  items-center gap-4">
                        <div className="flex-1 h-16 inline-flex flex-col  gap-1.5">
                          <div className=" text-title text-base font-normal  leading-normal">
                            Work Experience (in years)
                          </div>
                          <div className="self-stretch inline-flex  gap-2">
                            <div className="flex-1 inline-flex flex-col  gap-1.5">
                              <div className="self-stretch py-2 bg-white rounded-md inline-flex  items-center">
                                <div className=" text-caption text-base font-normal  leading-normal">
                                  5-6 years
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 inline-flex flex-col  gap-1.5">
                          <div className=" text-title text-base font-normal  leading-normal">
                            Education
                          </div>
                          <div className="self-stretch inline-flex  gap-2">
                            <div className="flex-1 inline-flex flex-col  gap-1.5">
                              <div className="self-stretch py-2 bg-white rounded-md inline-flex  items-center">
                                <div className=" text-caption text-base font-normal  leading-normal">
                                  Bachelor’s Degree
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 opacity-0 inline-flex flex-col  gap-1.5">
                          <div className=" text-title text-base font-normal  leading-normal">
                            Education
                          </div>
                          <div className="self-stretch inline-flex  gap-2">
                            <div className="flex-1 inline-flex flex-col  gap-1.5">
                              <div className="self-stretch py-2 bg-white rounded-md inline-flex  items-center">
                                <div className=" text-caption text-base font-normal  leading-normal">
                                  Bachelor’s Degree
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col  gap-1.5">
                      <div className=" text-title text-base font-normal pt-4 leading-normal">
                        Skills
                      </div>
                      <div className="self-stretch inline-flex  gap-2">
                        <div className="flex-1 inline-flex flex-col  gap-1.5">
                          <div className="self-stretch py-2 bg-white rounded-md inline-flex  items-center gap-2.5 flex-wrap content-center">
                            <div className="p-1.5 bg-background-secondary flex justify-center items-center gap-2.5">
                              <div className=" text-subtitle text-xs font-normal  leading-none">
                                Data Analysis
                              </div>
                            </div>
                            <div className="p-1.5 bg-background-secondary flex justify-center items-center gap-2.5">
                              <div className=" text-subtitle text-xs font-normal  leading-none">
                                Machine Learning
                              </div>
                            </div>
                            <div className="p-1.5 bg-background-secondary flex justify-center items-center gap-2.5">
                              <div className=" text-subtitle text-xs font-normal  leading-none">
                                Data Visualization
                              </div>
                            </div>
                            <div className="p-1.5 bg-background-secondary flex justify-center items-center gap-2.5">
                              <div className=" text-subtitle text-xs font-normal  leading-none">
                                Data Analysis
                              </div>
                            </div>
                            <div className="p-1.5 bg-background-secondary flex justify-center items-center gap-2.5">
                              <div className=" text-subtitle text-xs font-normal  leading-none">
                                Data Analysis
                              </div>
                            </div>
                            <div className="p-1.5 bg-background-secondary flex justify-center items-center gap-2.5">
                              <div className=" text-subtitle text-xs font-normal  leading-none">
                                Data Analysis
                              </div>
                            </div>
                            <div className="p-1.5 bg-background-secondary flex justify-center items-center gap-2.5">
                              <div className=" text-subtitle text-xs font-normal  leading-none">
                                Data Analysis
                              </div>
                            </div>
                            <div className="p-1.5 bg-background-secondary flex justify-center items-center gap-2.5">
                              <div className=" text-subtitle text-xs font-normal  leading-none">
                                Data Analysis
                              </div>
                            </div>
                            <div className="p-1.5 bg-background-secondary flex justify-center items-center gap-2.5">
                              <div className=" text-subtitle text-xs font-normal  leading-none">
                                Data Analysis
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col  gap-6">
                    <div className="self-stretch flex flex-col  gap-1.5">
                      <div className="inline-flex  items-center gap-1.5">
                        <div className=" text-title text-sm font-normal  leading-tight">
                          Overview
                        </div>
                        <IconChevronDown className="size-4 text-title" />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col  gap-1.5">
                      <div className="inline-flex  items-center gap-1.5">
                        <div className=" text-title text-sm font-normal  leading-tight">
                          Requirements
                        </div>
                        <IconChevronDown className="size-4 text-title" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-4 p-2.5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
