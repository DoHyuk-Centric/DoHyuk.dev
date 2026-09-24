import fs from "node:fs";
import http from "node:http";
import path from "node:path";

// 정적 export 산출물(out/)을 서빙하는 로컬 서버. E2E와 `pnpm start`가 사용한다.
// `next start`는 `output: "export"`에서 동작하지 않는다.
// 요청 경로 해석은 GitHub Pages와 같게 맞춘다: /a -> a.html, /a/ -> a/index.html.
const OUT_DIR = path.join(process.cwd(), "out");
const PORT = Number(process.env.PORT ?? 3000);

const CONTENT_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};

function resolveFile(urlPath) {
  const filePath = path.normalize(path.join(OUT_DIR, decodeURIComponent(urlPath)));
  if (!filePath.startsWith(OUT_DIR)) return null;

  const candidates = [filePath, `${filePath}.html`, path.join(filePath, "index.html")];
  return candidates.find((candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile()) ?? null;
}

function send(res, status, filePath) {
  const type = CONTENT_TYPES[path.extname(filePath)] ?? "application/octet-stream";
  res.writeHead(status, { "Content-Type": type });
  fs.createReadStream(filePath).pipe(res);
}

if (!fs.existsSync(OUT_DIR)) {
  console.error("out/ 폴더가 없습니다. 먼저 `pnpm build`를 실행하세요.");
  process.exit(1);
}

http
  .createServer((req, res) => {
    const { pathname } = new URL(req.url ?? "/", "http://localhost");
    const file = resolveFile(pathname);

    if (file) return send(res, 200, file);

    const notFoundPage = path.join(OUT_DIR, "404.html");
    if (fs.existsSync(notFoundPage)) return send(res, 404, notFoundPage);

    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not Found");
  })
  .listen(PORT, () => console.log(`Serving out/ at http://localhost:${PORT}`));
