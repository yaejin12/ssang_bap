import IconButton from "@/components/Button/IconButton";
import HomeFilterRow from "./HomeFilterRow";
import Tabs from "@/components/Tabs";
import Image from "next/image";

// export interface HomeHeaderProps {}
function HomeHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-999 bg-white">
      {/* 상단 지역 */}
      <div className="inner-padding header-layout w-full flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Image
            src="/img/subtract.svg"
            alt="위치"
            width={14}
            height={14}
            className="object-contain"
          />
          <p className="text-base font-extrabold inline-flex items-center after-img after:w-2.25 after:h-2.25 after:bg-[url('/img/arrow_down.svg')]">
            가산동
          </p>
        </div>
        <IconButton icon="search" />
      </div>
      {/* 탭 */}
      <Tabs tabs={["전체", "모집중", "모집마감"]} />
      {/* 필터 */}
      <HomeFilterRow />
    </header>
  );
}

export default HomeHeader;
