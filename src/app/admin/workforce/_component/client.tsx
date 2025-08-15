"use client";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { ReusableTable } from "@/components/dashboard/reusuable-table";
import { WorkForceUserProps } from "@/lib/type";
import { EmptyState } from "@/components/shared/empty-state";
import Image from "next/image";

export function WorkforceTable({ users }: { users: WorkForceUserProps[] | null }) {
  const router = useRouter();

  return (
    <div className="bg-grayscale-surface-white">
      {
        users ?
          <ReusableTable
            data={users}
            excludeColumns={["avatar"]}
            columns={[
              {
                key: "employeeName",
                header: "Employee Name",
                sortable: false,
                render: (value, row) => (
                  <div className="flex items-center gap-3">
                    <Image
                      src={row.avatar || "/_static/40x40.svg"}
                      width={32}
                      height={32}
                      alt={value}
                      className="size-8 rounded-full object-cover"
                    />
                    <span className="font-medium">{value}</span>
                  </div>
                ),
              },
              { key: "workNumber", header: "Work No." },
              { key: "phone", header: "Mobile No." },
            ]}
            onRowClick={(user) => router.push(`/admin/workforce/${user.id}`)}
          /> :
          <EmptyState title="No workforce found" description="User created worforce will be visible here" icon="clock4" />
      }
    </div>
  );
}

export function WorkforceHeaderAction() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(`/admin/workforce/addEmployee`);
  };

  return (
    <div
      className="flex cursor-pointer items-center gap-2 space-x-1 text-primary-text-label-1"
      onClick={handleNavigation}
    >
      <Plus height={20} />
      <span>Add New Player</span>
    </div>
  );
}

