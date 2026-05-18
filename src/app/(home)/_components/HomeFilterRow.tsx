"use client";

import { Suspense, useState } from "react";
import FilterChip from "@/components/FilterChips/FilterChip";
import SortModal from "@/components/Modal/SortModal";
import useSearchParam from "@/hooks/useSearchParam";
import { DEFAULT_HOME_SORT, HOME_SORT_OPTIONS } from "../_constants/sort";

// useSearchParams 사용으로 Suspense 경계 분리
function HomeFilterRowInner() {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const { value: sortValue, setValue: setSortValue } = useSearchParam(
    "sort",
    DEFAULT_HOME_SORT,
  );

  const selectedLabel =
    HOME_SORT_OPTIONS.find((o) => o.value === sortValue)?.label ??
    HOME_SORT_OPTIONS[0].label;

  return (
    <>
      <ul className="flex gap-2 inner-padding my-3">
        <FilterChip
          label={selectedLabel}
          iconUrl="/img/arrow_down.svg"
          isActive
          onClick={() => setIsSortOpen(true)}
        />
        <FilterChip label="날짜 · 시간" />
        <FilterChip label="인원" />
      </ul>
      <SortModal
        isOpen={isSortOpen}
        onClose={() => setIsSortOpen(false)}
        title="정렬"
        options={HOME_SORT_OPTIONS}
        selectedValue={sortValue}
        onSelect={setSortValue}
      />
    </>
  );
}

function HomeFilterRow() {
  return (
    <Suspense fallback={<div className="h-[50px]" />}>
      <HomeFilterRowInner />
    </Suspense>
  );
}

export default HomeFilterRow;
