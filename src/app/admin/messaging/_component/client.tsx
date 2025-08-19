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
      <div className="p-4">
        <div className="flex min-h-[87vh] flex-col items-center justify-center gap-10 bg-grayscale-surface-white shadow-sm">
          <div className="flex flex-col items-center justify-center gap-10">
            <div className="grid gap-4 md:grid-cols-2">
              <button
                className="flex min-h-10 w-[200px] flex-col items-center justify-center gap-1 rounded-lg bg-primary-surface-subtle p-10 text-grayscale-text-negative hover:cursor-pointer"
                onClick={openTemplateModal}
              >
                <span>Choose a</span>
                <span>predefined</span>
                <span>template</span>
              </button>
              <button
                className="bg-grayscale-defa flex min-h-10 w-[200px] flex-col items-center justify-center gap-1 rounded-lg border-2 border-dashed border-primary-surface-subtle p-10 font-semibold text-primary-surface-default hover:cursor-pointer"
                onClick={handleCustomMessageClick}
              >
                <span>Write custom</span>
                <span>message</span>
              </button>
            </div>
            <div className="flex items-center gap-2 text-base font-normal text-primary-text-label-1 hover:cursor-pointer">
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

export default Messaging;
