"use client";

import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { useGlobalModal, useToast } from "@/hooks/use-global-ui";

interface TriggerProps {
  children: ReactNode;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

// Alert Trigger
export function AlertTrigger({
  children,
  title,
  description,
  content,
  ...props
}: TriggerProps & {
  title: string;
  description?: string;
  content?: ReactNode;
}) {
  const { alert } = useGlobalModal();

  return (
    <Button onClick={() => alert(title, description, content)} {...props}>
      {children}
    </Button>
  );
}

// Confirmation Trigger
export function ConfirmTrigger({
  children,
  title,
  description,
  onConfirm,
  confirmText = "Confirm",
  cancelText = "Cancel",
  destructive = false,
  content,
  ...props
}: TriggerProps & {
  title: string;
  description?: string;
  onConfirm: () => void | Promise<void>;
  confirmText?: string;
  cancelText?: string;
  destructive?: boolean;
  content?: ReactNode;
}) {
  const { confirm } = useGlobalModal();

  return (
    <Button
      onClick={() =>
        confirm(title, description, onConfirm, {
          confirmText,
          cancelText,
          destructive,
          content,
        })
      }
      variant={destructive ? "destructive" : props.variant}
      {...props}
    >
      {children}
    </Button>
  );
}

// Custom Modal Trigger
export function ModalTrigger({
  children,
  title,
  description,
  content,
  size = "lg",
  closable = true,
  ...props
}: TriggerProps & {
  title?: string;
  description?: string;
  content: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  closable?: boolean;
}) {
  const { custom } = useGlobalModal();

  return (
    <Button
      onClick={() => custom({ title, description, content, size, closable })}
      {...props}
    >
      {children}
    </Button>
  );
}

// Toast Triggers
export function ToastTrigger({
  children,
  message,
  type = "info",
  ...props
}: TriggerProps & {
  message: string;
  type?: "success" | "error" | "info" | "warning";
}) {
  const toast = useToast();

  return (
    <Button onClick={() => toast[type](message)} {...props}>
      {children}
    </Button>
  );
}

// Delete Confirmation Trigger
export function DeleteTrigger({
  children,
  itemName,
  onDelete,
  ...props
}: TriggerProps & {
  itemName: string;
  onDelete: () => void | Promise<void>;
}) {
  const { confirmDelete } = useGlobalModal();

  return (
    <Button
      onClick={() => confirmDelete(itemName, onDelete)}
      variant="destructive"
      {...props}
    >
      {children}
    </Button>
  );
}
