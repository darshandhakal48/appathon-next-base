"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IconCheck } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="px-4 md:px-0 py-1.5">
      <section className="space-y-10 md:space-y-[60px] relative overflow-hidden">
        <div className="absolute -z-10 w-full top-0 left-0 block md:grid place-content-center">
          <Image
            src="/_static/brandings/hero-vector.png"
            className="w-full md:w-[740px]"
            alt="appathon logo"
            width={740}
            height={1026}
          />
        </div>
        <div className="h-[34vh] md:h-[38vh] gap-5 md:gap-10 flex-col text-center flex items-center justify-end">
          <div className="space-y-4">
            <h1 className="text-title text-[30px] md:text-5xl font-bold leading-[48px]">
              Revolutionizing Hiring with
              <br />
              <span className="text-primary-surface">AI-Powered Precision</span>
            </h1>
            <p className="text-subtitle leading-normal text-sm md:text-base">
              A seamless platform for recruiters to find top talent and
              candidates to land their dream jobs.
            </p>
          </div>
          <div className="flex gap-2.5 items-center">
            <Button className="bg-primary-surface text-primary-surface-foreground">
              Start Hiring
            </Button>
            {/* TODO: CHANGE BORDER COLOR */}
            <Button variant="outline">Find Your Next Job</Button>
          </div>
        </div>
        <div className="z-20 grid place-content-center md:block">
          <Image
            src="/_static/hero-image.png"
            width={1138}
            height={744}
            className="z-10 object-contain md:object-fill mx-auto max-h-[720px] max-w-[1114px] w-full"
            alt="appathon dashboard ui"
          />
        </div>
      </section>
      <section className="grid place-content-center mt-[60px] mb-[160px]">
        <Image
          alt="companies"
          src="/_static/companies.svg"
          width={605}
          height={46}
        />
      </section>
      <section className=" mx-auto max-w-[1130px] w-full space-y-[120px]">
        <div className="grid grid-cols-2 gap-10">
          <Image
            src="/_static/candidate-sourcing.png"
            width={545}
            height={673}
            className="max-w-[545px] w-full"
            alt="candidate sourcing"
          />

          <div className="space-y-4">
            <p className="text-title text-2xl font-semibold leading-loose">
              Candidate Sourcing Suite
            </p>
            <p className="text-subtitle leading-normal">
              Reach millions of candidates effortlessly with AI-driven sourcing
              tools. Post jobs, find passive talent, and boost visibility on top
              platforms.
            </p>
            <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
              <div className="flex items-center gap-2.5">
                <CheckButton />

                <p className="text-subtitle font-normal leading-normal">
                  Post to 200+ job boards
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckButton />
                <p className="text-subtitle font-normal leading-normal">
                  Boost visibility on LinkedIn & Indeed
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckButton />
                <p className="text-subtitle font-normal leading-normal">
                  AI-powered search (400M+ profiles)
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckButton />
                <p className="text-subtitle font-normal leading-normal">
                  Employee referrals with rewards
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckButton />
                <p className="text-subtitle font-normal leading-normal">
                  Customizable career pages
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2  gap-10">
          <div className="space-y-4">
            <p className="text-title text-2xl font-semibold leading-loose">
              Applicant Tracking System
            </p>
            <p className="text-subtitle leading-normal">
              Streamline your hiring process with AI-assisted screening,
              seamless scheduling, and custom workflows. Manage candidates from
              application to offer.
            </p>
            <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
              <div className="flex items-center gap-2.5">
                <CheckButton />

                <p className="text-subtitle font-normal leading-normal">
                  Centralized talent CRM database
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckButton />
                <p className="text-subtitle font-normal leading-normal">
                  AI resume screening & video interviews{" "}
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckButton />
                <p className="text-subtitle font-normal leading-normal">
                  Self-scheduling with calendar sync
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckButton />
                <p className="text-subtitle font-normal leading-normal">
                  Mobile-friendly applications & SMS engagement
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckButton />
                <p className="text-subtitle font-normal leading3-normal">
                  Custom workflows, approvals & offer management
                </p>
              </div>
            </div>
          </div>
          <Image
            src="/_static/candidate-sourcing.png"
            width={545}
            height={673}
            className="max-w-[545px] w-full"
            alt="candidate sourcing"
          />
        </div>
        <div>
          <div className="self-stretch flex flex-col justify-center items-center gap-4">
            <div className="self-stretch text-center justify-start text-Greyscale-Text-Title text-2xl font-semibold font-['Roboto'] leading-loose">
              AI-Powered Recruitment
            </div>
            <div className="w-[508px] text-center justify-start text-Greyscale-Text-Subtitle text-base font-normal font-['Roboto'] leading-normal">
              Automate sourcing, screening, and communication with AI-driven
              hiring tools. Focus on strategic decisions while AI handles
              repetitive tasks.
            </div>
            <div className="flex flex-col justify-start items-start gap-2.5">
              <div className="inline-flex justify-center items-center gap-2.5">
                <CheckButton />{" "}
                <div className="justify-start text-Greyscale-Text-Subtitle text-base font-normal font-['Roboto'] leading-normal">
                  AI-generated job descriptions & emails
                </div>
              </div>
              <div className="inline-flex justify-center items-center gap-2.5">
                <CheckButton />{" "}
                <div className="justify-start text-Greyscale-Text-Subtitle text-base font-normal font-['Roboto'] leading-normal">
                  Resume parsing & automated screening
                </div>
              </div>
              <div className="inline-flex justify-center items-center gap-2.5">
                <CheckButton />{" "}
                <div className="justify-start text-Greyscale-Text-Subtitle text-base font-normal font-['Roboto'] leading-normal">
                  AI-matched candidates from 400M+ profiles
                </div>
              </div>
            </div>
          </div>
          <div className="size-full grid place-content-center h-96 relative">
            <Image
              className="w-[866px] h-80"
              src="/_static/requirements.png"
              alt="requirements table"
              width={866}
              height={315}
            />
          </div>
        </div>
        <TryApppathonCard />
      </section>
    </div>
  );
}

const CheckButton = ({
  className,
  ...props
}: React.ComponentProps<"button">) => {
  return (
    <Button
      {...props}
      size="icon"
      className={cn("size-4 grid place-content-center bg-success text-white")}
    >
      <IconCheck className="size-3" />
    </Button>
  );
};

const TryApppathonCard = () => {
  return (
    <div className="w-full min-h-96 lg:pl-20 lg:pr-28 px-3 py-10 lg:py-20 relative bg-primary-surface rounded-3xl inline-flex justify-center lg:justify-end items-center gap-28 overflow-hidden">
      <div className="inline-flex flex-col justify-center items-center lg:justify-start lg:items-start gap-10">
        <h3 className="text-primary-surface-foreground text-4xl font-semibold leading-10">
          Try Appathon.ai Today!
        </h3>
        <div className="flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-4 text-center">
            <CheckButton />
            <p className="text-primary-surface-foreground text-sm font-normal leading-tight">
              Free Trial Available
            </p>
          </div>
          <div className="flex items-center gap-4">
            <CheckButton />
            <p className="text-primary-surface-foreground text-sm font-normal leading-tight">
              No Setup Fees
            </p>
          </div>
          <div className="flex items-center gap-4">
            <CheckButton />
            <p className="text-primary-surface-foreground text-sm font-normal leading-tight">
              Seamless Integration with Your Existing Systems
            </p>
          </div>
        </div>
        <Button className="bg-background text-foreground hover:bg-background/90">
          Try Appathon For Free
        </Button>
      </div>
      <Image
        width={740}
        height={1026}
        alt="girl with coat"
        className="w-[670px] object-fill absolute left-1/2 -translate-x-1/2 z-20 lg:left-0 lg:translate-x-0 lg:top-0"
        src="/_static/brandings/appathon-logo-vector.svg"
      />

      <Image
        width={1080}
        height={1080}
        alt="girl with coat"
        className="size-[564px] object-contain left-[64px] top-0 absolute hidden lg:block"
        src="/_static/woman.png"
      />
    </div>
  );
};
