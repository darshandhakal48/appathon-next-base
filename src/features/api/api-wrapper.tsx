import React, { ReactNode, Suspense } from "react";

import ErrorBoundary from "@/components/shared/error-boundary";

import { apiClient } from "./api-client";
import { handleApiRequest } from "./helper";
import { ApiResponse } from "./type";

export default function ApiWrapper<T>({
  children,
  fallback,
  route,
}: {
  children: (data: ApiResponse<T>) => React.ReactNode;
  fallback: React.ReactNode;
  route: string;
}) {
  return (
    <ErrorBoundary>
      {" "}
      {/* This Automatically catches error and display default fallback */}
      <Suspense fallback={fallback}>
        <DataFetching route={route}>{children}</DataFetching>
      </Suspense>
    </ErrorBoundary>
  );
}

async function DataFetching<T>({
  children,
  route,
}: {
  children: (data: ApiResponse<T>) => ReactNode;
  route: string;
}) {
  const data: ApiResponse<T> = await apiClient.get<T>(route);

  return <> {children(data)}</>;
}

function withDelay<T extends (...args: any[]) => Promise<any>>(
  asyncFn: T,
  delayMs: number = 2000,
): (...args: Parameters<T>) => Promise<Awaited<ReturnType<T>>> {
  return async (...args: Parameters<T>): Promise<Awaited<ReturnType<T>>> => {
    await new Promise((resolve) => setTimeout(resolve, delayMs));
    return asyncFn(...args);
  };
}
