export interface MagazineItem {
    id: string;
    title: string;
    summary: string;
    category: "카드뉴스" | "만화" | "아티클" | "인포그래픽";
    thumbnail: string;
    date: string;
    href: string;
}

export interface GuideItem {
    id: string;
    icon: "BookOpen" | "Home" | "HelpCircle";
    title: string;
    description: string;
    href: string;
}

export interface NavItem {
    label: string;
    href: string;
}
