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

function WorkforceTable() {
    return (
        <>
            <WorkforceHeader />
            <div className="p-4">
                <div className="bg-grayscale-surface-white p-4">
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
      <DashboardPageHeader title="Workforce">
        <div
          className="flex cursor-pointer items-center gap-2 space-x-1 text-primary-text-label-1"
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
            <TableHeader className="bg-grayscale-surface-default">
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
