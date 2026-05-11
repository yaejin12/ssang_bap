"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationList = [
  {
    name: "홈",
    icon: "/img/nav_home.svg",
    activeIcon: "/img/nav_home_active.svg",
    href: "/",
  },
  {
    name: "내주변",
    icon: "/img/nav_around.svg",
    activeIcon: "/img/nav_around_active.svg",
    href: "/around",
  },
  {
    name: "채팅",
    icon: "/img/nav_chat.svg",
    activeIcon: "/img/nav_chat_active.svg",
    href: "/chat",
  },
  {
    name: "마이페이지",
    icon: "/img/nav_mypage.svg",
    activeIcon: "/img/nav_mypage_active.svg",
    href: "/mypage",
  },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center inner-padding pb-8 pt-4 bg-white fixed bottom-0 left-0 right-0">
      <ul className="flex w-full">
        {navigationList.map((navItem) => {
          const isActive = pathname === navItem.href;
          return (
            <li className="flex-1" key={navItem.name}>
              <Link
                href={navItem.href}
                className={`flex items-center justify-center flex-col gap-1 w-full`}
              >
                <img
                  className="w-5 h-5 object-contain"
                  src={isActive ? navItem.activeIcon : navItem.icon}
                  alt={navItem.name}
                />
                <p
                  className={`text-xs ${isActive ? "text-foreground font-semibold" : "text-gray font-normal"}`}
                >
                  {navItem.name}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
