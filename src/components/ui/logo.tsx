import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      src="/_static/brandings/logo.svg"
      alt="appathon"
      width={180}
      height={40}
      className="w-[179px] h-10"
    />
  );
};

export default Logo;
