"use client";


import {useGlobalModal} from "@/hooks/use-global-ui";
import {InterviewFormType} from "@/schema/interview-form-schema";
import InterviewForm from "@/components/forms/interview/interview-form";
import {Button} from "@/components/ui/button";
import {IconPlus} from "@tabler/icons-react";

function InterviewFormAction({initialValue}:{initialValue?:InterviewFormType|null}) {

    const modal = useGlobalModal()
    const isNew = !!initialValue;


    return (
    <>
        <Button variant="default" onClick={()=>{return modal.custom({
            title: isNew ? "Schedule New Interview" : "Edit Interview",
            description: isNew ? "Create a new interview session with candidate and interviews." : "Edit interview session with candidate and interviewers",
            size:"w-full max-w-3xl",
            content:<InterviewForm/>,
            closable:true
        })
        }}>
            <IconPlus className="size-4"/>
            Schedule New Interview
        </Button>
    </>
  );
}

export default InterviewFormAction;