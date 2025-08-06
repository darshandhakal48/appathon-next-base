"use client";
import { AdminClientDataProps } from "@/lib/type";
import { EllipsisVertical, Phone } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function AdminClientCard({ client }: { client: AdminClientDataProps }) {
    const router = useRouter();

    const handleNavigation = () => {
        router.push(`/admin/client/${client.id}`);
    };
    return (
        <>
            <div
                className="bg-grayscale-surface-white p-4 space-y-4 rounded-md shadow-sm cursor-pointer"
                onClick={handleNavigation}
            >
                <div className="relative">
                    <div className="flex justify-end items-center absolute right-1 ">
                        <EllipsisVertical />
                    </div>

                    <div className="grid grid-cols-2 mt-1 ">
                        <div className="grid grid-cols-2 place-items-center ">
                            <div className="h-15.5 w-15.5 shadow-md rounded-full ">
                                <Image
                                    src={`${client["logo"]}`}
                                    alt="company image"
                                    width={62}
                                    height={62}
                                    className="object-cover rounded-full"
                                />
                            </div>
                            <span className="text-base font-semibold text-grayscale-text-body">
                                {client["Company Name"]}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center  border-b-2 py-1 px-2 text-grayscale-text-body font-normal text-sm gap-2 pb-2 mb-2 ">
                    <div className="h-7 w-7 rounded-full bg-grayscale-surface-default flex justify-center items-center ">
                        <Phone size={12} />
                    </div>
                    <div>{client["Phone Number"]}</div>
                </div>

                <div>
                    <div className="flex flex-col gap-1">
                        <span className="text-grayscale-text-caption text-[10px]">
                            Updated by
                        </span>
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full overflow-hidden aspect-square ">
                                <Image
                                    src={`/_static/profile-pic.jpg`}
                                    alt="company image"
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                    objectFit="cover"
                                />
                            </div>
                            <span className="text-grayscale-text-body text-sm font-normal">
                                {client["Assigned to"]}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminClientCard;
