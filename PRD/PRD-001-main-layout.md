# PRD: 메인 페이지 레이아웃 프레임

## 문서 정보
- **PRD ID**: PRD-001
- **Phase**: 1
- **작성일**: 2025-01-22
- **참조 문서**: CLAUDE.md

---

## Objective (목표)

ABA 교육 포털의 메인 페이지 레이아웃 프레임을 Next.js + Tailwind CSS로 구현한다.
결과물은 반응형 레이아웃이 적용된 정적 UI 컴포넌트이다.

---

## Scope (범위)

### 구현 항목

1. **글로벌 레이아웃**
   - Header 컴포넌트
   - Footer 컴포넌트
   - 모바일 네비게이션 (햄버거 메뉴)

2. **메인 페이지 섹션**
   - Hero 섹션
   - 매거진 프리뷰 섹션
   - 가이드 프리뷰 섹션
   - 학습도구 프리뷰 섹션
   - CTA 섹션

3. **공통 컴포넌트**
   - ContentCard (콘텐츠 카드)
   - CategoryBadge (카테고리 뱃지)
   - SectionHeader (섹션 제목)
   - Button (버튼 variants)

---

## Out of Scope (범위 외)

이번 작업에서 구현하지 않는 항목:

1. 실제 데이터 연동 (하드코딩된 목업 데이터 사용)
2. 검색 기능
3. 로그인/회원가입
4. 페이지 라우팅 동작 (링크 href만 설정)
5. 애니메이션 및 트랜지션 (기본 hover 제외)
6. 다크 모드
7. 국제화 (i18n)

---

## Technical Context (기술적 컨텍스트)

### 기술 스택
| 항목 | 버전 |
|------|------|
| Next.js | 14.x (App Router) |
| TypeScript | 5.x |
| Tailwind CSS | 3.4.x |
| Node.js | 20.x |

### 참조 파일
- 디자인 토큰: PROJECT_CONTEXT.md 섹션 6
- 폴더 구조: PROJECT_CONTEXT.md 섹션 8

### 브레이크포인트
| 이름 | 크기 | 용도 |
|------|------|------|
| mobile | < 640px | 모바일 기본 |
| sm | ≥ 640px | 작은 태블릿 |
| md | ≥ 768px | 태블릿 |
| lg | ≥ 1024px | 데스크톱 |
| xl | ≥ 1280px | 큰 데스크톱 |

---

## Functional Requirements (기능 요구사항)

### FR-001: Header 컴포넌트

1. Header는 페이지 상단에 고정(sticky)된다.
2. 좌측에 로고(텍스트)를 표시한다.
3. 데스크톱(lg 이상)에서 중앙에 네비게이션 링크를 표시한다.
4. 네비게이션 링크: 매거진, 가이드, 학습자료실, AI도구(준비중)
5. 모바일(lg 미만)에서 우측에 햄버거 메뉴 아이콘을 표시한다.
6. 햄버거 메뉴 클릭 시 모바일 네비게이션 패널이 열린다.
7. 모바일 네비게이션 패널은 전체 화면을 덮는 오버레이 형태이다.

### FR-002: Footer 컴포넌트

1. Footer는 페이지 하단에 위치한다.
2. 로고와 간단한 소개 문구를 표시한다.
3. 주요 링크 목록을 표시한다: 매거진, 가이드, 학습자료실
4. 저작권 표시를 포함한다: "© 2025 ABA 에듀 포털"
5. 배경색은 neutral-800을 사용한다.

### FR-003: Hero 섹션

1. 메인 헤드라인을 표시한다: "우리 아이의 성장을 함께하는 ABA 교육 가이드"
2. 서브 헤드라인을 표시한다: "발달지연 아동을 위한 쉽고 따뜻한 교육 정보"
3. CTA 버튼 2개를 표시한다: "매거진 보기" (Primary), "가이드 시작하기" (Secondary)
4. 우측(데스크톱) 또는 하단(모바일)에 일러스트 영역(플레이스홀더)을 배치한다.
5. 배경은 primary-50에서 white로 그라디언트 처리한다.

### FR-004: 매거진 프리뷰 섹션

1. 섹션 제목을 표시한다: "📚 최신 매거진"
2. 섹션 설명을 표시한다: "쉽고 재미있게 배우는 ABA 교육 팁"
3. ContentCard 4개를 그리드로 표시한다.
4. 그리드 레이아웃: 모바일 1열, sm 2열, lg 4열
5. 각 카드는 썸네일(플레이스홀더), 카테고리 뱃지, 제목, 요약을 포함한다.
6. "더보기" 링크를 섹션 우측 상단에 표시한다.

### FR-005: 가이드 프리뷰 섹션

1. 섹션 제목을 표시한다: "📖 입문 가이드"
2. 섹션 설명을 표시한다: "처음 시작하는 분들을 위한 단계별 안내"
3. 가이드 카드 3개를 가로로 표시한다.
4. 각 카드는 아이콘, 제목, 설명, "읽어보기" 버튼을 포함한다.
5. 배경색은 neutral-50을 사용한다.

### FR-006: 학습도구 프리뷰 섹션

1. 섹션 제목을 표시한다: "🎮 학습 도구"
2. 섹션 설명을 표시한다: "아이와 함께 사용할 수 있는 교육 도구"
3. 시아 한글 키보드 카드를 표시한다.
4. 카드에 스크린샷(플레이스홀더), 제목, 설명, "바로가기" 버튼을 포함한다.
5. "바로가기" 버튼은 새 탭에서 열리도록 target="_blank"를 설정한다.

### FR-007: CTA 섹션

1. 배경색은 primary-500을 사용한다.
2. 텍스트 색상은 white를 사용한다.
3. 메시지를 표시한다: "우리 아이에게 맞는 교육, 함께 찾아봐요"
4. CTA 버튼을 표시한다: "무료로 시작하기" (white 배경, primary 텍스트)

### FR-008: ContentCard 컴포넌트

1. 카드는 세로형 레이아웃이다.
2. 상단에 썸네일 이미지 영역(aspect-ratio 16:9)을 표시한다.
3. 썸네일 좌측 상단에 CategoryBadge를 오버레이 표시한다.
4. 하단에 제목(h3), 요약(p), 날짜(span)를 표시한다.
5. hover 시 그림자가 강해진다 (shadow-md → shadow-lg).
6. 카드 전체가 클릭 가능한 링크 영역이다.

### FR-009: CategoryBadge 컴포넌트

1. 카테고리별 색상을 다르게 표시한다:
   - 카드뉴스: primary-500
   - 만화: secondary-500
   - 아티클: info (blue-500)
   - 인포그래픽: success (green-500)
2. 텍스트는 white, 폰트 크기는 text-xs이다.
3. padding은 px-2 py-1, border-radius는 radius-full이다.

### FR-010: SectionHeader 컴포넌트

1. 제목(h2)과 설명(p)을 표시한다.
2. 선택적으로 우측에 "더보기" 링크를 표시한다.
3. 제목과 링크는 flex로 양쪽 정렬한다.

---

## Non-functional Requirements (비기능 요구사항)

### NFR-001: 반응형

1. 모든 컴포넌트는 mobile-first로 작성한다.
2. 320px 화면에서 가로 스크롤이 발생하지 않는다.
3. 1920px 화면에서 콘텐츠 최대 너비는 1280px이다.

### NFR-002: 접근성

1. 모든 버튼은 focus 상태에서 outline이 표시된다.
2. 햄버거 메뉴 버튼에 aria-label="메뉴 열기"를 설정한다.
3. 이미지 플레이스홀더에 alt="이미지 준비 중"을 설정한다.
4. 링크 텍스트는 목적지를 명확히 설명한다.

### NFR-003: 성능

1. 이미지는 next/image 컴포넌트를 사용한다.
2. 아이콘은 lucide-react를 사용한다.

---

## Constraints (제약 조건)

1. Tailwind CSS 클래스만 사용한다. CSS 파일에 커스텀 스타일을 작성하지 않는다.
2. 색상은 PROJECT_CONTEXT.md에 정의된 디자인 토큰만 사용한다.
3. 컴포넌트 파일 하나에 하나의 컴포넌트만 정의한다.
4. "use client" 지시어는 상태가 필요한 컴포넌트에만 사용한다.
5. any 타입 사용을 금지한다.
6. console.log 사용을 금지한다.

---

## Acceptance Criteria (완료 기준)

### AC-001: Header
- Given: 페이지 로드 시
- When: 화면 너비가 1024px 이상일 때
- Then: 네비게이션 링크 4개가 가로로 표시된다.

### AC-002: Header Mobile
- Given: 페이지 로드 시
- When: 화면 너비가 1024px 미만일 때
- Then: 햄버거 메뉴 아이콘이 표시되고 네비게이션 링크는 숨겨진다.

### AC-003: Mobile Navigation
- Given: 모바일 화면에서
- When: 햄버거 메뉴를 클릭할 때
- Then: 전체 화면 네비게이션 패널이 표시된다.

### AC-004: Hero Section
- Given: 메인 페이지 접속 시
- When: Hero 섹션이 표시될 때
- Then: 헤드라인, 서브라인, CTA 버튼 2개가 표시된다.

### AC-005: Magazine Grid
- Given: 메인 페이지 접속 시
- When: 화면 너비가 1024px 이상일 때
- Then: 매거진 카드 4개가 4열 그리드로 표시된다.

### AC-006: Magazine Grid Mobile
- Given: 메인 페이지 접속 시
- When: 화면 너비가 640px 미만일 때
- Then: 매거진 카드가 1열로 세로 배치된다.

### AC-007: ContentCard Hover
- Given: ContentCard가 표시될 때
- When: 마우스를 카드 위에 올릴 때
- Then: 그림자가 shadow-md에서 shadow-lg로 변경된다.

### AC-008: External Link
- Given: 학습도구 섹션의 "바로가기" 버튼
- When: 클릭할 때
- Then: 새 탭에서 시아 한글 키보드 페이지가 열린다.

---

## Output Specification (출력 명세)

### 생성할 파일 목록

```
src/
├── app/
│   ├── layout.tsx              # 루트 레이아웃
│   ├── page.tsx                # 메인 페이지
│   └── globals.css             # 글로벌 스타일 (Tailwind 설정만)
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileNav.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── MagazinePreview.tsx
│   │   ├── GuidePreview.tsx
│   │   ├── ToolsPreview.tsx
│   │   └── CTASection.tsx
│   └── shared/
│       ├── ContentCard.tsx
│       ├── CategoryBadge.tsx
│       ├── SectionHeader.tsx
│       └── Button.tsx
├── lib/
│   └── constants.ts            # 목업 데이터
└── types/
    └── index.ts                # 타입 정의
```

### 출력 규칙

1. 각 파일에 TypeScript 타입을 명시한다.
2. 컴포넌트는 named export를 사용한다.
3. Props 인터페이스는 컴포넌트 파일 상단에 정의한다.
4. 주석은 한국어로 작성한다.

---

## 목업 데이터

### 매거진 카드 데이터

```typescript
const magazineItems = [
  {
    id: "1",
    title: "강화물 선택, 이렇게 하면 쉬워요",
    summary: "아이가 좋아하는 강화물을 찾는 5가지 방법",
    category: "카드뉴스",
    thumbnail: "/placeholder.jpg",
    date: "2025.01.20",
    href: "/magazine/reinforcement-guide"
  },
  {
    id: "2",
    title: "\"안 해!\" 대처법 만화",
    summary: "거부 행동에 현명하게 대응하는 방법",
    category: "만화",
    thumbnail: "/placeholder.jpg",
    date: "2025.01.18",
    href: "/magazine/no-response-comic"
  },
  {
    id: "3",
    title: "가정에서 하는 5분 ABA 놀이",
    summary: "바쁜 일상 속 짧은 시간 활용법",
    category: "아티클",
    thumbnail: "/placeholder.jpg",
    date: "2025.01.15",
    href: "/magazine/5min-aba-play"
  },
  {
    id: "4",
    title: "ABA 기본 용어 한눈에 보기",
    summary: "처음 접하는 분들을 위한 용어 정리",
    category: "인포그래픽",
    thumbnail: "/placeholder.jpg",
    date: "2025.01.12",
    href: "/magazine/aba-terms"
  }
];
```

### 가이드 카드 데이터

```typescript
const guideItems = [
  {
    id: "1",
    icon: "BookOpen",
    title: "ABA란 무엇인가요?",
    description: "응용행동분석의 기본 개념과 원리를 쉽게 설명합니다.",
    href: "/guide/what-is-aba"
  },
  {
    id: "2",
    icon: "Home",
    title: "가정에서 시작하기",
    description: "전문가 없이도 집에서 할 수 있는 기초 활동을 안내합니다.",
    href: "/guide/home-start"
  },
  {
    id: "3",
    icon: "HelpCircle",
    title: "자주 묻는 질문",
    description: "부모님들이 가장 많이 궁금해하는 질문들을 모았습니다.",
    href: "/guide/faq"
  }
];
```

---

## 참고 이미지

메인 페이지 와이어프레임:

```
┌─────────────────────────────────────────┐
│  [Logo]     매거진  가이드  자료실  ≡   │  ← Header (sticky)
├─────────────────────────────────────────┤
│                                         │
│   우리 아이의 성장을        ┌─────────┐ │
│   함께하는 ABA 교육 가이드  │         │ │
│                             │ 일러스트│ │
│   [매거진 보기] [가이드]    │         │ │
│                             └─────────┘ │
│                                         │  ← Hero Section
├─────────────────────────────────────────┤
│  📚 최신 매거진                  더보기 │
│  ┌───┐ ┌───┐ ┌───┐ ┌───┐               │
│  │ 1 │ │ 2 │ │ 3 │ │ 4 │               │
│  └───┘ └───┘ └───┘ └───┘               │  ← Magazine Preview
├─────────────────────────────────────────┤
│  📖 입문 가이드              (bg: gray) │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐   │
│  │ ABA란?  │ │ 가정에서│ │  FAQ    │   │
│  └─────────┘ └─────────┘ └─────────┘   │  ← Guide Preview
├─────────────────────────────────────────┤
│  🎮 학습 도구                           │
│  ┌───────────────────────────────┐      │
│  │  시아 한글 키보드    [바로가기]│      │
│  └───────────────────────────────┘      │  ← Tools Preview
├─────────────────────────────────────────┤
│  ████████████████████████████████████   │
│  우리 아이에게 맞는 교육, 함께 찾아봐요 │
│           [무료로 시작하기]             │  ← CTA Section
├─────────────────────────────────────────┤
│  [Logo]  매거진 | 가이드 | 자료실       │
│  © 2025 ABA 에듀 포털                   │  ← Footer
└─────────────────────────────────────────┘
```

---

## 버전 히스토리

| 버전 | 날짜 | 변경 내용 |
|------|------|----------|
| 1.0 | 2025-01-22 | 최초 작성 |