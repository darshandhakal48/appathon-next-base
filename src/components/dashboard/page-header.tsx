import { cn } from "@/lib/utils";
import React from "react";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children?: React.ReactNode | string;
}

const DashboardPageHeader = (props: HeaderProps) => {
  const { title, className, children, ...attr } = props;
  return (
    <div
      {...attr}
      className={cn(
        "px-6 py-4 bg-grayscale-surface-white border-b border-grayscale-border-default gap-8 overflow-hidden flex flex-wrap items-center gap-y-2 gap-x-8 justify-between w-full",
        className
      )}
    >
      {title && (
        <p className="text-grayscale-text-title text-xl text-nowrap font-semibold leading-7">
          {title}
        </p>
      )}
      {children}
    </div>
  );
};

export default DashboardPageHeader;
