import React from "react";
import { Clock8, Calendar } from "lucide-react";

function RecentUserActivityCard() {
    return (
        <>
            <div className="border-1 rounded-[8px] p-4 space-y-2 ">
                <div className="bg-muted rounded-3xl inline-flex items-center p-2 gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-success"></div>
                    <span className="text-sm text-secondary">Job Offered</span>
                </div>
                <div>John sent offer to David Anderson</div>
                <div className="grid lg:grid-cols-2 gap-1">
                    <div className="border-1 rounded-sm inline-flex items-center p-2 gap-2">
                        {/* <span className="text-secondary">icon</span> */}
                        <Clock8 className="text-secondary" size={18} />
                        <span className="text-secondary">09:00Am</span>
                    </div>
                    <div className="border-1 rounded-sm inline-flex items-center p-2 gap-2">
                        {/* <span className="text-secondary">icon</span> */}
                        <Calendar className="text-secondary" size={18} />
                        <span className="text-secondary">14 Dec 2024</span>
                    </div>
                </div>
            </div>
        </>
    );
}

// TODO: Take data as argument, and dashboard type
function RecentUserActivities({ type }: { type: string }) {
    return (
        <div className="space-y-4">
            <div className="flex justify-between">
                <span className="text-base">Recent User Activities</span>
                {type === "admin" && (
                    <span className="text-base text-primary-surface">
                        View All Jobs
                    </span>
                )}
            </div>
            <div className="grid grid-cols-2 gap-4 ">
                <RecentUserActivityCard />
                <RecentUserActivityCard />
                <RecentUserActivityCard />
                <RecentUserActivityCard />
            </div>
        </div>
    );
}

export default RecentUserActivities;
