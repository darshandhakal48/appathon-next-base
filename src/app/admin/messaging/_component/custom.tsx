"use client";
import DashboardPageHeader from "@/components/dashboard/page-header";
import AdditionalFormAttachment from "@/components/forms/employee-attachments-form";
import CustomMessageForm from "@/components/forms/messaging/custom-message-form";
import {
    CustomMessageSchema,
    CustomMessageType,
} from "@/components/forms/schema";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import ChooseTemplateModal from "./chooseTemplateModal";
import { useGlobalModal } from "@/hooks/use-global-ui";

function CustomMessageComponent() {
    const form = useForm<CustomMessageType>({
        resolver: zodResolver(CustomMessageSchema),
        defaultValues: {
            BasicMessage: {
                message: "",
                sendTo: "",
                subjectName: "",
            },
            Attachment: {
                attachment: undefined,
                others: undefined,
            },
        },
    });

    const onSubmit = (formData: CustomMessageType) => {
        console.log("Data submitted successfully ==> ", formData);
    };
    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <CustomMessageHeader />
                    <div className="p-6 gap-6 grid grid-cols-1 md:grid-cols-2">
                        <CustomMessageForm control={form.control} />
                        <AdditionalFormAttachment className="md:grid-cols-1" />
                    </div>
                </form>
            </Form>
        </>
    );
}

function CustomMessageHeader() {
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
        <>
            <DashboardPageHeader title="">
                <div
                    className="flex items-center gap-2.5 cursor-pointer"
                    onClick={handleNavigation}
                >
                    <ArrowLeft className="h-6 w-6" />
                    <span className="text-xl font-semibold">
                        Custom Message
                    </span>
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
        </>
    );
}

export default CustomMessageComponent;
