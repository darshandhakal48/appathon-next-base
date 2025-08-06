import { MessagingTemplateProps } from "@/lib/type";
import React from "react";
import { LuFilePenLine } from "react-icons/lu";

function TemplateBox({ item }: { item: MessagingTemplateProps }) {
    return (
        <>
            <div className="bg-grayscale-surface-subtle p-6 gap-4 flex items-center rounded-xl cursor-pointer">
                <div className="h-12 w-12 bg-charts-violet-500 rounded-full flex items-center justify-center aspect-square">
                    <LuFilePenLine className="text-grayscale-text-negative text-xl" />
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-grayscale-text-title text-base font-normal">
                        {item.title}
                    </p>
                    <p className="text-grayscale-text-subtitle text-sm font-normal">
                        {item.description}
                    </p>
                </div>
            </div>
        </>
    );
}

export default TemplateBox;
