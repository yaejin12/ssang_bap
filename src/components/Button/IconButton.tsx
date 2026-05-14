import Image from "next/image";
import { ButtonHTMLAttributes } from "react";

const ICON_MAP = {
  search: { src: "/img/search.svg", alt: "검색" },
  heart: { src: "/img/heart.svg", alt: "찜하기" },
  back: { src: "/img/back.svg", alt: "뒤로가기" },
} as const;

type IconType = keyof typeof ICON_MAP;

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconType;
}

function IconButton({ icon, ...props }: IconButtonProps) {
  const { src, alt } = ICON_MAP[icon];

  return (
    <button
      className="w-5.5 h-5.5 flex items-center justify-center"
      aria-label={alt}
      {...props}
    >
      <Image
        src={src}
        alt={alt}
        width={22}
        height={22}
        className="object-contain"
      />
    </button>
  );
}

export default IconButton;
