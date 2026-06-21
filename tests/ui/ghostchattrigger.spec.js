const { test, expect } = require('@playwright/test');

test('GS_TC_010 - Verify Ghost Chat Trigger is visible @ui', async ({ page }) => {

  await page.goto('https://ghost-stories.org');

  const chatTrigger = page.locator("//button[@aria-label='Chat with the ghost']");

  await expect(chatTrigger).toBeVisible();
   
  });