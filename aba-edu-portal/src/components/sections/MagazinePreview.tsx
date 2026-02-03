"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ContentCard } from "../shared/ContentCard";
import { SectionHeader } from "../shared/SectionHeader";
import { MAGAZINE_ITEMS } from "@/lib/constants";

export function MagazinePreview() {
  return (
    <section className="relative bg-[#FEF9C3] px-4 py-20 md:px-8 md:py-24">

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div className="flex-1">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5">
              <span className="text-xl">📚</span>
              <span className="text-xs font-semibold text-neutral-700 tracking-wide">
                최신 매거진
              </span>
            </div>
            <h2 className="text-3xl font-semibold text-neutral-800 md:text-4xl">
              오늘 읽기 좋은 교육 콘텐츠
            </h2>
            <p className="mt-3 text-lg text-neutral-600 max-w-2xl">
              카테고리별로 정리된 자료를 바로 탐색하세요.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["전체", "카드뉴스", "만화", "아티클", "인포그래픽"].map(
                (chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-xs font-semibold text-neutral-700"
                  >
                    {chip}
                  </span>
                )
              )}
            </div>
          </div>

          <Link
            href="/magazine"
            className="hidden items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-700 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 md:flex border border-neutral-200"
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
            className="inline-flex items-center gap-2 rounded-full bg-neutral-800 px-8 py-4 text-base font-semibold text-white shadow-soft-lg transition-all hover:bg-neutral-900 hover:-translate-y-1"
          >
            <span>전체보기</span>
            <ChevronRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
