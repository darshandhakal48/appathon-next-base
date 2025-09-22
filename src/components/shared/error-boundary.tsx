"use client";

import { Component, ReactNode } from "react";
import ErrorFallback, { ErrorFallbackProps } from "./error-fallback";

interface Props extends ErrorFallbackProps {
  children: ReactNode;
};

type State = {
  hasError: boolean;
  error: Error | null;
};

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  reset = () => this.setState({ hasError: false, error: null });

  render() {
    const { hasError, error } = this.state;
    const { children, ...attr } = this.props;

    if (hasError && error) {
      console.log("ERROR ==> ", error)
      return <ErrorFallback {...attr} />;
    }

    return children;
  }
}
