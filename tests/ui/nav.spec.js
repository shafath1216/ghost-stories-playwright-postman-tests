const { test, expect } = require('@playwright/test');

test('GS_TC_002 - Verify Navbar has Home and Add Story links @ui', async ({ page }) => {
  await page.goto('https://ghost-stories.org');

  const nav = page.locator('nav');

  await expect(nav).toBeVisible();

  // check key navigation items
  await expect(nav.getByText('Home')).toBeVisible();
  await expect(nav.getByText('Add Story')).toBeVisible();
});