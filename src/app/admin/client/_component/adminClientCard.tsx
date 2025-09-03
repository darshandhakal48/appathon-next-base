"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { EllipsisVertical, Phone } from "lucide-react";

import { AdminClientDataProps } from "@/lib/type";

function AdminClientCard({ client }: { client: AdminClientDataProps }) {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(`/admin/client/${client.id}`);
  };
  return (
    <>
      <div
        className="bg-grayscale-surface-white cursor-pointer space-y-4 rounded-md p-4 shadow-sm"
        onClick={handleNavigation}
      >
        <div className="relative">
          <div className="absolute right-1 flex items-center justify-end">
            <EllipsisVertical />
          </div>

          <div className="mt-1 grid grid-cols-2">
            <div className="grid grid-cols-2 place-items-center gap-4">
              <div className="h-15.5 w-15.5 rounded-full shadow-md">
                <Image
                  src={`${client["logo"]}`}
                  alt="company image"
                  width={62}
                  height={62}
                  className="rounded-full object-cover"
                />
              </div>
              <span className="text-grayscale-text-body text-base font-semibold">
                {client["Company Name"]}
              </span>
            </div>
          </div>
        </div>

        <div className="text-grayscale-text-body mb-2 flex items-center gap-2 border-b-2 px-2 py-1 pb-2 text-sm font-normal">
          <div className="bg-grayscale-surface-default flex h-7 w-7 items-center justify-center rounded-full">
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
              <div className="aspect-square h-10 w-10 overflow-hidden rounded-full">
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
