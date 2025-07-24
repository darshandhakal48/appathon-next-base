import Image from "next/image";
import { Button } from "../ui/button";
import { Typography } from "../shared/typography";
import MaxWidthWrapper from "../shared/max-width-wrapper";

export default function HeroSection() {
  return (
    <MaxWidthWrapper className="space-y-10 md:space-y-[60px] relative overflow-hidden">
      <div className="absolute -z-10 w-full top-0 left-0 block md:grid place-content-center">
        <Image
          src="/_static/brandings/hero-vector.png"
          className="w-full md:w-[740px]"
          alt="appathon logo"
          width={740}
          height={1026}
        />
      </div>
      <div className="gap-5 md:gap-10 flex-col text-center flex items-center justify-end">
        <div className="h-[30px] w-full " />
        <div className="space-y-4">
          <Typography type="5xl" color="title" as="h1">
            Revolutionizing Hiring with
            <br />
            <span className="text-primary-surface-default">
              AI-Powered Precision
            </span>
          </Typography>

          <Typography
            type="base"
            color="subtitle"
            className="max-w-96 text-center mx-auto"
          >
            A seamless platform for recruiters to find top talent and candidates
            to land their dream jobs.
          </Typography>
        </div>
        <div className="flex gap-2.5 items-center">
          <Button className="bg-primary-surface-default text-grayscale-text-negative">
            Start Hiring
          </Button>
          {/* TODO: CHANGE BORDER COLOR */}
          <Button
            variant="outline"
            className="text-primary-text-label-1 border-primary-border-default"
          >
            Find Your Next Job
          </Button>
        </div>
      </div>
      <div className="z-20 grid place-content-center md:block">
        <Image
          src="/_static/hero-image.png"
          width={1138}
          height={744}
          className="z-10 object-contain md:object-fill mx-auto max-h-[720px] max-w-[1114px] w-full"
          alt="appathon dashboard ui"
        />
      </div>
    </MaxWidthWrapper>
  );
}
