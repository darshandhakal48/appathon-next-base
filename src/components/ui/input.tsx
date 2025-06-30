import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "./icons";

function Input({
  className,
  type,
  containerClassName,
  icon,
  iconPosition,
  ...props
}: React.ComponentProps<"input"> & {
  icon?: keyof typeof Icons;
  iconPosition?: "left" | "right";
  containerClassName?: string;
}) {
  const Tag = icon && Icons[icon];
  return (
    <div
      className={cn(
        "flex items-center border border-background-secondary bg-muted rounded-md gap-2 pl-5 pr-8",
        containerClassName
      )}
    >
      {iconPosition === "left" && Tag && <Tag className="text-caption" />}
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-caption dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md  bg-transparent p-0 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",

          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        {...props}
      />
      {iconPosition === "right" && Tag && <Tag />}
    </div>
  );
}
/* 
<div className="w-[980px] pl-5 pr-8 py-3 bg-Greyscale-Surface-Subtle rounded-[999px] inline-flex justify-start items-center gap-2">
    <div className="w-3.5 h-3.5 relative overflow-hidden">
        <div className="w-2.5 h-2.5 left-[1.17px] top-[1.17px] absolute bg-Greyscale-Text-Caption" />
        <div className="w-1 h-1 left-[9.16px] top-[9.16px] absolute bg-Greyscale-Text-Caption" />
    </div>
    <div className="justify-start text-Greyscale-Text-Caption text-sm font-normal font-['Roboto'] leading-tight">Job title, skills, company name</div>
</div>
*/
export { Input };
