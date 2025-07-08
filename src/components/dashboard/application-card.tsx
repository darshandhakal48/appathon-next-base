import { IconCalendar, IconDotsVertical } from "@tabler/icons-react";

export default function ApplicationCard() {
  return (
    <div className="self-stretch px-6 py-4 bg-background rounded-md shadow-md  outline-2 outline-offset-[-2px] outline-primary-surface flex flex-col justify-start items-start gap-4">
      <div className="self-stretch inline-flex justify-between items-start">
        <div className="h-8 pl-2.5 pr-3 py-px bg-green-500/10 rounded flex justify-start items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <div className="text-center justify-start text-Greyscale-Text-Body text-xs font-normal font-sans-secondary leading-none">
            Shortlisted
          </div>
        </div>
        <IconDotsVertical className="text-caption" />
      </div>
      <div className="self-stretch inline-flex justify-start items-start gap-2.5">
        <div className="inline-flex flex-col justify-start items-start">
          <div className="self-stretch justify-start text-Primary-Surface-Default text-lg font-semibold  leading-7">
            Software Engineering
          </div>
        </div>
      </div>
      <div className="self-stretch inline-flex justify-start items-center gap-8">
        <div className="flex justify-start items-center gap-2">
          <div
            data-size="lg"
            data-type="avatar image"
            className="w-10 h-10 relative"
          >
            <img
              className="w-10 h-10 left-0 top-0 absolute rounded-full"
              src="https://placehold.co/40x40"
            />
          </div>
          <div className="justify-center text-gray-700 text-sm font-normal font-sans-secondary leading-tight">
            Rays IT Solutions
          </div>
        </div>
        <div className="flex justify-start items-center gap-2">
          <div className="w-4 h-4 relative overflow-hidden">
            <div className="w-3 h-3.5 left-[2px] top-[0.67px] absolute bg-Greyscale-Text-Subtitle" />
            <div className="w-1.5 h-1.5 left-[5.33px] top-[4px] absolute bg-Greyscale-Text-Subtitle" />
          </div>
          <div className="justify-center text-Greyscale-Text-Body text-sm font-normal  leading-tight">
            TX 4340, USA (Full Time)
          </div>
        </div>
      </div>
      <div className="self-stretch inline-flex justify-start items-center gap-8">
        <div className="px-4 py-2 bg-muted rounded-[999px] flex justify-start items-center gap-6 overflow-hidden">
          <div className="flex justify-start items-center gap-2">
            <IconCalendar />
            <div className="justify-center text-foreground text-xs font-normal  leading-none">
              09/24/2024
            </div>
          </div>
        </div>
      </div>
      <div className="inline-flex justify-start items-center gap-2">
        <div className="justify-start text-caption text-[10px] font-normal  leading-none">
          Last Updated
        </div>
        <div className="px-2 py-1 bg-muted rounded flex justify-center items-center gap-2.5">
          <div className="justify-start text-caption text-[10px] font-normal  leading-none">
            3 weeks ago
          </div>
        </div>
      </div>
    </div>
  );
}
