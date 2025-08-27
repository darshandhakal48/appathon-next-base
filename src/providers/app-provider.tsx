import React from "react";
import { QueryProvider } from "./query-provider";
import { GlobalUIProvider } from "./global-ui-provider";

import { ThemeProvider } from "./theme-provider";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <GlobalUIProvider>{children}</GlobalUIProvider>
      </ThemeProvider>
    </QueryProvider>
  );
}
