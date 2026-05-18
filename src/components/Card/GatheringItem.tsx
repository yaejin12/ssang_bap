import Image from "next/image";
import Tag from "../Tag";
import { formatDate } from "@/utils/date";

export interface GatheringCardProps {
  restaurantName: string;
  description: string;
  date: string;
  location: string;
  currentCount: number;
  maxCount: number;
  tags: string[];
  imageUrl?: string;
}

function GatheringItem({
  imageUrl,
  restaurantName,
  description,
  date,
  location,
  currentCount,
  maxCount,
  tags,
}: GatheringCardProps) {
  const { text: dateText, time, isRelative } = formatDate(date);

  return (
    <li className="flex justify-between bg-white w-full border-b border-divider-bg inner-padding py-3.5 gap-4.5">
      <div className="w-16.5 h-16.5 rounded-lg overflow-hidden relative bg-gray-bg flex-center">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="음식 사진"
            width={66}
            height={66}
            className="object-cover"
          />
        ) : (
          <span className="text-gray-mid text-[11px]">사진 없음</span>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-sub-title mb-1 leading-none truncate">
          {restaurantName}
        </h3>
        <p className="text-[13px] font-normal truncate text-gray-dark">
          {description}
        </p>

        <div className="mt-1.25 flex items-center gap-3">
          <div className="flex text-xs font-normal gap-1 items-center">
            <Image
              src="/img/users.svg"
              alt="참가인원"
              width={13}
              height={13}
              className="object-cover"
            />
            <span className="font-(family-name:--font-roboto) font-medium text-[13px] leading-none">
              {currentCount}/{maxCount}
            </span>
          </div>
          <div className="flex text-xs font-normal text-gray items-center gap-1">
            <Image
              src="/img/calendar.svg"
              alt="기간"
              width={13}
              height={13}
              className="object-cover"
            />
            {isRelative ? (
              <>
                {dateText}
                <span className="font-(family-name:--font-roboto) font-light">
                  {time}
                </span>
              </>
            ) : (
              <span className="font-(family-name:--font-roboto) font-light">
                {dateText} {time}
              </span>
            )}
            · {location}
          </div>
        </div>
      </div>
    </li>
  );
}

export default GatheringItem;
