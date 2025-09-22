"use client";

import { useState } from "react";
import { Filter, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterState {
  workExperience: string[];
  industryType: string[];
  employeeType: string[];
  jobType: string[];
  educationLevel: string[];
  salaryRange: { min: number; max: number };
  uploadedBy: string[];
}

interface MoreFiltersProps {
  value: FilterState;
  onValueChange: (filters: FilterState) => void;
}

const defaultFilters: FilterState = {
  workExperience: [],
  industryType: [],
  employeeType: [],
  jobType: [],
  educationLevel: [],
  salaryRange: { min: 0, max: 200000 },
  uploadedBy: [],
};

const workExperienceOptions = [
  "Entry Level",
  "Mid Level",
  "Senior Level",
  "Executive",
  "Intern",
];

const industryTypeOptions = [
  "Engineering",
  "Product",
  "Design",
  "Marketing",
  "Sales",
  "Operations",
  "HR",
  "Finance",
];

const employeeTypeOptions = [
  "Full-time",
  "Part-time",
  "Contract",
  "Freelancer/Consultant",
  "Temporary Employee",
  "Intern/Trainee",
];

const jobTypeOptions = ["On-site", "Remote", "Hybrid", "Field"];

const educationLevelOptions = [
  "High School",
  "Associate Degree",
  "Bachelor",
  "Master",
  "PhD",
  "Professional Certification",
];

const uploadedByOptions = [
  "HR Department",
  "Hiring Manager",
  "Recruiter",
  "Team Lead",
  "CEO",
  "External Agency",
];

export function MoreFilters({ value, onValueChange }: MoreFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckboxChange = (
    category: keyof FilterState,
    option: string,
    checked: boolean,
  ) => {
    if (category === "salaryRange") return;

    const currentArray = value[category] as string[];
    const newArray = checked
      ? [...currentArray, option]
      : currentArray.filter((item) => item !== option);

    onValueChange({
      ...value,
      [category]: newArray,
    });
  };

  const handleSalaryChange = (type: "min" | "max", newValue: number) => {
    onValueChange({
      ...value,
      salaryRange: {
        ...value.salaryRange,
        [type]: newValue,
      },
    });
  };

  const handleUploadedByChange = (selectedValue: string) => {
    const isSelected = value.uploadedBy.includes(selectedValue);
    const newArray = isSelected
      ? value.uploadedBy.filter((item) => item !== selectedValue)
      : [...value.uploadedBy, selectedValue];

    onValueChange({
      ...value,
      uploadedBy: newArray,
    });
  };

  const handleReset = () => {
    onValueChange(defaultFilters);
  };

  const handleApplyFilters = () => {
    setIsOpen(false);

    // Filters are already tracked in state via onValueChange
  };

  const FilterSection = ({
    title,
    options,
    category,
  }: {
    title: string;
    options: string[];
    category: keyof FilterState;
  }) => (
    <div className="space-y-3">
      <h4 className="text-foreground font-medium">{title}</h4>
      <div className="space-y-2">
        {options.map((option) => (
          <div key={option} className="flex items-center space-x-2">
            <Checkbox
              id={`${category}-${option}`}
              checked={(value[category] as string[]).includes(option)}
              onCheckedChange={(checked) =>
                handleCheckboxChange(category, option, checked as boolean)
              }
            />
            <label
              htmlFor={`${category}-${option}`}
              className="text-foreground cursor-pointer text-sm"
            >
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        // className="flex items-center gap-2"
        className="border-grayscale-border-lighter text-grayscale-text-subtitle flex items-center gap-2 rounded-full border-1 px-4 py-1.5 text-sm font-normal"
      >
        <Filter className="h-3 w-3" />
        More Filters
      </Button>

      {isOpen && (
        <div className="bg-grayscale-surface-white border-border absolute top-full right-0 z-[999] mt-2 w-80 rounded-lg border shadow-lg">
          {/* Header */}
          <div className="border-border flex items-center justify-between border-b p-4">
            <h3 className="text-foreground font-semibold">Apply Filters</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Scrollable Content */}
          <div className="max-h-96 space-y-6 overflow-y-auto p-4">
            <FilterSection
              title="Work Experience"
              options={workExperienceOptions}
              category="workExperience"
            />

            <FilterSection
              title="Industry Type"
              options={industryTypeOptions}
              category="industryType"
            />

            <FilterSection
              title="Employee Type"
              options={employeeTypeOptions}
              category="employeeType"
            />

            <FilterSection
              title="Job Type"
              options={jobTypeOptions}
              category="jobType"
            />

            <FilterSection
              title="Education Level"
              options={educationLevelOptions}
              category="educationLevel"
            />

            {/* Salary Range */}
            <div className="space-y-3">
              <h4 className="text-foreground font-medium">Salary Range</h4>
              <div className="flex items-center space-x-2">
                <div className="flex-1">
                  <Input
                    type="number"
                    placeholder="Min"
                    value={value.salaryRange.min}
                    onChange={(e) =>
                      handleSalaryChange(
                        "min",
                        Number.parseInt(e.target.value) || 0,
                      )
                    }
                    className="text-sm"
                  />
                </div>
                <span className="text-muted-foreground">-</span>
                <div className="flex-1">
                  <Input
                    type="number"
                    placeholder="Max"
                    value={value.salaryRange.max}
                    onChange={(e) =>
                      handleSalaryChange("max", Number.parseInt(e.target.value))
                    }
                    className="text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Uploaded By */}
            <div className="space-y-3">
              <h4 className="text-foreground font-medium">Uploaded by</h4>
              <Select onValueChange={handleUploadedByChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select who uploaded the job post" />
                </SelectTrigger>
                <SelectContent className="bg-grayscale-surface-white z-[9999]">
                  {uploadedByOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          checked={value.uploadedBy.includes(option)}
                          // readOnly
                        />
                        <span>{option}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {value.uploadedBy.length > 0 && (
                <div className="text-muted-foreground text-xs">
                  Selected: {value.uploadedBy.join(", ")}
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="border-border flex items-center justify-between border-t p-4">
            <Button variant="outline" onClick={handleReset}>
              Reset
            </Button>
            <Button onClick={handleApplyFilters}>Apply Filter</Button>
          </div>
        </div>
      )}
    </div>
  );
}
