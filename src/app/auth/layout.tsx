import { getSession } from "@/actions/auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const AuthLayout = async({ children }: { children: React.ReactNode }) => {
  const isAuth  = await getSession()

  if(isAuth.authenticated)
    redirect("/candidate/dashboard")

  return <div className="flex min-h-screen flex-col md:flex-row">

    <div className="flex flex-1 flex-col items-center justify-center gap-10 py-8 md:gap-20 md:py-5">
      {children}
    </div>
    {/* Right Side - Hero Section */}
    <div className="hidden max-w-3xl flex-1 overflow-hidden p-6 md:block">
      {/*  */}
      <div className="relative grid h-full min-h-80 w-full place-content-center self-stretch overflow-hidden rounded-[20px]">
        <video
          src="/_static/crediential-video.mp4"
          width={460}
          height={585}
          className="h-full max-h-[685px]! w-full max-w-[560px]"
          autoPlay
          loop
          playsInline
          muted
        />
        <Image
          src="/_static/brandings/logo-cutout.svg"
          width={934}
          height={1064}
          alt="appathon branding"
          className="absolute top-0 left-0 z-10 size-full! max-h-[1064px] max-w-[934px] object-cover"
        />

        <Image
          src="/_static/brandings/hero-vector.png"
          width={934}
          height={1317}
          alt="appathon branding"
          className="absolute top-0 left-0 z-20 size-full! object-cover"
        />

        <div className="absolute bottom-5 left-0 z-20 w-full text-center md:bottom-12 lg:bottom-16">
          <h3 className="text-lg font-semibold text-white md:text-2xl lg:text-3xl">
            Be Part of Appathon
          </h3>
        </div>
      </div>
    </div>

  </div>;
};

export default (AuthLayout);
