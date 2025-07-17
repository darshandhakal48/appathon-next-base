import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

function EmployeeFormAttachment() {
    return (
        <>
            <div className="bg-background p-6 grid grid-cols-1 gap-4 ">
                <span className="text-lg text-primary-sidebar-foreground">
                    Additional Information
                </span>
                {/* <form className="flex items-center gap-5"> */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
                    <div className="grid grid-cols-1 gap-1.5">
                        <Label className="text-sm text-primary-sidebar-foreground font-normal">
                            Others
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
                </div>
                {/* </form> */}
            </div>
        </>
    );
}

export default EmployeeFormAttachment;
