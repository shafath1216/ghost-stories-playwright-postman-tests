const { test, expect } = require('@playwright/test');

test('GS_TC_004 - Verify Add Post page loads @navigation', async ({ page }) => {
  await page.goto('https://ghost-stories.org');

  await page.locator("a[href='/add-post']").click();

  // confirm navigation happened
  await expect(page).toHaveURL(/add-post/);

  // confirm page loaded correctly
  const titleInput = page.locator("input[placeholder='Title']");
  await expect(titleInput).toBeVisible();
  await page.waitForTimeout(5000)
});