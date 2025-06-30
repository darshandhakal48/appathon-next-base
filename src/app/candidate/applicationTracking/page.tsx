import DashboardPageHeader from "@/components/dashboard/pageHeader";
import { Input } from "@/components/ui/input";
import {
  IconDotsCircleHorizontal,
  IconDotsVertical,
} from "@tabler/icons-react";

export default function ApplicationTracking() {
  return (
    <div>
      <DashboardPageHeader>Application Tracking</DashboardPageHeader>

      <div className="self-stretch h-[990px] p-6 bg-Greyscale-Surface-Subtle inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div className="self-stretch inline-flex justify-start items-start gap-4">
          <div className="w-[482px] rounded inline-flex flex-col justify-start items-start overflow-hidden">
            <div className="self-stretch h-12 py-6 flex flex-col justify-center items-center">
              <div className="self-stretch inline-flex justify-start items-center gap-1">
                <div className="justify-start text-Greyscale-Text-Title text-base font-normal  leading-normal">
                  Recent Applied Jobs
                </div>
              </div>
            </div>
            <div className="self-stretch inline-flex justify-center items-center gap-6 overflow-hidden">
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-5">
                <div
                  data-property-1="Variant2"
                  className="self-stretch px-6 py-4 bg-Greyscale-Surface-Subtle rounded-md shadow-md  outline-2 outline-offset-[-2px] outline-primary-surface flex flex-col justify-start items-start gap-4"
                >
                  <div className="self-stretch inline-flex justify-between items-start">
                    <div className="h-8 pl-2.5 pr-3 py-px bg-green-500/10 rounded flex justify-start items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <div className="text-center justify-start text-Greyscale-Text-Body text-xs font-normal font-['Inter'] leading-none">
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
                      <div className="justify-center text-gray-700 text-sm font-normal font-['Inter'] leading-tight">
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
                    <div className="px-4 py-2 bg-Greyscale-Surface-Subtle rounded-[999px] flex justify-start items-center gap-6 overflow-hidden">
                      <div className="flex justify-start items-center gap-2">
                        <div className="w-3 h-3 relative overflow-hidden">
                          <div className="w-px h-[3px] left-[3.50px] top-[0.50px] absolute bg-Greyscale-Text-Subtitle" />
                          <div className="w-px h-[3px] left-[7.50px] top-[0.50px] absolute bg-Greyscale-Text-Subtitle" />
                          <div className="w-2.5 h-2.5 left-[1px] top-[1.50px] absolute bg-Greyscale-Text-Subtitle" />
                          <div className="w-2.5 h-px left-[1px] top-[4.50px] absolute bg-Greyscale-Text-Subtitle" />
                        </div>
                        <div className="justify-center text-Greyscale-Text-Body text-xs font-normal  leading-none">
                          09/24/2024
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex justify-start items-center gap-2">
                    <div className="justify-start text-Greyscale-Text-Caption text-[10px] font-normal  leading-none">
                      Last Updated
                    </div>
                    <div className="px-2 py-1 bg-Greyscale-Surface-Subtle rounded flex justify-center items-center gap-2.5">
                      <div className="justify-start text-Greyscale-Text-Caption text-[10px] font-normal  leading-none">
                        3 weeks ago
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-property-1="Default"
                  className="self-stretch px-6 py-4 bg-Greyscale-Surface-White rounded-md outline outline-1 outline-offset-[-1px] outline-Greyscale-Border-Default flex flex-col justify-start items-start gap-4"
                >
                  <div className="self-stretch inline-flex justify-between items-start">
                    <div className="h-8 pl-2.5 pr-3 py-px bg-green-500/10 rounded flex justify-start items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <div className="text-center justify-start text-Greyscale-Text-Body text-xs font-normal font-['Inter'] leading-none">
                        Shortlisted
                      </div>
                    </div>
                    <div className="w-6 h-6 relative overflow-hidden">
                      <div className="w-1 h-1 left-[10px] top-[10px] absolute bg-Greyscale-Text-Caption" />
                      <div className="w-1 h-1 left-[10px] top-[3px] absolute bg-Greyscale-Text-Caption" />
                      <div className="w-1 h-1 left-[10px] top-[17px] absolute bg-Greyscale-Text-Caption" />
                    </div>
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
                      <div className="justify-center text-gray-700 text-sm font-normal font-['Inter'] leading-tight">
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
                    <div className="px-4 py-2 bg-Greyscale-Surface-Subtle rounded-[999px] flex justify-start items-center gap-6 overflow-hidden">
                      <div className="flex justify-start items-center gap-2">
                        <div className="w-3 h-3 relative overflow-hidden">
                          <div className="w-px h-[3px] left-[3.50px] top-[0.50px] absolute bg-Greyscale-Text-Subtitle" />
                          <div className="w-px h-[3px] left-[7.50px] top-[0.50px] absolute bg-Greyscale-Text-Subtitle" />
                          <div className="w-2.5 h-2.5 left-[1px] top-[1.50px] absolute bg-Greyscale-Text-Subtitle" />
                          <div className="w-2.5 h-px left-[1px] top-[4.50px] absolute bg-Greyscale-Text-Subtitle" />
                        </div>
                        <div className="justify-center text-Greyscale-Text-Body text-xs font-normal  leading-none">
                          09/24/2024
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex justify-start items-center gap-2">
                    <div className="justify-start text-Greyscale-Text-Caption text-[10px] font-normal  leading-none">
                      Last Updated
                    </div>
                    <div className="px-2 py-1 bg-Greyscale-Surface-Subtle rounded flex justify-center items-center gap-2.5">
                      <div className="justify-start text-Greyscale-Text-Caption text-[10px] font-normal  leading-none">
                        3 weeks ago
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-property-1="Default"
                  className="self-stretch px-6 py-4 bg-Greyscale-Surface-White rounded-md outline outline-1 outline-offset-[-1px] outline-Greyscale-Border-Default flex flex-col justify-start items-start gap-4"
                >
                  <div className="self-stretch inline-flex justify-between items-start">
                    <div className="h-8 pl-2.5 pr-3 py-px bg-green-500/10 rounded flex justify-start items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <div className="text-center justify-start text-Greyscale-Text-Body text-xs font-normal font-['Inter'] leading-none">
                        Shortlisted
                      </div>
                    </div>
                    <div className="w-6 h-6 relative overflow-hidden">
                      <div className="w-1 h-1 left-[10px] top-[10px] absolute bg-Greyscale-Text-Caption" />
                      <div className="w-1 h-1 left-[10px] top-[3px] absolute bg-Greyscale-Text-Caption" />
                      <div className="w-1 h-1 left-[10px] top-[17px] absolute bg-Greyscale-Text-Caption" />
                    </div>
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
                      <div className="justify-center text-gray-700 text-sm font-normal font-['Inter'] leading-tight">
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
                    <div className="px-4 py-2 bg-Greyscale-Surface-Subtle rounded-[999px] flex justify-start items-center gap-6 overflow-hidden">
                      <div className="flex justify-start items-center gap-2">
                        <div className="w-3 h-3 relative overflow-hidden">
                          <div className="w-px h-[3px] left-[3.50px] top-[0.50px] absolute bg-Greyscale-Text-Subtitle" />
                          <div className="w-px h-[3px] left-[7.50px] top-[0.50px] absolute bg-Greyscale-Text-Subtitle" />
                          <div className="w-2.5 h-2.5 left-[1px] top-[1.50px] absolute bg-Greyscale-Text-Subtitle" />
                          <div className="w-2.5 h-px left-[1px] top-[4.50px] absolute bg-Greyscale-Text-Subtitle" />
                        </div>
                        <div className="justify-center text-Greyscale-Text-Body text-xs font-normal  leading-none">
                          09/24/2024
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex justify-start items-center gap-2">
                    <div className="justify-start text-Greyscale-Text-Caption text-[10px] font-normal  leading-none">
                      Last Updated
                    </div>
                    <div className="px-2 py-1 bg-Greyscale-Surface-Subtle rounded flex justify-center items-center gap-2.5">
                      <div className="justify-start text-Greyscale-Text-Caption text-[10px] font-normal  leading-none">
                        3 weeks ago
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 inline-flex flex-col justify-center items-start">
            <div className="self-stretch h-12" />
            <div className="self-stretch bg-Greyscale-Surface-White rounded flex flex-col justify-start items-start overflow-hidden">
              <div className="self-stretch h-4 p-2.5" />
              <div className="self-stretch px-6 py-2 flex flex-col justify-center items-start gap-4">
                <div className="self-stretch inline-flex justify-between items-center">
                  <div className="h-8 pl-2.5 pr-3 py-px bg-green-500/10 rounded flex justify-start items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <div className="text-center justify-start text-Greyscale-Text-Body text-xs font-normal font-['Inter'] leading-none">
                      Shortlisted
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-2">
                    <div className="justify-start text-Greyscale-Text-Caption text-[10px] font-normal  leading-none">
                      Last Updated
                    </div>
                    <div className="px-2 py-1 bg-Greyscale-Surface-Subtle rounded flex justify-center items-center gap-2.5">
                      <div className="justify-start text-Greyscale-Text-Caption text-[10px] font-normal  leading-none">
                        3 weeks ago
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch inline-flex justify-start items-center gap-1">
                  <div className="justify-start text-Greyscale-Text-Title text-2xl font-semibold  leading-loose">
                    Software Engineering
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-2.5">
                  <div className="inline-flex justify-start items-center gap-2">
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
                    <div className="justify-center text-gray-700 text-sm font-normal font-['Inter'] leading-tight">
                      Rays IT Solutions
                    </div>
                  </div>
                </div>
                <div className="px-4 py-2 bg-Greyscale-Surface-Subtle rounded-[999px] inline-flex justify-start items-center gap-6 overflow-hidden">
                  <div className="flex justify-start items-center gap-2">
                    <div className="w-3 h-3 relative overflow-hidden">
                      <div className="w-px h-[3px] left-[3.50px] top-[0.50px] absolute bg-Greyscale-Text-Subtitle" />
                      <div className="w-px h-[3px] left-[7.50px] top-[0.50px] absolute bg-Greyscale-Text-Subtitle" />
                      <div className="w-2.5 h-2.5 left-[1px] top-[1.50px] absolute bg-Greyscale-Text-Subtitle" />
                      <div className="w-2.5 h-px left-[1px] top-[4.50px] absolute bg-Greyscale-Text-Subtitle" />
                    </div>
                    <div className="justify-center text-Greyscale-Text-Body text-xs font-normal  leading-none">
                      09/24/2024
                    </div>
                  </div>
                </div>
                <div className="self-stretch inline-flex justify-start items-center gap-4">
                  <div className="px-2 py-1 bg-Secondary-Surface-Default-10%/10 rounded-sm flex justify-center items-center gap-2.5">
                    <div className="justify-start text-Greyscale-Text-Body text-[10px] font-normal  leading-none">
                      Onsite
                    </div>
                  </div>
                  <div className="px-2 py-1 bg-Secondary-Surface-Default-10%/10 rounded-sm flex justify-center items-center gap-2.5">
                    <div className="justify-start text-Greyscale-Text-Body text-[10px] font-normal  leading-none">
                      Full Time
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-10 p-2.5" />
              <div className="self-stretch px-6 flex flex-col justify-start items-start gap-6">
                <div className="w-64 justify-start text-Greyscale-Text-Title text-lg font-semibold  leading-7">
                  Timeline Progress
                </div>
                <div className="self-stretch inline-flex justify-center items-start">
                  <div
                    data-state="active"
                    data-type="right-only"
                    className="w-20 relative inline-flex flex-col justify-center items-center gap-6"
                  >
                    <div className="w-9 h-0 left-[43.50px] top-[16px] absolute outline-1 outline-offset-[-0.50px] outline-" />
                    <div className="p-2 bg-Success-Surface-Subtle rounded-[48px] inline-flex justify-start items-center gap-2.5 overflow-hidden">
                      <div className="w-4 h-4 relative overflow-hidden">
                        <div className="w-3 h-2 left-[2px] top-[3.33px] absolute bg-Greyscale-Surface-White" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-1">
                      <div className="justify-start text-Greyscale-Text-Body text-sm font-normal  leading-tight">
                        Applied
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 self-stretch inline-flex flex-col justify-start items-start">
                    <div className="self-stretch text-center justify-start text-Greyscale-Text-Caption text-[10px] font-normal  leading-none">
                      Shortlisted
                    </div>
                    <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-Greyscale-Border-Default" />
                  </div>
                  <div
                    data-state="disabled"
                    data-type="both"
                    className="w-20 relative inline-flex flex-col justify-center items-center gap-6"
                  >
                    <div className="w-20 h-0 left-[0.50px] top-[16px] absolute outline outline-1 outline-offset-[-0.50px] outline-Greyscale-Border-Default" />
                    <div className="p-2 bg-Greyscale-Surface-Subtle rounded-[48px] inline-flex justify-start items-center gap-2.5 overflow-hidden">
                      <div className="w-4 h-4 relative overflow-hidden">
                        <div className="w-3 h-2 left-[2px] top-[3.33px] absolute bg-Greyscale-Surface-Disabled" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-1">
                      <div className="justify-start text-Greyscale-Text-Disabled text-sm font-normal  leading-tight">
                        Screening
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 self-stretch py-4 inline-flex flex-col justify-start items-start gap-2.5">
                    <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-Greyscale-Border-Default" />
                  </div>
                  <div
                    data-state="disabled"
                    data-type="both"
                    className="w-20 relative inline-flex flex-col justify-center items-center gap-6"
                  >
                    <div className="w-20 h-0 left-[0.50px] top-[16px] absolute outline outline-1 outline-offset-[-0.50px] outline-Greyscale-Border-Default" />
                    <div className="p-2 bg-Greyscale-Surface-Subtle rounded-[48px] inline-flex justify-start items-center gap-2.5 overflow-hidden">
                      <div className="w-4 h-4 relative overflow-hidden">
                        <div className="w-3 h-2 left-[2px] top-[3.33px] absolute bg-Greyscale-Surface-Disabled" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-1">
                      <div className="justify-start text-Greyscale-Text-Disabled text-sm font-normal  leading-tight">
                        Interviewing
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 self-stretch py-4 inline-flex flex-col justify-start items-start gap-2.5">
                    <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-Greyscale-Border-Default" />
                  </div>
                  <div
                    data-state="disabled"
                    data-type="both"
                    className="w-20 relative inline-flex flex-col justify-center items-center gap-6"
                  >
                    <div className="w-20 h-0 left-[0.50px] top-[16px] absolute outline outline-1 outline-offset-[-0.50px] outline-Greyscale-Border-Default" />
                    <div className="p-2 bg-Greyscale-Surface-Subtle rounded-[48px] inline-flex justify-start items-center gap-2.5 overflow-hidden">
                      <div className="w-4 h-4 relative overflow-hidden">
                        <div className="w-3 h-2 left-[2px] top-[3.33px] absolute bg-Greyscale-Surface-Disabled" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-1">
                      <div className="justify-start text-Greyscale-Text-Disabled text-sm font-normal  leading-tight">
                        Offered
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 self-stretch py-4 inline-flex flex-col justify-start items-start gap-2.5">
                    <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-Greyscale-Border-Default" />
                  </div>
                  <div
                    data-state="disabled"
                    data-type="both"
                    className="w-20 relative inline-flex flex-col justify-center items-center gap-6"
                  >
                    <div className="w-20 h-0 left-[0.50px] top-[16px] absolute outline outline-1 outline-offset-[-0.50px] outline-Greyscale-Border-Default" />
                    <div className="p-2 bg-Greyscale-Surface-Subtle rounded-[48px] inline-flex justify-start items-center gap-2.5 overflow-hidden">
                      <div className="w-4 h-4 relative overflow-hidden">
                        <div className="w-3 h-2 left-[2px] top-[3.33px] absolute bg-Greyscale-Surface-Disabled" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-1">
                      <div className="justify-start text-Greyscale-Text-Disabled text-sm font-normal  leading-tight">
                        Hired
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 self-stretch py-4 inline-flex flex-col justify-start items-start gap-2.5">
                    <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-Greyscale-Border-Default" />
                  </div>
                  <div
                    data-state="disabled"
                    data-type="left-only"
                    className="w-20 relative inline-flex flex-col justify-center items-center gap-6"
                  >
                    <div className="w-10 h-0 left-[0.50px] top-[16px] absolute outline outline-1 outline-offset-[-0.50px] outline-Greyscale-Border-Default" />
                    <div className="p-2 bg-Greyscale-Surface-Subtle rounded-[48px] inline-flex justify-start items-center gap-2.5 overflow-hidden">
                      <div className="w-4 h-4 relative overflow-hidden">
                        <div className="w-3 h-2 left-[2px] top-[3.33px] absolute bg-Greyscale-Surface-Disabled" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-1">
                      <div className="justify-start text-Greyscale-Text-Disabled text-sm font-normal  leading-tight">
                        Rejected
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-10 p-2.5" />
              <div className="self-stretch bg-Greyscale-Surface-White rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex flex-col justify-start items-start overflow-hidden">
                <div className="w-[1409px] h-3 p-2.5" />
                <div className="self-stretch h-16 px-6 flex flex-col justify-center items-center">
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className="flex-1 justify-start text-Greyscale-Text-Title text-base font-normal  leading-normal">
                      Attachments
                    </div>
                  </div>
                </div>
                <div className="self-stretch px-6 py-2 inline-flex justify-start items-center gap-4 overflow-hidden">
                  <div className="px-2 py-3 bg-white rounded shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06)] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10)] inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
                    <div className="w-44 h-24 relative bg-pink-700 rounded-sm overflow-hidden">
                      <img
                        className="w-44 h-60 left-0 top-0 absolute"
                        src="https://placehold.co/173x244"
                      />
                    </div>
                    <div className="self-stretch inline-flex justify-center items-center gap-2">
                      <div className="flex-1 justify-center text-blue-800 text-xs font-medium font-['Inter'] leading-tight">
                        henry-anderson-resume.pdf
                      </div>
                      <div className="w-4 h-4 relative overflow-hidden">
                        <div className="w-[1.50px] h-[1.50px] left-[8.25px] top-[13.50px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-Grays-Gray-2" />
                        <div className="w-[1.50px] h-[1.50px] left-[8.25px] top-[8.25px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-Grays-Gray-2" />
                        <div className="w-[1.50px] h-[1.50px] left-[8.25px] top-[3px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-Grays-Gray-2" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-6 p-2.5" />
              </div>
              <div className="self-stretch bg-Greyscale-Surface-White rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex flex-col justify-start items-start overflow-hidden">
                <div className="w-[1409px] h-3 p-2.5" />
                <div className="self-stretch h-16 px-6 flex flex-col justify-center items-center">
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className="flex-1 justify-start text-Greyscale-Text-Title text-base font-normal  leading-normal">
                      Cover Letter
                    </div>
                  </div>
                </div>
                <div className="self-stretch px-6 py-2 inline-flex justify-start items-center gap-4 overflow-hidden">
                  <div className="px-6 py-3.5 bg-Greyscale-Surface-Subtle rounded-lg outline outline-1 outline-offset-[-1px] outline-Greyscale-Border-Lighter inline-flex flex-col justify-start items-start gap-2">
                    <div className="w-[1243px] justify-center">
                      <span className="text-Greyscale-Text-Body text-sm font-normal  leading-tight">
                        Johnathan Blake 12 Evergreen Drive Brooklyn, NY 11201
                        john.blake@example.com (555) 123-4567 January 12, 2025
                        <br />
                        <br />
                        Ms. Linda Cooper Hiring Manager BrisTech Solutions 45
                        Ocean Avenue Manhattan, NY 10024
                        <br />
                        <br />
                        Subject: Application for Software Developer Position
                        <br />
                        <br />
                        Dear Ms. Cooper,
                        <br />
                        <br />I am writing to apply for the position of Software
                        Developer at BrisTech Solutions, as advertised on your
                        company website. With over five years of experience in
                        building scalable web applications and a keen interest
                        in contributing to innovative projects, I am excited
                        about the possibility of joining your esteemed team.
                        <br />
                        During my time at Falcon Technologies, I led a team in
                        developing an internal task management platform that
                        reduced project turnaround time by 30%. Additionally, I
                        played a key role in integrating machine learning
                        algorithms to improve data analysis processes for our
                        clients. My proficiency in JavaScript, Python, and cloud
                        services like AWS has allowed me to tackle complex
                        challenges and deliver practical solutions.
                        <br />
                        At BrisTech Solutions, I&apos;m particularly drawn to
                        your work in AI-driven customer experience tools. Your
                        mission to revolutionize the tech landscape aligns with
                        my passion for crafting forward-thinking, user-focused
                        applications. I am confident that my experience with
                        backend development, API integrations, and system
                        optimization will make me a valuable asset to your team.
                        <br />
                        Here are some highlights of my career so far:
                        <br />
                      </span>
                      <span className="text-Greyscale-Text-Body text-sm font-normal  leading-tight">
                        Developed a CRM tool that streamlined communication for
                        over 50 clients, resulting in a 20% increase in customer
                        retention.
                        <br />
                        Built a payment gateway integration for an e-commerce
                        platform, ensuring PCI compliance and improving
                        transaction security.
                        <br />
                        Mentored junior developers, enhancing team productivity
                        and fostering a collaborative work environment.
                        <br />
                      </span>
                      <span className="text-Greyscale-Text-Body text-sm font-normal  leading-tight">
                        I would welcome the opportunity to discuss how my skills
                        can benefit BrisTech Solutions. Thank you for
                        considering my application, and I look forward to the
                        possibility of contributing to your company’s success.
                        <br />
                        <br />
                        Sincerely, Johnathan Blake
                      </span>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-6 p-2.5" />
              </div>
              <div className="self-stretch px-6 py-2 flex flex-col justify-center items-start gap-4">
                <div className="w-64 justify-start text-Greyscale-Text-Title text-lg font-semibold  leading-7">
                  About the job
                </div>
                <div className="self-stretch rounded-md flex flex-col justify-start items-start gap-6">
                  <div className="self-stretch flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch flex flex-col justify-start items-start gap-4">
                      <div className="self-stretch inline-flex justify-start items-center gap-4">
                        <div className="flex-1 h-16 inline-flex flex-col justify-start items-start gap-1.5">
                          <div className="justify-start text-Greyscale-Text-Title text-base font-normal  leading-normal">
                            Industry Type
                          </div>
                          <div className="self-stretch inline-flex justify-start items-start gap-2">
                            <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
                              <div className="self-stretch py-2 bg-white rounded-md outline outline-1 inline-flex justify-start items-center">
                                <div className="justify-start text-Greyscale-Text-Caption text-base font-normal  leading-normal">
                                  IT
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 h-16 inline-flex flex-col justify-start items-start gap-1.5">
                          <div className="justify-start text-Greyscale-Text-Title text-base font-normal  leading-normal">
                            Experience Level
                          </div>
                          <div className="self-stretch inline-flex justify-start items-start gap-2">
                            <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
                              <div className="self-stretch py-2 bg-white rounded-md outline outline-1 inline-flex justify-start items-center">
                                <div className="justify-start text-Greyscale-Text-Caption text-base font-normal  leading-normal">
                                  Associate
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 h-16 inline-flex flex-col justify-start items-start gap-1.5">
                          <div className="justify-start text-Greyscale-Text-Title text-base font-normal  leading-normal">
                            Hourly Compensation
                          </div>
                          <div className="self-stretch inline-flex justify-start items-start gap-2">
                            <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
                              <div className="self-stretch py-2 bg-white rounded-md outline outline-1 inline-flex justify-start items-center">
                                <div className="justify-start text-Greyscale-Text-Caption text-base font-normal  leading-normal">
                                  USD 500-600
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch inline-flex justify-start items-center gap-4">
                        <div className="flex-1 h-16 inline-flex flex-col justify-start items-start gap-1.5">
                          <div className="justify-start text-Greyscale-Text-Title text-base font-normal  leading-normal">
                            Work Experience (in years)
                          </div>
                          <div className="self-stretch inline-flex justify-start items-start gap-2">
                            <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
                              <div className="self-stretch py-2 bg-white rounded-md outline outline-1 inline-flex justify-start items-center">
                                <div className="justify-start text-Greyscale-Text-Caption text-base font-normal  leading-normal">
                                  5-6 years
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
                          <div className="justify-start text-Greyscale-Text-Title text-base font-normal  leading-normal">
                            Educatin
                          </div>
                          <div className="self-stretch inline-flex justify-start items-start gap-2">
                            <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
                              <div className="self-stretch py-2 bg-white rounded-md outline outline-1 inline-flex justify-start items-center">
                                <div className="justify-start text-Greyscale-Text-Caption text-base font-normal  leading-normal">
                                  Bachelor’s Degree
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 opacity-0 inline-flex flex-col justify-start items-start gap-1.5">
                          <div className="justify-start text-Greyscale-Text-Title text-base font-normal  leading-normal">
                            Educatin
                          </div>
                          <div className="self-stretch inline-flex justify-start items-start gap-2">
                            <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
                              <div className="self-stretch py-2 bg-white rounded-md outline outline-1 inline-flex justify-start items-center">
                                <div className="justify-start text-Greyscale-Text-Caption text-base font-normal  leading-normal">
                                  Bachelor’s Degree
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                      <div className="justify-start text-Greyscale-Text-Title text-base font-normal  leading-normal">
                        Skills
                      </div>
                      <div className="self-stretch inline-flex justify-start items-start gap-2">
                        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
                          <div className="self-stretch py-2 bg-white rounded-md outline outline-1 inline-flex justify-start items-center gap-2.5 flex-wrap content-center">
                            <div className="p-1.5 bg-background-secondary flex justify-center items-center gap-2.5">
                              <div className="justify-start text-Greyscale-Text-Subtitle text-xs font-normal  leading-none">
                                Data Analysis
                              </div>
                            </div>
                            <div className="p-1.5 bg-background-secondary flex justify-center items-center gap-2.5">
                              <div className="justify-start text-Greyscale-Text-Subtitle text-xs font-normal  leading-none">
                                Machine Learning
                              </div>
                            </div>
                            <div className="p-1.5 bg-background-secondary flex justify-center items-center gap-2.5">
                              <div className="justify-start text-Greyscale-Text-Subtitle text-xs font-normal  leading-none">
                                Data Visualization
                              </div>
                            </div>
                            <div className="p-1.5 bg-background-secondary flex justify-center items-center gap-2.5">
                              <div className="justify-start text-Greyscale-Text-Subtitle text-xs font-normal  leading-none">
                                Data Analysis
                              </div>
                            </div>
                            <div className="p-1.5 bg-background-secondary flex justify-center items-center gap-2.5">
                              <div className="justify-start text-Greyscale-Text-Subtitle text-xs font-normal  leading-none">
                                Data Analysis
                              </div>
                            </div>
                            <div className="p-1.5 bg-background-secondary flex justify-center items-center gap-2.5">
                              <div className="justify-start text-Greyscale-Text-Subtitle text-xs font-normal  leading-none">
                                Data Analysis
                              </div>
                            </div>
                            <div className="p-1.5 bg-background-secondary flex justify-center items-center gap-2.5">
                              <div className="justify-start text-Greyscale-Text-Subtitle text-xs font-normal  leading-none">
                                Data Analysis
                              </div>
                            </div>
                            <div className="p-1.5 bg-background-secondary flex justify-center items-center gap-2.5">
                              <div className="justify-start text-Greyscale-Text-Subtitle text-xs font-normal  leading-none">
                                Data Analysis
                              </div>
                            </div>
                            <div className="p-1.5 bg-background-secondary flex justify-center items-center gap-2.5">
                              <div className="justify-start text-Greyscale-Text-Subtitle text-xs font-normal  leading-none">
                                Data Analysis
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-6">
                    <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                      <div className="inline-flex justify-start items-center gap-1.5">
                        <div className="justify-start text-Greyscale-Text-Title text-sm font-normal  leading-tight">
                          Overview
                        </div>
                        <div className="w-4 h-4 relative overflow-hidden">
                          <div className="w-2.5 h-1.5 left-[3.33px] top-[5.33px] absolute bg-Greyscale-Text-Title" />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                      <div className="inline-flex justify-start items-center gap-1.5">
                        <div className="justify-start text-Greyscale-Text-Title text-sm font-normal  leading-tight">
                          Requirements
                        </div>
                        <div className="w-4 h-4 relative overflow-hidden">
                          <div className="w-2.5 h-1.5 left-[3.33px] top-[5.33px] absolute bg-Greyscale-Text-Title" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[847px] origin-top-left -rotate-90 outline outline-1 outline-offset-[-0.50px] outline-Greyscale-Border-Lighter" />
                </div>
              </div>
              <div className="self-stretch h-4 p-2.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
