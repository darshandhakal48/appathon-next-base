"use client";

import DashboardPageHeader from "@/components/dashboard/page-header";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { JobFormSchema, JobFormType } from "@/components/forms/schema";
import { zodResolver } from "@hookform/resolvers/zod";

import { useGlobalModal } from "@/hooks/use-global-ui";
import { useRouter } from "next/navigation";
import ConfirmJobDetails from "../../_component/confirmJobDetails";
import Steps from "../../_component/steps";
import Step1 from "../../_component/step1";
import Step2 from "../../_component/step2";
import Step3 from "../../_component/step3";


function CreateNewJob() {
  const router = useRouter();

  const [step, setStep] = useState<1 | 2 | 3>(1);

  const modal = useGlobalModal();

  const form = useForm<JobFormType>({
    resolver: zodResolver(JobFormSchema),
    defaultValues: {
      jobInfo: {
        clientName: "",
        industry: "",
        jobTitle: "",
        jobType: "",
        salary: {
          currency: "",
          endingRange: 0,
          startingRange: 0,
        },
        workExperience: "",
      },
      jobAddress: {
        street: "",
        state: "",
        city: "",
        postalCode: "",
        country: "",
      },
      jobDescription: {
        description: "",
        requirement: "",
      },
    },
  });

  const onSubmit = (values: JobFormType) => {
    console.log("Values ==> ", values);
    if (step === 1) {
      return modal.custom({
        title: "Preview Job Details",
        content: <ConfirmJobDetails jobDetails={values} setStep={setStep} />,
        size: "max-w-[90%] max-h-[90%] overflow-y-scroll",
      });
    }
    setStep(3);
  };

  const handleBack = () => {
    if (step === 1) {
      router.back();
      return;
    }

    setStep((prev) => {
      if (prev === 3) return 2;
      if (prev === 2) return 1;
      return 1;
    });
  };

  return (
    <>
      <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <NewJobHeader handleBack={handleBack} />
                    <div className="p-6 space-y-8  ">
                        <Steps step={step} />
                        <div></div>
                        {step === 1 && <Step1 control={form.control} />}
                        {step === 2 && <Step2 />}
                        {step === 3 && <Step3 />}
                    </div>
                </form>
            </Form>
    </>
  );
}

function NewJobHeader({ handleBack }: { handleBack: () => void }) {
  return (
    <>
      <DashboardPageHeader title="">
        <div className="flex items-center gap-6 ">
          <span className="font-semibold text-xl text-grayscale-text-caption">
            Create New job
          </span>
          <span className="font-semibold text-xl text-grayscale-text-caption">
            /
          </span>
          <span className="font-semibold text-xl">Add Application Form</span>
        </div>
        <div className=" flex items-center gap-2.5">
          <Button
            variant="outline"
            className="border-primary-surface-default text-primary-surface-default"
            type="button"
            onClick={handleBack}
          >
            Back
          </Button>
          <Button variant="default" type="submit">
            Proceed
          </Button>
        </div>
      </DashboardPageHeader>
    </>
  );
}
export default CreateNewJob;
