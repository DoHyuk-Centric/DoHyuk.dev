import { describe, expect, it } from "vitest";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { getAllPosts, getFeaturedPost, getPostBySlug, getPostsByYear } from "./posts";

const FIXTURES_DIR = path.join(import.meta.dirname, "__fixtures__/posts");
const EMPTY_DIR = path.join(import.meta.dirname, "__fixtures__/empty");

describe("getAllPosts", () => {
  it("parses frontmatter and sorts posts by date descending", () => {
    const posts = getAllPosts(FIXTURES_DIR);

    expect(posts.map((post) => post.slug)).toEqual([
      "post-a",
      "post-b",
      "post-featured",
      "post-c",
    ]);
    expect(posts[0]).toMatchObject({
      slug: "post-a",
      title: "A 게시글",
      createdAt: "2026-08-28",
    });
  });

  it("returns an empty array when the directory does not exist", () => {
    expect(getAllPosts(EMPTY_DIR)).toEqual([]);
  });
});

describe("getPostsByYear", () => {
  it("filters posts to the given year", () => {
    const posts = getPostsByYear(2026, FIXTURES_DIR);

    expect(posts.map((post) => post.slug)).toEqual(["post-a", "post-b"]);
  });

  it("returns an empty array when no posts match the year", () => {
    expect(getPostsByYear(1999, FIXTURES_DIR)).toEqual([]);
  });
});

describe("getPostBySlug", () => {
  it("returns the post with its body content", () => {
    const post = getPostBySlug("post-a", FIXTURES_DIR);

    expect(post).toEqual({
      slug: "post-a",
      title: "A 게시글",
      createdAt: "2026-08-28",
      featured: false,
      coverImage: "/images/posts/post-a/cover.webp",
      content: "\nfixture post A\n",
    });
  });

  it("returns undefined coverImage when the post folder has no cover.webp", () => {
    const post = getPostBySlug("post-b", FIXTURES_DIR);

    expect(post?.coverImage).toBeUndefined();
  });

  it("returns null when the slug does not exist", () => {
    expect(getPostBySlug("does-not-exist", FIXTURES_DIR)).toBeNull();
  });

  it("parses frontmatter correctly even when the file uses CRLF line endings", () => {
    // Git normalizes CRLF -> LF on commit, so this fixture is generated at
    // runtime instead of checked in, to guarantee the bytes stay CRLF.
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "posts-crlf-"));
    const postDir = path.join(tmpDir, "post-crlf");
    fs.mkdirSync(postDir);
    const crlfContent = [
      "---",
      "title: CRLF 게시글",
      "createdAt: 2024-01-01",
      "---",
      "",
      "fixture post CRLF",
      "",
    ].join("\r\n");
    fs.writeFileSync(path.join(postDir, "index.mdx"), crlfContent, "utf-8");

    try {
      const post = getPostBySlug("post-crlf", tmpDir);

      expect(post).toEqual({
        slug: "post-crlf",
        title: "CRLF 게시글",
        createdAt: "2024-01-01",
        featured: false,
        content: "\nfixture post CRLF\n",
      });
    } finally {
      fs.rmSync(tmpDir, { recursive: true, force: true });
    }
  });
});

describe("getFeaturedPost", () => {
  it("returns the post marked as featured", () => {
    const post = getFeaturedPost(FIXTURES_DIR);

    expect(post).toMatchObject({
      slug: "post-featured",
      title: "대표 게시글",
      excerpt: "이 글이 카드로 보여지는 대표 게시글입니다.",
      featured: true,
    });
  });

  it("returns null when no post is featured", () => {
    expect(getFeaturedPost(EMPTY_DIR)).toBeNull();
  });
});
