"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

// Toast context (using Sonner)
export { toast } from "sonner";

type DefaultModalSizes = "sm" | "md" | "lg" | "xl" | "full";

// Modal context types
interface ModalConfig {
  id: string;
  title?: string;
  description?: string;
  content?: ReactNode;
  variant?: "default" | "alert" | "confirmation" | "custom";
  size?: DefaultModalSizes | string;
  closable?: boolean;
  onConfirm?: () => void | Promise<void>;
  onCancel?: () => void;
  confirmText?: string;
  cancelText?: string;
  destructive?: boolean;
}

interface ModalContextType {
  modals: ModalConfig[];
  openModal: (config: Omit<ModalConfig, "id">) => string;
  closeModal: (id: string) => void;
  closeAllModals: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function GlobalUIProvider({ children }: { children: ReactNode }) {
  const [modals, setModals] = useState<ModalConfig[]>([]);

  const openModal = (config: Omit<ModalConfig, "id">) => {
    const id = Math.random().toString(36).substr(2, 9);
    const modalConfig: ModalConfig = {
      id,
      variant: "default",
      size: "md",
      closable: true,
      confirmText: "Confirm",
      cancelText: "Cancel",
      destructive: false,
      ...config,
    };
    setModals((prev) => [...prev, modalConfig]);
    return id;
  };

  const closeModal = (id: string) => {
    setModals((prev) => prev.filter((modal) => modal.id !== id));
  };

  const closeAllModals = () => {
    setModals([]);
  };

  useEffect(() => {
    if (modals.length > 0) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Optional cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [modals]);

  return (
    <ModalContext.Provider
      value={{ modals, openModal, closeModal, closeAllModals }}
    >
      {children}
      <Toaster
        position="top-right"
        expand={true}
        richColors
        closeButton
        toastOptions={{
          style: {
            background: "var(--background)",
            border: "1px solid var(--border)",
            color: "var(--foreground)",
          },
        }}
      />
      <ModalRenderer />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within GlobalUIProvider");
  }
  return context;
}

function ModalRenderer() {
  const { modals } = useModal();

  return (
    <>
      {modals.map((modal) => (
        <GlobalModal key={modal.id} config={modal} />
      ))}
    </>
  );
}

function GlobalModal({ config }: { config: ModalConfig }) {
  const { closeModal } = useModal();

  const handleClose = () => {
    if (config.closable !== false) {
      closeModal(config.id);
    }
  };

  const handleConfirm = async () => {
    if (config.onConfirm) {
      await config.onConfirm();
    }
    closeModal(config.id);
  };

  const handleCancel = () => {
    if (config.onCancel) {
      config.onCancel();
    }
    closeModal(config.id);
  };

  return (
    <ModalContent
      config={config}
      onClose={handleClose}
      onConfirm={handleConfirm}
      onCancel={handleCancel}
    />
  );
}

function ModalContent({
  config,
  onClose,
  onConfirm,
  onCancel,
}: {
  config: ModalConfig;
  onClose: () => void;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    full: "max-w-[95vw] max-h-[95vh]",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={config.closable !== false ? onClose : undefined}
      />
      <div
        className={cn(
          `
        relative bg-grayscale-surface-white border rounded-lg shadow-lg p-6 m-4 w-full animate-in fade-in-0 zoom-in-95 duration-200`,
          config.size
            ? isDefaultSize(config.size)
              ? sizeClasses[config.size]
              : config.size
            : sizeClasses["md"]
        )}
      >
        {config.variant === "alert" && (
          <AlertContent config={config} onClose={onClose} />
        )}
        {config.variant === "confirmation" && (
          <ConfirmationContent
            config={config}
            onConfirm={onConfirm}
            onCancel={onCancel}
            onClose={onClose}
          />
        )}
        {(config.variant === "default" || config.variant === "custom") && (
          <DefaultContent config={config} onClose={onClose} />
        )}
      </div>
    </div>
  );
}

function AlertContent({
  config,
  onClose,
}: {
  config: ModalConfig;
  onClose: () => void;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center">
          <span className="text-yellow-600 text-sm">!</span>
        </div>
        <h2 className="text-lg font-semibold">{config.title || "Alert"}</h2>
      </div>
      {config.description && (
        <p className="text-grayscale-text-negative-foreground">
          {config.description}
        </p>
      )}
      {config.content}
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          OK
        </button>
      </div>
    </div>
  );
}

function ConfirmationContent({
  config,
  onConfirm,
  onCancel,
  onClose,
}: {
  config: ModalConfig;
  onConfirm: () => void;
  onCancel: () => void;
  onClose: () => void;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center ${
            config.destructive
              ? "bg-red-100 text-red-600"
              : "bg-blue-100 text-blue-600"
          }`}
        >
          <span className="text-sm">?</span>
        </div>
        <h2 className="text-lg font-semibold">
          {config.title || "Confirm Action"}
        </h2>
      </div>
      {config.description && (
        <p className="text-grayscale-text-negative-foreground">
          {config.description}
        </p>
      )}
      {config.content}
      <div className="flex justify-end space-x-2">
        <button
          onClick={onCancel}
          className="px-4 py-2 border border-input bg-grayscale-surface-white hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
        >
          {config.cancelText}
        </button>
        <button
          onClick={onConfirm}
          className={`px-4 py-2 rounded-md transition-colors ${
            config.destructive
              ? "bg-red-600 text-white hover:bg-red-700"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          }`}
        >
          {config.confirmText}
        </button>
      </div>
    </div>
  );
}

function DefaultContent({
  config,
  onClose,
}: {
  config: ModalConfig;
  onClose: () => void;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        {config.title && (
          <h2 className="text-lg font-semibold">{config.title}</h2>
        )}
        {config.closable !== false && (
          <button
            onClick={onClose}
            className="text-grayscale-text-negative-foreground hover:text-foreground transition-colors"
          >
            ✕
          </button>
        )}
      </div>
      {config.description && (
        <p className="text-grayscale-text-negative-foreground">
          {config.description}
        </p>
      )}
      {config.content}
    </div>
  );
}

const defaultSizes: DefaultModalSizes[] = ["sm", "md", "lg", "xl", "full"];

function isDefaultSize(size: string): size is DefaultModalSizes {
  return defaultSizes.includes(size as DefaultModalSizes);
}
