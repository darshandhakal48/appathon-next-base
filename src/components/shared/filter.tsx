import { IHandleJobPostingHeaderProps } from "@/lib/type";
import { MapPin, Search } from "lucide-react";
import { useRouter } from "next/router";


export function HeaderFilter({
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
          <div className="flex items-center gap-2 rounded-full border-1 border-grayscale-border-lighter px-4 py-1.5 text-grayscale-text-subtitle">
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

          <div className="flex items-center gap-2 rounded-full border-1 border-grayscale-border-lighter px-4 py-1.5 text-grayscale-text-subtitle">
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
          className="flex cursor-pointer items-center gap-2 space-x-1 text-primary-text-label-1"
          onClick={handleNavigation}
        >
          <Plus height={20} />
          <span>Create New Job Posting</span>
        </div>
      </div>
    </div>
  );
}
