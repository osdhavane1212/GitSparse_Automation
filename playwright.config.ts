import { defineConfig, devices } from '@playwright/test';

// Main entry point. Tests live under products/<product>/specs.
export default defineConfig({
  testDir: './products',
  timeout: 30_000,
  retries: 0,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});
