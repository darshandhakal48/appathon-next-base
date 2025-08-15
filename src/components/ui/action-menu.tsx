
"use client"

import * as React from "react"
import { MoreHorizontal, type LucideIcon } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export interface ActionMenuItem {
  label: string
  onClick: () => void
  icon?: LucideIcon
  variant?: 'default' | 'destructive'
  disabled?: boolean
  separator?: boolean // Add separator after this item
}

export interface ActionMenuProps {
  items: ActionMenuItem[]
  trigger?: React.ReactNode
  align?: 'start' | 'center' | 'end'
  side?: 'top' | 'right' | 'bottom' | 'left'
  className?: string
  triggerClassName?: string
  contentClassName?: string
  disabled?: boolean
}

export function ActionMenu({
  items,
  trigger,
  align = 'end',
  side = 'bottom',
  className,
  triggerClassName,
  contentClassName,
  disabled = false
}: ActionMenuProps) {
  const defaultTrigger = (
    <Button
      variant="ghost"
      className={cn("h-8 w-8 p-0", triggerClassName)}
      disabled={disabled}
    >
      <span className="sr-only">Open menu</span>
      <MoreHorizontal className="text-caption h-4 w-4" />
    </Button>
  )

  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {trigger || defaultTrigger}
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align={align}
          side={side}
          className={cn("w-48", contentClassName)}
        >
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <DropdownMenuItem
                onClick={item.onClick}
                disabled={item.disabled}
                className={cn(
                  "flex cursor-pointer items-center gap-2",
                  item.variant === 'destructive' && "text-red-600 focus:text-red-600"
                )}
              >
                {item.icon && <item.icon className="h-4 w-4" />}
                {item.label}
              </DropdownMenuItem>
              {item.separator && index < items.length - 1 && (
                <DropdownMenuSeparator />
              )}
            </React.Fragment>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

// Preset configurations for common use cases
export const createTableRowActions = (
  onView?: () => void,
  onEdit?: () => void,
  onDelete?: () => void,
  onApprove?: () => void,
  onReject?: () => void
): ActionMenuItem[] => {
  const actions: ActionMenuItem[] = []

  if (onView) {
    actions.push({
      label: "View Details",
      onClick: onView,
    })
  }

  if (onEdit) {
    actions.push({
      label: "Edit Entry",
      onClick: onEdit,
    })
  }

  if (onApprove || onReject) {
    if (actions.length > 0) {
      actions[actions.length - 1].separator = true
    }

    if (onApprove) {
      actions.push({
        label: "Approve",
        onClick: onApprove,
      })
    }

    if (onReject) {
      actions.push({
        label: "Reject",
        onClick: onReject,
      })
    }
  }

  if (onDelete) {
    if (actions.length > 0) {
      actions[actions.length - 1].separator = true
    }
    actions.push({
      label: "Delete",
      onClick: onDelete,
      variant: 'destructive',
    })
  }

  return actions
}

export const createUserActions = (
  onProfile?: () => void,
  onSettings?: () => void,
  onLogout?: () => void
): ActionMenuItem[] => {
  const actions: ActionMenuItem[] = []

  if (onProfile) {
    actions.push({
      label: "View Profile",
      onClick: onProfile,
    })
  }

  if (onSettings) {
    actions.push({
      label: "Settings",
      onClick: onSettings,
    })
  }

  if (onLogout) {
    if (actions.length > 0) {
      actions[actions.length - 1].separator = true
    }
    actions.push({
      label: "Logout",
      onClick: onLogout,
      variant: 'destructive',
    })
  }

  return actions
}
