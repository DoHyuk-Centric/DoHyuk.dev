import "server-only";
import fs from "node:fs";
import path from "node:path";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

export type Post = {
  slug: string;
  title: string;
  createdAt: string;
  excerpt?: string;
  featured?: boolean;
  coverImage?: string;
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
function findCoverImage(postDir: string, slug: string): string | undefined {
  if (!fs.existsSync(path.join(postDir, "cover.webp"))) return undefined;
  return `/images/posts/${slug}/cover.webp`;
}

function readPost(slug: string, dir: string): PostDetail {
  const postDir = path.join(dir, slug);
  const raw = fs.readFileSync(path.join(postDir, "index.mdx"), "utf-8");
  const { data, content } = parseFrontmatter(raw);
  return {
    slug,
    title: data.title ?? slug,
    createdAt: data.createdAt ?? "",
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

export function getPostBySlug(slug: string, dir: string = POSTS_DIR): PostDetail | null {
  if (!fs.existsSync(path.join(dir, slug, "index.mdx"))) return null;

  return readPost(slug, dir);
}

export function getFeaturedPost(dir: string = POSTS_DIR): Post | null {
  const featured = getAllPosts(dir).filter((post) => post.featured);
  return featured[0] ?? null;
}
