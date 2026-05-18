import { InputHTMLAttributes } from "react";
import IconButton, { IconType } from "@/components/Button/IconButton";

type Variant = "default" | "filled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: Variant;
  leftIcon?: IconType;
  onLeftIconClick?: () => void;
  rightIcon?: IconType;
  onRightIconClick?: () => void;
  error?: string;
}

function Input({
  variant = "default",
  leftIcon,
  onLeftIconClick,
  rightIcon,
  onRightIconClick,
  error,
  className = "",
  ...rest
}: InputProps) {
  const shadowClass =
    variant === "default" ? "shadow-[0_2px_8px_rgba(0,0,0,0.08)]" : "";

  const colorClass = error
    ? "border-[#FF616D] bg-white"
    : variant === "filled"
      ? "bg-divider-bg border-transparent focus:border-gray-dark focus:bg-white"
      : "bg-white border-transparent focus:border-gray-dark";

  const paddingClass = `${leftIcon ? "pl-10" : "pl-4"} ${rightIcon ? "pr-10" : "pr-4"}`;

  return (
    <div className="w-full">
      <div className="relative">
        {leftIcon && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center">
            <IconButton icon={leftIcon} size={12} onClick={onLeftIconClick} />
          </span>
        )}
        <input
          className={`h-12 w-full rounded-[10px] text-[14px] placeholder:text-[14px] placeholder:text-[#a2a2a2] outline-none border transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${shadowClass} ${colorClass} ${paddingClass} ${className}`}
          {...rest}
        />
        {rightIcon && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center">
            <IconButton icon={rightIcon} size={12} onClick={onRightIconClick} />
          </span>
        )}
      </div>
      {error && <p className="mt-1 text-[12px] text-[#FF616D]">{error}</p>}
    </div>
  );
}

export default Input;
