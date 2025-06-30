import { Label } from "@/components/ui/label";
import SelectCandidate from "./selectCandidate";
import { Input } from "@/components/ui/input";

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
                                type="date"
                                className=" border-secondary-border focus-visible:ring-0"
                            />
                        </div>
                        <div className="grid grid-cols-1 gap-1.5">
                            <Label className="text-sm text-primary-sidebar-foreground font-normal">
                                Time
                            </Label>
                            <Input
                                type="time"
                                className="border-secondary-border focus-visible:ring-0"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-1.5">
                        <Label className="text-sm text-primary-sidebar-foreground font-normal">
                            Interviewers
                        </Label>
                        <Input
                            type="text"
                            className=" border-secondary-border focus:border-primary-border focus-visible:ring-0"
                        />
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
                        <Input
                            type="text"
                            className=" border-secondary-border focus:border-primary-border focus-visible:ring-0"
                        />
                    </div>
                </form>
            </div>
        </>
    );
}

export default ScheduleInterview;
