import { Typography } from "@/components/shared/typography";
import { Input } from "@/components/ui/input";
import { candidateUserProfiles } from "@/config/db";
import Image from "next/image";

export default function MessagingInbox({
  user,
}: {
  user?: (typeof candidateUserProfiles)[0] | null;
}) {
  return (
    user && (
      <>
        <div className="p-6 h-full bg-grayscale-surface-white rounded-md outline outline-offset-[-1px] outline-grayscale-border-default inline-flex flex-col justify-between items-start">
          <div className="self-stretch flex flex-col justify-start items-start gap-10">
            <div className="self-stretch bg-grayscale-surface-white rounded-md inline-flex justify-between items-center">
              <div className="flex justify-start items-center gap-4">
                <Image
                  alt="profile-pic"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-cover rounded-full"
                  src={user.image}
                />

                <div className="inline-flex flex-col justify-center items-start gap-1">
                  <Typography>{user.name}</Typography>
                </div>
              </div>
              <Typography color="caption" type="xxs">
                {user.time}
              </Typography>
            </div>
            <div className="self-stretch justify-start text-grayscale-text-title text-sm font-normal leading-normal">
              Subject: Thank You for Your Application
              <br /> Hi [Candidate&apos;s Name],
              <br />
              <br />I came across your profile and was impressed by your
              experience in Software Development. We have an exciting opening
              for a Full Stack Developer role at Upsela Talent Solutions, and I
              believe you&apos;d be a great fit!
              <br />
              I&apos;ve attached the job description for your reference. Let me
              know if you&apos;re interested, and we can schedule a quick chat.
              <br />
              <br />
              Looking forward to your response!
              <br />
              <br />
              Best, John Rai Hiring Manager Upsela Talent Solutions
            </div>
          </div>
          <Input
            containerClassName="w-full"
            placeholder="Write a message..."
            icon="send"
            iconPosition="right"
            iconColor="#3B82F6"
          />
        </div>
      </>
    )
  );
}
