import type { SortOption } from "@/types/sort";

export const HOME_SORT_OPTIONS: SortOption[] = [
  { label: "최신순", value: "latest" },
  { label: "오래된순", value: "oldest" },
  { label: "인기순", value: "popular" },
  { label: "모집임박순", value: "deadline" },
];

export const DEFAULT_HOME_SORT = HOME_SORT_OPTIONS[0].value;
