import { Button } from "../shared/Button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-neutral-50 to-white pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary-200/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-secondary-200/30 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 h-40 w-40 rounded-full bg-accent-200/20 blur-2xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 md:px-8 lg:flex-row lg:justify-between">
        {/* Text Content */}
        <div className="mb-12 max-w-xl text-center lg:mb-0 lg:text-left">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-neutral-800 md:text-5xl lg:text-6xl">
            우리 아이의 성장을 <br className="hidden md:block" />
            함께하는 <span className="text-primary-500">ABA 교육 가이드</span>
          </h1>
          <p className="mb-8 text-lg text-neutral-600 md:text-xl">
            발달지연 아동을 위한 쉽고 따뜻한 교육 정보
            <br />
            전문가와 함께하는 체계적인 가이드를 만나보세요.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Button variant="primary" size="lg" href="/magazine">
              매거진 보기
            </Button>
            <Button variant="soft" size="lg" href="/guide">
              가이드 시작하기
            </Button>
          </div>
        </div>

        {/* Illustration Placeholder */}
        <div className="relative w-full max-w-lg lg:w-1/2">
          <div className="aspect-square w-full rounded-4xl bg-gradient-to-br from-primary-100 to-secondary-100 p-8 shadow-soft-lg">
            <div className="flex h-full items-center justify-center rounded-3xl border-2 border-dashed border-primary-200 bg-white/70 text-primary-400">
              <span className="text-xl font-medium">일러스트 영역</span>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-10 -right-10 -z-10 h-64 w-64 rounded-full bg-secondary-200/40 blur-3xl" />
          <div className="absolute -left-10 -top-10 -z-10 h-64 w-64 rounded-full bg-primary-200/40 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
