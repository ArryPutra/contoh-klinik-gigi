import type { ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  id?: string;
  children: ReactNode;
  variant?: "white" | "soft" | "navy";
  className?: string;
  containerClassName?: string;
  ariaLabelledBy?: string;
}

export function Section({
  id,
  children,
  variant = "white",
  className = "",
  containerClassName = "",
  ariaLabelledBy,
}: SectionProps) {
  const variantClasses: Record<NonNullable<SectionProps["variant"]>, string> = {
    white: "bg-background text-text",
    soft: "bg-tint text-text border-y border-border",
    navy: "bg-cta-section text-background",
  };

  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`py-[72px] lg:py-[104px] ${variantClasses[variant]} ${className}`}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
