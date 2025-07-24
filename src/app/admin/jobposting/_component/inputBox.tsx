import { PersonalInformationProps } from "@/lib/type";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Icons } from "@/components/ui/icons";

function InputBox(info: PersonalInformationProps) {
    // const Tag= Icons[info.]
    return (
        <div className="flex justify-between items-center p-4 bg-background">
            <div className="flex items-center text-base gap-4">
                <span className="text-caption">{/* <GripVertical /> */}</span>
                <span className="text-grayscale-body">{info.label}</span>
            </div>
            <Select defaultValue="Input Field">
                <SelectTrigger className="min-w-3xs shadow-none">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {info.formFields.map((field) => {
                            const Tag = Icons[field.icon];
                            return (
                                <>
                                    <SelectItem
                                        value={`${field.iconLabel}`}
                                        key={field.iconLabel}
                                    >
                                        {" "}
                                        <div className=" flex items-center gap-2.5 text-foreground py-1 px-4">
                                            <span>
                                                <Tag />
                                            </span>
                                            <span>{field.iconLabel}</span>
                                        </div>
                                    </SelectItem>
                                </>
                            );
                        })}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
}

export default InputBox;
