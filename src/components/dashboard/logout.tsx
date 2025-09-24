"use client"
import { logOut } from "@/actions/auth";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function LogOut() {
  const router = useRouter()

  async function handleLogout() {
    await logOut();
    router.push("/auth/login")
  }



  return (
    <Button onClick={() => handleLogout()}>
      Log out
    </Button>
  )
}
