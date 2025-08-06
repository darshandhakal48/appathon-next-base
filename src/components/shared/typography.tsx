import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define cva configuration
const typographyVariants = cva(
  "text-base text-grayscale-text-body leading-normal font-normal",
  {
    variants: {
      type: {
        "5xl": "text-[25px] md:text-5xl font-bold leading-12",
        "4xl":
          "text-4xl font-semibold leading-[var(--Typeface-Line-Height-4xl,40px)]",
        "3xl":
          "text-3xl font-semibold leading-[var(--Typeface-Line-Height-3xl,32px)]",
        "2xl":
          "md:text-2xl text-xl font-semibold leading-[var(--Typeface-Line-Height-2xl,28px)]",
        xl: "text-xl font-medium leading-[var(--Typeface-Line-Height-xl,24px)]",
        lg: "text-lg font-medium leading-7",
        base: "md:text-base text-sm font-normal leading-[var(--Typeface-Line-Height-base,18px)]",
        sm: "text-sm font-normal leading-tight",
        xs: "text-xs font-normal leading-[var(--Typeface-Line-Height-xs,14px)]",
        xxs: "text-[10px] leading-none font-normal",
      },
      color: {
        primary: "text-primary-surface-default",
        primary1: "text-primary-text-label-1",
        negative: "text-grayscale-text-negative",
        white: "text-grayscale-surface-white",
        title: "text-grayscale-text-title",
        subtitle: "text-grayscale-text-subtitle",
        caption: "text-grayscale-text-caption",
        body: "text-grayscale-text-body",
      },
      font: {
        sans: "font-sans",
        "sans-secondary": "font-sans-secondary",
      },
      weight: {
        bold: "font-bold",
        normal: "font-normal",
        black: "font-black",
        semibold: "font-semibold",
      },
    },
    defaultVariants: {
      type: "base",
      color: "body",
      font: "sans",
      weight: "normal",
    },
  }
);

// Updated type
type TypographyProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
} & VariantProps<typeof typographyVariants> &
  React.ComponentPropsWithoutRef<"p">;

function Typography({
  as: Component = "p",
  className,
  type,
  color,
  children,
  font,
  weight,
  ...props
}: TypographyProps) {
  return (
    <Component
      data-slot="typography"
      className={cn(
        typographyVariants({ type, color, font, weight }),
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export { Typography };
