import Image from "next/image";
import { ButtonHTMLAttributes } from "react";

const ICON_MAP = {
  search: { src: "/img/search.svg", alt: "검색" },
  heart: { src: "/img/heart.svg", alt: "찜하기" },
  back: { src: "/img/back.svg", alt: "뒤로가기" },
  close: { src: "/img/close.svg", alt: "닫기" },
} as const;

export type IconType = keyof typeof ICON_MAP;

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconType;
  /** 아이콘 이미지 크기(px). 기본값 22 */
  size?: number;
}

function IconButton({
  icon,
  size = 22,
  className = "",
  ...props
}: IconButtonProps) {
  const { src, alt } = ICON_MAP[icon];

  return (
    <button
      className={`flex items-center justify-center ${className}`}
      aria-label={alt}
      {...props}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="object-contain"
      />
    </button>
  );
}

export default IconButton;
