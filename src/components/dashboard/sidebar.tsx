
"use client"
import React, { useState, useEffect } from "react"
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar"
import { cn } from "@/lib/utils"
import Logo from "../ui/logo"
import { PanelLeftClose, PanelLeftOpen, MoreHorizontal } from "lucide-react"
import type { SidebarLinkItem } from "@/lib/type"
import Link from "next/link"
import { ScrollArea } from "../ui/scroll-area"
import { Avatar, AvatarImage } from "../ui/avatar"
import { Typography } from "../shared/typography"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Icons } from "../ui/icons"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { userProfileMenu } from "@/config/dashboard"
import { Switch } from "../ui/switch"
import { useTheme } from "next-themes"

export function DashboardSidebar({
  children,
  links,
  bottomLinks,
}: {
  children: React.ReactNode
  links: SidebarLinkItem[][] | SidebarLinkItem[]
  bottomLinks?: SidebarLinkItem[]
  bottomProfile?: boolean
}) {
  const [openSidebar, setOpen] = useState(true)
  const [isSmallHeight, setIsSmallHeight] = useState(false)
  const [visibleBottomLinks, setVisibleBottomLinks] = useState<SidebarLinkItem[]>([])
  const [collapsedBottomLinks, setCollapsedBottomLinks] = useState<SidebarLinkItem[]>([])
  const currentTheme = useTheme()
  const [theme, setTheme] = useState(currentTheme);

  useEffect(() => {
  }, [])

  const handleClick = () => {
    setOpen((prev) => !prev)
  }

  useEffect(() => {
    const checkScreenHeight = () => {
      const screenHeight = window.innerHeight
      const isSmall = screenHeight < 800 // Adjust this threshold as needed
      setIsSmallHeight(isSmall)

      if (bottomLinks) {
        if (isSmall) {
          // Show only first 2 bottom links, collapse the rest
          setVisibleBottomLinks(bottomLinks.slice(0, 2))
          setCollapsedBottomLinks(bottomLinks.slice(2))
        } else {
          // Show all bottom links on larger screens
          setVisibleBottomLinks(bottomLinks)
          setCollapsedBottomLinks([])
        }
      }
    }

    checkScreenHeight()
    window.addEventListener("resize", checkScreenHeight)
    return () => window.removeEventListener("resize", checkScreenHeight)
  }, [bottomLinks])

  return (
    <div
      className={cn(
        "mx-auto flex min-h-screen w-full flex-1 flex-col overflow-hidden rounded-md border border-grayscale-border-default md:flex-row",
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
                  <SidebarToggleIcon handleClick={handleClick} open={openSidebar} />
                </div>
              </>
            ) : (
              <div className="group size-fit">
                <div className="hidden group-hover:flex">
                  <SidebarToggleIcon handleClick={handleClick} open={openSidebar} />
                </div>

                <div className="block group-hover:hidden">
                  <Logo type="icon" href />
                </div>
              </div>
            )}
            <div className="mt-8 flex w-full flex-col gap-2">
              {Array.isArray(links[0])
                ? (links as SidebarLinkItem[][]).map((group, idx) => (
                  <React.Fragment key={idx}>
                    {idx !== 0 && (
                      <div className="py-3">
                        <div className="h-px w-full bg-grayscale-border-lighter" />
                      </div>
                    )}
                    {group.map((link, linkIdx) => (
                      <SidebarLink key={linkIdx} link={link} />
                    ))}
                  </React.Fragment>
                ))
                : (links as SidebarLinkItem[])?.map((link, idx) => <SidebarLink key={idx} link={link} />)}
            </div>

            <div className="mt-auto flex w-full flex-col gap-6 pt-10">
              <div className="flex w-full flex-col gap-2">
                {visibleBottomLinks?.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}

                {collapsedBottomLinks.length > 0 && openSidebar && (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex h-10 w-full items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-grayscale-text-caption hover:bg-grayscale-surface-default">
                        <MoreHorizontal className="h-4 w-4" />
                        <span>More</span>
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-48">
                      {collapsedBottomLinks.map((link, idx) => {
                        const Icon = Icons[link.icon]
                        return (
                          <DropdownMenuItem key={idx} asChild>
                            <Link href={link?.href || ""} className="flex items-center gap-2">
                              <Icon className="size-4" />
                              <span>{link.label}</span>
                            </Link>
                          </DropdownMenuItem>
                        )
                      })}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}

                {collapsedBottomLinks.length > 0 && !openSidebar && (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex h-10 w-full items-center justify-center rounded-md px-2 py-2 text-sm font-medium text-grayscale-text-caption hover:bg-grayscale-surface-default">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-48">
                      {collapsedBottomLinks.map((link, idx) => (
                        <DropdownMenuItem key={idx} asChild>
                          <Link href={link.href || ""} className="flex items-center gap-2">
                            {link.icon}
                            <span>{link.label}</span>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </div>
              <div className="">
                <Popover>
                  <PopoverTrigger>
                    <div className="inline-flex h-11 items-center justify-start gap-3.5 px-4">

                      <Avatar>
                        <AvatarImage
                          className="size-10 bg-grayscale-surface-default outline outline-offset-[-1px] outline-grayscale-border-default"
                          src="/_static/woman.png"
                          alt="profile"
                        />
                      </Avatar>
                      <div className="inline-flex flex-col items-start justify-center gap-1">
                        <Typography color="title" type="xs">
                          Andy Peterson
                        </Typography>
                        <Typography type="xxs" color="subtitle">
                          Superadmin
                        </Typography>
                      </div>
                    </div>
                  </PopoverTrigger>

                  <PopoverContent className="space-y-4">

                    <div className="inline-flex h-11 items-center justify-start gap-3.5 px-4">
                      <Avatar>
                        <AvatarImage
                          className="size-10 bg-grayscale-surface-default outline outline-offset-[-1px] outline-grayscale-border-default"
                          src="/_static/woman.png"
                          alt="profile"
                        />
                      </Avatar>
                      <div className="inline-flex flex-col items-start justify-center gap-1">
                        <Typography color="title" type="xs">
                          Andy Peterson
                        </Typography>
                        <Typography type="xxs" color="subtitle">
                          Superadmin
                        </Typography>
                      </div>

                    </div>
                    <div className="h-0.5 bg-grayscale-border-lighter"></div>
                    {
                      userProfileMenu.map((link, idx) => (<SidebarLink link={link} key={idx} />))
                    }
                    <div>
                      <div
                        className={cn(
                          "flex flex-1 items-center justify-start gap-2 rounded-[6px] py-2",
                          !open ? "p-[12px]" : "pr-[16px] pl-[16px]",
                        )}
                        onClick={() => currentTheme.setTheme(currentTheme.theme === "dark" ? "light" : "dark")}
                      >
                        <Icons.moon
                          className={cn(
                            "text-sidebar-primary-foreground",
                          )}
                          height={20}
                          width={20}
                        />

                        <span
                          className={cn(
                            "text-sidebar-primary-foreground !m-0 inline-block flex-1 !p-0 text-sm font-normal whitespace-pre transition duration-150 group-hover/sidebar:translate-x-1 dark:text-neutral-200",
                          )}
                        >
                          Dark Mode
                        </span>
                        <Switch checked={currentTheme.theme === 'dark'} onCheckedChange={(value) => currentTheme.setTheme(value ? "dark" : "light")} />
                      </div>

                    </div>

                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </SidebarBody>
        <div
          className={cn(
            "relative w-full bg-grayscale-background-default",
            openSidebar ? "md:ml-[250px]" : "md:ml-[80px]",
          )}
        >
          <ScrollArea>{children}</ScrollArea>
        </div>
      </Sidebar>
    </div>
  )
}

export const SidebarToggleIcon = ({
  handleClick,
  open,
}: {
  handleClick: () => void
  open: boolean
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
  )
}
