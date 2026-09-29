import { expect, test } from "@playwright/test";

test("header category dropdown opens the category page", async ({ page }) => {
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "전체" });

  await trigger.click();
  await page.getByRole("navigation", { name: "카테고리" }).getByRole("link", { name: "경험" }).click();

  // 로컬 pre-commit에서는 build/typecheck/vitest 직후에 이어서 도는 탓에 시스템 부하가
  // 남아있어, 기본 5초 타임아웃 안에 클릭 네비게이션이 못 끝나는 경우가 있다. 여유를 둔다.
  await expect(page).toHaveURL(/\/category\/experience\/?$/, { timeout: 10_000 });
  await expect(page.getByRole("heading", { level: 2, name: "경험" })).toBeVisible();
  await expect(page.getByRole("button", { name: "경험" })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "카테고리" })).toBeHidden();
});
