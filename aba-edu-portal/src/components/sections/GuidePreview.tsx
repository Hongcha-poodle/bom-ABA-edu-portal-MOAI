"use client";

import { BookOpen, Home, HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "../shared/Button";
import { SectionHeader } from "../shared/SectionHeader";
import { GUIDE_ITEMS } from "@/lib/constants";
import { useState } from "react";

const ICON_MAP = {
  BookOpen: BookOpen,
  Home: Home,
  HelpCircle: HelpCircle,
};

export function GuidePreview() {
  return (
    <section className="relative bg-gradient-to-b from-white via-secondary-50/30 to-accent-50/20 px-4 py-20 md:px-8 md:py-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-20 h-48 w-48 rounded-full bg-secondary-200/20 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-56 w-56 rounded-full bg-accent-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-secondary-100 px-4 py-1.5">
            <span className="text-xl">📖</span>
            <span
              className="text-sm font-semibold text-secondary-700"
              style={{ fontFamily: "var(--font-display)" }}
            >
              입문 가이드
            </span>
          </div>
          <h2
            className="text-3xl font-bold text-neutral-800 md:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            처음 시작하는 분들을 위한 단계별 안내
          </h2>
          <p className="mt-3 text-lg text-neutral-600 max-w-2xl mx-auto">
            ABA 교육의 기초부터 실전 적용까지, 체계적인 가이드를 따라가세요
          </p>
        </div>

        {/* Guide Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {GUIDE_ITEMS.map((item, index) => {
            const Icon = ICON_MAP[item.icon as keyof typeof ICON_MAP];
            return (
              <GuideCard key={item.id} item={item} Icon={Icon} index={index} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface GuideCardProps {
  item: any;
  Icon: any;
  index: number;
}

function GuideCard({ item, Icon, index }: GuideCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const gradients = [
    "from-primary-100 to-primary-50",
    "from-secondary-100 to-secondary-50",
    "from-accent-100 to-accent-50",
  ];

  const iconColors = [
    "text-primary-600",
    "text-secondary-600",
    "text-accent-600",
  ];

  return (
    <div
      className={`
        group flex flex-col rounded-3xl bg-white p-8
        border border-neutral-200/50
        shadow-soft transition-all duration-500 ease-out
        hover:shadow-soft-lg hover:-translate-y-2
        animate-fade-in-up opacity-0 stagger-${index + 1}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon */}
      <div
        className={`
          mb-5 inline-flex h-16 w-16 items-center justify-center
          rounded-2xl bg-gradient-to-br ${gradients[index % gradients.length]}
          transition-all duration-500 ease-out
          group-hover:scale-110 group-hover:rotate-3
        `}
      >
        <Icon
          className={`h-8 w-8 ${iconColors[index % iconColors.length]} transition-transform duration-500`}
        />
      </div>

      {/* Content */}
      <h3
        className="mb-3 text-xl font-bold text-neutral-800 transition-colors duration-300 group-hover:text-primary-600"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {item.title}
      </h3>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-neutral-600">
        {item.description}
      </p>

      {/* CTA Button */}
      <Button
        variant="outline"
        size="sm"
        className="w-full justify-between group/btn"
        href={item.href}
      >
        <span>읽어보기</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
      </Button>

      {/* Bottom accent line */}
      <div
        className={`mt-6 h-1 rounded-full bg-gradient-to-r ${gradients[index % gradients.length]} transition-opacity duration-300`}
        style={{ opacity: isHovered ? 1 : 0 }}
      />
    </div>
  );
}
