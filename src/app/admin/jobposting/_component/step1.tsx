import JobAddressInfoForm from "@/components/forms/job-address-info-form";
import JobPostInfoForm from "@/components/forms/job-post-info-form";
import JobDescription from "./jobDescription";
import { Control } from "react-hook-form";
import { JobFormType } from "@/components/forms/schema";

function Step1({ control }: { control: Control<JobFormType> }) {
    return (
        <>
            {/* Form */}
            <div className="space-y-8">
                <div className=" grid grid-cols-2 gap-4">
                    <JobPostInfoForm control={control} />
                    <JobAddressInfoForm control={control} />
                </div>

                {/* description */}
                <JobDescription control={control} />
            </div>
        </>
    );
}

export default Step1;
