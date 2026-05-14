"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

function useSearchParam(paramKey: string, defaultValue: string) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const value = searchParams.get(paramKey) ?? defaultValue;

  const setValue = useCallback(
    (newValue: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(paramKey, newValue);
      router.replace(`${pathname}?${params.toString()}`);
    },
    [searchParams, pathname, router, paramKey],
  );

  return { value, setValue };
}

export default useSearchParam;
