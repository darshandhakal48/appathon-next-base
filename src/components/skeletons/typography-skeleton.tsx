
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Define skeleton variants that match the typography heights
const typographySkeletonVariants = cva("animate-pulse rounded bg-grayscale-surface-subtle", {
  variants: {
    type: {
      "5xl": "h-[25px] md:h-12", // Matches text-[25px] md:text-5xl
      "4xl": "h-9", // Matches text-4xl (36px)
      "3xl": "h-8", // Matches text-3xl (30px)
      "2xl": "h-6 md:h-7", // Matches text-xl md:text-2xl
      xl: "h-6", // Matches text-xl (20px)
      lg: "h-[18px]", // Matches text-lg (18px)
      base: "h-4 md:h-4", // Matches text-sm md:text-base
      sm: "h-[14px]", // Matches text-sm (14px)
      xs: "h-3", // Matches text-xs (12px)
      xxs: "h-[10px]", // Matches text-[10px]
    },
    width: {
      full: "w-full",
      "3/4": "w-3/4",
      "1/2": "w-1/2",
      "1/3": "w-1/3",
      "1/4": "w-1/4",
    },
    color: {
      "subtle": "bg-grayscale-surface-subtle",
      "default": "bg-grayscale-surface-default",
      "disabled": "bg-grayscale-surface-disabled"
    }
  },
  defaultVariants: {
    type: "base",
    width: "full",
  },
})

// Container variants for spacing that match typography line heights
const containerVariants = cva("space-y-1", {
  variants: {
    type: {
      "5xl": "space-y-3", // Larger spacing for bigger text
      "4xl": "space-y-2.5",
      "3xl": "space-y-2",
      "2xl": "space-y-2",
      xl: "space-y-1.5",
      lg: "space-y-1.5",
      base: "space-y-1",
      sm: "space-y-1",
      xs: "space-y-0.5",
      xxs: "space-y-0.5",
    },

  },
  defaultVariants: {
    type: "base",
  },
})

type TypographySkeletonProps = {
  lines?: number
  className?: string
  lastLineWidth?: "full" | "3/4" | "1/2" | "1/3" | "1/4"
} & VariantProps<typeof typographySkeletonVariants>

function TypographySkeleton({
  type = "base",
  color = "subtle",
  width = "full",
  lines = 1,
  className,
  lastLineWidth,
}: TypographySkeletonProps) {
  return (
    <div className={cn(containerVariants({ type }), className)}>
      {Array.from({ length: lines }, (_, index) => {
        const isLastLine = index === lines - 1
        const lineWidth = isLastLine && lastLineWidth ? lastLineWidth : width

        return <div key={index} className={cn(typographySkeletonVariants({ type, width: lineWidth, color }))} />
      })}
    </div>
  )
}

export { TypographySkeleton }
