"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {IconLayoutGrid, IconList, IconPlus} from "@tabler/icons-react";
import InterviewFormAction from "@/components/forms/interview";

export default function HeaderAction() {
  const router = useRouter()
  const handleNavigation = () => {
    router.push("/admin/interviews/createInterview");
  };

  return (
    <div className="gap-2.5 space-x-1 flex items-center">

        <Button size="icon" variant="outline">
            <IconList/>
        </Button>
        <Button size="icon" variant="outline">
            <IconLayoutGrid/>
            </Button>

     <InterviewFormAction />
    </div>

  )
}
