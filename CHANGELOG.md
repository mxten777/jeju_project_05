# Changelog

## [2026-02-16] Header & Build Fixes

### 🔧 Fixed (수정 사항)
- **헤더 가독성 문제 해결:**
  - 투명 헤더 상태에서 배경 이미지와 텍스트가 겹칠 때 가독성을 확보하기 위해 Scrim(그라데이션 오버레이)을 추가했습니다.
  - 스크롤 시 화이트 배경으로 전환되는 로직을 강화하여 브랜딩 색상과 대비를 명확히 했습니다.
- **빌드 오류 수정:**
  - `Header.tsx` 내부의 사용하지 않는 변수(`location`, `isDarkHeroPage`)를 제거하여 TypeScript 컴파일 오류를 해결했습니다.
- **Tailwind v4 문법 적용:**
  - 최신 Tailwind 설정에 맞춰 `bg-gradient-to-b` 대신 `bg-linear-to-b` 문법으로 그라데이션 스타일을 통일했습니다.

### ✨ Changed (변경 사항)
- **Header Component 리팩토링:**
  - 반응형 동작을 개선하고, 모바일 메뉴와 PC 메가 메뉴의 상태 관리를 최적화했습니다.
