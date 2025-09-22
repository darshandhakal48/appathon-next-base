import React from "react";
import { ArrowDown } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianAxis,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Screening",
    pv: 20,
    amt: 2400,
  },
  {
    name: "Interview",
    pv: 30,
    amt: 2210,
  },
  {
    name: "Offer",
    pv: 40,
    amt: 2290,
  },
  {
    name: "Acceptance",
    pv: 30,
    amt: 2000,
  },
];

function TimeToHireBarChart() {
  return (
    <div>
      <p className="text-grayscale-text-title text-base font-normal">
        Time to Hire
      </p>
      <ResponsiveContainer height={300} width={500}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 40,
            bottom: 5,
          }}
          layout="vertical"
          barSize={28}
        >
          <CartesianGrid horizontal={false} color="#CBD5E1" />
          <XAxis type="number" axisLine={false} tickLine={false} />
          <YAxis
            dataKey="name"
            type="category"
            axisLine={{ stroke: "#CBD5E1" }}
            tickLine={false}
          />
          <Tooltip />
          <Bar
            dataKey="pv"
            fill="#6200EE"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
        </BarChart>
      </ResponsiveContainer>
      <div className="bg-secondary-surface-default-10 flex flex-col gap-4 p-6">
        <div>
          <p className="text-grayscale-text-title text-base font-normal">
            Average Time to Hire
          </p>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-primary-surface-default text-xl font-semibold">
            35 Days
          </span>
          <span className="text-error-surface-subtle flex items-center gap-2 text-sm font-normal">
            <span className="bg-error-surface-subtle flex h-4 w-4 items-center justify-center rounded-full">
              <ArrowDown className="text-grayscale-text-negative h-3" />
            </span>
            <span>5% drop from last month</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default TimeToHireBarChart;
