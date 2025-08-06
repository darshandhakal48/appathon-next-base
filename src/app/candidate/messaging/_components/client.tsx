"use client";
import MessagingProfileCard from "@/components/dashboard/messaging-profile-card";

import MessagingInbox from "./messaging-inbox";

import { candidateUserProfiles } from "@/config/db";
import { useState } from "react";
import { IconArrowLeft } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function MessagingClient({
  data,
}: {
  data: typeof candidateUserProfiles;
}) {
  const [selectedProfile, setSelectedProfile] = useState<null | string>(
    candidateUserProfiles[0].id
  );

  return (
    <div className="p-6 grid h-[calc(100vh-70px)] relative grid-cols-1 md:grid-cols-[0.35fr_1fr] gap-4">
      <div
        className={cn("flex-col gap-6 flex pt-12 md:pt-0", {
          "hidden md:flex": selectedProfile,
        })}
      >
        {candidateUserProfiles.map((user) => (
          <MessagingProfileCard
            onClick={() => setSelectedProfile(user.id)}
            key={"candidate-messaging-" + user.id}
            user={{ ...user }}
          />
        ))}
      </div>
      <div className="h-full  pt-12 md:pt-0">
        <Button
          onClick={() => setSelectedProfile(null)}
          className="absolute flex md:hidden top-3 left-2"
          variant="ghost"
        >
          <IconArrowLeft />
          Back
        </Button>

        <MessagingInbox
          user={candidateUserProfiles.find((i) => i.id === selectedProfile)}
        />
      </div>
    </div>
  );
}
