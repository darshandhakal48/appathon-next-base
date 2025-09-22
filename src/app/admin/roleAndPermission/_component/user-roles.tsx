import React from "react";
import { useRouter } from "next/navigation";
import { Ellipsis } from "lucide-react";

import { UserRolesProps } from "@/lib/type";

function UserRoles({ role }: { role: UserRolesProps }) {
  const router = useRouter();

  const handleNavigation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    router.push("/admin/roleAndPermission/roleList");
  };

  return (
    <>
      <div
        className="bg-grayscale-surface-white border-grayscale-border-lighter cursor-pointer rounded-sm border-[1px] p-2 shadow-sm"
        onClick={handleNavigation}
      >
        <div className="flex justify-end">
          <span>
            <Ellipsis className="text-grayscale-text-subtitle" />
          </span>
        </div>
        <div className="flex flex-col gap-4 px-2">
          <h2 className="text-grayscale-text-title text-base font-semibold">
            {role.role}
          </h2>
          <p className="text-grayscale-text-body text-base font-normal">
            Assigned to{" "}
            <span className="text-primary-surface-default">{role.assign}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default UserRoles;
