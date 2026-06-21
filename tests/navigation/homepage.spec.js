const { test, expect } = require('@playwright/test');

test('GS_TC_001 - Verify application loads @smoke', async ({ page }) => {
  await page.goto('https://ghost-stories.org');

  await expect(page).toHaveTitle(/Ghost Stories/);
});