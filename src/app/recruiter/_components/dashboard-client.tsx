"use client";

import React, { useEffect, useState } from "react";

import ActiveJobOpenings from "@/components/dashboard/active-job-openings";
import OverviewCard from "@/components/dashboard/overview-cards";
import RecentUserActivities from "@/components/dashboard/recent-user-activities";
import BasicLayoutCard from "@/components/shared/basic-layout-card";
import BasicLayoutCard from "@/components/shared/basic-layout-card";

const AdminDashboardClient = () => {
  return (
    <>
      <div className="bg-grayscale-background-default space-y-4 p-6">
        <div className="flex flex-wrap gap-4">
          {recruiterDashbaordCards.map((card, i) => (
            <OverviewCard key={"candidate-card-" + i} data={card} />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <BasicLayoutCard>
            <ActiveJobOpenings jobs={[]} />
          </BasicLayoutCard>
          <BasicLayoutCard>
            <RecentUserActivities data={DashboardUserActivity} type="admin" />
          </BasicLayoutCard>
        </div>
      </div>
    </>
  );
};

export const PageHeaderAction = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <></>;

  return (
    <div className="gap-2.5 space-x-1">
      <Button variant="outline">Drafts</Button>
      <Button
        variant="default"
        onClick={() => router.push("/recruiter/interviews/new")}
      >
        Schedule New Interview
      </Button>
    </div>
  );
};

export default AdminDashboardClient;
