"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useApiState } from "@/features/api/use-api-state";
import {
  ChevronLeft,
  ChevronRight,
  Ellipsis,
  MapPin,
  Plus,
  Search,
  X,
} from "lucide-react";

import {
  DateRangeType,
  FilterState,
  Job,
  JobCardProps,
  JobStatus,
  JobStatusProp,
} from "@/lib/type";
import { filterJobs, totalPages } from "@/lib/utils";
import { useApiQuery } from "@/hooks/use-api";
import useCustomPagination from "@/hooks/use-custom-pagination";
import DashboardPageHeader from "@/components/dashboard/page-header";
import CustomPagination from "@/components/shared/custom-pagination";
import { EmptyState } from "@/components/shared/empty-state";

import { DateRangePicker } from "./dateRangePicker";
import JobCard from "./jobCard";
import { MoreFilters } from "./moreFilters";
import SingleJobDetails from "./singleJobDetails";
import { StatusSelect } from "./statusSelect";

export function AdminJobPostingClient({
  jobs,
}: {
  jobs: JobCardProps[] | null;
}) {
  const [searchJobTitle, setSearchJobTitle] = useState<string>("");
  const [searchCityState, setSearchCityState] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<JobStatusProp>("active");
  const [dateRange, setDateRange] = useState<DateRangeType>({
    from: null,
    to: null,
  });
  const [filters, setFilters] = useState<FilterState>({
    workExperience: [],
    industryType: [],
    employeeType: [],
    jobType: [],
    educationLevel: [],
    salaryRange: { min: 0, max: 0 },
    uploadedBy: [],
  });

  // console.log("active state ==> ", selectedStatus);
  // console.log("date range ==> ", dateRange);
  // console.log("More Filters ==> ", filters);

  // handle pagination
  const { data, PaginationComponent } = useCustomPagination<JobCardProps[]>({
    key: "job",
    path: "/superadmin-jobposting",
    totalPages: totalPages,
    search_title_skil_company_id: searchJobTitle,
    search_city_state: searchCityState,
  });

  // handle showing job deatils at the right side when clicked
  const [showJobDetails, setShowJobDetails] = useState<boolean>(false);
  const [activeJobDetails, setActiveJobDetails] = useState<
    JobCardProps | undefined
  >(undefined);

  const handleActiveJobDetails = (id: number) => {
    const activeJob = data?.find((job) => job["JobId"] == id);
    setActiveJobDetails(activeJob);
    setShowJobDetails(true);
  };

  // console.log(`job prop data ==> `, data);

  const filteredJobs = filterJobs(
    data,
    searchJobTitle,
    searchCityState,
    selectedStatus,
    dateRange,
    filters,
  );
  console.log("Filtered jobs ==> ", data);

  return (
    <>
      <DashboardPageHeader title="Job Posting" className="justify-start">
        <AdminJobPostingHeaderAction
          searchJobTitle={searchJobTitle}
          setSearchJobTitle={setSearchJobTitle}
          searchCityState={searchCityState}
          setSearchCityState={setSearchCityState}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          dateRange={dateRange}
          setDateRange={setDateRange}
          filters={filters}
          setFilters={setFilters}
        />
      </DashboardPageHeader>

      {filteredJobs ? (
        <div className="p-4 md:p-6">
          <div
            className={`no-scrollbar min-h-[76vh] overflow-y-auto ${showJobDetails ? "grid grid-cols-4 gap-4" : ""}`}
          >
            <div
              className={`grid grid-cols-1 gap-4 ${showJobDetails ? "" : "md:grid-cols-2 lg:grid-cols-3"}`}
            >
              {filteredJobs.map((data) => (
                <JobCard
                  job={data}
                  key={data["JobId"]}
                  showJobDetails={showJobDetails}
                  handleActiveJobDetails={handleActiveJobDetails}
                />
              ))}
            </div>

            {/* single job  details */}
            {showJobDetails ? (
              <>
                <SingleJobDetails
                  setShowJobDetails={setShowJobDetails}
                  activeJobDetails={activeJobDetails}
                />
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <EmptyState
          title="No Jobs Available"
          icon="clock4"
          description="User created jobs will be available here"
          className="bg-grayscale-surface-white min-h-[70vh] w-full shadow-sm"
        />
      )}
      <div className="mt-6">
        <PaginationComponent />
      </div>
    </>
  );
}

export interface IHandleJobPostingHeaderProps {
  searchJobTitle: string;
  setSearchJobTitle: React.Dispatch<React.SetStateAction<string>>;
  searchCityState: string;
  setSearchCityState: React.Dispatch<React.SetStateAction<string>>;
  selectedStatus: string;
  setSelectedStatus: React.Dispatch<React.SetStateAction<JobStatusProp>>;
  dateRange: DateRangeType;
  setDateRange: React.Dispatch<React.SetStateAction<DateRangeType>>;
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

export function AdminJobPostingHeaderAction({
  searchJobTitle,
  setSearchJobTitle,
  searchCityState,
  setSearchCityState,
  selectedStatus,
  setSelectedStatus,
  dateRange,
  setDateRange,
  filters,
  setFilters,
}: IHandleJobPostingHeaderProps) {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(`/admin/jobposting/createNewJob`);
  };

  // console.log("search 1 ==> ", searchJobTitle);
  // console.log("search  2==> ", searchCityState);
  return (
    <div className="flex-1">
      <div className="flex w-full items-center justify-between">
        {/* left side */}
        <div className="flex items-center gap-2.5">
          <div className="border-grayscale-border-lighter text-grayscale-text-subtitle flex items-center gap-2 rounded-full border-1 px-4 py-1.5">
            <Search height={16} width={16} />
            <input
              className="text-sm font-normal outline-none"
              placeholder="Title, skill, id or company"
              type="text"
              value={searchJobTitle}
              onChange={(e) => {
                setSearchJobTitle(e.target.value);
              }}
            />
          </div>

          <div className="border-grayscale-border-lighter text-grayscale-text-subtitle flex items-center gap-2 rounded-full border-1 px-4 py-1.5">
            <MapPin height={16} width={16} />
            <input
              className="text-sm font-normal outline-none"
              placeholder="City, state, or zip code"
              type="text"
              value={searchCityState}
              onChange={(e) => {
                setSearchCityState(e.target.value);
              }}
            />
          </div>

          <StatusSelect
            value={selectedStatus}
            onValueChange={setSelectedStatus}
          />

          <DateRangePicker value={dateRange} onValueChange={setDateRange} />

          <MoreFilters value={filters} onValueChange={setFilters} />
        </div>

        {/* right side */}
        <div
          className="text-primary-text-label-1 flex cursor-pointer items-center gap-2 space-x-1"
          onClick={handleNavigation}
        >
          <Plus height={20} />
          <span>Create New Job Posting</span>
        </div>
      </div>
    </div>
  );
}
