import { test, expect } from '@playwright/test';

test.describe('Privacy Policy Page', () => {
  test('should load privacy policy', async ({ page }) => {
    await page.goto('/privacy');

    await expect(page.locator('h1')).toContainText(/privacy policy/i);
  });

  test('should have canonical URL', async ({ page }) => {
    await page.goto('/privacy');

    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute('href', expect.stringContaining('/privacy'));
  });

  test('should display contact information', async ({ page }) => {
    await page.goto('/privacy');

    // Contact section should be visible
    await expect(page.getByText('support@neuracue.com')).toBeVisible();
    await expect(page.getByText('privacy@neuracue.com')).toBeVisible();
  });

  test('should have footer', async ({ page }) => {
    await page.goto('/privacy');

    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    await expect(footer).toContainText('NeuraCue™');
  });
});
