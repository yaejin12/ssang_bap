import Image from "next/image";
import { ButtonHTMLAttributes } from "react";

export interface FilterChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  iconUrl?: string;
  isActive?: boolean;
}

function FilterChip({ label, iconUrl, isActive, ...props }: FilterChipProps) {
  return (
    <li>
      <button
        {...props}
        aria-pressed={isActive}
        className={`text-[13px] flex-center px-3.5 py-1.75 rounded-full font-medium  gap-1.25 border ${isActive ? "border-foreground font-semibold text-foreground" : "border-line text-gray-dark"}`}
      >
        {label}
        {iconUrl && (
          <Image
            src={iconUrl}
            alt=""
            width={9}
            height={9}
            className="object-contain"
          />
        )}
      </button>
    </li>
  );
}

export default FilterChip;
