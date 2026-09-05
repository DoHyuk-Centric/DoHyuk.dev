import { describe, expect, it } from "vitest";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { getAllPosts, getPostBySlug, getPostsByYear } from "./posts";

const FIXTURES_DIR = path.join(import.meta.dirname, "__fixtures__/posts");
const EMPTY_DIR = path.join(import.meta.dirname, "__fixtures__/empty");

describe("getAllPosts", () => {
  it("parses frontmatter and sorts posts by date descending", () => {
    const posts = getAllPosts(FIXTURES_DIR);

    expect(posts.map((post) => post.slug)).toEqual(["post-a", "post-b", "post-c"]);
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
      content: "\nfixture post A\n",
    });
  });

  it("returns null when the slug does not exist", () => {
    expect(getPostBySlug("does-not-exist", FIXTURES_DIR)).toBeNull();
  });

  it("parses frontmatter correctly even when the file uses CRLF line endings", () => {
    // Git normalizes CRLF -> LF on commit, so this fixture is generated at
    // runtime instead of checked in, to guarantee the bytes stay CRLF.
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "posts-crlf-"));
    const crlfContent = [
      "---",
      "title: CRLF 게시글",
      "createdAt: 2024-01-01",
      "---",
      "",
      "fixture post CRLF",
      "",
    ].join("\r\n");
    fs.writeFileSync(path.join(tmpDir, "post-crlf.mdx"), crlfContent, "utf-8");

    try {
      const post = getPostBySlug("post-crlf", tmpDir);

      expect(post).toEqual({
        slug: "post-crlf",
        title: "CRLF 게시글",
        createdAt: "2024-01-01",
        content: "\nfixture post CRLF\n",
      });
    } finally {
      fs.rmSync(tmpDir, { recursive: true, force: true });
    }
  });
});
