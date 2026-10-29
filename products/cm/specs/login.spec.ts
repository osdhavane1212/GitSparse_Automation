import { test, expect } from '@playwright/test';
import { CMPage } from '../pages/cm.page';
import { getEnv } from '../../../config/environments.config';
import { runRemote } from '../../../core/helpers/ssh-client';
import { log } from '../../../config/logger';
import data from '../../../data/products/cm/dev.data.json';

test.describe('CM', () => {
  test('CM console login works', async ({ page }) => {
    log('cm', `using ${getEnv('cm').baseUrl} as ${data.user}`);
    const app = new CMPage(page);
    await app.login();
    await expect(app.status()).toHaveText('Logged in');
  });

  test('CM remote command (mock SSH)', async () => {
    const out = await runRemote(getEnv('cm').sshHost, 'uname -a');
    expect(out).toContain('cm');
  });
});
