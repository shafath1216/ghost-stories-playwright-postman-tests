const { test, expect } = require('@playwright/test');

test('GS_TC_009 - Verify Archive Chat page loads @navigation', async ({ page }) => {

  await page.goto('https://ghost-stories.org');

  // click chat trigger
  await page.locator("//button[@aria-label='Chat with the ghost']").click();

  // verify exact route
  await expect(page).toHaveURL(/archive-chat/);

  // verify page content
  await expect(
    page.locator("//h1[normalize-space()='Speak to the ghost']")
  ).toBeVisible();

});