import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

const { getAllPostsMock } = vi.hoisted(() => ({
  getAllPostsMock: vi.fn(),
}));

vi.mock("@/lib/queries/posts", () => ({
  getAllPosts: getAllPostsMock,
}));

import Home from "./page";

const makePost = (slug: string, fields: Record<string, unknown>) => ({
  slug,
  coverImage: `/images/posts/${slug}/cover.webp`,
  ...fields,
});

describe("Home page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders every post as a card", () => {
    getAllPostsMock.mockReturnValue([
      makePost("a", { title: "첫 글", createdAt: "2026-08-28", category: "experience" }),
      makePost("b", { title: "둘째 글", createdAt: "2025-01-01", category: "troubleshooting" }),
    ]);

    render(Home());

    expect(screen.getAllByRole("heading", { level: 3 }).map((h) => h.textContent)).toEqual([
      "첫 글",
      "둘째 글",
    ]);
    expect(screen.getByText("문제해결")).toBeInTheDocument();
  });

  it("moves the featured post to the first card", () => {
    getAllPostsMock.mockReturnValue([
      makePost("new", { title: "최신 글", createdAt: "2026-08-28", category: "experience" }),
      makePost("featured", {
        title: "대표 게시글 제목",
        createdAt: "2026-01-01",
        category: "experience",
        featured: true,
      }),
    ]);

    render(Home());

    const titles = screen.getAllByRole("heading", { level: 3 }).map((h) => h.textContent);
    expect(titles).toEqual(["대표 게시글 제목", "최신 글"]);
    expect(screen.getByText("경험 · 대표 글")).toBeInTheDocument();
  });

  it("shows the empty state when there are no posts", () => {
    getAllPostsMock.mockReturnValue([]);

    render(Home());

    expect(screen.getByText("아직 작성된 글이 없습니다.")).toBeInTheDocument();
  });
});
