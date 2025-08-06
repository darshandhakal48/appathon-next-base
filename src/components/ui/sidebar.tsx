"use client";

import { cn } from "@/lib/utils";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { Icons } from "./icons";
import { SidebarLinkItem } from "@/lib/type";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  const [openState, setOpenState] = useState(false);

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate: animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

export const SidebarBody = (
  props: React.ComponentProps<typeof motion.div> & {
    trigger?: React.ReactNode;
  }
) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props as React.ComponentProps<"div">)} />
    </>
  );
};

export const DesktopSidebar = ({
  className,
  children,
  trigger,
  ...props
}: React.ComponentProps<typeof motion.div> & {
  trigger?: React.ReactNode;
}) => {
  const { open, animate } = useSidebar();

  return (
    <>
      <motion.div
        className={cn(
          "hidden h-full w-[250px] shrink-0 bg-neutral-100 px-4 py-4 md:flex md:flex-col dark:bg-neutral-800",
          className
        )}
        animate={{
          width: animate ? (open ? "250px" : "80px") : "250px",
        }}
        {...props}
      >
        {children}
      </motion.div>
    </>
  );
};

export const MobileSidebar = ({
  className,
  children,
  trigger,
  ...props
}: React.ComponentProps<"div"> & { trigger?: React.ReactNode }) => {
  const { open, setOpen } = useSidebar();
  return (
    <>
      <div
        className={cn(
          "flex h-10 w-full flex-row items-center justify-between bg-neutral-100 px-4 py-4 md:hidden dark:bg-neutral-800"
        )}
        {...props}
      >
        {trigger ? (
          trigger
        ) : (
          <div className="z-20 flex w-full justify-end">
            <IconMenu2
              className="text-grayscale-text-subtitle"
              onClick={() => setOpen(!open)}
            />
          </div>
        )}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className={cn(
                "fixed inset-0 z-[100] flex h-full w-full flex-col justify-between bg-grayscale-surface-white p-10 dark:bg-neutral-900",
                className
              )}
            >
              <div
                className="absolute top-10 right-10 z-50 text-neutral-800 dark:text-neutral-200"
                onClick={() => setOpen(!open)}
              >
                <IconX />
              </div>
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export const SidebarLink = ({
  link,
  className,
  ...props
}: {
  link: SidebarLinkItem;
  className?: string;
}) => {
  const { open, animate } = useSidebar();
  const Tag = Icons[link.icon];

  const pathname = usePathname();

  const [hover, setHover] = useState(false);

  return (
    <Link
      href={link.href}
      className={cn(
        "group/sidebar flex flex-1 items-center justify-start gap-2 rounded-[6px] py-2 hover:bg-primary-surface-default/15 hover:text-primary-surface-default",
        className,
        !open ? "p-[12px]" : "pr-[16px] pl-[16px]",
        pathname.includes(link.href) ? "bg-primary-surface-default/15" : ""
      )}
      {...props}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <Tag
        className={cn(
          "text-sidebar-primary-foreground",
          pathname.includes(link.href)
            ? "text-primary-surface-default"
            : hover
            ? "text-primary-surface-default"
            : "text-foreground"
        )}
        height={20}
        width={20}
      />

      <motion.span
        animate={{
          display: open ? "inline-block" : "none",
          opacity: open ? 1 : 0,
          // display: animate
          //     ? open
          //         ? "inline-block"
          //         : "none"
          //     : "inline-block",
          // opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className={cn(
          "text-sidebar-primary-foreground !m-0 inline-block !p-0 text-sm font-normal whitespace-pre transition duration-150 group-hover/sidebar:translate-x-1 dark:text-neutral-200",
          pathname.includes(link.href)
            ? "text-primary-surface-default"
            : hover
            ? "text-primary-surface-default"
            : "text-foreground"
        )}
      >
        {link.label}
      </motion.span>
    </Link>
  );
};
