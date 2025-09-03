// components/dashboard/job-trends-chart.tsx
"use client";

import * as React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { TrendPoint } from "@/config/db";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// one point row
export type Point = {
  label: string;
  applications: number;
  hired: number;
  rejected: number;
};

// NEW props: only monthly required
type Props = {
  monthly: TrendPoint[];
  defaultView?: "daily" | "weekly" | "monthly";
  className?: string;
};

export default function JobTrendsChart({
  monthly,
  defaultView = "monthly",
  className,
}: Props) {
  // derive weekly/daily here so callers don't have to
  const weekly = React.useMemo(
    () =>
      monthly.map((m) => ({
        label: m.label,
        applications: Math.round(m.applications / 4),
        hired: Math.round(m.hired / 4),
        rejected: Math.round(m.rejected / 4),
      })),
    [monthly],
  );
  console.log("weekly ==> ", weekly);

  const daily = React.useMemo(
    () =>
      ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d, i) => ({
        label: d,
        applications: 300 + i * 20,
        hired: 200 + (i % 3) * 15,
        rejected: 150 + (i % 4) * 18,
      })),
    [],
  );

  console.log("Daily ==> ", daily);

  const data = { daily, weekly, monthly };
  console.log("all data ==> ", data);
  const [view, setView] = React.useState<keyof typeof data>(defaultView);
  const chartData = data[view];

  return (
    <div className={`space-y-4npm ru ${className}`}>
      <p className="text-grayscale-text-title text-base font-normal">
        Application Overview
      </p>
      <Tabs
        value={view}
        onValueChange={(v) => setView(v as keyof typeof data)} //
        className="w-full"
      >
        <div className="mb-4 flex justify-center">
          <TabsList>
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>
        </div>
      </Tabs>

      <div className="h-[360px] w-full rounded-xl border bg-white p-4">
        <ResponsiveContainer>
          <LineChart
            data={chartData}
            margin={{ top: 8, right: 28, left: 8, bottom: 0 }}
          >
            <CartesianGrid stroke="#E5E7EB" vertical={false} />
            <XAxis
              dataKey="label"
              tick={{ fill: "#64748B", fontSize: 12 }}
              axisLine={{ stroke: "#CBD5E1" }}
              tickLine={{ stroke: "#CBD5E1" }}
            />
            <YAxis
              orientation="right"
              width={40}
              tick={{ fill: "#64748B", fontSize: 12 }}
              axisLine={{ stroke: "#CBD5E1" }}
              tickLine={{ stroke: "#CBD5E1" }}
            />
            <Tooltip />
            <Legend
              verticalAlign="bottom"
              align="left"
              wrapperStyle={{ paddingTop: 8 }}
            />
            <Line
              type="monotone"
              dataKey="applications"
              name="No. of Applications"
              stroke="#7C3AED"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="hired"
              name="No. of Hired"
              stroke="#10B981"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="rejected"
              name="No. of Rejected"
              stroke="#EF4444"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
