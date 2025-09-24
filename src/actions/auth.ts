"use server";

import { API_URL } from "@/config/app";
import { apiClient } from "@/features/api/api-client";
import { LoginFormData, RegisterFormData } from "@/schema/auth-form-schema";
import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function registerWithEmailAndPass(userDetails: RegisterFormData) {

  const cookieStore = await cookies()
    const res = await axios.post(API_URL + "/auth/register", {
      ...userDetails
    })
    if (res.data) {
      cookieStore.set("auth-access-token", res.data.access_token)
      cookieStore.set("auth-refresh-token", res.data.refresh_token)
      redirect("/candidate/dashboard")
    }

}
export async function loginWithEmailAndPassword(userDetails: LoginFormData) {

  const cookieStore = await cookies()
    const res = await axios.post(API_URL + "/auth/authenticate", {
      ...userDetails
    })
    if (res.data?.access_token) {
      cookieStore.set("auth-access-token", res.data.access_token)
      cookieStore.set("auth-refresh-token", res.data.refresh_token)
      redirect("/candidate/dashboard")
  }
      return {
        status: 400,
        message: "Login Unsuccesfull!"
      }

}



export async function setCookies() {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("auth-access-token")
  if (accessToken)
    apiClient.setAuthToken(accessToken?.value)
}


export async function logOut() {
  const cookieStore = await cookies();

  cookieStore.delete("auth-access-token")
  cookieStore.delete("auth-refresh-token")

}

export async function getSession(){
 const cookieStore = await cookies();

  const accessToken = cookieStore.get("auth-access-token")?.value

  return{
    accessToken,
    authenticated: !!accessToken
  }
}
