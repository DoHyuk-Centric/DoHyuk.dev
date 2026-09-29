import "server-only";
import fs from "node:fs";
import path from "node:path";
import { CATEGORY_KEYS, isCategory, type Category } from "@/lib/categories";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

export type Post = {
  slug: string;
  title: string;
  createdAt: string;
  category: Category;
  excerpt?: string;
  featured?: boolean;
  coverImage: string;
};

export type PostDetail = Post & { content: string };

function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  const normalized = raw.replace(/\r\n/g, "\n");
  const match = normalized.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: normalized };

  const data: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) continue;
    const key = line.slice(0, separatorIndex).trim();
    const value = line
      .slice(separatorIndex + 1)
      .trim()
      .replace(/^["']|["']$/g, "");
    data[key] = value;
  }
  return { data, content: match[2] };
}

// A post's cover image is convention-based, not a frontmatter field: dropping
// content/posts/<slug>/cover.* is enough. scripts/sync-images.mjs optimizes it
// to cover.webp and copies it into public/images/posts/<slug>/ before dev/build.
// 커버 이미지는 필수다. 없으면 빌드를 멈춘다.
function findCoverImage(postDir: string, slug: string): string {
  if (!fs.existsSync(path.join(postDir, "cover.webp"))) {
    throw new Error(`[posts] "${slug}" has no cover image. Add content/posts/${slug}/cover.*`);
  }
  return `/images/posts/${slug}/cover.webp`;
}

function readPost(slug: string, dir: string): PostDetail {
  const postDir = path.join(dir, slug);
  const raw = fs.readFileSync(path.join(postDir, "index.mdx"), "utf-8");
  const { data, content } = parseFrontmatter(raw);
  // category는 필수다. 빠졌거나 등록되지 않은 값이면 빌드를 멈춰 오타가 배포되지 않게 한다.
  if (!isCategory(data.category)) {
    throw new Error(
      `[posts] "${slug}" has invalid category "${data.category ?? ""}". Expected one of: ${CATEGORY_KEYS.join(", ")}`,
    );
  }
  return {
    slug,
    title: data.title ?? slug,
    createdAt: data.createdAt ?? "",
    category: data.category,
    excerpt: data.excerpt,
    featured: data.featured === "true",
    coverImage: findCoverImage(postDir, slug),
    content,
  };
}

export function getAllPosts(dir: string = POSTS_DIR): Post[] {
  if (!fs.existsSync(dir)) return [];

  const slugs = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((slug) => fs.existsSync(path.join(dir, slug, "index.mdx")));

  const posts = slugs.map((slug) => readPost(slug, dir));

  return posts.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export function getPostsByYear(year: number, dir: string = POSTS_DIR): Post[] {
  return getAllPosts(dir).filter((post) => new Date(post.createdAt).getFullYear() === year);
}

export function getPostsSince(startYear: number, dir: string = POSTS_DIR): Post[] {
  return getAllPosts(dir).filter((post) => new Date(post.createdAt).getFullYear() >= startYear);
}

export function getPostsByCategory(category: Category, dir: string = POSTS_DIR): Post[] {
  return getAllPosts(dir).filter((post) => post.category === category);
}

export function getPostBySlug(slug: string, dir: string = POSTS_DIR): PostDetail | null {
  if (!fs.existsSync(path.join(dir, slug, "index.mdx"))) return null;

  return readPost(slug, dir);
}

export function getFeaturedPost(dir: string = POSTS_DIR): Post | null {
  const featured = getAllPosts(dir).filter((post) => post.featured);
  return featured[0] ?? null;
}
