import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

const { getFeaturedPostMock, getPostsSinceMock } = vi.hoisted(() => ({
  getFeaturedPostMock: vi.fn(),
  getPostsSinceMock: vi.fn(),
}));

vi.mock("@/lib/queries/posts", () => ({
  getFeaturedPost: getFeaturedPostMock,
  getPostsSince: getPostsSinceMock,
}));

import Home from "./page";

describe("Home page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the featured card when a post is marked as featured", () => {
    getFeaturedPostMock.mockReturnValue({
      slug: "featured-post",
      title: "대표 게시글 제목",
      createdAt: "2026-08-28",
      excerpt: "요약입니다.",
    });
    getPostsSinceMock.mockReturnValue([]);

    render(Home());

    expect(screen.getByText("대표 게시글 제목")).toBeInTheDocument();
  });

  it("renders without a featured card when none is set", () => {
    getFeaturedPostMock.mockReturnValue(null);
    getPostsSinceMock.mockReturnValue([]);

    render(Home());

    expect(screen.getByText("아직 작성된 글이 없습니다.")).toBeInTheDocument();
  });

  it("excludes the featured post from the list below it", () => {
    getFeaturedPostMock.mockReturnValue({
      slug: "featured-post",
      title: "대표 게시글 제목",
      createdAt: "2026-08-28",
    });
    getPostsSinceMock.mockReturnValue([
      { slug: "featured-post", title: "대표 게시글 제목", createdAt: "2026-08-28" },
      { slug: "other-post", title: "다른 게시글 제목", createdAt: "2026-08-01" },
    ]);

    render(Home());

    expect(screen.getAllByText("대표 게시글 제목")).toHaveLength(1);
    expect(screen.getByText("다른 게시글 제목")).toBeInTheDocument();
  });
});
