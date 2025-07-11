import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface ProfileProps extends React.HTMLAttributes<HTMLDivElement> {
  user: { name: string; recentMessage: string; time: string; image: string };
}

export default function MessagingProfileCard(props: ProfileProps) {
  const { user, className, ...attr } = props;
  const { name, image, recentMessage, time } = user;
  return (
    <div
      {...attr}
      className={cn(
        "max-w-[340px] w-full p-6 bg-background rounded-md outline-1 outline-offset-[-1px] outline-[#E5E7EB] inline-flex justify-between items-end",
        className
      )}
    >
      <div className="flex justify-start items-start gap-4">
        <Image
          src={image}
          width={48}
          height={48}
          alt="user profile"
          className="size-12 rounded-full"
        />
        <div className="inline-flex flex-col justify-center items-start gap-1">
          <div className="justify-center text-gray-700 text-base font-normal leading-normal">
            {name}
          </div>
          <div className="justify-center text-subtitle text-sm font-normal font-sans-secondary leading-tight">
            {recentMessage}
          </div>
        </div>
      </div>
      <div className="justify-start text-caption text-[10px] font-normal leading-none">
        {time}
      </div>
    </div>
  );
}
