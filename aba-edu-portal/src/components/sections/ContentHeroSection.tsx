"use client";

import { Button } from "../shared/Button";
import { useState, useEffect } from "react";

export function ContentHeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-neutral-50 via-primary-50/30 to-secondary-50/30 pt-24 pb-12 md:pt-32 md:pb-16">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary-300/20 blur-3xl animate-float" />
        <div
          className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-secondary-300/20 blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/3 right-1/4 h-32 w-32 rounded-full bg-accent-300/15 blur-2xl animate-float"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        {/* Compact header with brand message */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div
            className={`
              inline-flex items-center gap-2 rounded-full
              bg-white/80 backdrop-blur-sm
              px-5 py-2 mb-6
              border border-primary-200/50
              shadow-sm
              transition-all duration-700 ease-out
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            <span className="text-2xl">🌟</span>
            <span
              className="text-sm font-semibold text-primary-600"
              style={{ fontFamily: "var(--font-display)" }}
            >
              발달지연 아동을 위한 ABA 교육 가이드
            </span>
          </div>

          {/* Main headline */}
          <h1
            className={`
              mb-5 text-4xl font-extrabold tracking-tight text-neutral-800
              md:text-5xl lg:text-6xl
              transition-all duration-700 ease-out delay-100
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
            style={{ fontFamily: "var(--font-display)" }}
          >
            우리 아이의 성장을 함께하는{" "}
            <span className="gradient-text">교육 여정</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`
              mb-8 text-lg text-neutral-600 leading-relaxed
              md:text-xl max-w-2xl mx-auto
              transition-all duration-700 ease-out delay-200
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            쉽고 따뜻하게 배우는 ABA 교육 팁부터 실전 가이드까지,
            <br className="hidden sm:block" />
            전문가와 부모님이 함께 만드는 성장 스토리
          </p>

          {/* CTA Buttons */}
          <div
            className={`
              flex flex-col sm:flex-row gap-4 justify-center items-center
              transition-all duration-700 ease-out delay-300
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            <Button variant="primary" size="lg" href="/magazine">
              <span className="flex items-center gap-2">
                <span>매거진 탐색하기</span>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </Button>
            <Button variant="soft" size="lg" href="/guide">
              가이드 시작하기
            </Button>
          </div>

          {/* Trust indicators */}
          <div
            className={`
              mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-500
              transition-all duration-700 ease-out delay-500
              ${isVisible ? "opacity-100" : "opacity-0"}
            `}
          >
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-secondary-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">전문가 검증 콘텐츠</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-secondary-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">무료로 제공</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-secondary-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">지속적 업데이트</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`
            mt-12 flex justify-center
            transition-all duration-1000 ease-out delay-700
            ${isVisible ? "opacity-100" : "opacity-0"}
          `}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-medium text-neutral-500 tracking-wider uppercase">
              콘텐츠 둘러보기
            </span>
            <svg
              className="h-6 w-6 text-neutral-400 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
