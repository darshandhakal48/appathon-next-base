"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
// import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Logo, { AppathonLogoIcon } from "../ui/logo";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { SidebarLinkItem } from "@/lib/type";

export function DashboardSidebar({
  children,
  links,
}: {
  children: React.ReactNode;
  links: SidebarLinkItem[];
}) {
  const [openSidebar, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div
      className={cn(
        "mx-auto flex w-full h-screen flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 md:flex-row"
      )}
    >
      <Sidebar open={openSidebar} setOpen={setOpen}>
        <SidebarBody
          className="justify-between gap-10 border-r-2"
          style={{ backgroundColor: "var(--sidebar-primary)" }}
        >
          <div
            className={`flex flex-1 flex-col overflow-x-hidden justify-start ${
              !openSidebar ? "items-center" : "items-start"
            }  overflow-y-auto`}
          >
            {openSidebar ? (
              <>
                <div className=" flex items-center justify-start">
                  <Logo className="h-5" />
                  <LogoIcon handleClick={handleClick} open={openSidebar} />
                </div>
              </>
            ) : (
              <div
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="size-fit "
              >
                {hover ? (
                  <>
                    <LogoIcon handleClick={handleClick} open={openSidebar} />
                  </>
                ) : (
                  <>
                    <AppathonLogoIcon />
                  </>
                )}
              </div>
            )}
            <div className="mt-8 flex flex-col gap-2 ">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="w-full bg-muted">
        <div className="bg-background ">
          <div className="flex justify-end px-4">
            <div className=" flex items-center gap-[14px] px-2 py-4">
              <span className="h-[32px] w-[32px] rounded-full flex justify-center items-center bg-[#D5D5D5]">
                {" "}
                AP
              </span>
              <span>Andy Peterson</span>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export const LogoIcon = ({
  handleClick,
  open,
}: {
  handleClick: () => void;
  open: boolean;
}) => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
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
    </a>
  );
};
