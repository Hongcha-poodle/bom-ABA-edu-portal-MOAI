import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ContentCard } from "../shared/ContentCard";
import { SectionHeader } from "../shared/SectionHeader";
import { MAGAZINE_ITEMS } from "@/lib/constants";

export function MagazinePreview() {
    return (
        <section className="bg-white px-4 py-16 md:px-8">
            <div className="mx-auto max-w-7xl">
                <SectionHeader
                    title="📚 최신 매거진"
                    description="쉽고 재미있게 배우는 ABA 교육 팁"
                    href="/magazine"
                    linkText="더보기"
                />

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {MAGAZINE_ITEMS.map((item) => (
                        <ContentCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
