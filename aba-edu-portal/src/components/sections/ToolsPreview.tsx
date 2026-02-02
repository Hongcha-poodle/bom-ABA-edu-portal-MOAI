"use client";

import { ExternalLink, Sparkles } from "lucide-react";
import { Button } from "../shared/Button";
import { useState } from "react";

export function ToolsPreview() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-neutral-50 via-white to-primary-50/30 px-4 py-20 md:px-8 md:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F2845C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent-100 px-4 py-1.5">
            <span className="text-xl">🎮</span>
            <span
              className="text-sm font-semibold text-accent-700"
              style={{ fontFamily: "var(--font-display)" }}
            >
              학습 도구
            </span>
          </div>
          <h2
            className="text-3xl font-bold text-neutral-800 md:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            아이와 함께 사용할 수 있는 교육 도구
          </h2>
          <p className="mt-3 text-lg text-neutral-600 max-w-2xl mx-auto">
            재미있고 효과적인 학습을 위한 인터랙티브 도구
          </p>
        </div>

        {/* Featured Tool Card */}
        <div
          className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary-500 via-accent-500 to-secondary-500 shadow-soft-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 lg:grid lg:grid-cols-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Visual Area */}
          <div className="relative h-80 w-full overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm lg:h-auto">
            {/* Decorative elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Floating keyboard illustration */}
                <div
                  className="text-9xl transition-transform duration-700 ease-out"
                  style={{
                    transform: isHovered
                      ? "scale(1.1) rotate(2deg)"
                      : "scale(1) rotate(0deg)",
                  }}
                >
                  ⌨️
                </div>

                {/* Sparkle effects */}
                <div className="absolute -top-6 -right-6 text-4xl animate-float">
                  ✨
                </div>
                <div
                  className="absolute -bottom-6 -left-6 text-3xl animate-float"
                  style={{ animationDelay: "0.5s" }}
                >
                  ⭐
                </div>
              </div>
            </div>

            {/* Grid pattern overlay */}
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
