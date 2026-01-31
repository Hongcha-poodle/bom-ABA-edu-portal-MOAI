import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline" | "white";
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
            "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

        const variants = {
            primary: "bg-primary-500 text-white hover:bg-primary-600 shadow-sm",
            secondary:
                "bg-white text-primary-500 border border-primary-200 hover:bg-primary-50",
            outline:
                "border border-neutral-300 bg-transparent hover:bg-neutral-100 text-neutral-700",
            white: "bg-white text-primary-500 hover:bg-neutral-50 shadow-sm",
        };

        const sizes = {
            sm: "h-8 px-3 text-sm",
            md: "h-10 px-4 py-2",
            lg: "h-12 px-6 text-lg",
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
