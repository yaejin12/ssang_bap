"use client";

import useSearchParam from "@/hooks/useSearchParam";
import { Suspense } from "react";

const tabsLayoutStyle =
  "w-full h-10 flex items-center inner-padding border-b border-divider-bg";

interface TabsProps {
  tabs: string[];
  paramKey?: string;
}

function TabsContainer({ tabs, paramKey = "tab" }: TabsProps) {
  const { value: activeTab, setValue: handleTabChange } = useSearchParam(
    paramKey,
    tabs[0],
  );

  return (
    <ul className={tabsLayoutStyle}>
      {tabs.map((tab) => (
        <li
          key={tab}
          className={`flex-1 flex-center text-center text-sm cursor-pointer h-full ${
            tab === activeTab
              ? "font-bold border-b-2 border-foreground"
              : "font-medium text-gray"
          }`}
        >
          <button
            className="w-full h-full"
            onClick={() => handleTabChange(tab)}
          >
            {tab}
          </button>
        </li>
      ))}
    </ul>
  );
}

function Tabs(props: TabsProps) {
  return (
    <Suspense fallback={<div className={tabsLayoutStyle} />}>
      <TabsContainer {...props} />
    </Suspense>
  );
}

export default Tabs;
