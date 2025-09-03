import React, { Dispatch, SetStateAction } from "react";

import { CustomPagianationProps } from "@/lib/type";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

function CustomPagination({
  setActivePage,
  activePage,
  totalPages,
}: CustomPagianationProps) {
  const handlePrevious = () => {
    setActivePage((prev) => {
      if (prev === 1) {
        return 1;
      }
      return prev - 1;
    });
  };

  const handleNext = () => {
    setActivePage((prev) => {
      if (prev === totalPages) {
        return prev;
      }
      return prev + 1;
    });
  };

  const handleActivePage = (value: number) => {
    setActivePage(value);
  };

  return (
    <>
      <Pagination>
        <PaginationContent>
          <PaginationItem onClick={handlePrevious}>
            <PaginationPrevious />
          </PaginationItem>

          {activePage - 2 > 0 ? (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <></>
          )}

          {activePage - 1 === 0 ? (
            <></>
          ) : (
            <PaginationItem onClick={() => handleActivePage(activePage - 1)}>
              <PaginationLink>{activePage - 1}</PaginationLink>
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationLink isActive>{activePage}</PaginationLink>
          </PaginationItem>

          {activePage + 1 > totalPages ? (
            <></>
          ) : (
            <PaginationItem onClick={() => handleActivePage(activePage + 1)}>
              <PaginationLink>{activePage + 1}</PaginationLink>
            </PaginationItem>
          )}
          {activePage + 1 >= totalPages ? (
            <></>
          ) : (
            <>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            </>
          )}

          <PaginationItem onClick={handleNext}>
            <PaginationNext />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}

export default CustomPagination;
