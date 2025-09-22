"use client";

import React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { GlobalUIProvider } from "./global-ui-provider";
import { QueryProvider } from "./query-provider";
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
      <ReactQueryDevtools />
    </QueryProvider>
  );
}
