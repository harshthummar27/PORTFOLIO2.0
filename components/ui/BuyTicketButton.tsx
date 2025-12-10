"use client";

import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BuyTicketButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "mobile";
}

export default function BuyTicketButton({
  className,
  variant = "default",
  ...props
}: BuyTicketButtonProps) {
  return (
    <div className="relative inline-block group">
      {/* Gradient border wrapper with animation */}
      <div
        className="rounded-full p-[1.5px]"
        style={{
          background: "linear-gradient(90deg, #a855f7, #ec4899, #3b82f6, #a855f7)",
          backgroundSize: "200% 100%",
          animation: "gradient-shift 3s linear infinite",
        }}
      >
        <button
          className={cn(
            "relative p-[1px] rounded-full font-semibold text-white transition-all duration-300 overflow-hidden group cursor-pointer",
            "bg-black/80 backdrop-blur-md",
            "hover:bg-black/90",
            "shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]",
            variant === "default"
              ? "px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm"
              : "px-6 py-3 text-base w-full",
            className
          )}
          {...props}
        >
          {/* Soft inner glow on hover */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/0 via-pink-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          
      {/* Text */}
      <span className="relative z-10">Get Touch</span>
        </button>
      </div>
      
      {/* Outer soft glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-50 -z-10 transition-opacity duration-200 pointer-events-none"></div>
    </div>
  );
}

