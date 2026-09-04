# dohyuk.dev

개인 블로그 프로젝트. 프론트엔드, 서버, DB를 전부 직접 구현합니다.

## 스택

- **프레임워크**: Next.js (App Router, TypeScript) — 프론트엔드와 서버 로직을 하나의 앱으로 통합
- **DB**: `node:sqlite` (Node 코어 내장, raw SQL, ORM 미사용)
- **테스트**: Vitest(단위) + Playwright(E2E)

## 구조

```
src/
  app/         라우트, 서버 컴포넌트
  components/  공통 컴포넌트
docs/          설계문서 / 작업기록 / 마일스톤
```
