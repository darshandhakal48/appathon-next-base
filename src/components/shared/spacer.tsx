import { cn } from "@/lib/utils";
import React from "react";

export default function Spacer(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn("max-w-[1409px] w-full h-4 p-2.5", props.className)}
    />
  );
}
