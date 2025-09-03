import React, { useState } from "react";

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
}: CustomPaginationHookProps) {
  const [activePage, setActivePage] = useState<number>(1);
  const { data, isLoading, isError } = useApiQuery<T[]>(
    // key,
    [key, activePage],
    `${path}-page-${activePage}`,
  );
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
