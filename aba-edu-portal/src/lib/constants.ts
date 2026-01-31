import { MagazineItem, GuideItem } from "@/types";

export const MAGAZINE_ITEMS: MagazineItem[] = [
    {
        id: "1",
        title: "강화물 선택, 이렇게 하면 쉬워요",
        summary: "아이가 좋아하는 강화물을 찾는 5가지 방법",
        category: "카드뉴스",
        thumbnail: "/placeholder.jpg",
        date: "2025.01.20",
        href: "/magazine/reinforcement-guide",
    },
    {
        id: "2",
        title: '"안 해!" 대처법 만화',
        summary: "거부 행동에 현명하게 대응하는 방법",
        category: "만화",
        thumbnail: "/placeholder.jpg",
        date: "2025.01.18",
        href: "/magazine/no-response-comic",
    },
    {
        id: "3",
        title: "가정에서 하는 5분 ABA 놀이",
        summary: "바쁜 일상 속 짧은 시간 활용법",
        category: "아티클",
        thumbnail: "/placeholder.jpg",
        date: "2025.01.15",
        href: "/magazine/5min-aba-play",
    },
    {
        id: "4",
        title: "ABA 기본 용어 한눈에 보기",
        summary: "처음 접하는 분들을 위한 용어 정리",
        category: "인포그래픽",
        thumbnail: "/placeholder.jpg",
        date: "2025.01.12",
        href: "/magazine/aba-terms",
    },
];

export const GUIDE_ITEMS: GuideItem[] = [
    {
        id: "1",
        icon: "BookOpen",
        title: "ABA란 무엇인가요?",
        description: "응용행동분석의 기본 개념과 원리를 쉽게 설명합니다.",
        href: "/guide/what-is-aba",
    },
    {
        id: "2",
        icon: "Home",
        title: "가정에서 시작하기",
        description: "전문가 없이도 집에서 할 수 있는 기초 활동을 안내합니다.",
        href: "/guide/home-start",
    },
    {
        id: "3",
        icon: "HelpCircle",
        title: "자주 묻는 질문",
        description: "부모님들이 가장 많이 궁금해하는 질문들을 모았습니다.",
        href: "/guide/faq",
    },
];

export const NAV_LINKS = [
    { label: "매거진", href: "/magazine" },
    { label: "가이드", href: "/guide" },
    { label: "학습자료실", href: "/resources" },
    { label: "AI도구(준비중)", href: "#" },
];
