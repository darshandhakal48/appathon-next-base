import { JobTrendsMonthly } from "@/config/db";
import JobTrendsChart from "@/components/dashboard/job-trends-chart";

const weekly = JobTrendsMonthly.map((m) => ({
  label: m.label,
  applications: Math.round(m.applications / 4),
  hired: Math.round(m.hired / 4),
  rejected: Math.round(m.rejected / 4),
}));

const daily = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d, i) => ({
  label: d,
  applications: 300 + i * 20,
  hired: 200 + (i % 3) * 15,
  rejected: 150 + (i % 4) * 18,
}));

function ApplicantsOverview() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      {/* <JobTrendsChart
        data={{ daily, weekly, monthly: JobTrendsMonthly }}
        defaultView="monthly"
      /> */}
      <JobTrendsChart monthly={JobTrendsMonthly} defaultView="monthly" />
    </main>
  );
}

export default ApplicantsOverview;
