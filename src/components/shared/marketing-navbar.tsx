"use client";
import { useScroll } from "@/hooks/use-scroll";
import { Button } from "../ui/button";
import Logo from "../ui/logo";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function MarketingNavbar() {
  const scrolled = useScroll(20);
  const router = useRouter();

  return (
    <div
      className={cn(
        "z-40 w-full sticky top-0 left-0 h-20 backdrop-blur-xl transition-all px-4 md:px-16 py-1.5 bg-transparent inline-flex justify-between items-center overflow-hidden",
        { "border-b bg-grayscale-surface-subtle/60": scrolled }
      )}
    >
      <Logo className="w-32 h-7" href />

      <div className="flex justify-center items-center md:gap-24 gap-0">
        <Button variant="ghost" className="hidden md:block">
          View Plans
        </Button>
        <div className="sm:hidden flex justify-start items-center gap-2.5">
          <Button className="bg-grayscale-surface-disabled shadow-none text-grayscale-text-title hover:bg-grayscale-surface-disabled/80 px-4 py-1.5 ">
            Get a Demo
          </Button>
          <Button className="px-4 py-1.5" onClick={() => router.push("/login")}>
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
}
