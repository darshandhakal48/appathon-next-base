"use client";
import * as React from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // Update state to render fallback UI
    return { hasError: true };
  }

  //   componentDidCatch(error: Error, info: React.ErrorInfo) {
  //     logErrorToMyService(
  //       error,
  //       info.componentStack
  //       // Note: `React.captureOwnerStack()` is not a real API and will cause a runtime error.
  //       // Remove or replace with a valid logging utility.
  //       // React.captureOwnerStack()
  //     );
  //   }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
