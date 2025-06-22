import React from "react";
import Card from "@/components/dashboard/card";

export default function CandidateDashboard() {
  return (
    <>
      {/* title */}
      <div className="bg-background border-1 p-4 bg">
        <span className="text-xl font-semibold">Dashboard</span>
      </div>

      {/* main section */}
      <div className="p-6 h-full">
        {/* cards */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}
