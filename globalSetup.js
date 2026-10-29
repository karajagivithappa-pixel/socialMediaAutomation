
import { chromium } from '@playwright/test';

async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://truthsocial.com/')
  await page.getByPlaceholder('Username').fill('vithappa')
    await page.getByLabel('Password').fill('Ym6cfDv@zsE*S57')
    await page.getByTestId('submit').click()

  await page.context().storageState({ path: 'storageState.json' });

  await browser.close();
}

export default globalSetup;