const { test, expect } = require('@playwright/test');

test('GS_TC_003 - Verify posts load on homepage @ui @functional', async ({ page }) => {
  await page.goto('https://ghost-stories.org');

  const firstPostTitle = page.locator('li a').first();

  await expect(firstPostTitle).toBeVisible();
});