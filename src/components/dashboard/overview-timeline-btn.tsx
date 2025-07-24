import { IconCheck } from "@tabler/icons-react";
function OverViewAndTimelineBtn() {
    return (
        <>
            <div className="w-64 h-10 inline-flex justify-center items-center">
                <div className="flex-1 cursor-pointer hover:bg-grayscale-surface-default px-3 h-10  py-2.5 bg-grayscale-surface-default rounded-tl-[100px] rounded-bl-[100px] outline outline-offset-[-1px] outline-caption text-grayscale-text-body inline-flex justify-center items-center gap-2">
                    <IconCheck className="size-[18px]" />
                    <p className="text-center text-sm font-normal leading-tight">
                        Overview
                    </p>
                </div>

                <div className="flex-1 cursor-pointer hover:bg-grayscale-surface-default px-3 h-10  py-2.5 rounded-tr-[100px] rounded-br-[100px] outline outline-offset-[-1px] outline-caption text-grayscale-text-body inline-flex justify-center items-center gap-2">
                    <p className="text-center text-sm font-normal leading-tight">
                        Timeline
                    </p>
                </div>
            </div>
        </>
    );
}

export default OverViewAndTimelineBtn;
