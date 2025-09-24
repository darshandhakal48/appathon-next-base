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
import { Alert, AlertTitle } from "@/components/ui/alert";
import { IconX } from "@tabler/icons-react";
import Link from "next/link";
import { loginWithEmailAndPassword } from "@/actions/auth";

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

      const loginPromise = loginWithEmailAndPassword(data);

      toast.promise(loginPromise, {
        error: (err) => err?.message || "Login Failed, Try Again!",
        success: "Account Created Successfully!", 
        loading: "Authorizing....",
      });

    } catch (error: any) {
      setError("root", {
        message: error?.message || "Login Failed. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex w-[80%] flex-col gap-10 md:w-64 lg:w-80">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 text-center"
      >
        <h2 className="text-grayscale-text-grayscale-text-title text-xl font-semibold md:text-2xl">
          Login
        </h2>
        {errors.root && errors.root?.message && (
          <Alert variant="destructive" className="relative text-left">
            <AlertCircleIcon />
            <AlertTitle>{errors.root.message}</AlertTitle>
            <div className="absolute top-0 right-0 z-5 grid h-full place-content-center px-1">
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
        <div className="space-y-2">
          <Label
            htmlFor="email"
            className="text-grayscale-text-grayscale-text-title text-sm font-normal"
          >
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            className={`w-full${errors.email
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : ""
              }`}
            disabled={isLoading}
          />
          {errors.email && (
            <p className="w-full text-left text-sm text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="password"
            className="text-grayscale-text-grayscale-text-title text-sm font-normal"
          >
            Password
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            {...register("password")}
            className={`w-full${errors.password
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : ""
              }`}
            disabled={isLoading}
          />
          {errors.password && (
            <p className="text-left text-sm text-red-600">
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
          className="w-full bg-primary-surface-default text-grayscale-text-negative hover:bg-primary-surface-default/90"
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
        <Link href="/auth/register" className="hover:underline">
          Create account
        </Link>
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
        <div className="mx-auto flex w-full items-center justify-center">
          <Button
            size="icon"
            variant="ghost"
            className="w-fit rounded-full p-2"
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
