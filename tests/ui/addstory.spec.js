const { test, expect } = require('@playwright/test');

test('GS_TC_006 - Verify user can create a new post @functional @ui', async ({ page }) => {

  await page.goto('https://ghost-stories.org');

  // navigate to Add Post
  await page.locator("a[href='/add-post']").click();
  await expect(page).toHaveURL(/add-post/);

  // unique test data
  const title = `Playwright Test Post ${Date.now()}`;

  // fill form
  await page.locator("input[placeholder='Title']").fill(title);
  await page.locator("input[placeholder='Your Name']").fill('QA Tester');
  await page.locator("textarea[placeholder='Write your story...']").fill(
    'This is an automated test post created by Playwright.'
  );

  // submit form
  await page.locator("button[type='submit']").click();

  // verify redirect to homepage
  await expect(page).toHaveURL(/\/$/);

  // verify post appears in list (FIXED)
  await expect(
    page.locator('li a', { hasText: title }).first()
  ).toBeVisible({ timeout: 10000 });

});