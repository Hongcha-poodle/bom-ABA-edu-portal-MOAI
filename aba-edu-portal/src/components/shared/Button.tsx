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
      "inline-flex items-center justify-center rounded-2xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none shadow-soft hover:shadow-soft-lg";

    const variants = {
      primary: "bg-primary-500 text-white hover:bg-primary-600",
      secondary: "bg-secondary-500 text-white hover:bg-secondary-600",
      outline:
        "border-2 border-neutral-300 bg-transparent hover:bg-neutral-100 text-neutral-700 hover:border-neutral-400 shadow-none hover:shadow-soft",
      white: "bg-white text-primary-600 hover:bg-neutral-50",
      soft: "bg-primary-100 text-primary-700 hover:bg-primary-200 shadow-none hover:shadow-soft",
      accent: "bg-accent-500 text-white hover:bg-accent-400",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-5 py-2",
      lg: "h-13 px-7 text-lg",
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
