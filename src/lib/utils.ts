import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { DateRangeType, FilterState, JobCardProps } from "./type";

export const totalPages = 10;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const normalize = (str?: string) =>
  str ? str.toLowerCase().replace(/\s+/g, "").replace("-", "") : "";

export const createShortName = (name: string = "PP") => {
  if (name.includes(" ")) {
    const profileName = name
      .split(" ")
      .map((name) => name[0])
      .join("");
    return profileName;
  }
  return name;
};

export function filterJobs(
  jobs: JobCardProps[] | undefined,
  searchJobTitle: string,
  searchCityState: string,
  selectedStatus: string,
  dateRange: DateRangeType,
  filters: FilterState,
): JobCardProps[] {
  if (!jobs) {
    return [];
  }

  return jobs.filter((job) => {
    // ----------------------
    // 1. Job Title / Client / ID
    // ----------------------
    if (searchJobTitle) {
      const searchValue = searchJobTitle.toLowerCase().trim();
      if (
        !job.JobTitle.toLowerCase().includes(searchValue) &&
        !job.ClientName.toLowerCase().includes(searchValue) &&
        !job.JobId.toString().includes(searchValue)
      ) {
        return false;
      }
    }

    // ----------------------
    // 2. City / State / Zip
    // ----------------------
    if (searchCityState) {
      const searchValue = searchCityState.toLowerCase().trim();
      if (
        !job.City.toLowerCase().includes(searchValue) &&
        !job.state.toLowerCase().includes(searchValue) &&
        !job.zipCode.toString().includes(searchValue)
      ) {
        return false;
      }
    }

    // ----------------------
    // 3. Status
    // ----------------------
    if (selectedStatus) {
      const statusMap: Record<string, string> = {
        open: "active",
        close: "close",
        pending: "pending",
        draft: "draft",
      };

      const jobStatus =
        statusMap[job.Status.toLowerCase().trim()] ||
        job.Status.toLowerCase().trim();

      const selected = selectedStatus.toLowerCase().trim();

      if (jobStatus !== selected) {
        return false;
      }
    }

    // ----------------------
    // 4. Date range
    // ----------------------
    if (dateRange.from && dateRange.to) {
      const jobDate = new Date(job.Date);
      if (
        jobDate < new Date(dateRange.from) ||
        jobDate > new Date(dateRange.to)
      ) {
        return false;
      }
    }

    // ----------------------
    // 5. Filters (arrays)
    // ----------------------
    // Work experience
    if (
      filters.workExperience.length > 0 &&
      !filters.workExperience.some(
        (exp) => normalize(exp) === normalize(job.workExperience),
      )
    ) {
      return false;
    }

    // Industry type
    if (
      filters.industryType.length > 0 &&
      !filters.industryType.some(
        (type) => normalize(type) === normalize(job.industryType),
      )
    ) {
      return false;
    }

    // Employee type
    if (
      filters.employeeType.length > 0 &&
      !filters.employeeType.some(
        (emp) => normalize(emp) === normalize(job.employeeType),
      )
    ) {
      return false;
    }

    // Job type
    if (
      filters.jobType.length > 0 &&
      !filters.jobType.some((jt) => normalize(jt) === normalize(job.type))
    ) {
      return false;
    }

    // Education level
    if (
      filters.educationLevel.length > 0 &&
      !filters.educationLevel.some(
        (edu) => normalize(edu) === normalize(job.educationLevel),
      )
    ) {
      return false;
    }

    // Uploaded by
    if (
      filters.uploadedBy.length > 0 &&
      !filters.uploadedBy.some((u) => normalize(u) === normalize(job.updatedBy))
    ) {
      return false;
    }

    // Salary range
    if (
      job.salary &&
      (job.salary < filters.salaryRange.min ||
        job.salary > filters.salaryRange.max)
    ) {
      return false;
    }

    // ✅ If all checks pass
    return true;
  });
}
