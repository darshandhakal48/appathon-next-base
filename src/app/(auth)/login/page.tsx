import CandidateLoginForm from "@/components/forms/auth/candidate-login";
import Logo from "@/components/ui/logo";
import Image from "next/image";
import React from "react"; //

const LoginPage = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side - Form Section */}
      <div className="flex flex-1 gap-10 md:gap-20 flex-col py-8 md:py-5 items-center justify-center">
        <Logo />

        <CandidateLoginForm />
      </div>

      {/* Right Side - Hero Section */}
      <div className="flex-1 overflow-hidden p-6 hidden md:block max-w-3xl">
        {/*  */}
        <div className="relative rounded-[20px] overflow-hidden self-stretch min-h-80 h-full w-full grid place-content-center">
          <video
            src="/_static/crediential-video.mp4"
            width={460}
            height={585}
            className="w-full max-w-[560px] h-full max-h-[685px]!"
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
            className="absolute top-0 left-0 max-w-[934px] max-h-[1064px] size-full! z-10 object-cover"
          />

          <Image
            src="/_static/brandings/hero-vector.png"
            width={934}
            height={1317}
            alt="appathon branding"
            className="absolute top-0 left-0 size-full! z-20 object-cover"
          />

          <div className="absolute z-20 w-full text-center bottom-5 md:bottom-12 lg:bottom-16 left-0">
            <h3 className="text-lg md:text-2xl text-white lg:text-3xl font-semibold">
              Be Part of Appathon
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
