"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
// import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Logo, { LogoIcon } from "../ui/logo";
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
    const [openSidebar, setOpen] = useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };
    return (
        <div
            className={cn(
                "mx-auto flex w-full min-h-screen flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 md:flex-row"
            )}
        >
            <Sidebar open={openSidebar} setOpen={setOpen}>
                <SidebarBody
                    className="justify-between h-screen bg-sidebar z-40 fixed gap-10 border-r-2"
                    style={{ backgroundColor: "var(--sidebar-primary)" }}
                >
                    <div
                        className={`flex flex-1 flex-col overflow-x-hidden ${
                            !openSidebar ? "items-center" : "items-start"
                        }`}
                    >
                        {openSidebar ? (
                            <>
                                <div className=" flex justify-between w-full items-center">
                                    <Logo className="h-5" />
                                    <SidebarToggleIcon
                                        handleClick={handleClick}
                                        open={openSidebar}
                                    />
                                </div>
                            </>
                        ) : (
                            <div className="size-fit group">
                                <div className="group-hover:flex hidden">
                                    <SidebarToggleIcon
                                        handleClick={handleClick}
                                        open={openSidebar}
                                    />
                                </div>

                                <div className="block group-hover:hidden">
                                    <LogoIcon />
                                </div>
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
            <div
                className={cn(
                    "w-full bg-muted  relative",
                    openSidebar ? "md:ml-[250px]" : "md:ml-[80px]"
                )}
            >
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
        </Link>
    );
};
