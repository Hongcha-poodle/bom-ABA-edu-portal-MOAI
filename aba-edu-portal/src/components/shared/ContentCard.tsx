"use client";

import Image from "next/image";
import Link from "next/link";
import { CategoryBadge } from "./CategoryBadge";
import { MagazineItem } from "@/types";
import { useState } from "react";

interface ContentCardProps {
  item: MagazineItem;
  index?: number;
}

export function ContentCard({ item, index = 0 }: ContentCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // 각 카드에 다른 색상 악센트 적용
  const accentColors = [
    "from-primary-500/10 to-primary-500/5",
    "from-secondary-500/10 to-secondary-500/5",
    "from-accent-500/10 to-accent-500/5",
    "from-primary-400/10 to-secondary-400/5",
  ];

  const hoverShadows = [
    "shadow-primary",
    "shadow-secondary",
    "shadow-accent",
    "shadow-primary",
  ];

  const accentColor = accentColors[index % accentColors.length];
  const hoverShadow = hoverShadows[index % hoverShadows.length];

  return (
    <Link
      href={item.href}
      className={`group block h-full animate-fade-in-up opacity-0 stagger-${(index % 8) + 1}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <article
        className={`
          relative flex h-full flex-col overflow-hidden rounded-3xl bg-white
          border border-neutral-200/50
          transition-all duration-500 ease-out
          hover:-translate-y-3 hover:scale-[1.02]
          ${hoverShadow}
        `}
        style={{
          boxShadow: isHovered
            ? "0 20px 60px -15px rgba(0, 0, 0, 0.15), 0 10px 30px -10px rgba(0, 0, 0, 0.1)"
            : "0 4px 15px -3px rgba(0, 0, 0, 0.07)",
        }}
      >
        {/* Thumbnail Area with Gradient Overlay */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
          {/* Badge positioned absolutely */}
          <div className="absolute left-4 top-4 z-10">
            <CategoryBadge category={item.category} />
          </div>

          {/* Gradient accent background */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${accentColor} transition-opacity duration-500`}
            style={{ opacity: isHovered ? 0.3 : 1 }}
          />

          {/* Icon or illustration placeholder */}
          <div className="relative flex h-full w-full items-center justify-center">
            <div className="relative transform transition-transform duration-500 group-hover:scale-110">
              <span
                className="text-7xl transition-all duration-500 filter group-hover:brightness-110"
                style={{
                  filter: isHovered
                    ? "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.15))"
                    : "none",
                }}
              >
                {getCategoryIcon(item.category)}
              </span>
            </div>
          </div>

          {/* Subtle grain texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Content Area */}
        <div className="flex flex-1 flex-col p-6">
          {/* Date */}
          <time className="mb-3 text-xs font-medium tracking-wider uppercase text-neutral-500">
            {item.date}
          </time>

          {/* Title */}
          <h3
            className="mb-3 text-xl font-bold leading-snug text-neutral-800 transition-colors duration-300 group-hover:text-primary-600"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {item.title}
          </h3>

          {/* Summary */}
          <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-neutral-600">
            {item.summary}
          </p>

          {/* Read more indicator */}
          <div className="flex items-center gap-2 text-sm font-semibold text-primary-600 transition-all duration-300 group-hover:gap-3">
            <span>자세히 보기</span>
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>

        {/* Bottom decorative border with brand color */}
        <div
          className={`h-1 bg-gradient-to-r ${accentColor.replace("/10", "/30").replace("/5", "/20")} transition-opacity duration-300`}
          style={{ opacity: isHovered ? 1 : 0 }}
        />
      </article>
    </Link>
  );
}

// Helper function to get category-specific icons
function getCategoryIcon(category: string): string {
  const icons: Record<string, string> = {
    카드뉴스: "📰",
    만화: "🎨",
    아티클: "📚",
    인포그래픽: "📊",
  };
  return icons[category] || "📄";
}
