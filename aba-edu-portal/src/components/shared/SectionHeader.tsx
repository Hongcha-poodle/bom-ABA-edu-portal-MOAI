import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface SectionHeaderProps {
    title: string;
    description: string;
    href?: string;
    linkText?: string;
}

export function SectionHeader({
    title,
    description,
    href,
    linkText = "더보기",
}: SectionHeaderProps) {
    return (
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
                <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">
                    {title}
                </h2>
                <p className="mt-2 text-neutral-600">{description}</p>
            </div>
            {href && (
                <Link
                    href={href}
                    className="flex items-center text-sm font-medium text-neutral-500 hover:text-primary-500 transition-colors"
                >
                    {linkText}
                    <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
            )}
        </div>
    );
}
