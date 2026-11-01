import type { SVGProps } from "react";

export interface DentalLogoProps extends SVGProps<SVGSVGElement> {
  variant?: "default" | "white";
}

export function DentalLogo({
  variant = "default",
  className = "h-9 w-9",
  ...props
}: DentalLogoProps) {
  const isWhite = variant === "white";

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} transition-all duration-300`}
      aria-hidden="true"
      {...props}
    >
      {/* Background container dengan radius halus */}
      <rect
        x="0.5"
        y="0.5"
        width="31"
        height="31"
        rx="8.5"
        fill={isWhite ? "rgba(255, 255, 255, 0.16)" : "var(--tint)"}
        stroke={isWhite ? "rgba(255, 255, 255, 0.3)" : "var(--border)"}
        className="transition-colors duration-300"
      />

      {/* Siluet Gigi Anatomis & Bersahabat */}
      <path
        d="M16 7.5C14.5 6 12 6 10 6C7 6 6 8.5 6 12C6 15.5 7.5 19.5 9.8 24.5C10.3 25.6 11.8 25.8 12.6 24.8C13.6 23.5 14.8 21.5 16 21.5C17.2 21.5 18.4 23.5 19.4 24.8C20.2 25.8 21.7 25.6 22.2 24.5C24.5 19.5 26 15.5 26 12C26 8.5 25 6 22 6C20 6 17.5 6 16 7.5Z"
        fill={isWhite ? "#FFFFFF" : "var(--accent)"}
        className="transition-colors duration-300"
      />

      {/* Garis Senyum di Bagian Depan Gigi */}
      <path
        d="M11.5 13.5C13 16 19 16 20.5 13.5"
        stroke={isWhite ? "#0B1E36" : "#FFFFFF"}
        strokeWidth="1.75"
        strokeLinecap="round"
        className="transition-colors duration-300"
      />

      {/* Kilau Bintang / Sparkle (Simbol Gigi Bersih & Sehat) */}
      <path
        d="M20 7.5C20 8.5 20.8 9.2 21.8 9.2C20.8 9.2 20 9.9 20 10.9C20 9.9 19.2 9.2 18.2 9.2C19.2 9.2 20 8.5 20 7.5Z"
        fill={isWhite ? "rgba(255, 255, 255, 0.95)" : "#FFFFFF"}
        className="transition-colors duration-300"
      />
    </svg>
  );
}
