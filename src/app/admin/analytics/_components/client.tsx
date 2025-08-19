"use client";

import { EmptyState } from "@/components/shared/empty-state";
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";

export function AdminAnalyticsClient() {
  return (
    <div>

    </div>
  )
}
export function ApplicationOverviewSection({ graphInfo }: { graphInfo: [] | null }) {
  return (<>
    {
      graphInfo ? <></> : <EmptyState title="" description="" icon="clock4" />
    }
  </>)
}
export function TrackingApplicantsSection({ graphInfo }: { graphInfo: [] | null }) {
  return (<>
    {
      graphInfo ? <></> : <EmptyState title="" description="" icon="clock4" />
    }
  </>)
}
export function CandidatePerformaneSection({ graphInfo }: { graphInfo: [] | null }) {
  return (<div className="">
    {
      graphInfo ? <></> : <EmptyState title="" description="" icon="clock4" />
    }
  </div>)
}
export function TimeToHireSection({ graphInfo }: { graphInfo: [] | null }) {
  return (<div className="">
    {
      graphInfo ? <></> : <EmptyState title="" description="" icon="clock4" />
    }
  </div>)
}

export function AnalyticsHeaderAction() {
  const route = useRouter();
  return (
    <Button onClick={() => route.push("/")}>Export</Button>
  )
}
