import { Button } from "../shared/Button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-secondary-50 to-tertiary-50 pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary-200/40 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-[500px] w-[500px] rounded-full bg-secondary-200/50 blur-3xl" />
        <div className="absolute top-1/3 left-1/3 h-[400px] w-[400px] rounded-full bg-accent-200/30 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 h-[350px] w-[350px] rounded-full bg-tertiary-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 md:px-8 lg:flex-row lg:justify-between">
        {/* Text Content */}
        <div className="mb-12 max-w-xl text-center lg:mb-0 lg:text-left">
          <h1 className="mb-6 text-5xl font-black tracking-tight text-neutral-900 md:text-6xl lg:text-7xl font-display leading-tight">
            우리 아이의 성장을 <br className="hidden md:block" />
            함께하는 <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">ABA 교육 가이드</span>
          </h1>
          <p className="mb-8 text-xl text-neutral-700 md:text-2xl leading-relaxed">
            발달지연 아동을 위한 쉽고 따뜻한 교육 정보
            <br />
            전문가와 함께하는 체계적인 가이드를 만나보세요.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Button variant="primary" size="lg" href="/magazine">
              매거진 보기 →
            </Button>
            <Button variant="secondary" size="lg" href="/guide">
              가이드 시작하기 ✨
            </Button>
          </div>
        </div>

        {/* Illustration Placeholder */}
        <div className="relative w-full max-w-lg lg:w-1/2">
          <div className="aspect-square w-full rounded-[3rem] bg-gradient-to-br from-primary-100 via-secondary-100 to-tertiary-100 p-8 shadow-colored rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="flex h-full items-center justify-center rounded-[2.5rem] border-4 border-dashed border-white bg-white/60 backdrop-blur-sm text-primary-500">
              <span className="text-2xl font-bold font-display">일러스트 영역 🎨</span>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-16 -right-16 -z-10 h-80 w-80 rounded-full bg-secondary-300/50 blur-3xl animate-pulse" />
          <div className="absolute -left-16 -top-16 -z-10 h-80 w-80 rounded-full bg-primary-300/50 blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
          <div className="absolute top-1/2 right-1/4 -z-10 h-60 w-60 rounded-full bg-accent-300/40 blur-2xl animate-pulse" style={{animationDelay: '0.5s'}} />
        </div>
      </div>
    </section>
  );
}
