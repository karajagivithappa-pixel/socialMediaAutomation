
import {test as base,expect} from "@playwright/test"
const test=base.extend({
    fixture1:async ({page},use) => {
        console.log("myfixture1");
       
        await use()
        console.log("teardown1");
        
    },
    fixture2:async ({page},use) => {
        console.log("myfixture2");
    
        await use()
    }
})
export {test,expect}