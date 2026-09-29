import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const CONTENT_POSTS_DIR = path.join(process.cwd(), "content/posts");
const PUBLIC_IMAGES_DIR = path.join(process.cwd(), "public/images/posts");
const MAX_WIDTH = 1600;
const RAW_EXTENSIONS = [".jpg", ".jpeg", ".png"];

// 한 디렉터리 안의 원본(jpg/png)을 webp로 최적화하고 원본은 지운 뒤,
// 같은 상대 위치로 public 쪽 디렉터리에 복사한다.
async function syncImageDir(sourceDir, outDir) {
  if (!fs.existsSync(sourceDir)) return;

  const entries = fs.readdirSync(sourceDir);
  const rawImages = entries.filter((name) => RAW_EXTENSIONS.includes(path.extname(name).toLowerCase()));

  for (const rawImage of rawImages) {
    const ext = path.extname(rawImage);
    const basename = path.basename(rawImage, ext);
    const rawPath = path.join(sourceDir, rawImage);
    const webpPath = path.join(sourceDir, `${basename}.webp`);

    await sharp(rawPath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(webpPath);
    fs.unlinkSync(rawPath);
    console.log(`optimized: ${path.relative(CONTENT_POSTS_DIR, rawPath)} -> ${path.relative(CONTENT_POSTS_DIR, webpPath)}`);
  }

  const webpImages = fs.readdirSync(sourceDir).filter((name) => path.extname(name).toLowerCase() === ".webp");
  if (webpImages.length === 0) return;

  fs.mkdirSync(outDir, { recursive: true });
  for (const webpImage of webpImages) {
    fs.copyFileSync(path.join(sourceDir, webpImage), path.join(outDir, webpImage));
  }
}

// 커버는 포스트 폴더 바로 아래(cover.*), 본문 이미지는 그 안의 images/ 서브폴더에
// 몰아 둔다. 폴더가 index.mdx/cover만으로 깔끔하게 유지되게 하려는 컨벤션이다.
async function syncPostImages(slug) {
  const postDir = path.join(CONTENT_POSTS_DIR, slug);
  const outDir = path.join(PUBLIC_IMAGES_DIR, slug);

  await syncImageDir(postDir, outDir);
  await syncImageDir(path.join(postDir, "images"), path.join(outDir, "images"));
}

async function run() {
  if (!fs.existsSync(CONTENT_POSTS_DIR)) return;

  const slugs = fs
    .readdirSync(CONTENT_POSTS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  for (const slug of slugs) {
    await syncPostImages(slug);
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
