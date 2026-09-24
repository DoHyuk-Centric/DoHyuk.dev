import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages 정적 배포용. `next build`가 `out/`에 HTML/CSS/JS를 생성한다.
  output: "export",
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
