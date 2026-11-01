import type { ReactNode } from "react";

export type BadgeVariant =
  | "teal"
  | "warm"
  | "demo"
  | "outline"
  | "status-open"
  | "status-closed";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

/**
 * Badge menggunakan token `tint-strong` (#CCFBF1) dengan teks `text` (#0F172A).
 * Bentuk pil (`rounded-full`) hanya digunakan untuk satu badge status buka/tutup.
 */
export function Badge({
  children,
  variant = "teal",
  className = "",
}: BadgeProps) {
  const variantClasses: Record<BadgeVariant, string> = {
    teal: "rounded-[6px] bg-tint-strong text-text px-2.5 py-1 text-xs font-medium",
    warm: "rounded-[6px] bg-tint-strong text-text px-2.5 py-1 text-xs font-medium",
    demo: "rounded-[6px] border border-border bg-tint-strong text-text px-2.5 py-0.5 text-xs font-medium",
    outline: "rounded-[6px] border border-border bg-background text-text-muted px-2.5 py-0.5 text-xs font-medium",
    "status-open":
      "rounded-full border border-border bg-tint-strong text-text px-3 py-1 text-xs font-medium",
    "status-closed":
      "rounded-full border border-border bg-tint text-text-muted px-3 py-1 text-xs font-medium",
  };

  return (
    <span className={`inline-flex items-center gap-1.5 leading-snug ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}
