import { buttonVariants } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export function NewJobHeaderAction({ type }: { type: "admin" | "recruiter" }) {

  return (
    <Link
      className={buttonVariants({ variant: "ghost", className: "text-primary-text-label-1" })}
      href={`/${type}/job-posting/new`}
    >
      <Plus height={20} />
      <span>Create New Job Posting</span>
    </Link>

  )
}
