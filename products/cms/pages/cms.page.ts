import { Page } from '@playwright/test';
import { BasePage } from '../../../core/helpers/base.page';

export class CMSPage extends BasePage {
  constructor(page: Page) { super(page, 'cms'); }
  async login(): Promise<void> {
    await this.openFakeApp();
    await this.page.click('#login');
  }
  status() { return this.page.locator('#status'); }
}
