import { FileInput, GripVertical } from "lucide-react";
import React from "react";

function Step2() {
    return (
        <div className="">
            <div className="flex flex-col max-w-[80%] mx-auto gap-6 rounded-">
                <span className="text-lg font-semibold text-sidebar-primary-foreground">
                    Personal Information
                </span>
                <div className="flex flex-col gap-6">
                    {/* ============== */}
                    <div className="flex justify-between items-center p-4 bg-background">
                        <div className="flex items-center text-base gap-4">
                            <span className="text-caption">
                                <GripVertical />
                            </span>
                            <span className="text-grayscale-body">
                                First Name
                            </span>
                        </div>
                        <div className="border-[1px] border-background-secondary flex items-center gap-2.5 text-foreground py-1 px-4">
                            <span>
                                <FileInput />
                            </span>
                            <span>Input Field</span>
                        </div>
                    </div>
                    {/* ============== */}
                    <div className="flex justify-between items-center p-4 bg-background">
                        <div className="flex items-center text-base gap-4">
                            <span className="text-caption">
                                <GripVertical />
                            </span>
                            <span className="text-grayscale-body">
                                First Name
                            </span>
                        </div>
                        <div className="border-[1px] border-background-secondary flex items-center gap-2.5 text-foreground py-1 px-4">
                            <span>
                                <FileInput />
                            </span>
                            <span>Input Field</span>
                        </div>
                    </div>
                    {/* ============== */}
                    <div className="flex justify-between items-center p-4 bg-background">
                        <div className="flex items-center text-base gap-4">
                            <span className="text-caption">
                                <GripVertical />
                            </span>
                            <span className="text-grayscale-body">
                                First Name
                            </span>
                        </div>
                        <div className="border-[1px] border-background-secondary flex items-center gap-2.5 text-foreground py-1 px-4">
                            <span>
                                <FileInput />
                            </span>
                            <span>Input Field</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Step2;
