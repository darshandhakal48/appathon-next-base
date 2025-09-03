"use client";

import * as React from "react";
import {
  Cell,
  Funnel,
  FunnelChart,
  LabelList,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export type FunnelStage = {
  label: string;
  value: number;
  color?: string;
};

type Props = {
  stages: FunnelStage[];
  height?: number;
  className?: string;
  colors?: string[];
};

const DEFAULTS = [
  "#5B21B6",
  "#1E3A8A",
  "#7C3AED",
  "#0E7490",
  "#6D28D9",
  "#0B5C75",
];

export default function FunnelPipeline({
  stages,
  height = 380,
  className,
  colors = DEFAULTS,
}: Props) {
  const data = [...stages].sort((a, b) => b.value - a.value);

  return (
    <div className={className}>
      <div className="w-full space-y-4 rounded-xl bg-white">
        <p className="text-grayscale-text-title text-base font-normal">
          {" "}
          Tracking Application
        </p>
        <div style={{ width: "100%", height }}>
          <ResponsiveContainer>
            <FunnelChart>
              <Tooltip
                formatter={(v: any, _: any, item: any) => [
                  `${v}`,
                  item.payload.label,
                ]}
              />
              <Funnel data={data} dataKey="value" isAnimationActive={false}>
                {data.map((d, i) => (
                  <Cell key={i} fill={d.color ?? colors[i % colors.length]} />
                ))}

                <LabelList
                  dataKey="value"
                  position="center"
                  content={(props: any) => {
                    const { x, y, width, height, value, index } = props;
                    if (
                      x == null ||
                      y == null ||
                      width == null ||
                      height == null
                    )
                      return null;

                    const cx = Number(x) + Number(width) / 2;
                    const cy = Number(y) + Number(height) / 2;

                    const stageLabel = data[index]?.label ?? "";

                    return (
                      <text
                        x={cx}
                        y={cy}
                        textAnchor="middle"
                        pointerEvents="none"
                        fill="#fff"
                      >
                        {/* labels */}
                        <tspan
                          x={cx}
                          dy="-0.6em"
                          fontWeight={600}
                          fontSize={12}
                        >
                          {stageLabel}
                        </tspan>
                        {/* number of applicants */}
                        <tspan x={cx} dy="1.4em" fontWeight={800} fontSize={16}>
                          {value}
                        </tspan>
                      </text>
                    );
                  }}
                />
              </Funnel>
            </FunnelChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
