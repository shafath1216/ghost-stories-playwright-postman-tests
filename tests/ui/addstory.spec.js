const { test, expect } = require('@playwright/test');

test('GS_TC_006 - Verify user can create a new post @functional @ui', async ({ page }) => {

  await page.goto('https://ghost-stories.org');

  // navigate to Add Post
  await page.locator("a[href='/add-post']").click();
  await expect(page).toHaveURL(/add-post/);

  // fill form (correct placeholders)
  await page.locator("input[placeholder='Title']").fill('Playwright Test Post');
  await page.locator("input[placeholder='Your Name']").fill('QA Tester');
  await page.locator("textarea[placeholder='Write your story...']").fill(
    'This is an automated test post created by Playwright.'
  );

  // submit form
  await page.locator("button[type='submit']").click();

  // verify redirect or success behavior
  await expect(page).toHaveURL(/\/$/);
  
  // verify post appears
  await expect(
    page.locator('li a', { hasText: 'Playwright Test Post' })
  ).toBeVisible();
await page.waitForTimeout(5000)

});