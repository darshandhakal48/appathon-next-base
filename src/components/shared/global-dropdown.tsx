
"use client"

import React from "react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export interface GlobalDropdownProps {
  children: React.ReactNode
  content?: React.ReactNode
  trigger?: React.ReactNode
  side?: "top" | "right" | "bottom" | "left"
  align?: "start" | "center" | "end"
  sideOffset?: number
  alignOffset?: number
  className?: string
  contentClassName?: string
  triggerClassName?: string
  open?: boolean
  onOpenChange?: (open: boolean) => void
  disabled?: boolean
  modal?: boolean
  width?: "auto" | "sm" | "md" | "lg" | "xl" | "full"
  maxWidth?: string
  animation?: "default" | "fade" | "scale" | "slide"
}

const widthClasses = {
  auto: "w-auto",
  sm: "w-64",
  md: "w-80",
  lg: "w-96",
  xl: "w-[28rem]",
  full: "w-full",
}

const animationClasses = {
  default:
    "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  fade: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
  scale:
    "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
  slide:
    "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
}

export function GlobalDropdown({
  children,
  content,
  trigger,
  side = "bottom",
  align = "center",
  sideOffset = 4,
  alignOffset = 0,
  className,
  contentClassName,
  triggerClassName,
  open,
  onOpenChange,
  disabled = false,
  modal = false,
  width = "auto",
  maxWidth,
  animation = "default",
  ...props
}: GlobalDropdownProps) {
  return (
    <DropdownMenu open={open} onOpenChange={onOpenChange} modal={modal}>
      <DropdownMenuTrigger asChild disabled={disabled} className={cn(triggerClassName)}>
        {trigger || <div className="cursor-pointer">{children}</div>}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side={side}
        align={align}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        className={cn(
          "text-body z-50 min-w-[8rem] overflow-hidden rounded-md border bg-grayscale-background-default p-1 shadow-md",
          widthClasses[width],
          animationClasses[animation],
          contentClassName,
        )}
        style={maxWidth ? { maxWidth } : undefined}
        {...props}
      >
        {content}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

// Convenience wrapper for simple text dropdowns
export function TextDropdown({
  children,
  text,
  title,
  ...props
}: Omit<GlobalDropdownProps, "content"> & {
  text: string
  title?: string
}) {
  const content = (
    <div className="px-2 py-1.5">
      {title && <DropdownMenuLabel className="px-0 py-1">{title}</DropdownMenuLabel>}
      {title && <DropdownMenuSeparator />}
      <div className="text-muted-foreground px-0 py-1 text-sm">{text}</div>
    </div>
  )

  return (
    <GlobalDropdown content={content} {...props}>
      {children}
    </GlobalDropdown>
  )
}

// Convenience wrapper for form dropdowns
export function FormDropdown({
  children,
  title,
  description,
  form,
  ...props
}: Omit<GlobalDropdownProps, "content"> & {
  title?: string
  description?: string
  form: React.ReactNode
}) {
  const content = (
    <div className="space-y-4 p-3">
      {(title || description) && (
        <div className="space-y-2">
          {title && <DropdownMenuLabel className="px-0">{title}</DropdownMenuLabel>}
          {description && <p className="text-muted-foreground text-sm">{description}</p>}
        </div>
      )}
      {(title || description) && <DropdownMenuSeparator />}
      {form}
    </div>
  )

  return (
    <GlobalDropdown content={content} width="md" {...props}>
      {children}
    </GlobalDropdown>
  )
}

// Convenience wrapper for menu-style dropdowns
export function MenuDropdown({
  children,
  items,
  ...props
}: Omit<GlobalDropdownProps, "content"> & {
  items: Array<{
    label: string
    onClick: () => void
    icon?: React.ReactNode
    disabled?: boolean
    destructive?: boolean
    separator?: boolean
  }>
}) {
  const content = (
    <>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.separator && <DropdownMenuSeparator />}
          <DropdownMenuItem
            onClick={item.onClick}
            disabled={item.disabled}
            className={cn(
              "flex cursor-pointer items-center justify-between gap-2 focus:bg-grayscale-surface-subtle",
              item.destructive && "text-error-surface-subtle focus:bg-error-surface-default/10 focus:text-error-surface-default",
            )}
          >
            {item.label}
            {item.icon}
          </DropdownMenuItem>
        </React.Fragment>
      ))}
    </>
  )

  return (
    <GlobalDropdown content={content} width="sm" {...props}>
      {children}
    </GlobalDropdown>
  )
}
