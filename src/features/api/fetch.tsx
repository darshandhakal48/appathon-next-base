import { ReactNode } from "react";

import { apiClient } from "./api-client";
import { ApiResponse } from "./type";

export async function DataFetching<T>({
  children,
  route,
}: {
  children: (data: ApiResponse<T>) => ReactNode;
  route: string;
}) {
  const data: ApiResponse<T> = await apiClient.get<T>(route);

  return <> {children(data)}</>;
}
