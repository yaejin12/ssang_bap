import Input from "@/components/Input";
import HomeHeader from "./_components/HomeHeader";
import GatheringItem, {
  GatheringCardProps,
} from "@/components/Card/GatheringItem";
const MOCK_GATHERINGS: (GatheringCardProps & { id: number })[] = [
  {
    id: 1,
    imageUrl: "/img/food_1.png",
    restaurantName: "스시마루 합정점",
    description: "같이 스시 먹을 분 구해요~",
    date: "2026-05-15T18:30:00+09:00",
    location: "합정동",
    currentCount: 2,
    maxCount: 4,
    tags: ["일식", "스시"],
  },
  {
    id: 2,
    imageUrl: "/img/food_1.png",
    restaurantName: "금돼지식당",
    description: "강남에서 같이 삼겹살 먹을 분 모집해요!",
    date: "2026-05-16T12:00:00+09:00",
    location: "강남구",
    currentCount: 3,
    maxCount: 6,
    tags: ["한식", "고기"],
  },
  {
    id: 3,
    restaurantName: "한솥도시락 서초점",
    description: "점심 간단하게 같이 먹어요",
    date: "2026-05-20T12:00:00+09:00",
    location: "서초구",
    currentCount: 4,
    maxCount: 4,
    tags: ["한식", "도시락"],
  },
];

export default function Home() {
  return (
    <>
      <HomeHeader />
      <section className="mt-39.25">
        <ul className="w-full flex flex-col">
          {MOCK_GATHERINGS.map((gathering) => (
            <GatheringItem key={gathering.id} {...gathering} />
          ))}
        </ul>
      </section>
    </>
  );
}
