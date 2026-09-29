import { expect, test } from "@playwright/test";

test("header category dropdown opens the category page", async ({ page }) => {
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "전체" });

  await trigger.click();
  await page.getByRole("navigation", { name: "카테고리" }).getByRole("link", { name: "경험" }).click();

  await expect(page).toHaveURL(/\/category\/experience\/?$/);
  await expect(page.getByRole("heading", { level: 2, name: "경험" })).toBeVisible();
  await expect(page.getByRole("button", { name: "경험" })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "카테고리" })).toBeHidden();
});
