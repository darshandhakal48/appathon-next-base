import React from "react";

function BasicLayoutCard({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-background p-6 rounded-[6px] shadow-sm">
            {children}
        </div>
    );
}

export default BasicLayoutCard;
