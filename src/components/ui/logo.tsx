import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/_static/brandings/logo.svg"
      alt="appathon"
      width={121}
      height={27}
      className={cn("w-[121px] h-[27px]", className)}
    />
  );
};
const AppathonLogoIcon = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/_static/brandings/logo-icon.svg"
      alt="appathon"
      width={20}
      height={20}
      className={cn("  ", className)}
    />
  );
};

export default Logo;
export { AppathonLogoIcon };
