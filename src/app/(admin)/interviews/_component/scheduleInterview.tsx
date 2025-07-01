import { Label } from "@/components/ui/label";
import SelectCandidate from "./selectCandidate";
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
import profile from "@/../public/_static/profile-pic.jpg";
import { Button } from "@/components/ui/button";

function ScheduleInterview() {
    return (
        <>
            <div className="grid grid-cols-2 gap-4">
                <SelectCandidate />
                <button className=" gap-6 border-dashed border-2 text-primary-surface items-center border-primary-surface-subtle rounded-[10px] p-4  cursor-pointer text-center">
                    Select Job Posting
                </button>
            </div>

            {/* interview details form */}
            <div className="bg-background p-6 grid grid-cols-1 gap-4 ">
                <span className="text-lg text-primary-sidebar-foreground">
                    Interview Details
                </span>
                <form className="grid grid-cols-1 gap-5">
                    <div className="grid grid-cols-2 gap-2.5">
                        <div className="grid grid-cols-1 gap-1.5">
                            <Label className="text-sm text-primary-sidebar-foreground font-normal">
                                Date
                            </Label>
                            <Input
                                type="text"
                                className=" border-secondary-border focus-visible:ring-0"
                                disabled
                                placeholder="Select"
                            />
                        </div>
                        <div className="grid grid-cols-1 gap-1.5">
                            <Label className="text-sm text-primary-sidebar-foreground font-normal">
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
                        <Label className="text-sm text-primary-sidebar-foreground font-normal ">
                            Interviewers
                        </Label>
                        {/* <Input
                            type="text"
                            className=" border-secondary-border focus:border-primary-border focus-visible:ring-0"
                        /> */}
                        <Select>
                            <SelectTrigger className="w-full cursor-pointer">
                                <SelectValue
                                    placeholder={"Select Interviewers"}
                                ></SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem
                                        value="Sakura Chan"
                                        className="rounded-full"
                                    >
                                        <div className="flex justify-between items-center p-1 shadow-sm rounded-full">
                                            <div className="flex items-center gap-2">
                                                <span className="h-10 w-10 ">
                                                    <Image
                                                        src={profile}
                                                        alt="Candidate profile picture"
                                                        className="h-full w-full rounded-full object-fit"
                                                    />
                                                </span>
                                                <span className="text-sm">
                                                    Sakura Chan
                                                </span>
                                            </div>
                                            <span>
                                                <Eye className="h-4 w-4 text-gray-400" />
                                            </span>
                                        </div>
                                    </SelectItem>
                                    <SelectItem
                                        value="Sakura Chan"
                                        className="rounded-full"
                                    >
                                        <div className="flex justify-between items-center p-1 shadow-sm rounded-full">
                                            <div className="flex items-center gap-2">
                                                <span className="h-10 w-10 ">
                                                    <Image
                                                        src={profile}
                                                        alt="Candidate profile picture"
                                                        className="h-full w-full rounded-full object-fit"
                                                    />
                                                </span>
                                                <span className="text-sm">
                                                    Sakura Chan
                                                </span>
                                            </div>
                                            <span>
                                                <Eye className="h-4 w-4 text-gray-400" />
                                            </span>
                                        </div>
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid grid-cols-1 gap-1.5">
                        <Label className="text-sm text-primary-sidebar-foreground font-normal">
                            Interview Type
                        </Label>
                        <Input
                            type="text"
                            className=" border-secondary-border focus:border-primary-border focus-visible:ring-0"
                        />
                    </div>
                </form>
            </div>

            {/* additional information form */}
            <div className="bg-background p-6 grid grid-cols-1 gap-4 ">
                <span className="text-lg text-primary-sidebar-foreground">
                    Additional Information
                </span>
                <form className="grid grid-cols-1 gap-5">
                    <div className="grid grid-cols-1 gap-1.5">
                        <Label className="text-sm text-primary-sidebar-foreground font-normal">
                            Interview Type
                        </Label>
                        <Input
                            type="text"
                            className=" border-secondary-border focus:border-primary-border focus-visible:ring-0"
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-1.5">
                        <Label className="text-sm text-primary-sidebar-foreground font-normal">
                            Attachment
                        </Label>
                        <div className="flex gap-2 items-center">
                            <Input
                                type="file"
                                className=" border-secondary-border focus:border-primary-border focus-visible:ring-0"
                            />
                            <Button
                                variant="outline"
                                className="bg-primary-surface-disabled text-sm font-normal hover:bg-primary-surface-disabled"
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
