import { test, expect } from '@playwright/test';
import { CMPage } from '../../cm/pages/cm.page';
import { CMSPage } from '../../cms/pages/cms.page';

// Solution-level test: needs BOTH products' folders.
test('CM and CMS both log in (solution flow)', async ({ browser }) => {
  const a = await browser.newPage();
  const b = await browser.newPage();
  const cm = new CMPage(a); const cms = new CMSPage(b);
  await cm.login(); await cms.login();
  await expect(cm.status()).toHaveText('Logged in');
  await expect(cms.status()).toHaveText('Logged in');
});
