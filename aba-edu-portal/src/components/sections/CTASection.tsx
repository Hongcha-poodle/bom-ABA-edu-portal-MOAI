import { Button } from "../shared/Button";

export function CTASection() {
    return (
        <section className="bg-primary-500 py-16 text-white md:py-24">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 text-center md:flex-row md:px-8 md:text-left">
                <div className="mb-8 md:mb-0">
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                        우리 아이에게 맞는 교육, <br className="hidden md:block" />
                        함께 찾아봐요
                    </h2>
                    <p className="max-w-xl text-lg text-primary-100">
                        전문가가 검증한 자료와 따뜻한 커뮤니티가 기다리고 있습니다.
                    </p>
                </div>
                <div>
                    <Button variant="white" size="lg" href="/start">
                        무료로 시작하기
                    </Button>
                </div>
            </div>
        </section>
    );
}
