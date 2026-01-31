import Image from "next/image";
import Link from "next/link";
import { CategoryBadge } from "./CategoryBadge";
import { MagazineItem } from "@/types";

interface ContentCardProps {
    item: MagazineItem;
}

export function ContentCard({ item }: ContentCardProps) {
    return (
        <Link href={item.href} className="group block h-full">
            <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                {/* Thumbnail Area */}
                <div className="relative aspect-video w-full overflow-hidden bg-neutral-200">
                    <div className="absolute left-3 top-3 z-10">
                        <CategoryBadge category={item.category} />
                    </div>
                    {/* Placeholder Image because actual images might not exist */}
                    <div className="flex h-full w-full items-center justify-center bg-neutral-100 text-neutral-400">
                        {/* Use Next.js Image if we had real paths, for now use a colored placeholder or icon */}
                        <span className="text-4xl">📚</span>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex flex-1 flex-col p-4">
                    <h3 className="mb-2 text-lg font-bold leading-tight text-neutral-900 group-hover:text-primary-500 transition-colors">
                        {item.title}
                    </h3>
                    <p className="mb-4 line-clamp-2 flex-1 text-sm text-neutral-600">
                        {item.summary}
                    </p>
                    <span className="text-xs text-neutral-400">{item.date}</span>
                </div>
            </div>
        </Link>
    );
}
