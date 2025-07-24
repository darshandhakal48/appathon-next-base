import React from "react";

function Steps({ step }: { step: 1 | 2 | 3 }) {
    return (
        <div className="flex items-center gap-4 justify-center">
            <div className="flex flex-col items-center gap-1.5">
                <span
                    className={`rounded-full  ${
                        step >= 1
                            ? "bg-success-surface-subtle"
                            : "bg-grayscale-surface-disabled"
                    } p-2 h-11 w-11 flex items-center justify-center text-grayscale-text-negative`}
                >
                    1
                </span>
                <span
                    className={`text-sm ${
                        step >= 1
                            ? "text-grayscale-text-title"
                            : "text-grayscale-surface-disabled"
                    }`}
                >
                    Job Details
                </span>
            </div>
            <div
                className={`h-1.5 ${
                    step >= 2
                        ? "bg-success-surface-subtle"
                        : "bg-grayscale-surface-disabled "
                } w-18 rounded-2xl`}
            ></div>
            <div className="flex flex-col items-center gap-1.5">
                <span
                    className={`rounded-full  ${
                        step >= 2
                            ? "bg-success-surface-subtle"
                            : "bg-grayscale-surface-disabled"
                    } p-2 h-11 w-11 flex items-center justify-center text-grayscale-text-negative`}
                >
                    2
                </span>
                <span
                    className={`text-sm ${
                        step >= 2
                            ? "text-grayscale-text-title"
                            : "text-grayscale-surface-disabled"
                    }`}
                >
                    Application Form
                </span>
            </div>
            <div
                className={`h-1.5 ${
                    step === 3
                        ? "bg-success-surface-subtle"
                        : "bg-grayscale-surface-disabled "
                } w-18 rounded-2xl`}
            ></div>
            <div className="flex flex-col items-center gap-1.5">
                <span
                    className={`rounded-full  ${
                        step === 3
                            ? "bg-success-surface-subtle"
                            : "bg-grayscale-surface-disabled"
                    } p-2 h-11 w-11 flex items-center justify-center text-grayscale-text-negative`}
                >
                    3
                </span>
                <span
                    className={`text-sm ${
                        step === 3
                            ? "text-grayscale-text-title"
                            : "text-grayscale-surface-disabled"
                    }`}
                >
                    Publish
                </span>
            </div>
        </div>
    );
}

export default Steps;
