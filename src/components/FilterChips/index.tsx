import FilterChip, { FilterChipProps } from "./FilterChip";
export interface FilterChipsProps {
  filterData: FilterChipProps[];
  className?: string;
}
function FilterChips({ className = "my-3", filterData }: FilterChipsProps) {
  return (
    <ul className={`flex gap-2 inner-padding ${className}`}>
      {filterData.map((chipData) => (
        <FilterChip key={chipData.label} {...chipData} />
      ))}
    </ul>
  );
}

export default FilterChips;
