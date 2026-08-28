# CLAUDE.md

## 테스트

- **단위 테스트**: Vitest — React 컴포넌트와 Route Handler·`src/lib` 양쪽 다 커버
- **E2E 테스트**: Playwright
- **타입체크**: `tsc --noEmit` (`package.json`의 `typecheck` 스크립트, `pnpm typecheck`). Next.js는 SWC/Turbopack으로 트랜스파일하므로 `tsc`는 오직 타입 검사 용도로만 쓰고 파일을 emit하지 않는다
- 단위 테스트 실행 방법, 커버리지 기준: TBD

### Pre-commit 훅

- `.husky/pre-commit`이 커밋 시 자동 실행됨
- **코드가 변경된 커밋에서만** 타입체크 + 단위 테스트 + 빌드 + E2E 테스트(`pnpm typecheck && pnpm test && pnpm build && pnpm test:e2e`)를 돌린다
- E2E는 `next start`로 앱을 띄우므로 **빌드가 반드시 선행되어야 한다** (모노레포 시절에는 turbo의 `dependsOn`이 처리했다)
- 스테이징된 파일이 전부 `*.md` 또는 `docs/` 하위인 경우(문서 전용 변경) → 테스트를 건너뛴다
- 그 외(코드/설정 파일 변경이 하나라도 포함된 경우) → 반드시 통과해야 커밋된다

## 문서화 전략

두 가지(+1) 성격이 다른 문서를 구분해서 관리한다. 톤과 양식을 섞지 않는다.

### 1) 설계문서 (사전, 격식 있는 양식)

- **작성 시점**: 새 기능을 추가/설계할 때마다, 구현 시작 전
- **톤**: 딱딱한 개발 설계문서 양식 그대로. 블로그 톤으로 풀어쓰지 않는다
- **템플릿**: `docs/templates/design-doc-template.md` (양식은 이걸 그대로 따른다)
- **저장 위치**: **Notion** `DoHyuk.dev` 페이지의 하위 페이지. 명세서들과 같은 곳에 모아 상호 참조가 되게 한다
- 작은 기능이라도 설계 판단이 하나라도 들어가면 간단히라도 남긴다

### 2) 작업 기록 (사후, 블로그 형태)

- **작성 시점**: 작업이 끝난 뒤
- **톤**: 블로그 글처럼 자연스러운 서술체. 왜 이 작업을 했는지, 시행착오·배운 점을 이야기하듯 서술. 표/체크리스트 위주가 아니라 문단 중심
- **저장 위치**: `docs/worklogs/YYYY-MM-DD-작업명.md`

| 작업 유형 | 참고 템플릿 |
|---|---|
| 기능 개발 (feat) | `docs/templates/feat-log-template.md` |
| 버그 수정 (fix) | `docs/templates/fix-log-template.md` |
| 디자인/UI 작업 | `docs/templates/design-log-template.md` |

- 설계문서 = "왜 이렇게 만들기로 했는가", 작업 기록 = "실제로 어떻게 진행됐고 무엇을 배웠는가". 둘을 혼동하지 않는다
- 이미 존재하는 기능을 리팩토링/변경했다면 새 문서를 만들지 않고, 기존 문서를 먼저 찾아 그 안에 이어서 기록한다
  - 원본이 설계문서라면 → "변경 이력" 섹션에 추가
  - 원본이 작업기록이라면 → "추가 개선사항 / 변경사항" 섹션에 추가
  - 변경 이력 추가 시 **작성자**를 반드시 함께 기록한다

### 3) 마일스톤(기능별 진행도) 문서

- **저장 위치**: `docs/milestones/기능명.md`
- **작성 시점**: 요구사항 명세서 상의 기능 단위(마일스톤) 하나가 완전히 종료됐을 때
- **역할**: 그 기능을 구현하며 만들어진 설계문서·작업기록들을 한 곳에 모아 보여주는 인덱스 문서. 개별 문서는 흩어져 있어도 마일스톤 문서 하나로 전체 흐름을 추적할 수 있게 한다
- **템플릿**: `docs/templates/milestone-template.md`

## Git 워크플로우

- **브랜치 전략**: `docs/git-flow.md` 참고 — `타입/이슈번호-요약` 형식(영문, kebab-case), `develop`에서 분기, PR로만 머지
- **커밋 메시지**: `docs/commit-convention.md` 참고 — `타입: 제목 (#이슈번호)` 형식, 한 커밋 한 목적
- 기본 브랜치는 `develop`. `main`은 릴리스용
- 리베이스 vs 머지 정책: TBD

## 아키텍처

2026-08-26에 `apps/server`(`node:http`)를 폐기하고 **Next.js 단독 구조**로 가기로 결정했다. 근거는 Notion의 「아키텍처 설계문서 (Next.js 단독 구조)」에 있다.

- **앱 하나가 프론트와 서버 로직을 모두 담당한다.** 리포 루트가 곧 Next.js 앱이다 (`src/app/`, `src/lib/`)
- **데이터 접근 경로는 셋으로 나뉜다** — 조회는 서버 컴포넌트가 `src/lib/queries/`를 직접 호출하고, 변경은 Server Actions(`src/lib/actions/`)로 처리하며, Route Handler(`src/app/api/`)는 브라우저·외부 서비스가 URL로 직접 접근해야 하는 것(OAuth 콜백, SSE, RSS, sitemap, 조회 기록)에만 둔다
- **자기 서버에 HTTP로 조회를 요청하지 않는다.** 같은 프로세스이므로 직렬화 비용만 늘고, 첫 HTML에 데이터가 없어 "깜빡임 없이 표시" 요구가 깨진다
- 비즈니스 로직과 DB 접근이 두 곳으로 흩어지지 않게 한다. 로직은 `src/lib/`에 두고 Route Handler는 얇게 유지한다
- DB는 `node:sqlite`를 생 SQL로 직접 사용한다. Route Handler에서 쓰려면 `export const runtime = "nodejs"`가 필요하고(Edge 런타임엔 `node:sqlite`가 없다), 커넥션은 HMR 중복 생성을 막기 위해 `globalThis` 싱글톤으로 감싼다
- SQLite 파일을 쓰므로 **Vercel 등 서버리스에는 배포할 수 없다.** EC2에서 `next start`로 상주 구동한다
- 빌드는 GitHub Actions에서 하고 EC2는 실행만 한다 — 인스턴스가 t3.micro(1 GiB)라 서버에서 `next build`를 돌리면 OOM이 난다

**전환 완료**: `apps/server`를 제거하고 모노레포(turbo, pnpm workspace)를 평탄화했다. 이제 `apps/` 계층이 없고 리포 루트가 곧 앱이다.

남은 후속 작업: `src/lib/db.ts`를 데이터 관리 설계문서 기준으로 새로 작성(PRAGMA·`globalThis` 싱글턴·`server-only`·`user_version` 마이그레이션), `deploy.yml`을 "Actions에서 빌드 → 산출물만 EC2로 전송" 방식으로 재작성.

## 하지 말아야 할 것

- 승인 없이 Express 등 서버 프레임워크, ORM(Prisma 등), 외부 DB 드라이버(`pg`, `mysql2` 등)를 추가하지 않는다 — DB를 직접 다루는 것이 이 프로젝트의 핵심 제약이다
- `.env`, 시크릿 값을 커밋하지 않는다
- SQLite 파일을 리포 안에 두지 않는다. 경로는 `DB_PATH` 환경변수로 받는다 (배포가 `git pull` 기반이라 덮어쓸 위험이 있음)
- 사용자가 직접 설계하기로 한 영역(ESLint 설정 등)을 AI가 임의로 만들지 않는다
- 대규모/구조적 변경(DB 엔진 교체, 배포 방식 변경, 호스팅 이전 등) 전에는 반드시 먼저 물어본다
- 작업과 무관한 코드를 임의로 리팩토링하지 않는다
- 사용자가 코드 작성과 수정을 원할때만 코드를 건드린다

## 추가 참고 사항

- **명세서와 설계문서는 Notion의 `DoHyuk.dev` 페이지 하위에 있다** — 요구사항 명세서, 기능 명세서, 서버 인터페이스 명세서, 아키텍처 설계문서, 인증 설계문서, 데이터 관리 설계문서
- 리포의 `docs/`에는 템플릿(`docs/templates/`), Git 규칙(`docs/git-flow.md`, `docs/commit-convention.md`)이 있다
- 도메인은 `dohyuk.dev`다 (`dohuyk`가 아니다). 현재는 Vercel의 구 바닐라 JS 사이트를 가리키고 있고, 전환 시 EC2로 A 레코드를 옮긴다

