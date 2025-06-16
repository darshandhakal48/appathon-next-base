import CandidateLoginForm from "@/components/forms/auth/candidate-login";
import Logo from "@/components/ui/logo";
import Image from "next/image";
import React from "react"; //

const LoginPage = () => {
  return (
    <div className="grid grid-cols-2 min-h-screen bg-bac">
      {/* Left Side - Form Section */}
      <div className="flex gap-20 flex-col items-center">
        <Logo />

        <CandidateLoginForm />
      </div>

      {/* Right Side - Hero Section */}
      <div className="flex-1 bg-primary flex flex-col items-center justify-center p-8 relative overflow-hidden">
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          {/* Large "0" with image */}
          <div className="relative mb-8">
            <div className="text-[300px] font-bold text-white/20 leading-none select-none">
              0
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/30">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Person"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <h2 className="text-2xl font-semibold text-white text-center">
            Be Part of Appathon
          </h2>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-white/10"></div>
        <div className="absolute bottom-20 left-10 w-16 h-16 rounded-full bg-white/10"></div>
        <div className="absolute top-1/3 left-20 w-12 h-12 rounded-full bg-white/10"></div>
      </div>
    </div>
  );
};

export default LoginPage;
