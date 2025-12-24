import { test, expect } from '@playwright/test';

test.describe('About Page', () => {
  test('should display all main sections', async ({ page }) => {
    await page.goto('/about');

    await expect(page.locator('h1')).toContainText('About NeuraCue');
    await expect(page.getByRole('heading', { name: /what is neuracue/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /why neuracue/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /core features/i })).toBeVisible();
  });

  test('should have functioning CTA button', async ({ page }) => {
    await page.goto('/about');

    const ctaButton = page.getByRole('link', { name: /request internal access/i });
    await expect(ctaButton).toBeVisible();

    const href = await ctaButton.getAttribute('href');
    expect(href).toContain('mailto:support@neuracue.com');
  });

  test('should display contact section', async ({ page }) => {
    await page.goto('/about');

    await expect(page.getByRole('heading', { name: /contact/i })).toBeVisible();
    await expect(page.getByText('support@neuracue.com')).toBeVisible();
    await expect(page.getByText('privacy@neuracue.com')).toBeVisible();
  });

  test('should display logo', async ({ page }) => {
    await page.goto('/about');

    await expect(page.getByAltText(/neuracue logo/i)).toBeVisible();
  });

  test('should show development phases', async ({ page }) => {
    await page.goto('/about');

    await expect(page.getByRole('heading', { name: /development phases/i })).toBeVisible();
    await expect(page.getByText(/phase 1: core/i)).toBeVisible();
    await expect(page.getByText(/phase 2: auth/i)).toBeVisible();
  });
});
