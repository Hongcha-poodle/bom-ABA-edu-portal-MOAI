import { BookOpen, Home, HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "../shared/Button";
import { SectionHeader } from "../shared/SectionHeader";
import { GUIDE_ITEMS } from "@/lib/constants";

const ICON_MAP = {
    BookOpen: BookOpen,
    Home: Home,
    HelpCircle: HelpCircle,
};

export function GuidePreview() {
    return (
        <section className="bg-neutral-50 px-4 py-16 md:px-8">
            <div className="mx-auto max-w-7xl">
                <SectionHeader
                    title="📖 입문 가이드"
                    description="처음 시작하는 분들을 위한 단계별 안내"
                    href="/guide"
                    linkText="더보기"
                />

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {GUIDE_ITEMS.map((item) => {
                        const Icon = ICON_MAP[item.icon as keyof typeof ICON_MAP];
                        return (
                            <div
                                key={item.id}
                                className="flex flex-col rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                            >
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-500">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="mb-2 text-xl font-bold text-neutral-900">
                                    {item.title}
                                </h3>
                                <p className="mb-6 flex-1 text-sm text-neutral-600">
                                    {item.description}
                                </p>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full justify-between group"
                                    href={item.href}
                                >
                                    읽어보기
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
