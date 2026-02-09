---
id: SPEC-MAGAZINE-001
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

# SPEC-MAGAZINE-001: 매거진 목록 페이지

## 1. 개요

매거진 콘텐츠 전체 목록을 제공하는 `/magazine` 페이지를 구현한다. 카테고리 필터링, 반응형 그리드 레이아웃, 기존 ContentCard 컴포넌트 재사용을 통해 일관된 사용자 경험을 제공한다.

## 2. EARS 요구사항

### 2.1 Ubiquitous Requirements (항상 활성화)

- **REQ-U-001:** 시스템은 항상 전체 매거진 콘텐츠 목록을 그리드 레이아웃으로 표시해야 한다
- **REQ-U-002:** 시스템은 항상 ContentCard 컴포넌트를 재사용하여 일관된 UI를 제공해야 한다
- **REQ-U-003:** 시스템은 항상 모바일(1열), 태블릿(2열), 데스크톱(3-4열) 반응형 레이아웃을 지원해야 한다
- **REQ-U-004:** 시스템은 항상 접근성 표준(ARIA labels, keyboard navigation)을 준수해야 한다

### 2.2 Event-Driven Requirements (이벤트 기반)

- **REQ-E-001:** WHEN 사용자가 카테고리 필터를 클릭하면 THEN 해당 카테고리의 콘텐츠만 즉시 필터링하여 표시한다
- **REQ-E-002:** WHEN 사용자가 "전체" 필터를 선택하면 THEN 모든 카테고리의 콘텐츠를 표시한다
- **REQ-E-003:** WHEN 사용자가 ContentCard를 클릭하면 THEN 해당 매거진 상세 페이지로 이동한다

### 2.3 State-Driven Requirements (상태 기반)

- **REQ-S-001:** IF 선택된 카테고리에 콘텐츠가 없으면 THEN "해당 카테고리에 콘텐츠가 없습니다" 메시지를 표시한다
- **REQ-S-002:** IF 필터가 활성화되어 있으면 THEN 활성 필터 칩에 시각적 강조를 적용한다

### 2.4 Unwanted Behavior (금지 동작)

- **REQ-W-001:** 시스템은 필터링 시 전체 페이지를 새로고침하지 않아야 한다
- **REQ-W-002:** 시스템은 중복된 콘텐츠 카드를 표시하지 않아야 한다

### 2.5 Optional Requirements (선택적 기능)

- **REQ-O-001:** 가능하면 URL 쿼리 파라미터로 필터 상태를 유지한다
- **REQ-O-002:** 가능하면 정렬 옵션(최신순)을 제공한다

## 3. 기술 사양

### 3.1 Route 구조

- app/magazine/page.tsx - 목록 페이지 (Server Component)

### 3.2 컴포넌트 구조

- components/magazine/MagazineGrid.tsx - 그리드 컨테이너 (Client Component)
- components/magazine/CategoryFilter.tsx - 카테고리 필터 칩 (Client Component)
- components/magazine/MagazineEmptyState.tsx - 빈 상태 UI

### 3.3 데이터 모델

기존 MagazineItem 인터페이스를 재사용한다. 필터링은 category 필드 기반으로 동작한다.

카테고리 목록: 전체, 카드뉴스, 만화, 아티클, 인포그래픽

### 3.4 상태 관리

- React useState로 선택된 카테고리 관리
- useMemo로 필터링 결과 메모이제이션

## 4. 종속성

- 선행 조건: 없음 (독립적으로 구현 가능)
- 후속 SPEC: SPEC-MAGAZINE-002 (매거진 상세 페이지)
- 재사용 컴포넌트: ContentCard, CategoryBadge, SectionHeader, Button
