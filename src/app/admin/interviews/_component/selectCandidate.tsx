"use client";
import { UserSearch, ChevronDown, Eye } from "lucide-react";
import Image from "next/image";
import profile from "@/../public/_static/profile-pic.jpg";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";
import { Button } from "@/components/ui/button";

function SelectCandidate() {
  return (
    <>
      <div className="relative">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="customDefault" size="cd">
              <span className="flex items-center gap-2">
                <span>
                  <UserSearch height={18} />
                </span>
                <span className="text-lg font-semibold">Select Candiadate</span>
              </span>
              <span>
                <ChevronDown height={18} />
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[250px] mt-2   ">
            <div className=" bg-grayscale-surface-white shadow-xl w-full flex flex-col rounded-[10px] p-2  gap-4 ">
              <div className="flex justify-between items-center p-1 shadow-sm rounded-full">
                <div className="flex items-center gap-2">
                  <span className="h-10 w-10 ">
                    <Image
                      src={profile}
                      alt="Candidate profile picture"
                      className="h-full w-full rounded-full object-fit"
                    />
                  </span>
                  <span className="text-sm">Sakura Chan</span>
                </div>
                <span>
                  <Eye className="h-4 w-4 text-grayscale-text-caption" />
                </span>
              </div>

              <div className="flex justify-between items-center p-1 shadow-sm rounded-full">
                <div className="flex items-center gap-2">
                  <span className="h-10 w-10 ">
                    <Image
                      src={profile}
                      alt="Candidate profile picture"
                      className="h-full w-full rounded-full object-fit"
                    />
                  </span>
                  <span className="text-sm">Sakura Chan</span>
                </div>
                <span>
                  <Eye className="h-4 w-4 text-grayscale-text-caption" />
                </span>
              </div>
              <div className="flex justify-between items-center p-1 shadow-sm rounded-full">
                <div className="flex items-center gap-2">
                  <span className="h-10 w-10 ">
                    <Image
                      src={profile}
                      alt="Candidate profile picture"
                      className="h-full w-full rounded-full object-fit"
                    />
                  </span>
                  <span className="text-sm">Sakura Chan</span>
                </div>
                <span>
                  <Eye className="h-4 w-4 text-grayscale-text-caption" />
                </span>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}

export default SelectCandidate;
