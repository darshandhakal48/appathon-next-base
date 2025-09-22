import React, { useMemo, useState } from "react";

import {
  CustomPagianationProps,
  CustomPaginationHookProps,
  JobCardProps,
} from "@/lib/type";
import CustomPagination from "@/components/shared/custom-pagination";

import { useApiQuery } from "./use-api";

function useCustomPagination<T>({
  // activePage,
  // setActivePage,
  totalPages,
  key,
  path,
  search_title_skil_company_id,
  search_city_state,
  filterFn,
}: CustomPaginationHookProps<T>) {
  const [activePage, setActivePage] = useState<number>(1);

  const { data, isLoading, isError } = useApiQuery<T>({
    key: key,
    endpoint: `${path}-page-${activePage}`,
    activePage: activePage,
    search: search_title_skil_company_id,
    search_city_state: search_city_state,
  });

  const PaginationComponent = () => (
    <CustomPagination
      activePage={activePage}
      setActivePage={setActivePage}
      totalPages={totalPages}
    />
  );

  return { PaginationComponent, data, isLoading, isError };
}

export default useCustomPagination;
