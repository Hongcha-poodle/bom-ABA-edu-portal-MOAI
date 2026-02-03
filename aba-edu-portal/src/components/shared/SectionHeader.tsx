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
    <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <h2 className="text-3xl font-black text-neutral-900 md:text-4xl font-display leading-tight">
          {title}
        </h2>
        <p className="mt-3 text-lg text-neutral-700 font-medium">{description}</p>
      </div>
      {href && (
        <Link
          href={href}
          className="flex items-center text-base font-bold text-primary-600 hover:text-primary-700 transition-all duration-300 hover:gap-2 gap-1 group"
        >
          {linkText}
          <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      )}
    </div>
  );
}
