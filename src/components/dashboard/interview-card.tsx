import { Interview } from "@/lib/type";
import {
  Calendar,
  Clock3,
  Edit,
  GitPullRequestArrow,
  Smartphone,
  Trash2,
} from "lucide-react";
import { Button } from "../ui/button";
import { IconDotsVertical } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { Typography } from "../shared/typography";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { useSidebar } from "../ui/sidebar";
import { useRouter } from "next/navigation";
import { GlobalDropdown, MenuDropdown } from "../shared/global-dropdown";

function InterviewCard({
  interview,
  href
}: {
  interview: Interview
  href?: string
}) {
  const router = useRouter();
  const sidebar = useSidebar();
  const statusBgColor = ["Upcoming", "Scheduled"].includes(interview.status) ? "bg-[#32CD321A] hover:bg-[#32CD3233]" :
    ["Completed", "In Review"].includes(interview.status) ? "bg-[#1E90FF1A] hover:bg-[#1E90FF33]" : "bg-[#DC143C1A] hover:bg-[#DC143C33]"

  const statusDotColor = ["Upcoming", "Scheduled"].includes(interview.status) ? "bg-[#32CD32]" :
    ["Completed", "In Review"].includes(interview.status) ? "bg-[#1E90FF]" : "bg-[#DC143C]"

  const StatusIcon = ["Video Interview"].includes(interview.interviewType) ? GitPullRequestArrow : Smartphone


  return (
    <div onClick={() => href && router.push(href)} className="rounded-md border border-grayscale-border-default bg-grayscale-surface-white p-6">
      <div className="flex justify-between border-b border-grayscale-border-lighter pb-4">
        <div className="flex items-center gap-2.5">
          <Button size="sm" className={cn("font-normal text-grayscale-text-body", statusBgColor)}>
            <div className={cn("size-1.5 rounded-full", statusDotColor)} />
            {interview.status}
          </Button>
          <Button
            size="sm"
            className="border border-grayscale-border-lighter bg-transparent text-grayscale-text-body hover:bg-grayscale-surface-subtle">

            <StatusIcon className="size-3" />
            {interview.interviewType}
          </Button>
        </div>
        <MenuDropdown items={[
          {
            label: "Edit",
            onClick: () => console.log("Edit clicked"),
            icon: <Edit className="h-4 w-4" />,
          },
          {
            label: "Delete",
            onClick: () => console.log("Logout clicked"),
            icon: <Trash2 className="h-4 w-4" />,
            destructive: true,
            separator: true,
          },
        ]}
          side="bottom"
          align="start">
          <Button variant="ghost" size="icon">
            <IconDotsVertical className="text-grayscale-text-title" />
          </Button>
        </MenuDropdown>
      </div>
      <div className="py-4">
        <Typography type="xxs" color="caption">Candidate</Typography>
        <Typography type="lg" color="title">{interview.candidateName}</Typography>
      </div>
      <div className="xgap-[30px] grid grid-cols-2 pb-4">
        <div className="space-y-[3px]">
          <Typography type="xxs" color="caption">Job Title</Typography>
          <Typography type="sm">{interview.jobTitle}</Typography>
        </div>
        <div className="space-y-[3px]">
          <Typography type="xxs" color="caption">Client</Typography>
          <Typography type="sm">{interview.client}</Typography>
        </div>
      </div>
      <div className={cn("mb-4 flex h-10 items-center", { "px-4": !sidebar.open })}>
        <div className="flex h-10 items-center gap-2 border-r border-grayscale-border-lighter pr-6">
          <Calendar className="size-4 text-grayscale-text-subtitle" />
          <Typography type="sm">
            {interview.date}
          </Typography>
        </div>
        <div className="flex h-10 items-center gap-2 pl-6">
          <Clock3 className="size-4 text-grayscale-text-subtitle" />
          <Typography type="sm">
            {interview.timeRange}
          </Typography>
        </div>
      </div>
      <div className="space-y-1.5 border-t border-grayscale-border-lighter pt-4">
        <Typography type="xxs" color="caption">Assigned To</Typography>
        <div className="flex items-center gap-2">
          <Avatar className="grid size-10 place-content-center rounded-full bg-slate-200 text-slate-900 dark:bg-slate-700 dark:text-slate-200">
            <AvatarFallback>{interview.assignedTo.initials}</AvatarFallback>
          </Avatar>
          <Typography type="sm">{interview.assignedTo.fullName}</Typography>
        </div>
      </div>
    </div>
  );
}

export default InterviewCard;
