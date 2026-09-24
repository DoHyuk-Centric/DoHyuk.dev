import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const CONTENT_POSTS_DIR = path.join(process.cwd(), "content/posts");
const PUBLIC_IMAGES_DIR = path.join(process.cwd(), "public/images/posts");
const MAX_WIDTH = 1600;
const RAW_EXTENSIONS = [".jpg", ".jpeg", ".png"];

async function syncPostCover(slug) {
  const postDir = path.join(CONTENT_POSTS_DIR, slug);
  const entries = fs.readdirSync(postDir);

  const rawCover = entries.find((name) => {
    const ext = path.extname(name).toLowerCase();
    return path.basename(name, ext).toLowerCase() === "cover" && RAW_EXTENSIONS.includes(ext);
  });

  const webpCoverPath = path.join(postDir, "cover.webp");

  if (rawCover) {
    const rawPath = path.join(postDir, rawCover);
    await sharp(rawPath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(webpCoverPath);
    fs.unlinkSync(rawPath);
    console.log(`optimized: ${slug}/${rawCover} -> ${slug}/cover.webp`);
  }

  if (fs.existsSync(webpCoverPath)) {
    const outDir = path.join(PUBLIC_IMAGES_DIR, slug);
    fs.mkdirSync(outDir, { recursive: true });
    fs.copyFileSync(webpCoverPath, path.join(outDir, "cover.webp"));
  }
}

async function run() {
  if (!fs.existsSync(CONTENT_POSTS_DIR)) return;

  const slugs = fs
    .readdirSync(CONTENT_POSTS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  for (const slug of slugs) {
    await syncPostCover(slug);
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
