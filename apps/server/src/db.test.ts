import { describe, expect, it } from "vitest";
import { db } from "./db.ts";

describe("db", () => {
  it("creates the posts table on import", () => {
    const row = db
      .prepare(
        "SELECT name FROM sqlite_master WHERE type = 'table' AND name = 'posts'",
      )
      .get() as { name: string } | undefined;

    expect(row?.name).toBe("posts");
  });
});
