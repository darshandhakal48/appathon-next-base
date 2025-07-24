import MarketingFooter from "@/components/shared/marketing-footer";
import MarketingNavbar from "@/components/shared/marketing-navbar";
import React from "react";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MarketingNavbar />
      <main className="overflow-x-hidden mb-40 px-4">{children}</main>
      <MarketingFooter />
    </>
  );
}
