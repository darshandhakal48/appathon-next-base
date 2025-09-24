import React, { ReactNode, Suspense } from "react";

import ErrorBoundary from "@/components/shared/error-boundary";

import { apiClient } from "./api-client";
import { handleApiRequest } from "./helper";
import { ApiResponse } from "./type";
import { setCookies } from "@/actions/auth";

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
  // await setCookies();
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
/*
 {
    "access_token": "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InN1cGVyYWRtaW5AdXBzZWxhLmlvIiwic3ViIjoic3VwZXJhZG1pbkB1cHNlbGEuaW8iLCJpYXQiOjE3NTg2MDIyMjYsImV4cCI6MTc1OTIwNzAyNn0.J2zSRfLH48MT10RoxmI6HPKv8OMg488frD2Kt0gV93A",
    "refresh_token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdXBlcmFkbWluQHVwc2VsYS5pbyIsImlhdCI6MTc1ODYwMjIyNiwiZXhwIjoxNzU4Njg4NjI2fQ.dzt_VxoeDnOfrmbkURMisRyCojSjlvJ7k0eVUbF8IqE"
}

I got above as access_token and refresh_token, now how can I get all post

 */
