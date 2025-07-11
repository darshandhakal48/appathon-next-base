"use client";
import { Plus } from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import profile from "@/../public/_static/profile-pic.jpg";
import { useRouter } from "next/navigation";
import DashboardPageHeader from "@/components/dashboard/pageHeader";

function WorkforceTable() {
    return (
        <>
            <WorkforceHeader />
            <div className="p-4">
                <div className="bg-background p-4">
                    <ParticipantsTable />
                </div>
            </div>
        </>
    );
}

function WorkforceHeader() {
    const router = useRouter();

    const handleNavigation = () => {
        router.push(`/admin/workforce/addEmployee`);
    };

    return (
        <>
            <DashboardPageHeader>
                <span className="text-xl font-semibold">Workforce</span>

                <div
                    className="space-x-1 gap-2 flex items-center text-primary-border cursor-pointer"
                    onClick={handleNavigation}
                >
                    <Plus height={20} />
                    <span>Add New Player</span>
                </div>
            </DashboardPageHeader>
        </>
    );
}

const ParticipantsTable = () => {
    return (
        <Table className="w-full overflow-scroll">
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader className="bg-background-secondary">
                <TableRow>
                    <TableHead>Employee Name</TableHead>
                    <TableHead>Job Title</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Work No</TableHead>
                    <TableHead>Mobile No.</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className="text-grayscale-body">
                <TableRow>
                    <TableCell className="font-medium flex items-center gap-2">
                        <span className="h-10 w-10 ">
                            <Image
                                src={profile}
                                alt="Candidate profile picture"
                                className="h-full w-full rounded-full object-fit"
                            />
                        </span>
                        <span>Walter White</span>
                    </TableCell>
                    <TableCell>Software Engineer</TableCell>
                    <TableCell>walter@gmail.com</TableCell>
                    <TableCell>4646464646466</TableCell>
                    <TableCell>4646464646466</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium flex items-center gap-2">
                        <span className="h-10 w-10 ">
                            <Image
                                src={`/_static/profile-pic.jpg`}
                                alt="Candidate profile picture"
                                width={899}
                                height={1300}
                                className="h-full w-full rounded-full object-fit"
                            />
                        </span>
                        <span>Sakura Chan</span>
                    </TableCell>
                    <TableCell>Hiring Manager</TableCell>
                    <TableCell>John@gmail.com</TableCell>
                    <TableCell>4646464646466</TableCell>
                    <TableCell>4646464646466</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium flex items-center gap-2">
                        <span className="h-10 w-10 ">
                            <Image
                                src={profile}
                                alt="Candidate profile picture"
                                className="h-full w-full rounded-full object-fit"
                            />
                        </span>
                        <span>John Harison</span>
                    </TableCell>
                    <TableCell>Software Engineer</TableCell>
                    <TableCell>walter@gmail.com</TableCell>
                    <TableCell>4646464646466</TableCell>
                    <TableCell>4646464646466</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};

export default WorkforceTable;
