"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircleIcon, Loader2 } from "lucide-react";
import { LoginFormData, loginSchema } from "../../../schema/auth-form-schema";
import { Icons } from "@/components/ui/icons";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { loginWithEmailAndPass } from "@/actions/login";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { IconX } from "@tabler/icons-react";

export default function CandidateLoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setIsLoading(true);

      const loginPromise = loginWithEmailAndPass(data);

      toast.promise(loginPromise, {
        error: (err) => err.message || "Login Failed, Try Again!",
        success: (res) => res.message,
        loading: "Authorizing....",
      });

      await loginPromise;
    } catch (error: any) {
      setError("root", {
        message: error?.message || "Login Failed. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-10 w-[80%] md:w-64 lg:w-80">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-center flex gap-6 flex-col"
      >
        <h2 className="text-xl md:text-2xl font-semibold text-grayscale-text-grayscale-text-title">
          Login
        </h2>
        {errors.root && errors.root?.message && (
          <Alert variant="destructive" className="text-left relative">
            <AlertCircleIcon />
            <AlertTitle>{errors.root.message}</AlertTitle>
            <div className="absolute right-0 top-0 z-5 px-1 grid place-content-center h-full">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setError("root", { message: "" })}
                className="p-1 hover:bg-red-100"
              >
                <IconX className="size-3" />
              </Button>
            </div>
          </Alert>
        )}
        <div className="space-y-2 ">
          <Label
            htmlFor="email"
            className="text-sm font-normal text-grayscale-text-grayscale-text-title"
          >
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            className={`w-full ${
              errors.email
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : ""
            }`}
            disabled={isLoading}
          />
          {errors.email && (
            <p className="text-sm text-red-600 text-left w-full">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="password"
            className="text-sm font-normal text-grayscale-text-grayscale-text-title"
          >
            Password
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            {...register("password")}
            className={`w-full ${
              errors.password
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : ""
            }`}
            disabled={isLoading}
          />
          {errors.password && (
            <p className="text-sm text-red-600 text-left">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="text-right">
          <a
            href="#"
            className="text-sm text-primary-text-label-1 hover:underline"
          >
            Forgot Password?
          </a>
        </div>

        <Button
          type="submit"
          className="w-full bg-primary-surface-default hover:bg-primary-surface-default/90 text-grayscale-text-negative"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Signing in...
            </>
          ) : (
            "Login"
          )}
        </Button>
      </form>

      <div className="text-center text-sm text-primary-text-label-1">
        Don&apos;t have an account?{" "}
        <a href="#" className="hover:underline">
          Create account
        </a>
      </div>

      <div className="flex items-center">
        <span className="w-full border-t border-grayscale-border-lighter" />
      </div>
      <div className="space-y-2">
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-grayscale-surface-white px-2 text-grayscale-text-caption">
            Or continue with
          </span>
        </div>
        <div className="w-full mx-auto flex items-center justify-center">
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full w-fit p-2"
            disabled={isLoading}
            type="button"
          >
            <Icons.google />
          </Button>
        </div>
      </div>
    </div>
  );
}

// admin-sidebar
