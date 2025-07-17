import ProfileInfo from "@/components/dashboard/profileInfo";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { workForceProfileInfo } from "@/config/db";
import OverViewAndTimelineBtn from "@/components/dashboard/overview-timeline-btn";
import WorkforceActiveJobOpenings from "./workforceActiveJobOpenings";

function EmployeeDetails() {
    return (
        <div className="p-4">
            <div className="bg-background rounded-sm p-4 space-y-8">
                {/* back button */}
                <Button
                    variant="ghost"
                    className="text-primary-border hover:bg-background"
                >
                    <span>
                        <ArrowLeft />
                    </span>
                    Back
                </Button>

                {/* employee details */}
                <div className="">
                    <ProfileInfo profile={workForceProfileInfo} />
                </div>

                <OverViewAndTimelineBtn />

                <div className="mt-8 ">
                    <WorkforceActiveJobOpenings />
                    {/* <ActiveJobOpenings /> */}
                </div>
            </div>
        </div>
    );
}

export default EmployeeDetails;
