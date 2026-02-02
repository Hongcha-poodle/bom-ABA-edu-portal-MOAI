"use client";

import { Button } from "../shared/Button";
import { ArrowRight, Heart } from "lucide-react";
import { useState } from "react";

export function CTASection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-accent-500 to-secondary-500 px-4 py-24 md:px-8 md:py-32">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full animate-shimmer"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-white/10 blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-20 h-56 w-56 rounded-full bg-white/10 blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/3 h-32 w-32 rounded-full bg-white/5 blur-2xl animate-float"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Icon with animation */}
        <div
          className="mb-6 inline-flex items-center justify-center transition-transform duration-500"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            transform: isHovered
              ? "scale(1.1) rotate(5deg)"
              : "scale(1) rotate(0deg)",
          }}
        >
          <div className="relative">
            <Heart className="h-16 w-16 text-white fill-white drop-shadow-lg" />
            <div className="absolute -top-2 -right-2 text-3xl animate-float">
              ✨
            </div>
          </div>
        </div>

        {/* Heading */}
        <h2
          className="mb-6 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl drop-shadow-lg"
          style={{ fontFamily: "var(--font-display)" }}
        >
          함께 성장하는 <span className="inline-block animate-float">여정</span>
        </h2>

        {/* Subheading */}
        <p className="mb-10 text-lg text-white/90 leading-relaxed md:text-xl max-w-2xl mx-auto drop-shadow">
          아이의 발달, 부모의 성장, 그리고 함께 만들어가는 미래.
          <br className="hidden sm:block" />
          지금 바로 ABA 교육 포털과 함께 시작하세요.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="white"
            size="lg"
            href="/magazine"
            className="shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            <span className="flex items-center gap-2">
              <span className="font-bold">매거진 둘러보기</span>
              <ArrowRight className="h-5 w-5" />
            </span>
          </Button>
          <Button
            variant="outline"
            size="lg"
            href="/guide"
            className="border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 shadow-lg hover:scale-105 transition-all duration-300"
          >
            <span className="font-semibold">가이드 시작하기</span>
          </Button>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <svg
                className="h-5 w-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="font-medium drop-shadow">100% 무료</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <svg
                className="h-5 w-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="font-medium drop-shadow">전문가 검증</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <svg
                className="h-5 w-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="font-medium drop-shadow">지속 업데이트</span>
          </div>
        </div>
      </div>
    </section>
  );
}
