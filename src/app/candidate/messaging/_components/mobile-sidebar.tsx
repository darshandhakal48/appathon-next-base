"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
// import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { SidebarLinkItem } from "@/lib/type";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import MessagingProfileCard from "@/components/dashboard/messaging-profile-card";
import { IconMenu2 } from "@tabler/icons-react";
import { candidateUserProfiles } from "@/config/db";

export default function MobileSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openSidebar, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div
      className={cn(
        "mx-auto flex w-full relative min-h-screen flex-1 flex-col overflow-hidden rounded-md border border-grayscale-border-default md:flex-row"
      )}
    >
      <Sidebar open={openSidebar} setOpen={setOpen}>
        <SidebarBody
          className="justify-between h-screen bg-grayscale-background-default/10 backdrop-blur-xl z-40 absolute gap-10 border-r-2 md:hidden"
          style={{ backgroundColor: "var(--sidebar-primary)" }}
          trigger={
            <div className="flex justify-end z-20 w-full">
              <IconMenu2
                className="text-grayscale-text-caption"
                onClick={() => setOpen((prev) => !prev)}
              />
            </div>
          }
        >
          <div className={`flex flex-1 flex-col overflow-x-hidden`}>
            <div className="mt-8 flex flex-col gap-2 ">
              <MessagingProfileCard user={candidateUserProfiles[0]} />
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <div className={cn("w-full bg-grayscale-surface-subtle  relative")}>
        <ScrollArea>{children}</ScrollArea>
      </div>
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
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-grayscale-text-title"
      onClick={handleClick}
    >
      {open ? (
        <>
          <PanelLeftClose
            height={20}
            width={20}
            className="text-sidebar-primary-foreground"
          />
        </>
      ) : (
        <>
          <PanelLeftOpen
            height={20}
            width={20}
            className="text-sidebar-primary-foreground"
          />
        </>
      )}
    </Link>
  );
};
