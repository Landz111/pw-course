import { test1, expect1 } from '@playwright/test';

test1('get started link', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Bài học 1: Register Page' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect1(page.getByRole('heading', { name: 'User Registration' })).toBeVisible();
});
function newFunction() {
  test1('has title', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');

    // Expect a title "to contain" a substring.
    await expect1(page).toHaveTitle(/Tài liệu học automation test/);
  });
}

