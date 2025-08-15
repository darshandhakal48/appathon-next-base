
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import type { ApiResponse } from './type';

// API Configuration
const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001',
  timeout: 10000,
  retries: 3,
  retryDelay: 1000,
} as const;

// Custom API Error Class
export class ApiClientError extends Error {
  public readonly status?: number;
  public readonly code?: string;

  constructor(
    message: string,
    status?: number,
    code?: string,
  ) {
    super(message);
    this.name = 'ApiClientError';
    this.status = status;
    this.code = code;
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
      await new Promise((res) => setTimeout(res, delay));
      return withRetry(fn, retries - 1, delay * 2);
    }

    if (error instanceof ApiClientError) throw error;

    throw new ApiClientError(
      'Request failed and retries exhausted.',
      500,
      'SERVER_UNREACHABLE',
    );
  }
}

// Determines if the error is retryable
function shouldRetry(error: any): boolean {
  if (error instanceof ApiClientError) {
    return error.status ? error.status >= 500 : false;
  }

  return axios.isAxiosError(error) && (!error.response || error.code === 'ECONNABORTED');
}

// Generic API Client class
export class ApiClient {
  private axiosInstance: AxiosInstance;

  constructor(baseUrl = API_CONFIG.baseUrl) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
      timeout: API_CONFIG.timeout,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
  }

  // Set authentication token
  setAuthToken(token: string) {
    this.axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
  }

  // Generic request handler
  private async request<T>(
    config: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    const response = await withRetry(() => this.axiosInstance.request<T>(config));
    return {
      data: response.data,
      error: null,
      success: true,
      timestamp: new Date().toISOString(),
    };
  }

  // HTTP methods
  get<T>(endpoint: string, params?: Record<string, string>): Promise<ApiResponse<T>> {
    return this.request<T>({
      url: endpoint,
      method: 'GET',
      params,
    });
  }

  post<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>({
      url: endpoint,
      method: 'POST',
      data,
    });
  }

  put<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>({
      url: endpoint,
      method: 'PUT',
      data,
    });
  }

  patch<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>({
      url: endpoint,
      method: 'PATCH',
      data,
    });
  }

  delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>({
      url: endpoint,
      method: 'DELETE',
    });
  }
}

// Singleton instance
export const apiClient = new ApiClient();

