"use client";
import DashboardPageHeader from "@/components/dashboard/page-header";
import AdditionalFormAttachment from "@/components/forms/employee-attachments-form";
import ApplicationForm from "@/components/forms/messaging/application-form";
import {
    ApplicationFormSchema,
    ApplicationFormType,
} from "@/components/forms/schema";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useGlobalModal } from "@/hooks/use-global-ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import ChooseTemplateModal from "./chooseTemplateModal";

function Application() {
    const form = useForm<ApplicationFormType>({
        resolver: zodResolver(ApplicationFormSchema),
        defaultValues: {
            ApplicationAcknowledgement: {
                companyName: "",
                message: "",
                position: "",
                sendTo: "",
                subjectName: "",
                yourName: "",
            },
        },
    });

    const onSubmit = (values: ApplicationFormType) => {
        console.log(values);
    };
    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <ApplicationHeader />

                    <div className="p-6 gap-6 grid grid-cols-1 md:grid-cols-2">
                        <ApplicationForm control={form.control} />
                        {/* <div className="bg-grayscale-surface-white p-4"> */}
                        <AdditionalFormAttachment className="md:grid-cols-1" />
                        {/* </div> */}
                    </div>
                </form>
            </Form>
        </>
    );
}

function ApplicationHeader() {
    const router = useRouter();

    const handleNavigation = () => {
        router.back();
    };

    const modal = useGlobalModal();

    const openTemplateModal = () => {
        modal.custom({
            title: "Choose a template",
            size: "max-w-[80%] min-h-[70%] ",
            content: <ChooseTemplateModal />,
        });
    };
    return (
        <DashboardPageHeader title="">
            <div
                className="flex items-center gap-2.5 cursor-pointer"
                onClick={handleNavigation}
            >
                <ArrowLeft className="h-6 w-6" />
                <span className="text-xl font-semibold">Template</span>
            </div>
            <div className="flex items-center gap-2.5">
                <Button
                    variant="outline"
                    type="button"
                    className="border-primary-border-default text-primary-text-label-1 font-normal"
                    onClick={openTemplateModal}
                >
                    Choose a Template
                </Button>
                <Button
                    variant="default"
                    type="submit"
                    className="text-base font-normal"
                >
                    Send
                </Button>
            </div>
        </DashboardPageHeader>
    );
}

export default Application;
