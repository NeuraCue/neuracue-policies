import { test, expect } from '@playwright/test';

test.describe('Terms of Service Page', () => {
  test('should load terms page', async ({ page }) => {
    await page.goto('/terms');

    await expect(page.locator('h1')).toContainText(/terms/i);
  });

  test('should have canonical URL', async ({ page }) => {
    await page.goto('/terms');

    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute('href', expect.stringContaining('/terms'));
  });

  test('should display contact information', async ({ page }) => {
    await page.goto('/terms');

    // Contact section should be visible
    await expect(page.getByText('support@neuracue.com')).toBeVisible();
  });

  test('should have footer', async ({ page }) => {
    await page.goto('/terms');

    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    await expect(footer).toContainText('NeuraCue™');
  });
});
