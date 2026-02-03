"use client";

import { ExternalLink, Sparkles } from "lucide-react";
import Image from "next/image";
import { Button } from "../shared/Button";
import { useState } from "react";

export function ToolsPreview() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative bg-[#99F6D4] px-4 py-20 md:px-8 md:py-24">

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5">
            <span className="text-xl">🎮</span>
            <span className="text-xs font-semibold text-neutral-700 tracking-wide">
              학습 도구
            </span>
          </div>
          <h2
            className="text-3xl font-semibold text-neutral-800 md:text-4xl"
          >
            아이와 함께 사용할 수 있는 교육 도구
          </h2>
          <p className="mt-3 text-lg text-neutral-600 max-w-2xl mx-auto">
            재미있고 효과적인 학습을 위한 인터랙티브 도구
          </p>
        </div>

        {/* Featured Tool Card */}
        <div
          className="overflow-hidden rounded-3xl bg-white border-2 border-white transition-all duration-500 hover:-translate-y-1 lg:grid lg:grid-cols-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Visual Area */}
          <div className="relative h-80 w-full overflow-hidden bg-neutral-900/10 lg:h-auto">
            <Image
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80"
              alt="학습 도구 미리보기"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out"
              style={{
                transform: isHovered
                  ? "scale(1.05)"
                  : "scale(1)",
              }}
            />

            {/* Soft overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-neutral-900/10 to-transparent" />

            {/* Subtle pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 20h20v20H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          {/* Content Area */}
          <div className="flex flex-col justify-center bg-white p-10 lg:p-14">
            {/* Badge */}
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-primary-100 px-4 py-2">
              <Sparkles className="h-4 w-4 text-primary-600" />
              <span
                className="text-xs font-semibold text-primary-700"
                style={{ fontFamily: "var(--font-display)" }}
              >
                추천 도구
              </span>
            </div>

            {/* Title */}
            <h3
              className="mb-4 text-3xl font-bold text-neutral-800"
              style={{ fontFamily: "var(--font-display)" }}
            >
              시아 한글 키보드
            </h3>

            {/* Description */}
            <p className="mb-6 text-lg leading-relaxed text-neutral-600">
              이미지를 보고 단어를 맞추며 자연스럽게 한글을 익히는 웹 기반
              키보드 학습 프로그램입니다. PC와 태블릿 모두에서 사용할 수
              있습니다.
            </p>

            {/* Features */}
            <ul className="mb-8 space-y-3">
              {[
                "시각적 학습 지원",
                "단계별 난이도 조절",
                "즉각적인 피드백",
              ].map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-sm text-neutral-700"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary-100">
                    <svg
                      className="h-4 w-4 text-secondary-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div>
              <Button
                variant="primary"
                size="lg"
                href="https://example.com/sia-keyboard"
                target="_blank"
                className="gap-2 shadow-primary hover:shadow-primary hover:scale-105"
              >
                <span>지금 바로 시작하기</span>
                <ExternalLink className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
