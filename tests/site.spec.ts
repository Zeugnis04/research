import { test, expect } from '@playwright/test';

test('navigation, themes, and keyboard access', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('./');
  await expect(page.locator('h1')).toHaveText('Yeongbin Kwon');
  await page.keyboard.press('Tab');
  await expect(page.getByText('Skip to content')).toBeFocused();
  await page.getByRole('button', { name: 'Switch to dark theme' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'CV' }).click();
  await expect(page.locator('h1')).toHaveText('Curriculum vitae');
  expect((await page.request.get((await page.getByRole('link', { name: 'Download PDF' }).getAttribute('href'))!)).status()).toBe(200);
});

test('search filters notes and handles no matches', async ({ page }) => {
  await page.goto('blog/blog-list/');
  await expect(page.locator('[data-entry]:visible')).toHaveCount(6);
  await page.getByRole('searchbox').fill('aurora');
  await expect(page.locator('[data-entry]:visible')).toHaveCount(1);
  await page.getByRole('searchbox').fill('no-such-project');
  await expect(page.locator('#empty-state')).toBeVisible();
  await page.getByRole('searchbox').fill('');
  await expect(page.locator('[data-entry]:visible')).toHaveCount(6);
});

test('gallery opens by keyboard, browses slides, and restores focus', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('blog/research/aurora/');
  const first = page.locator('.figure-row a[data-pswp-width]').first();
  await first.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('.pswp')).toBeVisible();
  await expect(page.locator('.pswp__counter')).toHaveText('1 / 13');
  await expect(page.locator('.pswp')).toBeFocused();
  await page.keyboard.press('ArrowRight');
  await expect(page.locator('.pswp__counter')).toHaveText('2 / 13');
  await page.keyboard.press('Escape');
  await expect(page.locator('.pswp')).toHaveCount(0);
  await expect(first).toBeFocused();
  expect(errors).toEqual([]);
});

test('content, math, and every local page link resolve', async ({ page }) => {
  const routes = ['./', 'research/', 'cv.html', 'tags/', 'blog/blog-list/', 'blog/research/wave-shoaling-project/', 'blog/research/stereo-imaging-coastal-waves/', 'blog/research/lid-stormwater-strategies/', 'blog/research/weather-jiu-jitsu-agu25-posters/', 'blog/news/best-bachelors-thesis-award/', 'blog/research/aurora/'];
  const links = new Set<string>();
  for (const route of routes) {
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toHaveCount(1);
    expect(await page.locator('body').innerText()).not.toMatch(/\{%|\{\{|import Gallery/);
    for (const href of await page.locator('a[href]').evaluateAll(nodes => nodes.map(n => n.getAttribute('href')!))) {
      if (href.startsWith('/research/')) links.add(href.split('#')[0]);
    }
  }
  for (const href of links) expect((await page.request.get(href)).status(), href).toBe(200);
  await page.goto('blog/research/wave-shoaling-project/');
  expect(await page.locator('mjx-container').count()).toBeGreaterThan(10);
});

for (const width of [375, 768, 1440]) {
  test(`responsive layout at ${width}px in both themes`, async ({ page }) => {
    await page.setViewportSize({ width, height: 960 });
    for (const path of ['./', 'research/', 'cv.html', 'blog/research/aurora/', 'blog/research/wave-shoaling-project/']) {
      await page.goto(path);
      for (const theme of ['light', 'dark']) {
        await page.evaluate(theme => document.documentElement.dataset.theme = theme, theme);
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${path} ${theme}`).toBe(true);
      }
    }
  });
}
