
import {test,expect} from "../custom_fixtures/fixture1"
import LoginPage from "../pageObjects/LoginPage.page";
import login from "../test_data/Login.json"


test.beforeAll("",async () => {
    console.log("open");
    
})
test.afterAll("",async () => {
    console.log("close");
    
})
test.beforeEach("",async () => {
    console.log("before");
    
})
test.afterEach("",async () => {
    console.log("after");
    
})
test("t1",{ tag: '@smoke' },async ({page,fixture1}) => {
    //read data from json
    let username=login.username
    //create object to loginPage pom
    let loginObj=new LoginPage(page)
    //await page.goto(`${process.env.base_url}`)
    await page.goto("https://truthsocial.com/")

    //await loginObj.username.fill(username)
    console.log("test1");
})

test("t2",async ({page,fixture2}) => {
    await page.goto("https://truthsocial.com/")

    // await page.getByLabel("Username").fill('vithappa')
    // await page.getByLabel('Password').fill('Ym6cfDv@zsE*S57')
    // await page.getByTestId('submit').click({force:true})
    // await page.waitForTimeout(3000)
    console.log("test2");
})
test("t3",async ({page}) => {
    await page.getByTestId('button').click()
    console.log("test3");
})
test("t4",async ({page}) => {
    await page.goto("https://truthsocial.com/")
    console.log("test4");
})

