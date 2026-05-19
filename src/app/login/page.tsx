import Button, { ButtonVariant } from "@/components/Button";
import Image from "next/image";

const LOGO_BOUNCE_DELAYS = ["1s", "-2s", "-1s"] as const;

const SOCIAL_LOGINS: { variant: ButtonVariant; label: string; icon: string }[] =
  [
    { variant: "kakao", label: "카카오로 시작하기", icon: "/img/kakao.svg" },
    { variant: "naver", label: "네이버로 시작하기", icon: "/img/naver.svg" },
    { variant: "google", label: "구글로 시작하기", icon: "/img/google.svg" },
  ];

export default function LoginPage() {
  return (
    <div className="h-screen flex flex-col justify-between gap-8">
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="flex justify-center">
          {LOGO_BOUNCE_DELAYS.map((delay) => (
            <Image
              key={delay}
              src="/img/logo.svg"
              alt=""
              width={32}
              height={32}
              className="animate-bounce-logo"
              style={{ animationDelay: delay }}
            />
          ))}
        </div>
        <p className="text-lg font-gmarket mt-1.5  text-primary">한끼메이트</p>
      </div>
      <div className="flex flex-col gap-2.25 inner-padding pb-13">
        {SOCIAL_LOGINS.map(({ variant, label, icon }) => (
          <Button
            key={variant}
            variant={variant}
            label={label}
            leftIcon={icon}
          />
        ))}
      </div>
    </div>
  );
}
