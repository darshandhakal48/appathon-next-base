interface UserAvatarProps {
    name: string;
    avatar?: string;
    size?: "sm" | "md" | "lg";
    showName?: boolean;
    className?: string;
}

const sizeClasses = {
    sm: "w-6 h-6 text-xs",
    md: "w-8 h-8 text-sm",
    lg: "w-12 h-12 text-base",
};

export function UserAvatar({
    name,
    avatar,
    size = "md",
    showName = true,
    className = "",
}: UserAvatarProps) {
    const initials = name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);

    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <div
                className={`${sizeClasses[size]} rounded-full flex-shrink-0 overflow-hidden`}
            >
                {avatar ? (
                    <img
                        src={avatar || "/placeholder.svg"}
                        alt={`${name} avatar`}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium">
                        {initials}
                    </div>
                )}
            </div>
            {showName && <span className="font-medium">{name}</span>}
        </div>
    );
}
