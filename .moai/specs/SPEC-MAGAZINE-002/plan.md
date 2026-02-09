---
status: draft
spec_id: SPEC-MAGAZINE-002
---

# 구현 계획: 매거진 상세 페이지

## 1. 작업 분해

### Task 1: 데이터 모델 확장
- types/index.ts에 slug, content, author, readTime, tags 필드 추가
- lib/constants.ts의 mock 데이터에 상세 콘텐츠 추가

### Task 2: 상세 페이지 라우트 생성
- app/magazine/[slug]/page.tsx 생성 (Server Component)
- slug 파라미터로 데이터 조회
- generateMetadata 함수로 동적 SEO 메타데이터
- generateStaticParams 함수로 정적 경로 생성
- notFound() 호출로 없는 콘텐츠 처리

### Task 3: MagazineDetailBreadcrumb 컴포넌트
- components/magazine/MagazineDetailBreadcrumb.tsx 생성
- 홈 > 매거진 > 제목 경로 표시
- 클릭 가능한 링크

### Task 4: MagazineDetailHeader 컴포넌트
- components/magazine/MagazineDetailHeader.tsx 생성
- 제목, 카테고리 배지, 날짜 표시
- 작성자, 읽기 시간 (선택적)
- 히어로 이미지

### Task 5: MagazineDetailContent 컴포넌트
- components/magazine/MagazineDetailContent.tsx 생성
- HTML 콘텐츠 렌더링
- 타이포그래피 스타일링

### Task 6: RelatedContentSection 컴포넌트
- components/magazine/RelatedContentSection.tsx 생성
- 동일 카테고리 필터링 로직
- ContentCard 재사용

### Task 7: 404 페이지
- app/magazine/[slug]/not-found.tsx 생성
- 안내 메시지 및 목록 페이지 링크

## 2. 기술 스택

- Framework: Next.js 16 (App Router, Dynamic Routes)
- Language: TypeScript
- Styling: Tailwind CSS 4
- Icons: Lucide React

## 3. 위험 요소

| 위험 | 영향도 | 완화 전략 |
|------|--------|-----------|
| 콘텐츠 HTML 보안 | 중간 | 신뢰할 수 있는 내부 데이터만 사용 |
| SEO 메타데이터 | 낮음 | generateMetadata 활용 |
| 이미지 외부 도메인 | 낮음 | next.config에 domains 설정 확인 |

## 4. 예상 산출물

- 새 파일 6개: page.tsx, not-found.tsx, MagazineDetailHeader.tsx, MagazineDetailContent.tsx, MagazineDetailBreadcrumb.tsx, RelatedContentSection.tsx
- 수정 파일 2개: types/index.ts, constants.ts
