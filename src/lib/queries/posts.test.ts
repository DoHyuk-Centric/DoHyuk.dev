import { describe, expect, it } from "vitest";
import path from "node:path";
import { getAllPosts, getPostsByYear } from "./posts";

const FIXTURES_DIR = path.join(import.meta.dirname, "__fixtures__/posts");
const EMPTY_DIR = path.join(import.meta.dirname, "__fixtures__/empty");

describe("getAllPosts", () => {
  it("parses frontmatter and sorts posts by date descending", () => {
    const posts = getAllPosts(FIXTURES_DIR);

    expect(posts.map((post) => post.slug)).toEqual(["post-a", "post-b", "post-c"]);
    expect(posts[0]).toEqual({
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
