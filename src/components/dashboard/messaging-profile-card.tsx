export default function MessagingProfileCard() {
  return (
    <div className="max-w-[340px] w-full p-6 bg-background rounded-md outline-1 outline-offset-[-1px] outline-[#E5E7EB] inline-flex justify-between items-end">
      <div className="flex justify-start items-start gap-4">
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
          <div className="justify-center text-subtitle text-sm font-normal font-sans-secondary leading-tight">
            This is a message
          </div>
        </div>
      </div>
      <div className="justify-start text-caption text-[10px] font-normal leading-none">
        3 weeks ago
      </div>
    </div>
  );
}
