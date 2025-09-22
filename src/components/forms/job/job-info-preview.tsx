"use client";

import Link from "next/link";
import {
  BadgeCheck,
  Briefcase,
  Building2,
  CheckCircle2,
  CircleDashed,
  ClipboardList,
  DollarSign,
  GraduationCap,
  MapPin,
  Timer,
  UserCheck,
  X,
  XCircle,
} from "lucide-react";

import { useMultiStepForm } from "@/hooks/use-multi-step-viewer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// -----------------------------------------------------------------------------
// Demo data (replace with your form values / server data)
// -----------------------------------------------------------------------------
type PipelineStage = {
  label: string;
  icon: React.ReactNode;
  value?: string | number | null;
};
type KV = { label: string; value: string | React.ReactNode };

type JobPreviewData = {
  company: { name: string; href?: string };
  title: string;
  pipeline: PipelineStage[];
  fields: KV[]; // two-column key/value grid
  skills: string[];
  description: string;
  requirements: string[];
  cta?: { onEdit?: () => void; onProceed?: () => void };
};

const demoData: JobPreviewData = {
  company: { name: "Rays IT Solutions", href: "#" },
  title: "Software Engineer",
  pipeline: [
    { label: "Applied", icon: <ClipboardList className="h-4 w-4" /> },
    { label: "Screening", icon: <CircleDashed className="h-4 w-4" /> },
    { label: "Interviewing", icon: <UserCheck className="h-4 w-4" /> },
    { label: "Hired", icon: <CheckCircle2 className="h-4 w-4" /> },
    { label: "Hired", icon: <CheckCircle2 className="h-4 w-4" /> }, // mirrors screenshot
    { label: "Rejected", icon: <XCircle className="h-4 w-4" /> },
  ],
  fields: [
    { label: "Job Type", value: "In-Office" },
    { label: "Employment Type", value: "Full-Time" },
    { label: "Industry Type", value: "IT" },
    {
      label: "Location",
      value: (
        <span className="inline-flex items-center gap-1">
          <MapPin className="h-3.5 w-3.5" /> 45 Street Richardson, Dallas, TX
        </span>
      ),
    },
    { label: "Client Name", value: "Rays IT" },
    {
      label: "Salary",
      value: (
        <span className="inline-flex items-center gap-1">
          <DollarSign className="h-3.5 w-3.5" />
          USD 500–600
        </span>
      ),
    },
    { label: "Work Experience", value: "Mid-level" },
    {
      label: "Education",
      value: (
        <span className="inline-flex items-center gap-1">
          <GraduationCap className="h-3.5 w-3.5" />
          Bachelor&apos;s Degree
        </span>
      ),
    },
    { label: "Created on", value: "16 July, 2025" },
    {
      label: "Deadline",
      value: (
        <span className="inline-flex items-center gap-2">
          12 Aug, 2025
          <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
            Expires in 4 days
          </Badge>
        </span>
      ),
    },
    { label: "Updated by", value: "Nathaniel Brooks" },
  ],
  skills: [
    "Statistical Insights",
    "Predictive Analytics",
    "Graphical Data Representation",
    "Quantitative Analysis",
    "Exploratory Data Analysis",
    "Data Mining Techniques",
    "Descriptive Statistics",
    "Interactive Dashboards",
    "Data-Driven Decision Making",
  ],
  description:
    "We are seeking a passionate and experienced HR Manager to join our growing team. The ideal candidate will be responsible for managing the full HR lifecycle, including recruitment, employee engagement, performance management, and compliance. You will play a key role in building a positive company culture, driving employee satisfaction, and supporting organizational growth.",
  requirements: [
    "Bachelor’s degree in Human Resources, Business Administration, or related field.",
    "5+ years of experience in HR management roles.",
    "Strong knowledge of employment laws and HR best practices.",
    "Excellent communication, leadership, and interpersonal skills.",
    "Ability to handle confidential information with discretion.",
  ],
};

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------
export default function JobPreview({ onNext }: { onNext: () => void }) {
  const data = demoData;

  return (
    <Card className="shadow-sm">
      <CardHeader className="space-y-3">
        {/* Company */}
        <div className="text-primary inline-flex items-center gap-2 text-sm">
          <Building2 className="h-4 w-4" />
          {data.company.href ? (
            <Link href={data.company.href} className="hover:underline">
              {data.company.name}
            </Link>
          ) : (
            <span>{data.company.name}</span>
          )}
        </div>

        {/* Title */}
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="text-2xl leading-tight font-semibold">{data.title}</h2>
          <Badge variant="secondary" className="inline-flex items-center gap-1">
            <Briefcase className="h-3.5 w-3.5" />
            Open
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-8">
        {/* Pipeline */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {data.pipeline.map((stage) => (
            <div
              key={stage.label + String(stage.value ?? "-")}
              className="bg-card rounded-lg border p-4"
            >
              <div className="bg-primary/10 text-primary mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full">
                {stage.icon}
              </div>
              <div className="text-sm font-medium">{stage.label}</div>
              <div className="text-muted-foreground text-sm">
                {stage.value ?? "-"}
              </div>
            </div>
          ))}
        </div>

        {/* Two-column K/V grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-2">
          {data.fields.map((item) => (
            <div
              key={item.label}
              className="grid grid-cols-[140px,1fr] items-start gap-2"
            >
              <div className="text-muted-foreground text-xs font-medium">
                {item.label}
              </div>
              <div className="text-sm">{item.value}</div>
            </div>
          ))}
        </div>

        <Separator />

        {/* Skills */}
        <div className="space-y-3">
          <div className="text-sm font-medium">Skills</div>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((s) => (
              <Badge key={s} variant="outline" className="rounded-md">
                {s}
              </Badge>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <div className="text-sm font-medium">Job Description</div>
          <p className="text-muted-foreground text-sm leading-6">
            {data.description}
          </p>
        </div>

        {/* Requirements */}
        <div className="space-y-3">
          <div className="text-sm font-medium">Requirements</div>
          <div className="bg-muted/20 rounded-md border p-4">
            <ul className="text-muted-foreground list-disc space-y-1 pl-5 text-sm">
              {data.requirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between gap-3">
        <div className="text-muted-foreground text-xs">
          {/* subtle footer note if needed */}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={data.cta?.onEdit}>
            Edit
          </Button>
          <Button
            className="text-white shadow-sm hover:opacity-90"
            onClick={onNext}
          >
            Proceed
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
