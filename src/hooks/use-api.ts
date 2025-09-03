import { apiClient } from "@/features/api/api-client";
import { ApiError } from "@/features/api/type";
import {
  useMutation,
  useQuery,
  useQueryClient,
  type UseMutationOptions,
  type UseQueryOptions,
} from "@tanstack/react-query";

// import { api, type ApiError } from "@/lib/api"
//
async function fetchData<T>(endpoint: string) {
  const data = await apiClient.get<T>(endpoint);
  return JSON.parse(JSON.stringify(data)).data;
}

// Generic query hook
export function useApiQuery<T>(
  key: (number | string)[],
  endpoint: string,
  options?: Omit<UseQueryOptions<T, ApiError>, "queryKey" | "queryFn"> & {
    initialData?: T;
  },
) {
  console.log("endponints ==> ", endpoint);
  console.log("keys ==> ", key);
  return useQuery<T, ApiError>({
    queryKey: key,
    queryFn: () => fetchData(endpoint),
    staleTime: options?.initialData ? 5 * 60 * 1000 : undefined, // 5 minutes
    ...options,
  });
}

export function useHydratedQuery<T>(
  key: string[],
  endpoint: string,
  initialData: T,
  options?: Omit<
    UseQueryOptions<T, ApiError>,
    "queryKey" | "queryFn" | "initialData"
  >,
) {
  return useQuery<T, ApiError>({
    queryKey: key,
    queryFn: () => fetchData<T>(endpoint),
    initialData,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    ...options,
  });
}

// Generic mutation hook
export function useApiMutation<TData, TVariables = void>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: UseMutationOptions<TData, ApiError, TVariables>,
) {
  return useMutation<TData, ApiError, TVariables>({
    mutationFn,
    ...options,
  });
}
