"use client";

import { toast } from "sonner";
import { useModal } from "@/providers/global-ui-provider";
import type { ReactNode } from "react";

// Enhanced toast hook with different variants
export function useToast() {
  return {
    // Basic toasts
    success: (message: string, options?: any) =>
      toast.success(message, options),

    error: (message: string, options?: any) => toast.error(message, options),

    info: (message: string, options?: any) => toast.info(message, options),

    warning: (message: string, options?: any) =>
      toast.warning(message, options),

    // Custom toast with action
    action: (message: string, actionLabel: string, actionFn: () => void) =>
      toast(message, {
        action: {
          label: actionLabel,
          onClick: actionFn,
        },
      }),

    // Promise toast for async operations
    promise: <T>(
      promise: Promise<T>,
      {
        loading,
        success,
        error,
      }: {
        loading: string;
        success: string | ((data: T) => string);
        error: string | ((error: any) => string);
      }
    ) => toast.promise(promise, { loading, success, error }),

    // Dismiss all toasts
    dismiss: () => toast.dismiss(),
  };
}

// Enhanced modal hook
export function useGlobalModal() {
  const { openModal, closeModal, closeAllModals } = useModal();

  return {
    // Alert modal
    alert: (title: string, description?: string, content?: ReactNode) =>
      openModal({
        variant: "alert",
        title,
        description,
        content,
      }),

    // Confirmation modal
    confirm: (
      title: string,
      description?: string,
      onConfirm?: () => void | Promise<void>,
      options?: {
        confirmText?: string;
        cancelText?: string;
        destructive?: boolean;
        content?: ReactNode;
      }
    ) =>
      openModal({
        variant: "confirmation",
        title,
        description,
        onConfirm,
        ...options,
      }),

    // Custom modal
    custom: (config: {
      title?: string;
      description?: string;
      content: ReactNode;
      size?: "sm" | "md" | "lg" | "xl" | "full";
      closable?: boolean;
    }) =>
      openModal({
        variant: "custom",
        ...config,
      }),

    // Quick confirmation for destructive actions
    confirmDelete: (itemName: string, onConfirm: () => void | Promise<void>) =>
      openModal({
        variant: "confirmation",
        title: "Delete Item",
        description: `Are you sure you want to delete "${itemName}"? This action cannot be undone.`,
        onConfirm,
        confirmText: "Delete",
        destructive: true,
      }),

    // Close specific modal
    close: closeModal,

    // Close all modals
    closeAll: closeAllModals,
  };
}
