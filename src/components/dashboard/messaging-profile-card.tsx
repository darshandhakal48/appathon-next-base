import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Typography } from "../shared/typography";

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
        "max-w-[340px]  w-full p-6 hover:backdrop-blur-3xl hover:bg-grayscale-surface-default/20 cursor-pointer bg-grayscale-surface-white rounded-md outline-1 outline-offset-[-1px] outline-grayscale-border-default inline-flex justify-between items-end",
        className
      )}
    >
      <div className="flex justify-start items-start gap-4">
        <Image
          src={image}
          width={48}
          height={48}
          alt="user profile"
          className="size-12 rounded-full object-cover"
        />
        <div className="inline-flex flex-col justify-center items-start gap-1">
          <Typography>{name}</Typography>
          <Typography color="subtitle" type="sm" font="sans-secondary">
            {recentMessage}
          </Typography>
        </div>
      </div>
      <Typography type="xxs" color="caption">
        {time}
      </Typography>
    </div>
  );
}
