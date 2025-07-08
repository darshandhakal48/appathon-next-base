import { Input } from "@/components/ui/input";

export default function MessagingInbox() {
  return (
    <>
      <div className="p-6 h-full bg-white rounded-md outline outline-offset-[-1px] outline-[#E5E7EB] inline-flex flex-col justify-between items-start">
        <div className="self-stretch flex flex-col justify-start items-start gap-10">
          <div className="self-stretch bg-white rounded-md inline-flex justify-between items-center">
            <div className="flex justify-start items-center gap-4">
              <div
                data-size="lg"
                data-type="avatar image"
                className="w-12 h-12 relative"
              >
                <img
                  className="w-12 h-12 left-0 top-0 absolute rounded-full"
                  src="https://placehold.co/48x48"
                />
              </div>
              <div className="inline-flex flex-col justify-center items-start gap-1">
                <div className="justify-center text-gray-700 text-base font-normal leading-normal">
                  Walter White
                </div>
              </div>
            </div>
            <div className="justify-start text-caption text-[10px] font-normal leading-none">
              3 weeks ago
            </div>
          </div>
          <div className="self-stretch justify-start text-title text-sm font-normal leading-normal">
            Subject: Thank You for Your Application
            <br /> Hi [Candidate's Name],
            <br />
            <br />I came across your profile and was impressed by your
            experience in Software Development. We have an exciting opening for
            a Full Stack Developer role at Upsela Talent Solutions, and I
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
  );
}
