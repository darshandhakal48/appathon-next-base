import { Icons } from "@/components/ui/icons";
import { useGlobalModal } from "@/hooks/use-global-ui";
import { MessagingTemplateProps } from "@/lib/type";
import { useRouter } from "next/navigation";
import React from "react";

function TemplateBox({ item }: { item: MessagingTemplateProps }) {
    const router = useRouter();
    const modal = useGlobalModal();
    const Tag = Icons[item.icon];

    const handleClick = () => {
        router.push(`${item.link}`);
        modal.closeAll();
    };
    return (
        <>
            <button
                onClick={handleClick}
                className="bg-grayscale-surface-subtle p-6 gap-4 flex items-center rounded-xl cursor-pointer text-left"
            >
                <div className="h-12 w-12 bg-charts-violet-500 rounded-full flex items-center justify-center aspect-square">
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
