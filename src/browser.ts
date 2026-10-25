import {chromium} from "playwright";


async function openWebsite(): Promise<void> {
const openBrower = await chromium.launch({headless: false});
const page = await openBrower.newPage();
await page.goto("https://www.saucedemo.com/");
const Titlepage = await page.title();
console.log(Titlepage);
await openBrower.close();

}

openWebsite();
