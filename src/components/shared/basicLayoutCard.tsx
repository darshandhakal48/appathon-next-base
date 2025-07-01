import { cn } from "@/lib/utils";
import React from "react";

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

function BasicLayoutCard(props: LayoutProps) {
  const { className, children, ...attr } = props;
  return (
    <div className={cn("bg-background p-6 rounded-[6px] shadow-sm")} {...attr}>
      {children}
    </div>
  );
}

export default BasicLayoutCard;
