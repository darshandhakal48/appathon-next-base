"use client";

import React from "react";

import { cn } from "@/lib/utils";
import { useSidebar } from "../ui/sidebar";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children?: React.ReactNode | string;
}

const DashboardPageHeader = (props: HeaderProps) => {
  const { title, className, children, ...attr } = props;
  const sidebar = useSidebar()
  return (
    <div
      {...attr}
      className={cn(
        "fixed top-0 left-0 flex h-16 flex-wrap items-center justify-between gap-8 gap-x-8 gap-y-2 border-b border-grayscale-border-default bg-grayscale-surface-white px-6 py-4",
        sidebar.open ? "ml-[250px] w-[calc(100vw-250px)]":"ml-[80px] w-[calc(100vw-80px)]",
        className,
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
