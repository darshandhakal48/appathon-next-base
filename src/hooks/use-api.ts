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
async function fetchData<T>(endpoint: string, searchParam?: string) {
  const data = await apiClient.get<T>(endpoint);
  return JSON.parse(JSON.stringify(data)).data;
}

export interface APIQueryProps<T> {
  key: string;
  endpoint: string;
  activePage: number;
  search?: string;
  search_city_state?: string;
  options?: Omit<UseQueryOptions<T, ApiError>, "queryKey" | "queryFn"> & {
    initialData?: T;
  };
}
// Generic query hook
export function useApiQuery<T>({
  activePage,
  endpoint,
  key,
  options,
  search,
  search_city_state,
}: APIQueryProps<T>) {
  const params = new URLSearchParams({
    // Status: String(search),
    // ClientName: String(search),
    // JobId: String(search),
    // JobTitle: String(search),
    // zipCode: String(search_city_state),
    // state_like: String(search_city_state),
    // city: String(search_city_state),
  });

  if (search) {
    // "Job Title" , "Job Id" , "Client Name"
    // params.append("Status", search);
    // params.append("ClientName", search);
    // params.append("JobId", search);
    // params.append("JobTitle", search);
  }

  if (search_city_state) {
    // params.append("City", search);
    // params.append("state_like", encodeURIComponent(search_city_state));
    // params.append("zipCode", search);
  }

  // console.log("endponints ==> ", endpoint);
  // console.log("keys ==> ", key);
  // console.log("params ==> ", params.toString());

  let updatedURL = endpoint;
  if (search || search_city_state) {
    updatedURL = `${endpoint}?${params.toString()}`;
  }

  // console.log("updated url ==> ", updatedURL);
  return useQuery<T, ApiError>({
    queryKey: [key, { activePage, search }],
    queryFn: () => fetchData(updatedURL, params.toString()),
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
