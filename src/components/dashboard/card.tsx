import React from "react";
import { FileCheck } from "lucide-react";

function Card() {
    return (
        <div className="bg-background flex justify-center items-center gap-6 p-6 rounded-[6px] md:px-9">
            <div className="bg-background-secondary rounded-full w-[52px] h-[52px]  border-2 flex justify-center items-center">
                <FileCheck className="h-[24px] w-[24px]  " />
            </div>
            <div className="flex flex-col">
                <span className="text-sm">Applied</span>
                <span className="text-2xl font-bold">14</span>
            </div>
        </div>
    );
}

export default Card;
