import{test,expect}from'@playwright/test'
import { asyncWrapProviders } from 'node:async_hooks';
test('To check Expect SCenario',async({page})=>{
await page.goto('https://leafground.com/waits.xhtml');
//Wait for an element to become visible before interacting with it.
await  expect (page.locator('(//span[text()="Click"])[1]')).toBeVisible();
//softassertion
await  expect.soft (page.locator('(//span[text()="Click"])[1]')).toBeVisible();
// Wait for an element to disappear from the page.
await expect(page.locator('(//span[text()="Click"])[1]')).not.toBeVisible();
//soft assertion
await expect.soft(page.locator('(//span[text()="Click"])[1]')).not.toBeVisible();
//Wait for an element to become clickable.
await page.locator('(//span[text()="Click"])[1]').click();
//Check for text changes within an element and respond accordingly.
await expect(page.locator('//span[text()="I am going to change!""]')).toHaveText('I am going to change!',{timeout:10000});
//Assert the various actions performed on the page.



}


)