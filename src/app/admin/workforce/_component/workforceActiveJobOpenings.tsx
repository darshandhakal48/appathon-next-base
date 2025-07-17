import CustomTable from "@/components/dashboard/customTable";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const column = [
    { key: "jobId", label: "Job ID" },
    { key: "jobTitle", label: "Job Title" },
    { key: "startDate", label: "Start Date" },
    { key: "deadline", label: "Deadline" },
    { key: "status", label: "Status" },
    { key: "city", label: "City" },
    { key: "name", label: "Assigned" },
    // { key: "profilePic", label: "Profile Pic" }, // Uncomment if you want to show profilePic column
];

const data = [
    {
        jobId: "se001",
        jobTitle: "Software Engineer",
        startDate: "2024/01/01",
        deadline: "2024/01/20",
        status: "In-Progress",
        city: "TX, USA",
        name: "Sakura Chan",
        profilePic: "/_static/profile-pic.jpg",
    },
    {
        jobId: "se002",
        jobTitle: "Backend developer",
        startDate: "2024/01/01",
        deadline: "2024/01/01",
        status: "In-Progress",
        city: "TX, USA",
        name: "Sakura Chan",
        profilePic: "/_static/profile-pic.jpg",
    },
    {
        jobId: "se003",
        jobTitle: "Frontend Engineer",
        startDate: "2024/01/01",
        deadline: "2024/01/01",
        status: "In-Progress",
        city: "TX, USA",
        name: "Sakura Chan",
        profilePic: "/_static/profile-pic.jpg",
    },
    {
        jobId: "se004",
        jobTitle: "Devops",
        startDate: "2024/01/01",
        deadline: "2024/01/01",
        status: "In-Progress",
        city: "TX, USA",
        name: "Sakura Chan",
        profilePic: "/_static/profile-pic.jpg",
    },
];

function WorkforceActiveJobOpenings() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between flex-col md:flex-row md:gap-0 gap-4 items-center">
                <div className="flex flex-col">
                    <span className="font-semibold text-lg text-sidebar-primary-foreground">
                        Active Job Openings
                    </span>
                    <span className="text-sm text-caption font-normal">
                        Active job openings by this particular employee
                    </span>
                </div>
                <div>
                    <Button
                        variant="customDefault"
                        className="text-primary-surface bg-muted border-[1px] border-surface-default text-sm font-normal gap-2.5"
                    >
                        Assign to New Project
                        <span>
                            <ChevronDown />
                        </span>
                    </Button>
                </div>
            </div>

            {/* ===== table ===== */}
            <CustomTable columns={column} data={data} />
        </div>
    );
}

export default WorkforceActiveJobOpenings;
