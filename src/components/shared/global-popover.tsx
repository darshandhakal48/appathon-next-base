
"use client"

import type * as React from "react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

export interface GlobalPopoverProps {
  children: React.ReactNode
  content: React.ReactNode
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
  showArrow?: boolean
  closeOnClickOutside?: boolean
  closeOnEscape?: boolean
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

export function GlobalPopover({
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
  showArrow = false,
  animation = "default",
  ...props
}: GlobalPopoverProps) {
  return (
    <Popover open={open} onOpenChange={onOpenChange} modal={modal}>
      <PopoverTrigger asChild disabled={disabled} className={cn(triggerClassName)}>
        {trigger || <div className="cursor-pointer">{children}</div>}
      </PopoverTrigger>
      <PopoverContent
        side={side}
        align={align}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        className={cn(
          "z-50 rounded-md border p-4 shadow-md outline-none",
          widthClasses[width],
          animationClasses[animation],
          showArrow &&
          "data-[side=bottom]:before:border-b-popover data-[side=bottom]:before:absolute data-[side=bottom]:before:-top-1 data-[side=bottom]:before:left-1/2 data-[side=bottom]:before:-translate-x-1/2 data-[side=bottom]:before:border-4 data-[side=bottom]:before:border-transparent",
          contentClassName,
        )}
        style={maxWidth ? { maxWidth } : undefined}
        {...props}
      >
        {content}
      </PopoverContent>
    </Popover>
  )
}

// Convenience wrapper for simple text popovers
export function TextPopover({
  children,
  text,
  title,
  ...props
}: Omit<GlobalPopoverProps, "content"> & {
  text: string
  title?: string
}) {
  const content = (
    <div className="space-y-2">
      {title && <h4 className="leading-none font-medium">{title}</h4>}
      <p className="text-muted-foreground text-sm">{text}</p>
    </div>
  )

  return (
    <GlobalPopover content={content} {...props}>
      {children}
    </GlobalPopover>
  )
}

// Convenience wrapper for form popovers
export function FormPopover({
  children,
  title,
  description,
  form,
  ...props
}: Omit<GlobalPopoverProps, "content"> & {
  title?: string
  description?: string
  form: React.ReactNode
}) {
  const content = (
    <div className="space-y-4">
      {(title || description) && (
        <div className="space-y-2">
          {title && <h4 className="leading-none font-medium">{title}</h4>}
          {description && <p className="text-muted-foreground text-sm">{description}</p>}
        </div>
      )}
      {form}
    </div>
  )

  return (
    <GlobalPopover content={content} width="md" {...props}>
      {children}
    </GlobalPopover>
  )
}

// Convenience wrapper for menu-style popovers
export function MenuPopover({
  children,
  items,
  ...props
}: Omit<GlobalPopoverProps, "content"> & {
  items: Array<{
    label: string
    onClick: () => void
    icon?: React.ReactNode
    disabled?: boolean
    destructive?: boolean
  }>
}) {
  const content = (
    <div className="space-y-1">
      {items.map((item, index) => (
        <button
          key={index}
          onClick={item.onClick}
          disabled={item.disabled}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-50",
            item.destructive &&
            "text-destructive hover:bg-destructive hover:text-destructive-foreground focus:bg-destructive focus:text-destructive-foreground",
          )}
        >
          {item.icon}
          {item.label}
        </button>
      ))}
    </div>
  )

  return (
    <GlobalPopover content={content} width="sm" {...props}>
      {children}
    </GlobalPopover>
  )
}
