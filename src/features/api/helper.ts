import { ApiResponse } from "./type";

export function handleErrorResponse<T>(errorMsg: string): ApiResponse<T> {
  return {
    data: null,
    error: errorMsg,
    success: false,
    timestamp: new Date().toISOString(),
  };
}

export async function handleApiRequest<T>(
  apiFn: () => Promise<ApiResponse<T>>,
  errorMessage: string
): Promise<ApiResponse<T>> {
  try {
    const response = await apiFn();

    return response;
  } catch (error) {
    console.error(errorMessage, error);
    return handleErrorResponse<T>(errorMessage);
  }
}
