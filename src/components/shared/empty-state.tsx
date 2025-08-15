"use client";

import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IconName } from "@/lib/type";
import { Icons } from "../ui/icons";

interface EmptyStateProps {
  icon?: IconName;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  variant?: "default" | "card" | "minimal";
  className?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  onAction,
  variant = "default",
  className = "",
}: EmptyStateProps) {
  const Icon = Icons[icon || "clock4"]
  const content = (
    <div
      className={`flex flex-col items-center justify-center text-center p-8 ${className}`}
    >
      {icon && (
        <div className="mb-4 rounded-full bg-grayscale-surface-subtle p-3">
          <Icon className="h-8 w-8 text-grayscale-text-disabled" />
        </div>
      )}
      <h3 className="mb-2 text-lg font-semibold text-grayscale-text-disabled">{title}</h3>
      <p className="mb-4 max-w-sm text-sm text-grayscale-text-disabled">
        {description}
      </p>
      {actionLabel && onAction && (
        <Button onClick={onAction} variant="outline" size="sm">
          {actionLabel}
        </Button>
      )}
    </div>
  );

  if (variant === "card") {
    return <Card className="border-dashed">{content}</Card>;
  }

  if (variant === "minimal") {
    return (
      <div
        className={`flex flex-col items-center justify-center text-center py-12 ${className}`}
      >
        {Icon && (
          <Icon className="text-grayscale-text-negative-foreground mb-3 h-12 w-12" />
        )}
        <p className="text-grayscale-text-negative-foreground text-sm">
          {title}
        </p>
      </div>
    );
  }

  return (
    <div className="border-muted-foreground/25 rounded-lg">
      {content}
    </div>
  );
}
