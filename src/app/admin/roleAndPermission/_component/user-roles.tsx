import { UserRolesProps } from "@/lib/type";
import { Ellipsis } from "lucide-react";
import React from "react";

function UserRoles({ role }: { role: UserRolesProps }) {
    return (
        <>
            <div className="border-[1px] rounded-sm border-grayscale-border-lighter p-2 shadow-sm">
                <div className="flex justify-end">
                    <span>
                        <Ellipsis className="text-grayscale-text-subtitle" />
                    </span>
                </div>
                <div className="flex flex-col gap-4 px-2">
                    <h2 className="text-grayscale-text-title font-semibold text-base">
                        {role.role}
                    </h2>
                    <p className="text-base font-normal text-grayscale-text-body">
                        Assigned to{" "}
                        <span className="text-primary-surface-default">
                            {role.assign}
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default UserRoles;
