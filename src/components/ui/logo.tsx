import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LogoImage = ({
  type,
  className,
}: {
  type: "icon" | "default";
  className?: string;
}) => {
  return type === "default" ? (
    <Image
      src="/_static/brandings/logo.svg"
      alt="appathon"
      width={121}
      height={27}
      className={cn("w-[121px] h-[27px]", className)}
    />
  ) : (
    <Image
      src="/_static/brandings/logo-icon.svg"
      alt="appathon"
      width={20}
      height={20}
      className={cn("  ", className)}
    />
  );
};

const Logo = ({
  className,
  type = "default",
  href = false,
}: {
  className?: string;
  href?: boolean | string;
  type?: "icon" | "default";
}) => {
  return href ? (
    <Link href={typeof href === "boolean" ? "/" : href}>
      <LogoImage className={className} type={type} />
    </Link>
  ) : (
    <LogoImage className={className} type={type} />
  );
};

export default Logo;
