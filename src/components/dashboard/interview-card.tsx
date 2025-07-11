import {
  EllipsisVertical,
  MessagesSquare,
  Calendar,
  Clock3,
} from "lucide-react";

function InterviewCard({
  status,
}: {
  status: "success" | "pending" | "error";
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-2.5">
          <div
            className={` ${
              status == "success"
                ? "bg-success/10"
                : status === "pending"
                ? "bg-blue-500/10"
                : status === "error"
                ? "bg-red-500/10"
                : "bg-success/10"
            } flex items-center gap-2.5  p-2 rounded-sm`}
          >
            <span
              className={`${
                status == "success"
                  ? "bg-success"
                  : status === "pending"
                  ? "bg-blue-500"
                  : status === "error"
                  ? "bg-red-500"
                  : "bg-success"
              } h-2 w-2 rounded-full`}
            ></span>
            <span className="text-xs text-gray-500">Upcoming</span>
          </div>
          <div className="flex items-center gap-2.5 border-1 p-2 rounded-sm">
            <MessagesSquare height={16} className="text-gray-500" />
            <span className="text-xs text-gray-500">Video Interview</span>
          </div>
        </div>
        <span>
          <EllipsisVertical />
        </span>
      </div>
      <div className="border-t-[1px]"></div>
      <div className="flex flex-col gap-2.5">
        <span
          className="text-[10px] text-gray-400
                "
        >
          Candidate
        </span>
        <span className="text-lg ">Jessie Pinkman</span>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-2.5">
          <span
            className="text-[10px] text-gray-400
                "
          >
            Job Title
          </span>
          <span className="text-sm ">Software Engineering</span>
        </div>
        <div className="flex flex-col gap-2.5">
          <span
            className="text-[10px] text-gray-400
                "
          >
            Client
          </span>
          <span className="text-sm ">Rays IT</span>
        </div>
      </div>
      <div className="bg-muted w-[90%] rounded-full flex justify-between p-2 gap-6 ">
        <div className="flex items-center gap-2 ">
          <Calendar height={14} className="text-gray-500" />
          <span className="text-sm text-gray-500">09/24/2024</span>
        </div>
        <div className="flex items-center gap-2 ">
          <Clock3 height={14} className="text-gray-500" />
          <span className="text-sm text-gray-500">10:00 am - 11:00 am</span>
        </div>
      </div>
      <div className="border-t-[1px]"></div>
      <div>
        <div className="flex flex-col gap-1">
          <span className="text-gray-400 text-[10px]">Assigned to</span>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-sidebar-accent rounded-full">
              <span className=" text-secondary text-sm">WW</span>
            </div>
            <span className="text-secondary text-sm">Walter White</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterviewCard;
