
import {test as setup,expect} from "@playwright/test"

setup('authenticate',async({page})=>{

    await page.goto("https://truthsocial.com/")
    await page.getByLabel("Username").fill('vithappa')
    await page.getByLabel('Password').fill('Ym6cfDv@zsE*S57')
    await page.getByTestId('submit').click()

    await page.context().storageState({
        path:'playwright/.auth/auth.json'
    })
})