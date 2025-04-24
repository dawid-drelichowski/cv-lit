import {test, expect} from '@playwright/test';
import percySnapshot from '@percy/playwright';

test.describe('CV', () => {
  test('displays properly', async ({page}) => {
    await page.goto('http://localhost:4173/');

    await expect(page).toHaveTitle('CV - Dawid Drelichowski');
    await percySnapshot(page, 'CV');
  });
});
