import Image from "next/image";
import { Button } from "../ui/button";
import Logo from "../ui/logo";
import { FaFacebookF } from "react-icons/fa";
import { Icons } from "../ui/icons";

export default function MarketingFooter() {
  return (
    <div className="p-16 bg-gray-950 flex flex-col items-center gap-12">
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-start items-start gap-10">
          <div className="flex flex-col justify-start items-start gap-6">
            <Logo />
            <p className="max-w-80 justify-start text-caption text-base font-normal leading-tight">
              Appathon is an AI Recruitment Software enabling human resources
              departments and recruitment agencies to source and hire in the
              most effective way.
            </p>
          </div>
          <Button>Try Appathon for FREE!</Button>
          <div className="inline-flex justify-start items-center">
            <Button variant="ghost" className="hover:bg-transparent">
              Follow Us
            </Button>
            <div className="flex justify-start items-start gap-4 overflow-hidden">
              <Icons.facebook className="" />
              <Icons.instagram className="" />
              <Icons.youtube className="" />
              <Icons.xTwitter className="" />
            </div>
          </div>
        </div>
        <div className="justify-start text-Greyscale-Text-Caption text-sm font-normal font-['Roboto'] leading-10">
          About Us
          <br />
          Features
          <br />
          Pricing
          <br />
          Resources
          <br />
          Blog
          <br />
          Careers
          <br />
          Start for Free
          <br />
          Live Training
          <br />
          ROI Calculator
        </div>
        <div className="justify-start text-Greyscale-Text-Caption text-sm font-normal font-['Roboto'] leading-10">
          Contact Us
          <br />
          Integrations
          <br />
          Documentation
          <br />
          OpenAPI Integration (Indicates the availability of an API for
          developers)  <br />
          Affiliate Program
          <br />
          Security
          <br />
          Changelog (A record of updates and changes)
          <br />
          Non-Profits (Potentially indicating special offers or programs for
          non-profit organizations)
        </div>
      </div>
      <div className="inline-flex justify-start items-start gap-4">
        <div className="justify-start text-zinc-400 text-xs font-normal font-['Mona_Sans'] leading-none">
          @2025 Appathon.ai
        </div>
        <div className="justify-start text-zinc-400 text-xs font-normal font-['Mona_Sans'] leading-none">
          All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
