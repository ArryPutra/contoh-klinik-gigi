import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
  padding?: "none" | "sm" | "md" | "lg";
}

export function Card({
  children,
  className = "",
  as: Component = "div",
  padding = "md",
}: CardProps) {
  const paddingMap = {
    none: "",
    sm: "p-4 sm:p-5",
    md: "p-6",
    lg: "p-6 sm:p-8",
  };

  return (
    <Component
      className={`rounded-[10px] border border-border bg-background shadow-2xs ${paddingMap[padding]} ${className}`}
    >
      {children}
    </Component>
  );
}
