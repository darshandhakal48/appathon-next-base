"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { LoginFormData, loginSchema } from "../../../schema/auth-form-schema";
import { Icons } from "@/components/ui/icons";

export default function CandidateLoginForm() {
    const [isLoading, setIsLoading] = useState(false);

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

            // Simulate API call - replace with your actual authentication logic
            await new Promise((resolve) => setTimeout(resolve, 2000));

            console.log("Login attempt:", { email: data.email });

            // Example success handling
            // router.push("/dashboard")

            // Example error handling
            // if (error.status === 401) {
            //   setError("root", { message: "Invalid email or password" })
            // }
        } catch (error) {
            setError("root", {
                message: "Something went wrong. Please try again.",
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
                <h2 className="text-xl font-semibold text-gray-900">Login</h2>

                <div className="space-y-2 ">
                    <Label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700"
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
                        className="text-sm font-medium text-gray-700"
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
                        className="text-sm text-primary hover:underline"
                    >
                        Forgot Password?
                    </a>
                </div>

                {errors.root && (
                    <div className="p-3 text-sm text-left text-red-600 bg-red-50 border border-red-200 rounded-md">
                        {errors.root.message}
                    </div>
                )}

                <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white"
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

            <div className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <a href="#" className="text-primary hover:underline">
                    Create account
                </a>
            </div>

            <div className="flex items-center">
                <span className="w-full border-t border-gray-300" />
            </div>
            <div className="space-y-2">
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">
                        Or continue with
                    </span>
                </div>

                <Button
                    size="icon"
                    variant="ghost"
                    className="w-full rounded-full"
                    disabled={isLoading}
                    type="button"
                >
                    <Icons.google />
                </Button>
            </div>
        </div>
    );
}

// admin-sidebar
