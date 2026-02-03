import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "white" | "soft" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  target?: string;
}

export const Button = forwardRef<any, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      className,
      href,
      target,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-full font-bold tracking-wide transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-300 disabled:opacity-50 disabled:pointer-events-none hover:-translate-y-1";

    const variants = {
      primary: "bg-gradient-to-br from-primary-400 to-primary-600 text-white hover:from-primary-500 hover:to-primary-700",
      secondary: "bg-gradient-to-br from-secondary-300 to-secondary-500 text-neutral-900 hover:from-secondary-400 hover:to-secondary-600",
      outline:
        "border-3 border-primary-400 bg-white hover:bg-primary-50 text-primary-600 hover:border-primary-500",
      white: "bg-white text-neutral-800 hover:bg-neutral-50 border-2 border-neutral-300",
      soft: "bg-accent-200 text-neutral-900 hover:bg-accent-300",
      accent: "bg-gradient-to-br from-accent-300 to-accent-400 text-neutral-900 hover:from-accent-400 hover:to-accent-500",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-5 py-2 text-sm",
      lg: "h-12 px-7 text-base",
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return (
        <Link href={href} className={classes} target={target}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
