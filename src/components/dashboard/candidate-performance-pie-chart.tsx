import React from "react";
import { IHandleCandidatePieChart } from "@/features/api/type";
import {
  DefaultLegendContentProps,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
} from "recharts";

const data: IHandleCandidatePieChart[] = [
  {
    amt: 1400,
    fill: "#3B82F6",
    name: "Job Portals",
    uv: 31.47,
  },
  {
    amt: 720,
    fill: "#8B5CF6",
    name: "Employee Referrals",
    uv: 26.69,
  },
  {
    amt: 680,
    fill: "#1E40AF",
    name: "Direct Application",
    uv: 15.69,
  },
  {
    amt: 1700,
    fill: "#0EA5E9",
    name: "Social Media",
    uv: 8.22,
  },
];

function CandidatePerformancePieChart() {
  const renderLegend = (props: DefaultLegendContentProps) => {
    const { payload } = props;
    console.log("props ==> ", props);
    return (
      <ul className="mr-10 space-y-2">
        {payload?.map((entry, index: number) => (
          <li key={index} className="flex gap-2">
            <span
              className={`mt-1.5 h-3 w-3 rounded-full`}
              style={{ backgroundColor: entry.color }}
            ></span>
            <span className="flex flex-col">
              <span className="text-grayscale-text-title text-xs font-normal">
                {entry.value}
              </span>
              <span className="text-grayscale-text-caption text-xs font-normal">
                {(entry.payload as IHandleCandidatePieChart)?.uv}
              </span>
            </span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <p className="text-grayscale-text-title text-base font-normal">
        Candidate Source Performance
      </p>
      <div>
        <ResponsiveContainer height={350}>
          <PieChart
            data={data}
            height={350}
            margin={{
              bottom: 5,
              left: 5,
              right: 5,
              top: 5,
            }}
            syncMethod="index"
            width={500}
          >
            <Pie
              data={data}
              dataKey="uv"
              innerRadius={70}
              nameKey="name"
              outerRadius={160}
            >
              <Legend
                align="right"
                layout="vertical"
                verticalAlign="middle"
                // content={renderLegend}
                content={renderLegend}
              />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default CandidatePerformancePieChart;
