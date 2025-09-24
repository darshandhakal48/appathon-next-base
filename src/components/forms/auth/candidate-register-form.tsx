"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { registerWithEmailAndPass } from "@/actions/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconX } from "@tabler/icons-react";
import { AlertCircleIcon, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/shared/typography";

import {
  RegisterFormData,
  registerSchema,
} from "../../../schema/auth-form-schema";

export default function CandidateRegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      fullName: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
  });

  const {
    setError,
    handleSubmit,
    formState: { errors },
    control,
  } = form;

  const onSubmit = async (data: RegisterFormData) => {
    console.log("Form submitted", data);
      setIsLoading(true);

      const registerPromise = registerWithEmailAndPass(data);

      toast.promise(registerPromise, {
        error: (err) => err?.message || "Account Creation Failed, Try Again!",
        success: "Login Successfully!", 
        loading: "Signing up...",
      });
 };

  return (
    <div className="flex w-[80%] flex-col gap-10 md:w-64 lg:w-[60%]">
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 text-center"
        >
          <Typography color="title" type="2xl" weight="semibold">
            Sign up
          </Typography>

          {errors.root && errors.root?.message && (
            <Alert variant="destructive" className="relative text-left">
              <AlertCircleIcon />
              <AlertTitle>{errors.root?.message}</AlertTitle>
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

          <div className="grid grid-cols-1 gap-6">
            <FormField
              control={control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-grayscale-text-grayscale-text-title text-sm font-normal">
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your full name"
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-6">
              <FormField
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-grayscale-text-grayscale-text-title text-sm font-normal">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-grayscale-text-grayscale-text-title text-sm font-normal">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="Enter your phone number"
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <FormField
                control={control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-grayscale-text-grayscale-text-title text-sm font-normal">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Type your password"
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-grayscale-text-grayscale-text-title text-sm font-normal">
                      Confirm Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Retype your password"
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Button
            onClick={() => handleSubmit(onSubmit)}
            className="w-full bg-primary-surface-default text-grayscale-text-negative hover:bg-primary-surface-default/90"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing up...
              </>
            ) : (
              "Sign up"
            )}
          </Button>
        </form>
      </Form>

      <Link href="/auth/login">
        <Typography
          type="sm"
          color="primary"
          className="text-center hover:underline"
        >
          Already have an account? Login
        </Typography>
      </Link>

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
