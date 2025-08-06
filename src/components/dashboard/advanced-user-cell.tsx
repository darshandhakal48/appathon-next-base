import { Badge } from "@/components/ui/badge";
import { UserAvatar } from "./user-avatar";

interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    isOnline?: boolean;
    role?: string;
}

interface AdvancedUserCellProps {
    user: User;
    showEmail?: boolean;
    showOnlineStatus?: boolean;
    showRole?: boolean;
    avatarSize?: "sm" | "md" | "lg";
}

export function AdvancedUserCell({
    user,
    showEmail = false,
    showOnlineStatus = false,
    showRole = false,
    avatarSize = "md",
}: AdvancedUserCellProps) {
    return (
        <div className="flex items-center gap-3">
            <div className="relative">
                <UserAvatar
                    name={user.name}
                    avatar={user.avatar}
                    size={avatarSize}
                    showName={false}
                />
                {showOnlineStatus && (
                    <div
                        className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white ${
                            user.isOnline ? "bg-green-500" : "bg-gray-400"
                        }`}
                    />
                )}
            </div>
            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <span className="font-medium">{user.name}</span>
                    {showRole && user.role && (
                        <Badge variant="outline" className="text-xs">
                            {user.role}
                        </Badge>
                    )}
                </div>
                {showEmail && (
                    <span className="text-sm text-muted-foreground">
                        {user.email}
                    </span>
                )}
            </div>
        </div>
    );
}
