import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "bg-secondary/50 rounded-lg p-6 border border-secondary",
        hover && "hover:shadow-lg hover:border-primary/50 transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}

