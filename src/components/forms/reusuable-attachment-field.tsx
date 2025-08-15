// components/form-fields/ReusableAttachmentField.tsx
import { Control, FieldPath, FieldValues } from "react-hook-form";
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type Props<T extends FieldValues> = {
    control: Control<T>;
    name: FieldPath<T>;
    label: string;
    required?: boolean;
};

export function ReusableAttachmentField<T extends FieldValues>({
    control,
    name,
    label,
    required = true,
}: Props<T>) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex flex-col gap-0">
                    <FormLabel className="text-grayscale-text-title font-normal text-sm">
                        {label}
                    </FormLabel>
                    <FormControl>
                        <Input
                            type="file"
                            onChange={(e) => field.onChange(e.target.files)}
                            required={required}
                            className="border-secondary-border focus-visible:ring-0"
                        />
                    </FormControl>
                    <FormMessage className="text-error-surface-lighter" />
                </FormItem>
            )}
        />
    );
}
