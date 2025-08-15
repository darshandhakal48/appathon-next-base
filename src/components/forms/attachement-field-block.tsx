// components/form-fields/AttachmentFieldsBlock.tsx

import { Control, FieldPath, FieldValues } from "react-hook-form";
import { ReusableAttachmentField } from "./reusuable-attachment-field";

type Props<T extends FieldValues> = {
    control: Control<T>;
    baseName: FieldPath<T>; // e.g., "Attachment", "AdditionalFiles"
};

export function AttachmentFieldsBlock<T extends FieldValues>({
    control,
    baseName,
}: Props<T>) {
    const mainAttachment = `${baseName}.attachment` as FieldPath<T>;
    const optionalAttachment = `${baseName}.others` as FieldPath<T>;

    return (
        <div className="space-y-4">
            <ReusableAttachmentField
                control={control}
                name={mainAttachment}
                label="Main Attachment"
                required={true}
            />
            <ReusableAttachmentField
                control={control}
                name={optionalAttachment}
                label="Other Attachment (Optional)"
                required={false}
            />
        </div>
    );
}
