import { clsx } from "clsx";

interface CategoryBadgeProps {
  category: "카드뉴스" | "만화" | "아티클" | "인포그래픽";
}

export function CategoryBadge({ category }: CategoryBadgeProps) {
  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "카드뉴스":
        return "bg-primary-100/90 text-primary-700 border-primary-200/50";
      case "만화":
        return "bg-secondary-100/90 text-secondary-700 border-secondary-200/50";
      case "아티클":
        return "bg-accent-100/90 text-accent-600 border-accent-200/50";
      case "인포그래픽":
        return "bg-info/10 text-info border-info/20";
      default:
        return "bg-neutral-200 text-neutral-600 border-neutral-300/50";
    }
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1.5 text-xs font-semibold backdrop-blur-sm border transition-all duration-300 hover:scale-105",
        getCategoryStyles(category),
      )}
      style={{ fontFamily: "var(--font-body)" }}
    >
      {category}
    </span>
  );
}
