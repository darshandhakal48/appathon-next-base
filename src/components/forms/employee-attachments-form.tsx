import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

function AdditionalFormAttachment({ className }: { className?: string }) {
    return (
        <>
            <div className="bg-grayscale-surface-white p-6 flex flex-col shadow-sm gap-4 ">
                <span className="text-lg text-grayscale-text-title font-semibold ">
                    Additional Information
                </span>
                <div
                    className={cn(
                        `grid grid-cols-1 md:grid-cols-4 gap-4 `,
                        className
                    )}
                >
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
                                className="bg-grayscale-surface-disabled text-sm font-normal hover:bg-grayscale-surface-disabled"
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
                                className="bg-grayscale-surface-disabled text-sm font-normal hover:bg-grayscale-surface-disabled"
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

export default AdditionalFormAttachment;
