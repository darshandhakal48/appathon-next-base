import { addressInfo, clientInfo } from "@/config/db";
import React from "react";

function ClientInformation() {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="space-y-6 p-2">
                <p className="text-base font-normal text-grayscale-text-title mb-4">
                    Client Information
                </p>
                <div className="border-2 px-2 pt-2 rounded-sm border-grayscale-border-lighter">
                    {Object.entries(clientInfo).map(([title, value]) => (
                        <div
                            className="grid grid-cols-2 border-b-2 border-grayscale-border-lighter gap-8 py-2"
                            key={title}
                        >
                            <span className="text-grayscale-text-title font-bold text-sm">
                                {title}
                            </span>
                            <span className="text-grayscale-text-body text-sm font-normal">
                                {value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className=" p-2 space-y-6">
                <p className="text-base font-normal text-grayscale-text-title mb-4">
                    Address Information
                </p>
                <div className="border-2 px-2 pt-2 rounded-sm border-grayscale-border-lighter">
                    {Object.entries(addressInfo).map(([title, value]) => (
                        <div
                            className="grid grid-cols-2 border-b-[1px] border-grayscale-border-lighter gap-8 py-2"
                            key={title}
                        >
                            <span className="text-grayscale-text-title font-bold text-sm">
                                {title}
                            </span>
                            <span className="text-grayscale-text-body text-sm font-normal">
                                {value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ClientInformation;
