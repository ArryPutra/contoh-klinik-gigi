import Link from "next/link";
import type { ReactNode, ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary" | "whatsapp" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  fullWidth?: boolean;
  ariaLabel?: string;
}

interface LinkButtonProps extends BaseButtonProps {
  href: string;
  external?: boolean;
}

interface NativeButtonProps extends BaseButtonProps {
  href?: undefined;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  disabled?: boolean;
  id?: string;
}

export type ButtonProps = LinkButtonProps | NativeButtonProps;

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    className = "",
    fullWidth = false,
    ariaLabel,
  } = props;

  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      "bg-accent text-background hover:bg-accent-hover border border-accent disabled:opacity-60",
    secondary:
      "bg-background text-text border border-border hover:bg-tint hover:border-accent disabled:opacity-60",
    whatsapp:
      "bg-whatsapp text-background hover:bg-whatsapp-hover border border-whatsapp disabled:opacity-60",
    ghost:
      "bg-transparent text-accent hover:bg-tint border border-transparent",
  };

  const sizeClasses: Record<ButtonSize, string> = {
    sm: "min-h-[44px] min-w-[44px] px-4 py-2 text-sm",
    md: "min-h-[44px] min-w-[44px] px-5 py-2.5 text-sm sm:text-base",
    lg: "min-h-[48px] min-w-[44px] px-6 py-3 text-base",
  };

  const sharedClasses = `interactive-transition inline-flex items-center justify-center gap-2 rounded-[10px] font-medium leading-snug text-center cursor-pointer select-none ${
    variantClasses[variant]
  } ${sizeClasses[size]} ${fullWidth ? "w-full" : ""} ${className}`;

  if (typeof props.href === "string") {
    const isExternal =
      props.external ||
      props.href.startsWith("http") ||
      props.href.startsWith("tel:") ||
      props.href.startsWith("mailto:");

    if (isExternal) {
      return (
        <a
          href={props.href}
          target={props.href.startsWith("http") ? "_blank" : undefined}
          rel={props.href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={ariaLabel}
          className={sharedClasses}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={props.href} aria-label={ariaLabel} className={sharedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      id={props.id}
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      aria-label={ariaLabel}
      className={sharedClasses}
    >
      {children}
    </button>
  );
}
