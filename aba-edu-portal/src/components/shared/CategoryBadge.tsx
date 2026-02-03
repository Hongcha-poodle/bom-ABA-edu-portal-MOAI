import { clsx } from "clsx";

interface CategoryBadgeProps {
  category: "카드뉴스" | "만화" | "아티클" | "인포그래픽";
}

export function CategoryBadge({ category }: CategoryBadgeProps) {
  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "카드뉴스":
        return "bg-gradient-to-r from-primary-200 to-primary-300 text-primary-900 border-primary-400";
      case "만화":
        return "bg-gradient-to-r from-secondary-200 to-secondary-300 text-secondary-900 border-secondary-400";
      case "아티클":
        return "bg-gradient-to-r from-accent-200 to-accent-300 text-neutral-900 border-accent-400";
      case "인포그래픽":
        return "bg-gradient-to-r from-tertiary-200 to-tertiary-300 text-tertiary-900 border-tertiary-400";
      default:
        return "bg-neutral-200 text-neutral-700 border-neutral-400";
    }
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-4 py-2 text-sm font-bold backdrop-blur-sm border-2 transition-all duration-300 hover:scale-110",
        getCategoryStyles(category),
      )}
      style={{ fontFamily: "var(--font-display)" }}
    >
      {category}
    </span>
  );
}
