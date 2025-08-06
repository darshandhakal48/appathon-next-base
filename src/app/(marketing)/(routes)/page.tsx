"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IconArrowRight, IconCheck, IconUserCircle } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import {
  aiRecruitmentService,
  SERVICES,
  sourcingService,
  trackingService,
  tryAppathon,
} from "@/config/marketing";
import Expandable from "@/components/ui/expandable-carousel";
import { AnimatePresence, motion } from "motion/react";
import CandidateSourcingAnimation from "../_components/candidate-sourcing-animation";
import { Typography } from "@/components/shared/typography";
import HeroSection from "@/components/marketing/hero-section";
import { TypeIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="grid place-content-center mt-[60px] mb-[160px]">
        <Image
          alt="companies"
          src="/_static/companies.svg"
          width={605}
          height={46}
        />
      </section>
      <section className=" mx-auto max-w-[1130px] w-full space-y-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <CandidateSourcingAnimation />
          <div className="space-y-4">
            <Typography
              type="2xl"
              color="title"
              className="text-grayscale-text-title text-2xl font-semibold leading-loose"
            >
              Candidate Sourcing Suite
            </Typography>
            <Typography color="subtitle">
              Reach millions of candidates effortlessly with AI-driven sourcing
              tools. Post jobs, find passive talent, and boost visibility on top
              platforms.
            </Typography>
            <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
              {sourcingService.map((item, i) => (
                <div
                  key={"m-service-" + i}
                  className="flex items-center gap-2.5"
                >
                  <CheckButton />

                  <Typography color="subtitle">{item}</Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <Typography
              type="2xl"
              color="title"
              className="text-grayscale-text-title text-2xl font-semibold leading-loose"
            >
              Applicant Tracking System
            </Typography>
            <Typography color="subtitle">
              {trackingService.description}
            </Typography>
            <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
              {trackingService.list.map((item, i) => (
                <div className="flex items-center gap-2.5" key={i + "m-ts"}>
                  <CheckButton />

                  <Typography color="subtitle">{item}</Typography>
                </div>
              ))}
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
        <div className="space-y-10 md:space-y-0">
          <div className="self-stretch flex flex-col justify-center items-center gap-4">
            <Typography type="2xl" color="title">
              AI-Powered Recruitment
            </Typography>
            <Typography className="max-w-[508px] w-full text-center text-grayscale-text-subtitle">
              {aiRecruitmentService.description}
            </Typography>
            <div className="flex flex-col gap-2.5">
              {aiRecruitmentService.list.map((item, i) => (
                <div
                  key={"m-ai-" + i}
                  className="inline-flex justify-start items-center gap-2.5"
                >
                  <CheckButton />
                  <p className="text-grayscale-text-subtitle text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="size-full grid place-content-center md:h-96 relative">
            <Image
              className="max-w-[866px] max-h-80 object-center md:object-contain h-full"
              src="/_static/requirements.png"
              alt="requirements table"
              width={866}
              height={315}
            />
          </div>
        </div>
        <ServiceSection />
        <HiringNeed />
        <TryApppathonCard />
      </section>
    </>
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
      className={cn(
        "size-4 grid place-content-center bg-success-surface-subtle text-white"
      )}
    >
      <IconCheck className="size-3" />
    </Button>
  );
};

const TryApppathonCard = () => {
  return (
    <div className="w-full min-h-96 lg:pl-20 lg:pr-28 px-3 py-10 lg:py-20 relative bg-primary-surface-default rounded-3xl inline-flex justify-center lg:justify-end items-center gap-28 overflow-hidden">
      <div className="inline-flex flex-col justify-center items-center lg:justify-start lg:items-start gap-10">
        <Typography color="negative" type="4xl">
          Try Appathon.ai Today!
        </Typography>
        {/* <h3 className="text-grayscale-text-negative text-4xl font-semibold leading-10">
          Try Appathon.ai Today!
        </h3> */}
        <div className="flex flex-col justify-start items-start gap-4">
          {tryAppathon.map((item, i) => (
            <div className="flex items-center gap-4 text-center" key={i}>
              <CheckButton />

              <Typography color="white" type="sm" as="h1">
                {item}
              </Typography>
            </div>
          ))}
        </div>
        <Button className="bg-grayscale-surface-white text-grayscale-text-body hover:bg-grayscale-surface-white/90">
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

interface ServiceListItemProps extends React.ComponentProps<"div"> {
  title: string;
  isActive?: boolean;
}

const ServiceListItem = ({
  title,
  isActive = false,
  className,
  ...props
}: ServiceListItemProps) => {
  return (
    <div
      className={cn(
        `h-20 px-6 py-4 border-b flex items-center justify-between`,
        isActive ? "bg-slate-200 border-slate-400" : "border-slate-200",
        className
      )}
      {...props}
    >
      <div className="gap-4 flex items-center">
        <IconUserCircle className="size-[22px] text-sky-800" />
        <div className="text-sky-800 text-base font-semibold">{title}</div>
      </div>
      {isActive && <IconArrowRight className="size text-sky-800" />}
    </div>
  );
};
interface ServiceDetailPanelProps {
  title: string;
  description: string;
  image: string;
}

const ServiceDetailPanel = ({
  title,
  description,
  image,
}: ServiceDetailPanelProps) => {
  return (
    <motion.div
      // key={title + "text"}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, zIndex: -1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="size-full"
    >
      <div className="max-w-[745px] max-h-[504px] size-full p-14 bg-gradient-to-r from-slate-200 to-transparent grid grid-cols-1 md:grid-cols-2 gap-2.5 overflow-hidden ">
        <motion.div
          // key={title + "image"}
          initial={{ opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="size-full"
        >
          <div className="text-sky-800 text-xl font-semibold">{title}</div>
          <div className="text-slate-500 text-sm">{description}</div>
        </motion.div>

        <motion.div
          // key={title + "image"}
          initial={{ opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="size-full "
        >
          <Image
            src={image}
            alt={title}
            width={349}
            height={239}
            className="object-fit"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const ServiceSection = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="min-h-[504px] flex">
      <div className="max-w-96 flex flex-col w-full">
        {SERVICES.map((Service, index) => (
          <React.Fragment key={Service.title}>
            <ServiceListItem
              onClick={() => setActive(index)}
              title={Service.title}
              isActive={index === active} // static active example
            />
            {active === index && (
              <div className="block md:hidden">
                <AnimatePresence mode="wait">
                  <ServiceDetailPanel
                    title={SERVICES[0].title}
                    description={SERVICES[0].description}
                    image={Service.image}
                  />
                </AnimatePresence>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="hidden md:block">
        {" "}
        <AnimatePresence mode="wait">
          <ServiceDetailPanel
            image={SERVICES[active].image}
            title={SERVICES[active].title}
            description={SERVICES[active].description}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

const HiringNeed = () => {
  return (
    <MaxWidthWrapper className="space-y-[50px]">
      <p className="font-semibold text-center text-4xl leading-10">
        Built for Every Hiring Needs
      </p>

      <Expandable className="w-full min-w-72 storybook-fix" />
    </MaxWidthWrapper>
  );
};
