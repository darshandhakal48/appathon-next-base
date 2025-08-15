import DashboardPageHeader from "@/components/dashboard/page-header"
import { TypographySkeleton } from "@/components/skeletons/typography-skeleton"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading({ noHeader }: { noHeader?: boolean }) {
  return (
    <>
      {!noHeader && <DashboardPageHeader title="Interview" />}
      <div className="grid grid-cols-1 gap-6 bg-grayscale-surface-subtle p-6 md:grid-cols-2 lg:grid-cols-3">
        {
          Array.from({ length: 9 }).map((_, i) => <InterviewCardSkeleton key={i} />)
        }
      </div>
    </>
  )
}

export const InterviewCardSkeleton = () => {
  return (

    <div className="rounded-md border border-grayscale-border-default bg-grayscale-surface-disabled/40 p-6">
      <div className="flex justify-between border-b border-grayscale-border-lighter pb-4">
        <div className="flex items-center gap-2.5">
          <Skeleton className="h-8 w-full min-w-9" />
          <Skeleton className="h-8 w-full min-w-20" />
        </div>
        <Skeleton className="size-4" />
      </div>
      <div className="py-4">
        <TypographySkeleton type="xxs" />
        <TypographySkeleton type="lg" />
      </div>
      <div className="grid grid-cols-2 gap-[30px] pb-4">

        <div className="space-y-[3px]">
          <TypographySkeleton type="xxs" />
          <TypographySkeleton type="sm" />
        </div>
        <div className="space-y-[3px]">
          <TypographySkeleton type="xxs" />
          <TypographySkeleton type="sm" />
        </div>
      </div>
      <div className="mb-4 flex h-10 items-center">
        <div className="flex h-10 items-center gap-2 border-r border-grayscale-border-lighter pr-6">
          <Skeleton className="size-4" />
          <TypographySkeleton type="sm" />
        </div>
        <div className="flex h-10 items-center gap-2 pl-6">
          <Skeleton className="size-4" />
          <TypographySkeleton type="sm" />
        </div>
      </div>
      <div className="space-y-1.5 border-t border-grayscale-border-lighter pt-4">
        <TypographySkeleton type="xxs" />
        <div className="flex items-center gap-2">
          <Skeleton className="size-10 rounded-full" />
          <TypographySkeleton type="sm" />
        </div>
      </div>

    </div>
  )
}
/*
 

 (
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
        <Button variant="ghost" size="icon">
          <IconDotsVertical className="text-grayscale-text-title" />
        </Button>
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
  )



 */
