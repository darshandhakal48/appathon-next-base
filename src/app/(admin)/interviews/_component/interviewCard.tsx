import React from "react";

function InterviewCard() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <div>
                    <span className="text-xs">Upcoming</span>
                    <span className="text-xs">Video Interview</span>
                </div>
                <span>icon</span>
            </div>
            <div className="border-t-[1px]"></div>
            <div className="flex flex-col gap-2.5">
                <span
                    className="text-[10px] text-gray-400
                "
                >
                    Candidate
                </span>
                <span className="text-lg ">Jessie Pinkman</span>
            </div>
            <div className="grid grid-cols-2">
                <div className="flex flex-col gap-2.5">
                    <span
                        className="text-[10px] text-gray-400
                "
                    >
                        Candidate
                    </span>
                    <span className="text-sm ">Jessie Pinkman</span>
                </div>
                <div className="flex flex-col gap-2.5">
                    <span
                        className="text-[10px] text-gray-400
                "
                    >
                        Candidate
                    </span>
                    <span className="text-sm ">Jessie Pinkman</span>
                </div>
            </div>
        </div>
    );
}

export default InterviewCard;
