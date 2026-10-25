import {chromium} from "playwright";

async function observeWebsite(): Promise<void> {
const launchbrower = await chromium.launch();
const Page = await launchbrower.newPage();
await Page.goto("https://www.saucedemo.com/");
const inputs = Page.locator('input:not([type="submit"])');
const secondInput = inputs.nth(1);
const seconinput = await secondInput.getAttribute("id")
/*const inputNo = await inputs.count();
console.log(inputNo);*/

console.log(seconinput);
await launchbrower.close();
}
observeWebsite()



