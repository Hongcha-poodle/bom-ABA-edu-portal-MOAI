"use client";

import { Button } from "../shared/Button";
import { useState, useEffect } from "react";
import Image from "next/image";

const ROW2_CARDS = [
  {
    title: "처음 시작하는 가이드",
    tag: "Guide",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "부모와 전문가 인터뷰",
    tag: "Story",
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1200&q=80",
  },
];

const ROW3_CARDS = [
  {
    title: "아이와 함께하는 루틴",
    tag: "Daily",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "가정에서 쓰는 도구",
    tag: "Tools",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "ABA 핵심 용어 정리",
    tag: "Basics",
    image:
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1200&q=80",
  },
];

export function ContentHeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#CCFBEA] pt-20 pb-16 md:pt-24 md:pb-20">

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        {/* Row 1: 인트로 히어로 카드 (1개) */}
        <div
          className={`mb-5 overflow-hidden rounded-3xl bg-white/90 backdrop-blur-sm border-2 border-white transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="grid items-stretch gap-0 md:grid-cols-[1fr_1fr]">
            {/* 텍스트 영역 */}
            <div className="flex flex-col justify-center p-8 md:p-10">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-neutral-100 px-4 py-1.5 mb-5 border border-neutral-200">
                <span className="text-lg">🎓</span>
                <span className="text-xs font-semibold text-neutral-700 tracking-wide">
                  ABA 교육 포털
                </span>
              </div>

              <h1 className="mb-4 text-3xl font-semibold text-neutral-800 md:text-4xl lg:text-5xl">
                콘텐츠부터 시작하는
                <br />
                따뜻한 교육 아카이브
              </h1>

              <p className="mb-6 text-base text-neutral-600 leading-relaxed md:text-lg">
                전문가가 큐레이션한 매거진과 가이드를
                한눈에 탐색하고, 우리 아이에게 맞는 자료를
                바로 찾아보세요.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <Button variant="primary" size="md" href="/magazine">
                  매거진 둘러보기
                </Button>
                <Button variant="outline" size="md" href="/guide">
                  가이드 시작하기
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm text-neutral-600">
                <div className="rounded-2xl bg-neutral-100 px-4 py-3">
                  <p className="text-xs uppercase tracking-widest text-neutral-500">
                    최신 업데이트
                  </p>
                  <p className="mt-1 font-semibold text-neutral-800">주 2회</p>
                </div>
                <div className="rounded-2xl bg-neutral-100 px-4 py-3">
                  <p className="text-xs uppercase tracking-widest text-neutral-500">
                    실전 활용
                  </p>
                  <p className="mt-1 font-semibold text-neutral-800">가정/기관</p>
                </div>
              </div>
            </div>

            {/* 피처드 이미지 — 모바일: 고유 비율, 데스크톱: 텍스트 높이에 맞춤 */}
            <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-auto md:min-h-0">
              <Image
                src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1600&q=80"
                alt="오늘 읽기 좋은 ABA 실전 팁"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/20" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neutral-900/50 to-transparent p-6">
                <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-neutral-700 backdrop-blur-sm">
                  주간 하이라이트
                </span>
                <h3 className="mt-2 text-lg font-bold text-white drop-shadow-md md:text-xl">
                  오늘 읽기 좋은 ABA 실전 팁
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: 콘텐츠 카드 2개 — 좌측 이미지 + 우측 텍스트 */}
        <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {ROW2_CARDS.map((item, index) => (
            <div
              key={item.title}
              className={`
                group overflow-hidden rounded-3xl bg-white shadow-soft
                transition-all duration-500 ease-out
                hover:-translate-y-2 hover:shadow-soft-lg
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="grid grid-cols-[1fr] sm:grid-cols-[0.55fr_0.45fr]">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 28vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center p-5">
                  <p className="text-xs uppercase tracking-widest text-neutral-500">
                    {item.tag}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-neutral-800 leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 3: 콘텐츠 카드 3개 */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {ROW3_CARDS.map((item, index) => (
            <div
              key={item.title}
              className={`
                group overflow-hidden rounded-3xl bg-white shadow-soft
                transition-all duration-500 ease-out
                hover:-translate-y-2 hover:shadow-soft-lg
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-xs uppercase tracking-widest text-neutral-500">
                  {item.tag}
                </p>
                <h4 className="mt-1.5 text-base font-semibold text-neutral-800">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
