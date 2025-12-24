import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should load and display main content', async ({ page }) => {
    await page.goto('/');

    // Check heading
    await expect(page.locator('h1')).toContainText('Welcome to NeuraCue');

    // Check logo is visible
    await expect(page.getByAltText(/neuracue logo/i)).toBeVisible();

    // Check description
    await expect(page.getByText(/AI-powered geo-fenced reminders for Android/)).toBeVisible();
  });

  test('should navigate to About page', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: /about/i }).click();
    await expect(page).toHaveURL('/about');
    await expect(page.locator('h1')).toContainText('About NeuraCue');
  });

  test('should navigate to Privacy Policy', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: /privacy policy/i }).click();
    await expect(page).toHaveURL('/privacy');
  });

  test('should navigate to Terms of Use', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: /terms of use/i }).click();
    await expect(page).toHaveURL('/terms');
  });

  test('should have working footer clock', async ({ page }) => {
    await page.goto('/');

    const footer = page.locator('footer');
    await expect(footer).toBeVisible();

    // Clock should display time with timezone
    await expect(footer.locator('#clock')).toContainText(/PST|PDT/);
  });

  test('should be mobile responsive', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE
    await page.goto('/');

    await expect(page.locator('h1')).toBeVisible();
    await expect(page.getByAltText(/neuracue logo/i)).toBeVisible();
  });
});
