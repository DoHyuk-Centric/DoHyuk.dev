import { describe, expect, it, vi } from "vitest";

const { redirectMock } = vi.hoisted(() => ({ redirectMock: vi.fn() }));

vi.mock("next/navigation", () => ({
  redirect: redirectMock,
}));

import Blog from "./page";

describe("Blog root page", () => {
  it("redirects to the default year", async () => {
    await Blog();
    expect(redirectMock).toHaveBeenCalledWith("/2026");
  });
});
