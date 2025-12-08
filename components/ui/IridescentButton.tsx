"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface IridescentButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "default" | "mobile";
}

export default function IridescentButton({
  children,
  className,
  variant = "default",
  ...props
}: IridescentButtonProps) {
  return (
    <div
      className={cn(
        "relative rounded-lg p-[1px]",
        "bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500",
        "bg-[length:200%_100%] animate-[gradient-shift_3s_linear_infinite]"
      )}
    >
      <button
        className={cn(
          "relative w-full bg-black rounded-lg font-semibold text-white transition-all duration-300 overflow-hidden group cursor-pointer",
          "hover:bg-white/5",
          variant === "default" 
            ? "px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm" 
            : "px-6 py-3 text-base",
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </button>
    </div>
  );
}

