---
id: SPEC-MAGAZINE-002
version: "1.0.0"
status: draft
created: "2026-02-09"
updated: "2026-02-09"
author: MoAI
priority: high
lifecycle_level: spec-first
---

## HISTORY

| 버전 | 날짜 | 작성자 | 변경 내용 |
|------|------|--------|-----------|
| 1.0.0 | 2026-02-09 | MoAI | 초기 SPEC 작성 |

---

# SPEC-MAGAZINE-002: 매거진 상세 페이지

## 1. 개요

개별 매거진 콘텐츠를 표시하는 /magazine/[slug] 상세 페이지를 구현한다. 콘텐츠 본문 표시, Breadcrumb 네비게이션, 관련 콘텐츠 추천 기능을 포함한다.

## 2. EARS 요구사항

### 2.1 Ubiquitous Requirements (항상 활성화)

- **REQ-U-001:** 시스템은 항상 매거진 콘텐츠의 제목, 카테고리, 날짜, 전체 내용을 표시해야 한다
- **REQ-U-002:** 시스템은 항상 읽기 편한 타이포그래피와 레이아웃을 제공해야 한다
- **REQ-U-003:** 시스템은 항상 모바일 우선 반응형 디자인을 적용해야 한다
- **REQ-U-004:** 시스템은 항상 Breadcrumb 네비게이션을 제공해야 한다

### 2.2 Event-Driven Requirements (이벤트 기반)

- **REQ-E-001:** WHEN 사용자가 존재하지 않는 slug로 접근하면 THEN 404 페이지를 표시한다
- **REQ-E-002:** WHEN 사용자가 "목록으로 돌아가기"를 클릭하면 THEN /magazine 페이지로 이동한다
- **REQ-E-003:** WHEN 사용자가 관련 콘텐츠 카드를 클릭하면 THEN 해당 상세 페이지로 이동한다
- **REQ-E-004:** WHEN 페이지가 로드되면 THEN 동일 카테고리의 관련 콘텐츠를 최대 3개 추천한다

### 2.3 State-Driven Requirements (상태 기반)

- **REQ-S-001:** IF 관련 콘텐츠가 없으면 THEN 추천 섹션을 표시하지 않는다
- **REQ-S-002:** IF 이미지 로딩에 실패하면 THEN fallback 처리로 레이아웃이 깨지지 않아야 한다

### 2.4 Unwanted Behavior (금지 동작)

- **REQ-W-001:** 시스템은 잘못된 slug로 인한 에러를 사용자에게 직접 노출하지 않아야 한다
- **REQ-W-002:** 시스템은 콘텐츠가 없는 빈 페이지를 렌더링하지 않아야 한다

### 2.5 Optional Requirements (선택적 기능)

- **REQ-O-001:** 가능하면 예상 읽기 시간을 표시한다
- **REQ-O-002:** 가능하면 작성자 정보를 표시한다
- **REQ-O-003:** 가능하면 "맨 위로" 버튼을 제공한다

## 3. 기술 사양

### 3.1 Route 구조

- app/magazine/[slug]/page.tsx - 상세 페이지 (Server Component)
- app/magazine/[slug]/not-found.tsx - 404 페이지

### 3.2 컴포넌트 구조

- components/magazine/MagazineDetailHeader.tsx - 헤더 (제목, 카테고리, 날짜)
- components/magazine/MagazineDetailContent.tsx - 본문 콘텐츠
- components/magazine/MagazineDetailBreadcrumb.tsx - Breadcrumb 네비게이션
- components/magazine/RelatedContentSection.tsx - 관련 콘텐츠 추천

### 3.3 데이터 모델 확장

MagazineItem 인터페이스에 상세 페이지용 필드를 추가한다:

- slug: string - URL slug
- content: string - 전체 콘텐츠 (HTML)
- author: string (선택) - 작성자
- readTime: number (선택) - 예상 읽기 시간 (분)
- tags: string[] (선택) - 태그

### 3.4 SEO

- generateMetadata 함수로 각 페이지에 고유한 메타데이터 생성
- Open Graph 태그 포함

### 3.5 관련 콘텐츠 로직

- 동일 카테고리의 다른 콘텐츠를 필터링
- 현재 콘텐츠 제외
- 최대 3개 표시
- ContentCard 컴포넌트 재사용

## 4. 종속성

- 선행 조건: SPEC-MAGAZINE-001 (데이터 구조 공유)
- 재사용 컴포넌트: ContentCard, CategoryBadge, Button
