# dohuyk.dev

개인 블로그 프로젝트. 프론트엔드, 서버, DB를 전부 직접 구현합니다.

## 스택

- **프레임워크**: Next.js (App Router, TypeScript)
- **서버**: `node:http`로 직접 구현한 Node.js 서버 (Express 등 미사용)
- **DB**: `node:sqlite` (Node 코어 내장, raw SQL, ORM 미사용)
- **모노레포**: pnpm workspaces + Turborepo

## 구조

```
apps/
  web/     Next.js 프론트엔드
  server/  커스텀 Node.js 백엔드
docs/      설계문서 / 작업기록 / 마일스톤
```
