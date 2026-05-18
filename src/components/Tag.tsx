import React from "react";

type TagVariant = "primary" | "primary-sub" | "gray" | "gray-light";

const variantStyles: Record<TagVariant, string> = {
  primary: "bg-primary text-white",
  "primary-sub": "bg-primary-sub text-primary",
  gray: "bg-gray-dark text-white",
  "gray-light": "bg-gray-bg text-gray-dark",
};

export interface TagProps {
  label: string;
  variant?: TagVariant;
}

function Tag({ label, variant = "gray-light" }: TagProps) {
  return (
    <span
      className={`shrink-0 text-[11px] font-normal px-1 py-0.75 rounded-b-sm leading-none ${variantStyles[variant]}`}
    >
      {label}
    </span>
  );
}

export default Tag;
