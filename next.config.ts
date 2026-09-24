import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages 정적 배포용. `next build`가 `out/`에 HTML/CSS/JS를 생성한다.
  output: "export",
  // 커스텀 도메인 없이 배포하면 `/<리포명>` 하위 경로가 된다. 워크플로우가 값을 넣어 주고,
  // 로컬/E2E/커스텀 도메인에서는 비어 있다. (이미지 src는 src/lib/basePath.ts가 처리)
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  images: {
    // 정적 export에서는 기본 이미지 최적화 서버를 쓸 수 없다.
    // 게시글 이미지는 scripts/sync-images.mjs가 미리 리사이징/WebP로 변환해 둔다.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
    ],
  },
};

export default nextConfig;
