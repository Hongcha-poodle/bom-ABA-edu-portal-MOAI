---
status: draft
spec_id: SPEC-MAGAZINE-001
---

# 구현 계획: 매거진 목록 페이지

## 1. 작업 분해

### Task 1: 페이지 라우트 생성
- app/magazine/page.tsx 생성
- SectionHeader를 활용한 페이지 타이틀 설정
- SEO 메타데이터 설정

### Task 2: CategoryFilter 컴포넌트
- components/magazine/CategoryFilter.tsx 생성
- 카테고리 칩 UI (전체, 카드뉴스, 만화, 아티클, 인포그래픽)
- 활성/비활성 상태 스타일링

### Task 3: MagazineGrid 컴포넌트
- components/magazine/MagazineGrid.tsx 생성 (Client Component)
- 필터링 로직 (useState + useMemo)
- ContentCard를 활용한 그리드 렌더링
- 반응형 레이아웃 (1/2/3/4 columns)

### Task 4: MagazineEmptyState 컴포넌트
- components/magazine/MagazineEmptyState.tsx 생성
- 빈 상태 메시지 및 아이콘 표시

### Task 5: Mock 데이터 확장
- lib/constants.ts의 MAGAZINE_ITEMS 배열에 추가 콘텐츠 추가
- 최소 8개 이상의 매거진 아이템

### Task 6: 네비게이션 연결
- Header의 매거진 링크가 /magazine으로 연결 확인

## 2. 기술 스택

- Framework: Next.js 16 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS 4
- Icons: Lucide React

## 3. 위험 요소

| 위험 | 영향도 | 완화 전략 |
|------|--------|-----------|
| 콘텐츠 부족 | 낮음 | Mock 데이터 추가로 해결 |
| 필터링 성능 | 낮음 | 현재 데이터 규모에서는 문제 없음 |
| 디자인 일관성 | 중간 | 기존 ContentCard, CategoryBadge 재사용 |

## 4. 예상 산출물

- 새 파일 4개: page.tsx, MagazineGrid.tsx, CategoryFilter.tsx, MagazineEmptyState.tsx
- 수정 파일 1개: constants.ts (mock 데이터 확장)
