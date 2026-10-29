import { test, expect } from '@playwright/test';
import { SMGRPage } from '../pages/smgr.page';
import { getEnv } from '../../../config/environments.config';
import { runRemote } from '../../../core/helpers/ssh-client';
import { log } from '../../../config/logger';
import data from '../../../data/products/smgr/dev.data.json';

test.describe('SMGR', () => {
  test('SMGR console login works', async ({ page }) => {
    log('smgr', `using ${getEnv('smgr').baseUrl} as ${data.user}`);
    const app = new SMGRPage(page);
    await app.login();
    await expect(app.status()).toHaveText('Logged in');
  });

  test('SMGR remote command (mock SSH)', async () => {
    const out = await runRemote(getEnv('smgr').sshHost, 'uname -a');
    expect(out).toContain('smgr');
  });
});
