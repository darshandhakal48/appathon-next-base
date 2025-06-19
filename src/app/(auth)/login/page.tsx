import CandidateLoginForm from "@/components/forms/auth/candidate-login";
import Logo from "@/components/ui/logo";
import React from "react"; //

const LoginPage = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Side - Form Section */}
      <div className="flex flex-1 gap-10 md:gap-20 flex-col py-8 md:py-5 items-center justify-center">
        <Logo />

        <CandidateLoginForm />
      </div>

      {/* Right Side - Hero Section */}
      <div className="flex-1 overflow-hidden p-6 bg-background-secondary">
        {/*  */}
        <div className="bg-primary relative p-8 rounded-[20px] min-h-80 h-full">
          {/* ==== Bottom Text ==== */}
          <div className="absolute w-full text-center bottom-5 md:bottom-12 lg:bottom-16 left-0">
            <h3 className="text-lg md:text-2xl text-primary-foreground lg:text-3xl font-semibold">
              Be Part of Appathon
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
