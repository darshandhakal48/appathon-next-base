"use client";

import Spacer from "@/components/shared/spacer";
import { Button } from "@/components/ui/button";
import { IconArrowLeft, IconCheck } from "@tabler/icons-react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface InterviewProps extends React.HTMLAttributes<HTMLDivElement> {
    attachment?: any; // TODO: Chage it to attachment prop
    role?: string;
}

export default function InterviewInfo(props: InterviewProps) {
    const { className, attachment, role, ...attr } = props;
    return (
        <div
            {...attr}
            className={cn(
                "overflow-hidden bg-sidebar-primary shadow-sm",
                className
            )}
        >
            <Spacer />
            <PageHeader role={role} />
            <Spacer />
            <div className="space-y-14 px-6">
                <div className="space-y-2">
                    <p className="text-primary-surface text-2xl font-semibold leading-loose">
                        Online Interview
                    </p>
                    <p className="px-3 py-0.5 text-grayscale-body text-base font-semibold leading-normal">
                        Jessie Pinkman
                    </p>
                </div>
                <div className="w-64 h-10 inline-flex justify-center items-center">
                    <div className="flex-1 cursor-pointer hover:bg-surface-default px-3 h-10  py-2.5 bg-background-secondary rounded-tl-[100px] rounded-bl-[100px] outline outline-offset-[-1px] outline-caption text-grayscale-body inline-flex justify-center items-center gap-2">
                        <IconCheck className="size-[18px]" />
                        <p className="text-center text-sm font-normal leading-tight">
                            Overview
                        </p>
                    </div>

                    <div className="flex-1 cursor-pointer hover:bg-surface-default px-3 h-10  py-2.5 rounded-tr-[100px] rounded-br-[100px] outline outline-offset-[-1px] outline-caption text-grayscale-body inline-flex justify-center items-center gap-2">
                        <p className="text-center text-sm font-normal leading-tight">
                            Timeline
                        </p>
                    </div>
                </div>
                <div>
                    <Spacer />

                    <p className="flex-1 justify-start h-16 px-6 text-title text-base font-normal leading-normal">
                        Business Card
                    </p>

                    <div className="px-6 grid grid-cols-[0.25fr_1fr]">
                        <div>
                            <TableHeaderCell />
                            <TableHeaderCell />
                            <TableHeaderCell />
                            <TableHeaderCell />
                        </div>
                        <div>
                            <TableFieldCell />
                            <TableFieldCell />
                            <TableFieldCell />
                            <TableFieldCell />
                        </div>
                    </div>
                    <Spacer />
                </div>
                <ParticipantsTable />
            </div>

            {attachment && (
                <>
                    <Spacer />
                    <div className="px-6">
                        <span>Attachment</span>
                        <div className="h-40 w-40 bg-surface-default"></div>
                    </div>
                    <Spacer />
                </>
            )}
        </div>
    );
}

const PageHeader = ({ role }: { role?: string }) => {
    const router = useRouter();
    return (
        <div className="h-12 p-6 overflow-hidden flex justify-between items-center">
            <Button
                onClick={() => router.back()}
                variant="ghost"
                className="text-primary-surface"
            >
                <IconArrowLeft /> Back
            </Button>
            <div className="flex justify-start items-start gap-2.5">
                {role === "admin" ? (
                    <>
                        <Button
                            variant="ghost"
                            className="text-primary-surface hover:text-primary-surface/80"
                        >
                            Edit
                        </Button>
                        <Button
                            variant="ghost"
                            className="text-primary-surface hover:text-primary-surface/80"
                        >
                            Reschedule
                        </Button>
                        <Button
                            variant="ghost"
                            className="text-primary-surface hover:text-primary-surface/80"
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="ghost"
                            className="text-primary-surface hover:text-primary-surface/80"
                        >
                            Delete
                        </Button>
                    </>
                ) : (
                    <>
                        <Button
                            variant="ghost"
                            className="text-primary-surface hover:text-primary-surface/80"
                        >
                            Mark as available
                        </Button>
                        <Button
                            variant="ghost"
                            className="text-primary-surface hover:text-primary-surface/80"
                        >
                            Cancel
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
};

const TableHeaderCell = () => {
    return (
        <div className="self-stretch h-12 px-3 py-1.5 bg-background-secondary shadow-[inset_0px_-1px_0px_0px_rgba(201,207,218,0.30)] flex items-center bg-surface-default">
            <p className="text-title text-sm font-bold leading-tight">
                Client Name
            </p>
        </div>
    );
};

const TableFieldCell = () => {
    return (
        <div className="self-stretch h-12 px-3 py-3.5 bg-background shadow-[inset_0px_-1px_0px_0px_rgba(223,226,233,0.40)] flex items-center">
            <p className="text-secondary text-sm font-normal font-sans-secondary leading-tight">
                Rays IT
            </p>
        </div>
    );
};
const ParticipantsTable = () => {
    return (
        <Table className="w-full overflow-scroll">
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader className="bg-surface-default">
                <TableRow>
                    <TableHead className="">Participants Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="font-medium">Walter White</TableCell>
                    <TableCell>Software Engineer</TableCell>
                    <TableCell>walter@gmail.com</TableCell>
                    <TableCell className="text-right">
                        <Badge className="bg-warning text-muted">
                            In progress
                        </Badge>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">Walter White</TableCell>
                    <TableCell>Software Engineer</TableCell>
                    <TableCell>walter@gmail.com</TableCell>
                    <TableCell className="text-right">
                        <Badge className="bg-warning text-muted">
                            In progress
                        </Badge>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};
