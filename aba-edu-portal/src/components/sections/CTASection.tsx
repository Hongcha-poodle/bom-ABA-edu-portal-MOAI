"use client";

import { Button } from "../shared/Button";
import { ArrowRight, Heart } from "lucide-react";
import { useState } from "react";

export function CTASection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-accent-200 via-accent-100 to-primary-100 px-4 py-24 md:px-8 md:py-32">

      <div className="relative mx-auto max-w-5xl">
        <div className="grid gap-8 rounded-[2.5rem] bg-white/95 backdrop-blur-sm p-10 border-4 border-white md:grid-cols-[1fr_auto] md:items-center md:p-16">
          <div>
            <div
              className="mb-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 px-5 py-2 border-2 border-primary-200"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Heart
                className="h-5 w-5 text-primary-600"
                style={{
                  transform: isHovered ? "scale(1.2)" : "scale(1)",
                  transition: "transform 0.3s ease",
                }}
              />
              <span className="text-sm font-bold text-neutral-800 tracking-wide">
                함께 성장하는 여정 ✨
              </span>
            </div>

            <h2 className="text-4xl font-black text-neutral-900 md:text-5xl font-display leading-tight">
              아이의 발달, 부모의 성장
              <br />
              <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">지금 바로 시작해 보세요</span>
            </h2>
            <p className="mt-5 text-lg text-neutral-700 leading-relaxed md:text-xl font-medium">
              큐레이션된 가이드와 실전 팁을 통해
              일상의 작은 변화부터 함께 만들어갑니다. 💪
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Button
              variant="primary"
              size="lg"
              href="/magazine"
              className="shadow-soft-lg"
            >
              <span className="flex items-center gap-2">
                <span className="font-semibold">매거진 둘러보기</span>
                <ArrowRight className="h-5 w-5" />
              </span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/guide"
            >
              <span className="font-semibold">가이드 시작하기</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
