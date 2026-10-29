import { test, expect } from '@playwright/test';
import { CMSPage } from '../pages/cms.page';
import { getEnv } from '../../../config/environments.config';
import { runRemote } from '../../../core/helpers/ssh-client';
import { log } from '../../../config/logger';
import data from '../../../data/products/cms/dev.data.json';

test.describe('CMS', () => {
  test('CMS console login works', async ({ page }) => {
    log('cms', `using ${getEnv('cms').baseUrl} as ${data.user}`);
    const app = new CMSPage(page);
    await app.login();
    await expect(app.status()).toHaveText('Logged in');
  });

  test('CMS remote command (mock SSH)', async () => {
    const out = await runRemote(getEnv('cms').sshHost, 'uname -a');
    expect(out).toContain('cms');
  });

  test('CMS remote command (mock SSH)', async () => {
    const out = await runRemote(getEnv('cms').sshHost, 'uname -a');
    expect(out).toContain('cms');
  });
});
