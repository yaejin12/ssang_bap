import { ButtonHTMLAttributes } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
export type ButtonVariant =
  | "filled"
  | "outlined"
  | "kakao"
  | "naver"
  | "google";

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  filled: "bg-primary text-white",
  outlined: "border border-primary text-primary bg-transparent",
  kakao: "bg-[#FDE500] text-[#381E1F]",
  naver: "bg-[#03C75A] text-white",
  google: "bg-white border border-line text-foreground",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  leftIcon?: string;
  rightIcon?: string;
  label: string;
}

function Button({
  variant = "filled",
  leftIcon,
  rightIcon,
  label,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "w-full h-12.25 rounded-lg text-[14px] font-bold",
        "relative flex items-center justify-center",
        "disabled:bg-gray-bg disabled:text-gray-mid disabled:border-transparent",
        VARIANT_CLASS[variant],
        className
      )}
      {...props}
    >
      {leftIcon && (
        <Image
          className="absolute left-4"
          src={leftIcon}
          alt=""
          width={19}
          height={19}
        />
      )}
      {label}
      {rightIcon && <Image src={rightIcon} alt="" width={19} height={19} />}
    </button>
  );
}

export default Button;
