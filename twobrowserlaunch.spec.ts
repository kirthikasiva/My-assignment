//Load Red Bus in an Edge browser instance and verify the page title and URL
import {test,chromium,firefox,webkit}from '@playwright/test'

test('launch browser 1 for redbus',async()=>
{
  const browser=await chromium.launch({channel:"msedge",headless:false});
  const context=await browser.newContext();
  const page=await context.newPage();
  await page.goto(" https://www.redbus.in ");
  await page.title();
  await page.url();
})
test('launch browser 2 for safari',async()=>
{
  const browser=await webkit.launch({channel:"webkit",headless:false});
  const context=await browser.newContext();
  const page=await context.newPage();
  await page.goto("https://www.flipkart.com");
  await page.title();
   await page.url();
})