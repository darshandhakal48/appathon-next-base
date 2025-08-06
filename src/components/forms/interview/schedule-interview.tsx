
import { Label } from "@/components/ui/label";
import SelectCandidate, { Candidate } from "./select-candidate";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";
import { SelectItem } from "@radix-ui/react-select";
import Image from "next/image";
import { Eye } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useState } from "react";

function ScheduleInterview() {
  const [candidate, setCandidate] = useState<string>("")

  const candidateList: Candidate[] = [
    {
      label: "Iron Man",
      value: "1",
      image: "/_static/woman.png"
    },
    {
      label: "Spider Man",
      value: "2",
      image: "/_static/woman.png"
    }, {
      label: "Ant Man",
      value: "3",
      image: "/_static/woman.png"
    }, {
      label: "Rocket",
      value: "4",
      image: "/_static/woman.png"
    },
  ]
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <SelectCandidate options={candidateList} value={candidate} onValueChange={(e) => setCandidate(e)} />

        <Button variant="dotted" className="h-full w-full">
          Select Job Posting
        </Button>
      </div>

      {/* interview details form */}
      <div className="grid grid-cols-1 gap-4 bg-grayscale-surface-white p-6">
        <span className="text-primary-sidebar-foreground text-lg">
          Interview Details
        </span>
        <form className="grid grid-cols-1 gap-5">
          <div className="grid grid-cols-2 gap-2.5">
            <div className="grid grid-cols-1 gap-1.5">
              <Label className="text-primary-sidebar-foreground text-sm font-normal">
                Date
              </Label>
              <Input
                type="text"
                className="border-secondary-border focus-visible:ring-0"
                disabled
                placeholder="Select"
              />
            </div>
            <div className="grid grid-cols-1 gap-1.5">
              <Label className="text-primary-sidebar-foreground text-sm font-normal">
                Time
              </Label>
              <Input
                type="text"
                className="border-secondary-border focus-visible:ring-0"
                disabled
                placeholder="00:00"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-1.5">
            <Label className="text-primary-sidebar-foreground text-sm font-normal">
              Interviewers
            </Label>

            <Select>
              <SelectTrigger className="w-full cursor-pointer">
                <SelectValue placeholder={"Select Interviewers"}></SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="khabib" className="rounded-full">
                    <div className="flex items-center justify-between rounded-full p-1 shadow-sm">
                      <div className="flex items-center gap-2">
                        <span className="h-10 w-10">
                          <Image
                            src="/_static/profile-pic.jpg"
                            alt="Candidate profile picture"
                            width={899}
                            height={1300}
                            className="object-fit h-full w-full rounded-full"
                          />
                        </span>
                        <span className="text-sm">khabib</span>
                      </div>
                      <span>
                        <Eye className="h-4 w-4 text-grayscale-text-caption" />
                      </span>
                    </div>
                  </SelectItem>
                  <SelectItem value="Islam Makhichev" className="rounded-full">
                    <div className="flex items-center justify-between rounded-full p-1 shadow-sm">
                      <div className="flex items-center gap-2">
                        <span className="h-10 w-10">
                          <Image
                            src="/_static/profile-pic.jpg"
                            alt="Candidate profile picture"
                            width={899}
                            height={1300}
                            className="object-fit h-full w-full rounded-full"
                          />
                        </span>
                        <span className="text-sm">Islam Makhichev</span>
                      </div>
                      <span>
                        <Eye className="h-4 w-4 text-grayscale-text-caption" />
                      </span>
                    </div>
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 gap-1.5">
            <Label className="text-primary-sidebar-foreground text-sm font-normal">
              Interview Type
            </Label>
            <Input
              type="text"
              className="border-secondary-border focus:border-primary-border focus-visible:ring-0"
            />
          </div>
        </form>
      </div>

      {/* additional information form */}
      <div className="grid grid-cols-1 gap-4 bg-grayscale-surface-white p-6">
        <span className="text-primary-sidebar-foreground text-lg">
          Additional Information
        </span>
        <form className="grid grid-cols-1 gap-5">
          <div className="grid grid-cols-1 gap-1.5">
            <Label className="text-primary-sidebar-foreground text-sm font-normal">
              Interview Type
            </Label>
            <Input
              type="text"
              className="border-secondary-border focus:border-primary-border focus-visible:ring-0"
            />
          </div>
          <div className="grid grid-cols-1 gap-1.5">
            <Label className="text-primary-sidebar-foreground text-sm font-normal">
              Attachment
            </Label>
            <div className="flex items-center gap-2">
              <Input
                type="file"
                className="border-secondary-border focus:border-primary-border focus-visible:ring-0"
              />
              <Button
                variant="outline"
                className="bg-grayscale-surface-disabled text-sm font-normal hover:bg-grayscale-surface-disabled"
              >
                {" "}
                Upload
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ScheduleInterview;
