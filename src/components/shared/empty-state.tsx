"use client";

import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  variant?: "default" | "card" | "minimal";
  className?: string;
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
  variant = "default",
  className = "",
}: EmptyStateProps) {
  const content = (
    <div
      className={`flex flex-col items-center justify-center text-center p-8 ${className}`}
    >
      {Icon && (
        <div className="mb-4 p-3 rounded-full bg-grayscale-surface-subtle">
          <Icon className="h-8 w-8 text-grayscale-text-negative-foreground" />
        </div>
      )}
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-grayscale-text-negative-foreground mb-4 max-w-sm">
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
          <Icon className="h-12 w-12 text-grayscale-text-negative-foreground mb-3" />
        )}
        <p className="text-sm text-grayscale-text-negative-foreground">
          {title}
        </p>
      </div>
    );
  }

  return (
    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg">
      {content}
    </div>
  );
}
