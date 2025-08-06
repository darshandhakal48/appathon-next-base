"use client";

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
        "flex w-full flex-wrap items-center justify-between gap-8 gap-x-8 gap-y-2 overflow-hidden border-b border-grayscale-border-default bg-grayscale-surface-white px-6 py-4",
        className
      )}
    >
      {title && (
        <p className="text-xl leading-7 font-semibold text-nowrap text-grayscale-text-title">
          {title}
        </p>
      )}
      {children}
    </div>
  );
};

export default DashboardPageHeader;
