"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ContentCard } from "../shared/ContentCard";
import { SectionHeader } from "../shared/SectionHeader";
import { MAGAZINE_ITEMS } from "@/lib/constants";

export function MagazinePreview() {
  return (
    <section className="relative bg-gradient-to-b from-white via-neutral-50/50 to-white px-4 py-20 md:px-8 md:py-24">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 h-40 w-40 rounded-full bg-primary-200/20 blur-3xl" />
        <div className="absolute bottom-20 left-10 h-40 w-40 rounded-full bg-secondary-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 flex items-end justify-between">
          <div className="flex-1">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5">
              <span className="text-xl">📚</span>
              <span
                className="text-sm font-semibold text-primary-700"
                style={{ fontFamily: "var(--font-display)" }}
              >
                최신 매거진
              </span>
            </div>
            <h2
              className="text-3xl font-bold text-neutral-800 md:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              쉽고 재미있게 배우는 ABA 교육 팁
            </h2>
            <p className="mt-3 text-lg text-neutral-600 max-w-2xl">
              전문가가 엄선한 교육 콘텐츠를 통해 우리 아이의 발달을 지원하세요
            </p>
          </div>

          <Link
            href="/magazine"
            className="hidden items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary-600 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 md:flex border border-primary-100"
          >
            <span>전체보기</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Content Grid - Etsy-style browseable layout */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {MAGAZINE_ITEMS.map((item, index) => (
            <ContentCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Mobile "View All" button */}
        <div className="mt-10 flex justify-center md:hidden">
          <Link
            href="/magazine"
            className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-8 py-4 text-base font-semibold text-white shadow-primary transition-all hover:bg-primary-600 hover:shadow-lg hover:-translate-y-1"
          >
            <span>전체보기</span>
            <ChevronRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
