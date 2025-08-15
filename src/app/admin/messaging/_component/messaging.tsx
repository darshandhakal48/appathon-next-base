"use client";
import DashboardPageHeader from "@/components/dashboard/page-header";
import { useGlobalModal } from "@/hooks/use-global-ui";
import ChooseTemplateModal from "./chooseTemplateModal";
import { useRouter } from "next/navigation";

function Messaging() {
    const modal = useGlobalModal();

    const openTemplateModal = () => {
        modal.custom({
            title: "Choose a template",
            size: "max-w-[80%] min-h-[70%] ",
            content: <ChooseTemplateModal />,
        });
    };

    const router = useRouter();

    const handleCustomMessageClick = () => {
        router.push(`/admin/messaging/customMessage`);
    };
    return (
        <>
            <MessagingHeader />
            <div className="p-4   ">
                <div className="min-h-[87vh] bg-grayscale-surface-white shadow-sm flex justify-center items-center flex-col gap-10">
                    <div className=" flex justify-center items-center flex-col gap-10">
                        <div className="grid md:grid-cols-2 gap-4">
                            <button
                                className="w-[200px] bg-primary-surface-subtle rounded-lg flex items-center justify-center gap-1 flex-col min-h-10 p-10 text-grayscale-text-negative hover:cursor-pointer"
                                onClick={openTemplateModal}
                            >
                                <span>Choose a</span>
                                <span>predefined</span>
                                <span>template</span>
                            </button>
                            <button
                                className="w-[200px] bg-grayscale-defa rounded-lg flex items-center justify-center gap-1 flex-col min-h-10 p-10 text-primary-surface-default hover:cursor-pointer border-2 font-semibold border-dashed border-primary-surface-subtle "
                                onClick={handleCustomMessageClick}
                            >
                                <span>Write custom</span>
                                <span>message</span>
                            </button>
                        </div>
                        <div className="flex items-center gap-2 text-primary-text-label-1 text-base font-normal hover:cursor-pointer">
                            <span>or</span>
                            <span className="underline">
                                Create a new Template
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function MessagingHeader() {
    return (
        <>
            <DashboardPageHeader title="Messaging"></DashboardPageHeader>
        </>
    );
}
export default Messaging;
