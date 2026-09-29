import { beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

const { usePathnameMock } = vi.hoisted(() => ({ usePathnameMock: vi.fn() }));

vi.mock("next/navigation", () => ({ usePathname: usePathnameMock }));

import CategoryNav from "./CategoryNav";

const openMenu = () => fireEvent.click(screen.getByRole("button"));

describe("CategoryNav", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("keeps the menu closed until the trigger is clicked", () => {
    usePathnameMock.mockReturnValue("/");

    render(<CategoryNav />);

    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
    openMenu();
    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("link", { name: "전체" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "문제해결" })).toHaveAttribute(
      "href",
      "/category/troubleshooting",
    );
    expect(screen.getByRole("link", { name: "경험" })).toHaveAttribute(
      "href",
      "/category/experience",
    );
  });

  it.each(["/", "/2026"])("shows and checks 전체 on %s", (pathname) => {
    usePathnameMock.mockReturnValue(pathname);

    render(<CategoryNav />);

    expect(screen.getByRole("button")).toHaveTextContent("전체");
    openMenu();
    expect(screen.getByRole("link", { name: "전체" })).toHaveAttribute("aria-current", "page");
  });

  it("shows and checks only the selected category on a category page", () => {
    usePathnameMock.mockReturnValue("/category/troubleshooting");

    render(<CategoryNav />);

    expect(screen.getByRole("button")).toHaveTextContent("문제해결");
    openMenu();
    expect(screen.getByRole("link", { name: "문제해결" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link", { name: "전체" })).not.toHaveAttribute("aria-current");
    expect(screen.getByRole("link", { name: "경험" })).not.toHaveAttribute("aria-current");
  });

  it("checks nothing on a post detail page", () => {
    usePathnameMock.mockReturnValue("/2026/hello-world");

    render(<CategoryNav />);
    openMenu();

    for (const link of screen.getAllByRole("link")) {
      expect(link).not.toHaveAttribute("aria-current");
    }
  });

  it("closes the menu on Escape", () => {
    usePathnameMock.mockReturnValue("/");

    render(<CategoryNav />);
    openMenu();
    fireEvent.keyDown(document, { key: "Escape" });

    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
  });
});
