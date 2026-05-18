function GatheringItemSkeleton() {
  return (
    <li className="flex bg-white w-full border-b border-divider-bg inner-padding py-3.5 gap-4.5 animate-pulse">
      <div className="w-17.5 h-17.5 rounded-lg bg-gray-bg shrink-0" />
      <div className="flex-1 min-w-0 flex flex-col gap-2">
        <div className="h-3.5 w-2/3 rounded bg-gray-bg" />
        <div className="h-3 w-full rounded bg-gray-bg" />
        <div className="flex gap-2 mt-0.5">
          <div className="h-3 w-8 rounded bg-gray-bg" />
          <div className="h-3 w-24 rounded bg-gray-bg" />
          <div className="h-3 w-10 rounded bg-gray-bg" />
        </div>
      </div>
    </li>
  );
}

export default GatheringItemSkeleton;
