"use server";
import { LoginFormData } from "@/schema/auth-form-schema";
import { cookies } from "next/headers";

export async function loginWithEmailAndPass({
  email,
  password,
}: LoginFormData) {
  const cookieStore = await cookies();
  const authSession = cookieStore.get("auth-session");

  if (cookieStore.has("auth-session")) {
    throw new Error("User, already authorized!");
  }

  // ----- TODO: ----- //
  if (email === "test@appathon.com" && password === "test") {
    cookieStore.set("auth-session", crypto.randomUUID());
    return {
      email,
      password,
      status: 200,
      message: "Loggined Succesfully!",
    };
  }

  throw new Error("Invalid email or password!");
}
