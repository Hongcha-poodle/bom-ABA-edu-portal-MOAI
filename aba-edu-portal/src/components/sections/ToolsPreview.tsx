import { ExternalLink } from "lucide-react";
import { Button } from "../shared/Button";
import { SectionHeader } from "../shared/SectionHeader";

export function ToolsPreview() {
  return (
    <section className="bg-white px-4 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title="🎮 학습 도구"
          description="아이와 함께 사용할 수 있는 교육 도구"
        />

        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-800 to-neutral-900 text-white shadow-soft-lg lg:grid lg:grid-cols-2">
          {/* Screenshot Area (Placeholder) */}
          <div className="relative h-64 w-full bg-neutral-700/50 lg:h-auto">
            <div className="flex h-full items-center justify-center text-neutral-400">
              <span className="text-xl">이미지 준비 중 (스크린샷)</span>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <h3 className="mb-4 text-2xl font-bold">시아 한글 키보드</h3>
            <p className="mb-8 text-neutral-300">
              이미지를 보고 단어를 맞추며 자연스럽게 한글을 익히는 웹 기반 키보드 학습 프로그램입니다.
              PC와 태블릿 모두에서 사용할 수 있습니다.
            </p>
            <div>
              <Button
                variant="primary"
                size="lg"
                href="https://example.com/sia-keyboard"
                target="_blank"
                className="gap-2"
              >
                바로가기
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
