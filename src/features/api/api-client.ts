import type { ApiResponse } from "./type";

// API Configuration
const API_CONFIG = {
  baseUrl:
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://jsonplaceholder.typicode.com",
  timeout: 10000,
  retries: 3,
  retryDelay: 1000,
} as const;

// Custom API Error Class
export class ApiClientError extends Error {
  public readonly status?: number;
  public readonly code?: string;
  public readonly details?: Record<string, any>;

  constructor(
    message: string,
    status?: number,
    code?: string,
    details?: Record<string, any>
  ) {
    super(message);
    this.name = "ApiClientError";
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

// Retry utility with exponential backoff
async function withRetry<T>(
  fn: () => Promise<T>,
  retries: number = API_CONFIG.retries,
  delay: number = API_CONFIG.retryDelay
): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    if (retries > 0 && shouldRetry(error)) {
      await new Promise((resolve) => setTimeout(resolve, delay));
      return withRetry(fn, retries - 1, delay * 2);
    }
    throw error;
  }
}

// Determine if error should trigger a retry
function shouldRetry(error: any): boolean {
  if (error instanceof ApiClientError) {
    return error.status ? error.status >= 500 : false;
  }
  return error.name === "TypeError" || error.name === "NetworkError";
}

// Generic API Client
export class ApiClient {
  private baseUrl: string;
  private defaultHeaders: HeadersInit;

  constructor(baseUrl: string = API_CONFIG.baseUrl) {
    this.baseUrl = baseUrl;
    this.defaultHeaders = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
  }

  // Add authentication headers if needed
  setAuthToken(token: string) {
    this.defaultHeaders = {
      ...this.defaultHeaders,
      Authorization: `Bearer ${token}`,
    };
  }

  // Generic request method
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.timeout);

    try {
      const response = await withRetry(async () => {
        const res = await fetch(url, {
          ...options,
          headers: {
            ...this.defaultHeaders,
            ...options.headers,
          },
          signal: controller.signal,
        });

        if (!res.ok) {
          const errorData = await res.json().catch(() => ({}));
          throw new ApiClientError(
            errorData.message || `HTTP ${res.status}: ${res.statusText}`,
            res.status,
            errorData.code,
            errorData
          );
        }

        return res;
      });

      clearTimeout(timeoutId);
      const data = await response.json();

      return {
        data,
        error: null,
        success: true,
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      clearTimeout(timeoutId);

      let errorMessage = "An unexpected error occurred";
      let errorCode: string | undefined;
      let status: number | undefined;

      if (error instanceof ApiClientError) {
        errorMessage = error.message;
        errorCode = error.code;
        status = error.status;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      return {
        data: null,
        error: errorMessage,
        success: false,
        timestamp: new Date().toISOString(),
      };
    }
  }

  // HTTP Methods
  async get<T>(
    endpoint: string,
    params?: Record<string, string>
  ): Promise<ApiResponse<T>> {
    const url = params
      ? `${endpoint}?${new URLSearchParams(params)}`
      : endpoint;
    return this.request<T>(url, { method: "GET" });
  }

  async post<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: "POST",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async put<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: "PUT",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async patch<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: "PATCH",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: "DELETE" });
  }
}

// Singleton instance
export const apiClient = new ApiClient();
