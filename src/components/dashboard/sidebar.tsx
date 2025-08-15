"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import { cn } from "@/lib/utils";
import Logo from "../ui/logo";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { SidebarLinkItem } from "@/lib/type";
import Link from "next/link";
import { ScrollArea } from "../ui/scroll-area";

export function DashboardSidebar({
  children,
  links,
}: {
  children: React.ReactNode;
  links: SidebarLinkItem[];
}) {
  const [openSidebar, setOpen] = useState(true);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div
      className={cn(
        "mx-auto flex min-h-screen w-full flex-1 flex-col overflow-hidden rounded-md border border-grayscale-border-default md:flex-row"
      )}
    >
      <Sidebar open={openSidebar} setOpen={setOpen}>
        <SidebarBody
          className="fixed z-40 h-screen justify-between gap-10 border-r-2 bg-grayscale-surface-white"
          style={{ backgroundColor: "var(--sidebar-primary)" }}
        >
          <div
            className={`flex flex-1 flex-col items-center overflow-x-hidden${!openSidebar ? "items-center" : "items-start"
              }`}
          >
            {openSidebar ? (
              <>
                <div className="flex w-full items-center justify-between">
                  <Logo className="h-5" href />
                  <SidebarToggleIcon
                    handleClick={handleClick}
                    open={openSidebar}
                  />
                </div>
              </>
            ) : (
              <div className="group size-fit">
                <div className="hidden group-hover:flex">
                  <SidebarToggleIcon
                    handleClick={handleClick}
                    open={openSidebar}
                  />
                </div>

                <div className="block group-hover:hidden">
                  <Logo type="icon" href />
                </div>
              </div>
            )}
            <div className="mt-8 flex w-full flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
        </SidebarBody>
        <div
          className={cn(
            "relative w-full bg-grayscale-background-default",
            openSidebar ? "md:ml-[250px]" : "md:ml-[80px]"
          )}
        >
          <ScrollArea>{children}</ScrollArea>
        </div>
      </Sidebar>
    </div>
  );
}

export const SidebarToggleIcon = ({
  handleClick,
  open,
}: {
  handleClick: () => void;
  open: boolean;
}) => {
  return (
    <Link
      href=""
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-grayscale-text-caption"
      onClick={handleClick}
    >
      {open ? (
        <>
          <PanelLeftClose
            height={20}
            width={20}
            className="text-sidebar-primary-foreground/0 hover:text-sidebar-primary-foreground/20"
          />
        </>
      ) : (
        <>
          <PanelLeftOpen
            height={20}
            width={20}
            className="text-sidebar-primary-foreground/0 hover:text-sidebar-primary-foreground/20"
          />
        </>
      )}
    </Link>
  );
};
