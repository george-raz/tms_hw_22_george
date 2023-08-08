import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    viewport: { width: 1280, height: 1024 },
    actionTimeout: 10 * 1000,
    navigationTimeout: 15 * 1000
},
timeout: 30 * 1000,
expect: {
    timeout: 10 * 1000,
},
projects: [
    {
        name: 'chrome',
        use: { ...devices['Desktop Chrome'] }
    },
//     {
//         name: 'firefox',
//         use: { ...devices['Desktop Firefox'] }
//     },
//     {
//       name: 'mobile',
//       use: { ...devices['Galaxy S8'] }
//   }
],
workers:2,
fullyParallel:true,
reporter: "html"
}

export default config;