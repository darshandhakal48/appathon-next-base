"use client";
import JobCard from "@/components/shared/job-card";
// import { candidateJobs } from "@/config/db";
import { useRouter } from "next/navigation";

export default function JobPostingClient() {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
      {/* {candidateJobs.map((data) => (
        <JobCard
          onClick={() =>
            router.push(`/recruiter/job-posting/${data["Job Id"]}`)
          }
          job={data}
          key={data["Job Id"]}
        />
      ))} */}
    </div>
  );
}
