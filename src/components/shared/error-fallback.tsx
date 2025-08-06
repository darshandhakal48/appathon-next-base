
"use client"

import { AlertTriangle, RefreshCw, Home, ArrowLeft, Wifi, Server, FileX, Shield } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { cn } from "@/lib/utils"

export interface ErrorFallbackProps {
  error?: Error | null
  resetErrorBoundary?: () => void
  variant?: "default" | "404" | "network" | "server" | "unauthorized" | "minimal" | "inline"
  size?: "xs" | "sm" | "md" | "lg"
  title?: string
  description?: string
  showRetry?: boolean
  showHome?: boolean
  showBack?: boolean
  className?: string
  onRetry?: () => void
  onGoHome?: () => void
  onGoBack?: () => void
  compact?: boolean
}

const errorVariants = {
  default: {
    icon: AlertTriangle,
    title: "Something went wrong",
    description: "An unexpected error occurred. Please try again.",
    iconColor: "text-destructive"
  },
  404: {
    icon: FileX,
    title: "Not found",
    description: "The requested resource could not be found.",
    iconColor: "text-muted-foreground"
  },
  network: {
    icon: Wifi,
    title: "Connection error",
    description: "Unable to connect. Please check your connection.",
    iconColor: "text-orange-500"
  },
  server: {
    icon: Server,
    title: "Server error",
    description: "Our servers are experiencing issues.",
    iconColor: "text-red-500"
  },
  unauthorized: {
    icon: Shield,
    title: "Access denied",
    description: "You don't have permission to access this.",
    iconColor: "text-yellow-500"
  },
  minimal: {
    icon: AlertTriangle,
    title: "Error",
    description: "Something went wrong",
    iconColor: "text-destructive"
  },
  inline: {
    icon: AlertTriangle,
    title: "Error",
    description: "Unable to load content",
    iconColor: "text-destructive"
  }
}

const sizeConfig = {
  xs: {
    iconSize: "h-4 w-4",
    iconContainer: "h-8 w-8",
    titleSize: "text-sm font-medium",
    descriptionSize: "text-xs",
    buttonSize: "sm" as const,
    spacing: "space-y-2",
    padding: "p-3"
  },
  sm: {
    iconSize: "h-5 w-5",
    iconContainer: "h-10 w-10",
    titleSize: "text-base font-medium",
    descriptionSize: "text-sm",
    buttonSize: "sm" as const,
    spacing: "space-y-3",
    padding: "p-4"
  },
  md: {
    iconSize: "h-6 w-6",
    iconContainer: "h-12 w-12",
    titleSize: "text-lg font-semibold",
    descriptionSize: "text-sm",
    buttonSize: "default" as const,
    spacing: "space-y-4",
    padding: "p-6"
  },
  lg: {
    iconSize: "h-8 w-8",
    iconContainer: "h-16 w-16",
    titleSize: "text-xl font-semibold",
    descriptionSize: "text-base",
    buttonSize: "default" as const,
    spacing: "space-y-4",
    padding: "p-8"
  }
}

export default function ErrorFallback({
  error,
  resetErrorBoundary,
  variant = "default",
  size = "md",
  title,
  description,
  showRetry = true,
  showHome = false,
  showBack = false,
  className,
  onRetry,
  onGoHome,
  onGoBack,
  compact = false
}: ErrorFallbackProps) {
  const config = errorVariants[variant]
  const sizeStyles = sizeConfig[size]
  const Icon = config.icon

  const handleRetry = () => {
    if (onRetry) {
      onRetry()
    } else if (resetErrorBoundary) {
      resetErrorBoundary()
    } else {
      window.location.reload()
    }
  }

  const handleGoHome = () => {
    if (onGoHome) {
      onGoHome()
    } else {
      window.location.href = "/"
    }
  }

  const handleGoBack = () => {
    if (onGoBack) {
      onGoBack()
    } else {
      window.history.back()
    }
  }

  // Inline variant for very compact spaces
  if (variant === "inline") {
    return (
      <div className={cn("text-muted-foreground flex items-center gap-2 text-sm", className)}>
        <Icon className={cn("flex-shrink-0", sizeStyles.iconSize, config.iconColor)} />
        <span className="min-w-0 flex-1">
          {title || config.title}: {description || config.description}
        </span>
        {showRetry && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleRetry}
            className="h-6 flex-shrink-0 px-2"
          >
            <RefreshCw className="h-3 w-3" />
          </Button>
        )}
      </div>
    )
  }

  // Minimal variant for alerts
  if (variant === "minimal") {
    return (
      <Alert className={cn("border-destructive/50 max-h-full", className)}>
        <Icon className={sizeStyles.iconSize} />
        <AlertDescription className={sizeStyles.descriptionSize}>
          <span className="font-medium">{title || config.title}:</span>{" "}
          {description || config.description}
          {showRetry && (
            <Button
              variant="link"
              size="sm"
              onClick={handleRetry}
              className="ml-2 h-auto p-0 text-xs underline"
            >
              Try again
            </Button>
          )}
        </AlertDescription>
      </Alert>
    )
  }

  // Compact layout for smaller containers
  if (compact || size === "xs" || size === "sm") {
    return (
      <Card className={cn("w-full", className)}>
        <CardContent className={cn(sizeStyles.padding, sizeStyles.spacing)}>
          <div className="flex items-start gap-3">
            <div className={cn(
              "bg-muted flex flex-shrink-0 items-center justify-center rounded-full",
              sizeStyles.iconContainer
            )}>
              <Icon className={cn(sizeStyles.iconSize, config.iconColor)} />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className={cn(sizeStyles.titleSize, "mb-1")}>
                {title || config.title}
              </h3>
              <p className={cn(sizeStyles.descriptionSize, "text-muted-foreground mb-3")}>
                {description || config.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {showRetry && (
                  <Button
                    onClick={handleRetry}
                    size={sizeStyles.buttonSize}
                    className="flex-shrink-0"
                  >
                    <RefreshCw className="mr-1 h-3 w-3" />
                    Retry
                  </Button>
                )}

                {showHome && (
                  <Button
                    variant="outline"
                    onClick={handleGoHome}
                    size={sizeStyles.buttonSize}
                    className="flex-shrink-0"
                  >
                    <Home className="mr-1 h-3 w-3" />
                    Home
                  </Button>
                )}

                {showBack && (
                  <Button
                    variant="ghost"
                    onClick={handleGoBack}
                    size={sizeStyles.buttonSize}
                    className="flex-shrink-0"
                  >
                    <ArrowLeft className="mr-1 h-3 w-3" />
                    Back
                  </Button>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Standard card layout for larger containers
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className={cn("text-center")}>
        <div className={cn(
          "bg-muted mx-auto mb-3 flex items-center justify-center rounded-full",
          sizeStyles.iconContainer
        )}>
          <Icon className={cn(sizeStyles.iconSize, config.iconColor)} />
        </div>
        <CardTitle className={sizeStyles.titleSize}>
          {title || config.title}
        </CardTitle>
        <CardDescription className={cn(sizeStyles.descriptionSize, "mt-2")}>
          {description || config.description}
        </CardDescription>
      </CardHeader>

      {error && process.env.NODE_ENV === "development" && (
        <CardContent className="pt-0">
          <Alert variant="destructive" className="text-xs">
            <AlertDescription className="font-mono break-all">
              {error.message}
            </AlertDescription>
          </Alert>
        </CardContent>
      )}

      <CardFooter className={cn("flex flex-col gap-2 p-2")}>
        <div className="flex w-full flex-col gap-2 sm:flex-row">
          {showRetry && (
            <Button
              onClick={handleRetry}
              className="mx-auto"
              size={sizeStyles.buttonSize}
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Try again
            </Button>
          )}

          {showHome && (
            <Button
              variant="outline"
              onClick={handleGoHome}
              className="flex-1"
              size={sizeStyles.buttonSize}
            >
              <Home className="mr-2 h-4 w-4" />
              Go home
            </Button>
          )}
        </div>

        {showBack && (
          <Button
            variant="ghost"
            onClick={handleGoBack}
            className="w-full"
            size={sizeStyles.buttonSize}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go back
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

