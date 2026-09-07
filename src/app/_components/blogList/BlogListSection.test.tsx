import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

const { getPostsByYearMock, getPostsSinceMock } = vi.hoisted(() => ({
  getPostsByYearMock: vi.fn(),
  getPostsSinceMock: vi.fn(),
}));

vi.mock("@/lib/queries/posts", () => ({
  getPostsByYear: getPostsByYearMock,
  getPostsSince: getPostsSinceMock,
}));

import BlogListSection from "./BlogListSection";

const makePosts = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    slug: `post-${i}`,
    title: `게시글 ${i}`,
    createdAt: `2026-01-${String(i + 1).padStart(2, "0")}`,
  }));

describe("BlogListSection", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("shows every post and no 더보기 link when limit is not given", () => {
    getPostsByYearMock.mockReturnValue(makePosts(7));

    render(<BlogListSection year={2026} />);

    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(7);
    expect(screen.queryByText("더보기")).not.toBeInTheDocument();
  });

  it("truncates to the limit and shows a 더보기 link to the year archive when there are more posts", () => {
    getPostsByYearMock.mockReturnValue(makePosts(7));

    render(<BlogListSection year={2026} limit={5} />);

    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(5);
    const moreLink = screen.getByText("더보기");
    expect(moreLink).toBeInTheDocument();
    expect(moreLink.closest("a")).toHaveAttribute("href", "/2026");
  });

  it("does not show a 더보기 link when posts are within the limit", () => {
    getPostsByYearMock.mockReturnValue(makePosts(3));

    render(<BlogListSection year={2026} limit={5} />);

    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(3);
    expect(screen.queryByText("더보기")).not.toBeInTheDocument();
  });

  it("fetches by sinceYear instead of year when sinceYear is given", () => {
    getPostsSinceMock.mockReturnValue(makePosts(2));

    render(<BlogListSection year={2026} sinceYear={2024} limit={5} />);

    expect(getPostsSinceMock).toHaveBeenCalledWith(2024);
    expect(getPostsByYearMock).not.toHaveBeenCalled();
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(2);
  });
});
