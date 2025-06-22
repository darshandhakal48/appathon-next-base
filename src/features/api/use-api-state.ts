"use client";

import { useState, useCallback } from "react";
import type { ApiState } from "./type";

// Custom hook for managing API state
export function useApiState<T>(initialData: T | null = null): {
  state: ApiState<T>;
  setLoading: (loading: boolean) => void;
  setData: (data: T | null) => void;
  setError: (error: string | null) => void;
  reset: () => void;
} {
  const [state, setState] = useState<ApiState<T>>({
    data: initialData,
    loading: false,
    error: null,
    lastFetched: null,
  });

  const setLoading = useCallback((loading: boolean) => {
    setState((prev) => ({ ...prev, loading }));
  }, []);

  const setData = useCallback((data: T | null) => {
    setState((prev) => ({
      ...prev,
      data,
      loading: false,
      error: null,
      lastFetched: new Date(),
    }));
  }, []);

  const setError = useCallback((error: string | null) => {
    setState((prev) => ({
      ...prev,
      error,
      loading: false,
    }));
  }, []);

  const reset = useCallback(() => {
    setState({
      data: initialData,
      loading: false,
      error: null,
      lastFetched: null,
    });
  }, [initialData]);

  return {
    state,
    setLoading,
    setData,
    setError,
    reset,
  };
}
