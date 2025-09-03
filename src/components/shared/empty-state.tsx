"use client";

import type { LucideIcon } from "lucide-react";

import { IconName } from "@/lib/type";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
  const Icon = Icons[icon || "clock4"];
  const content = (
    <div
      className={`flex flex-col items-center justify-center p-8 text-center ${className}`}
    >
      {icon && (
        <div className="bg-grayscale-surface-subtle mb-4 rounded-full p-3">
          <Icon className="text-grayscale-text-disabled h-8 w-8" />
        </div>
      )}
      <h3 className="text-grayscale-text-disabled mb-2 text-lg font-semibold">
        {title}
      </h3>
      <p className="text-grayscale-text-disabled mb-4 max-w-sm text-sm">
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
        className={`flex flex-col items-center justify-center py-12 text-center ${className}`}
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

  return <div className="border-muted-foreground/25 rounded-lg">{content}</div>;
}
