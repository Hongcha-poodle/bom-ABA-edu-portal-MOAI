import { clsx } from "clsx";

interface CategoryBadgeProps {
    category: "카드뉴스" | "만화" | "아티클" | "인포그래픽";
}

export function CategoryBadge({ category }: CategoryBadgeProps) {
    const getCategoryColor = (category: string) => {
        switch (category) {
            case "카드뉴스":
                return "bg-primary-500";
            case "만화":
                return "bg-secondary-500";
            case "아티클":
                return "bg-info";
            case "인포그래픽":
                return "bg-success";
            default:
                return "bg-neutral-500";
        }
    };

    return (
        <span
            className={clsx(
                "inline-block rounded-full px-2 py-1 text-xs text-white",
                getCategoryColor(category)
            )}
        >
            {category}
        </span>
    );
}
