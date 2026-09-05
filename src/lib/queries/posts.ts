import "server-only";
import fs from "node:fs";
import path from "node:path";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

export type Post = {
  slug: string;
  title: string;
  createdAt: string;
};

function parseFrontmatter(raw: string): Record<string, string> {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};

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
  return data;
}

export function getAllPosts(dir: string = POSTS_DIR): Post[] {
  if (!fs.existsSync(dir)) return [];

  const filenames = fs.readdirSync(dir).filter((name) => name.endsWith(".mdx"));

  const posts = filenames.map((filename) => {
    const raw = fs.readFileSync(path.join(dir, filename), "utf-8");
    const data = parseFrontmatter(raw);
    return {
      slug: filename.replace(/\.mdx$/, ""),
      title: data.title ?? filename,
      createdAt: data.createdAt ?? "",
    };
  });

  return posts.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export function getPostsByYear(year: number, dir: string = POSTS_DIR): Post[] {
  return getAllPosts(dir).filter((post) => new Date(post.createdAt).getFullYear() === year);
}
