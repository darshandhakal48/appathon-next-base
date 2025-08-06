import React, { ReactNode, Suspense } from "react";
import { ApiResponse } from "./type";
import ErrorBoundary from "@/components/shared/error-boundary";
import { handleApiRequest } from "./helper";
import { apiClient } from "./api-client";

export default function ApiWrapper<T>({
  children,
  fallback,
  route,
}: {
  children: (data: ApiResponse<T>) => React.ReactNode;
  fallback: React.ReactNode;
  route: string
}) {
  return (
    <ErrorBoundary>
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

  const manualDelay = withDelay(() => handleApiRequest(
    () => apiClient.get<T>(route),
    "Failed to fetch overview cards"
  ), 2000

  )

  const data: ApiResponse<T> =
    route === "/superadmin-active-jobs" ? await manualDelay() : await handleApiRequest(
      () => apiClient.get<T>(route),
      "Failed to fetch overview cards"
    );



  return <>{children(data)}</>;
}

function withDelay<T extends (...args: any[]) => Promise<any>>(
  asyncFn: T,
  delayMs: number = 2000
): (...args: Parameters<T>) => Promise<Awaited<ReturnType<T>>> {
  return async (...args: Parameters<T>): Promise<Awaited<ReturnType<T>>> => {
    await new Promise((resolve) => setTimeout(resolve, delayMs));
    return asyncFn(...args);
  };
}
