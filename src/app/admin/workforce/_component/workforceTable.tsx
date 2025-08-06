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
import DashboardPageHeader from "@/components/dashboard/page-header";
import { ReusableTable } from "@/components/dashboard/reusuable-table";
import { WorkForceUser } from "@/config/db";
import { userColumns } from "@/lib/column";

function WorkforceTable() {
    const router = useRouter();

    const handleSingleDetailsNavigation = () => {
        router.push(`/admin/workforce/123`);
    };
    return (
        <>
            <WorkforceHeader />
            <div className="p-4">
                <div className="bg-grayscale-surface-white ">
                    {/* <ParticipantsTable /> */}
                    <ReusableTable
                        data={WorkForceUser}
                        columns={userColumns}
                        onRowClick={handleSingleDetailsNavigation}
                    />
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
            <DashboardPageHeader title="Workforce">
                <div
                    className="space-x-1 gap-2 flex items-center text-primary-text-label-1 cursor-pointer"
                    onClick={handleNavigation}
                >
                    <Plus height={20} />
                    <span>Add New Player</span>
                </div>
            </DashboardPageHeader>
        </>
    );
}

export const ParticipantsTable = () => {
    return (
        <Table className="w-full overflow-scroll">
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader className="t">
                <TableRow>
                    <TableHead>Employee Name</TableHead>
                    <TableHead>Job Title</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Work No</TableHead>
                    <TableHead>Mobile No.</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className="text-grayscale-text-body">
                <TableRow>
                    <TableCell className="flex items-center gap-2 font-medium">
                        <span className="h-10 w-10">
                            <Image
                                src={profile}
                                alt="Candidate profile picture"
                                className="object-fit h-full w-full rounded-full"
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
                    <TableCell className="flex items-center gap-2 font-medium">
                        <span className="h-10 w-10">
                            <Image
                                src={`/_static/profile-pic.jpg`}
                                alt="Candidate profile picture"
                                width={899}
                                height={1300}
                                className="object-fit h-full w-full rounded-full"
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
                    <TableCell className="flex items-center gap-2 font-medium">
                        <span className="h-10 w-10">
                            <Image
                                src={profile}
                                alt="Candidate profile picture"
                                className="object-fit h-full w-full rounded-full"
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
