// GitHub Pages는 커스텀 도메인 없이 배포하면 `/<리포명>/` 하위 경로에서 서비스된다.
// next/link는 basePath를 자동으로 붙이지만, unoptimized 상태의 next/image src는 붙이지 않으므로
// 이미지 경로는 이 함수를 거친다. 값은 next.config.ts의 basePath와 같은 환경변수를 쓴다.
export function withBasePath(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
