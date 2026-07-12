import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  timeout: 30 * 1000,
  testDir: './tests',
  fullyParallel: false,
  //retries: process.env.CI ? 2 : 0,
  retries : 0,
 // workers: process.env.CI ? 1 : undefined,
workers: 1,

  reporter: [
    ['html'],
    ['line'],
    ['allure-playwright'],
    ['dot'],
    ['list']
  ],

  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless : true,
    viewport : {width :1280, height: 720},
    ignoreHTTPSErrors: true,
   // permissions : ['Geolocation'],
  },

 // grep: /@master/,

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },

   // { name: 'firefox', use: { ...devices['Desktop Firefox'] } },

  //  { name: 'webkit', use: { ...devices['Desktop Safari'] } },

  ],
});
