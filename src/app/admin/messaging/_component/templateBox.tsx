import React from "react";
import { useRouter } from "next/navigation";

import { MessagingTemplateProps } from "@/lib/type";
import { useGlobalModal } from "@/hooks/use-global-ui";
import { Icons } from "@/components/ui/icons";

function TemplateBox({ item }: { item: MessagingTemplateProps }) {
  const router = useRouter();
  const modal = useGlobalModal();
  const Tag = Icons[item.icon];

  const handleClick = () => {
    // router.push(`${item.link}`);
    router.push(`/admin/messaging/applicationAcknowledgement`);

    modal.closeAll();
  };
  return (
    <>
      <button
        onClick={handleClick}
        className="bg-grayscale-surface-subtle flex cursor-pointer items-center gap-4 rounded-xl p-6 text-left"
      >
        <div className="bg-charts-violet-500 flex aspect-square h-12 w-12 items-center justify-center rounded-full">
          <Tag className="text-grayscale-text-negative text-xl" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-grayscale-text-title text-base font-normal">
            {item.title}
          </p>
          <p className="text-grayscale-text-subtitle text-sm font-normal">
            {item.description}
          </p>
        </div>
      </button>
    </>
  );
}

export default TemplateBox;
