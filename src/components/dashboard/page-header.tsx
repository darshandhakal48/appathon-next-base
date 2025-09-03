"use client";

import React from "react";

import { cn } from "@/lib/utils";

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
        "border-grayscale-border-default bg-grayscale-surface-white flex w-full flex-wrap items-center justify-between gap-8 gap-x-8 gap-y-2 overflow-hidden border-b px-6 py-4",
        className,
      )}
    >
      {title && (
        <p className="text-grayscale-text-title text-xl leading-7 font-semibold text-nowrap">
          {title}
        </p>
      )}
      {children}
    </div>
  );
};

export default DashboardPageHeader;
