"use client";
import { ChangeEvent, KeyboardEvent, useState } from "react";

function useSearchInput(onSearch: (value: string) => void) {
  const [value, setValue] = useState("");

  return {
    value,
    onChange: (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") onSearch(value);
    },
  };
}

export default useSearchInput;
