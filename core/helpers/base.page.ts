import { Page } from '@playwright/test';

// Every product page object extends this.
export class BasePage {
  constructor(protected readonly page: Page, protected readonly product: string) {}

  // Offline stand-in for a real product login page, so the practice repo runs anywhere.
  async openFakeApp(): Promise<void> {
    await this.page.setContent(`
      <title>${this.product.toUpperCase()} Console</title>
      <h1 id="title">${this.product.toUpperCase()} Console</h1>
      <input id="user" placeholder="user"/>
      <button id="login" onclick="document.getElementById('status').textContent='Logged in'">Login</button>
      <p id="status"></p>`);
  }
}
