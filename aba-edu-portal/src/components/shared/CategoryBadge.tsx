import { clsx } from "clsx";

interface CategoryBadgeProps {
  category: "카드뉴스" | "만화" | "아티클" | "인포그래픽";
}

export function CategoryBadge({ category }: CategoryBadgeProps) {
  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "카드뉴스":
        return "bg-primary-100 text-primary-700";
      case "만화":
        return "bg-secondary-100 text-secondary-700";
      case "아티클":
        return "bg-accent-100 text-accent-500";
      case "인포그래픽":
        return "bg-success/20 text-success";
      default:
        return "bg-neutral-200 text-neutral-600";
    }
  };

  return (
    <span
      className={clsx(
        "inline-block rounded-full px-3 py-1.5 text-xs font-medium",
        getCategoryStyles(category)
      )}
    >
      {category}
    </span>
  );
}
