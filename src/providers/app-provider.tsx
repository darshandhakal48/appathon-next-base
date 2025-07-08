import React from "react";
import { QueryProvider } from "./query-provider";
import { GlobalUIProvider } from "./global-ui-provider";
import { Toaster } from "@/components/ui/sonner";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryProvider>
      <GlobalUIProvider>{children}</GlobalUIProvider>
    </QueryProvider>
  );
}
