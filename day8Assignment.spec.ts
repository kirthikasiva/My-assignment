import{expect, test} from '@playwright/test'
test('to verify advanced xpath',async({page})=>{
    await page.goto('https://leafground.com/checkbox.xhtml');
    await page.click('//div[@id="j_idt87:j_idt89"]');
    await page.click('//span[text()="Ajax"]')
    await page.waitForTimeout(5000)
    await  expect(page.locator('//*[contains(text(),"Checked")]')).toBeVisible();
    await page.locator('//label[text()="Java"]').click();
    await page.locator('//label[text()="Python"]').click();
    await page.locator(' (//div[@class="ui-chkbox-box ui-widget ui-corner-all ui-state-default ui-state-active"])[3]').click();
   await page.waitForTimeout(2000)
   //await expect (page.locator('//div[contains(text(),"State has been changed.")]')).toBeVisible();
//   const toast=page.locator('//div[contains(text(),"State has been changed.")]');
//   await page.waitForTimeout(2000)
//   await expect(toast).toBeVisible();
   await page.click('//div[@class="ui-toggleswitch-slider"]');
  const toast1=page.locator('//span[contains(text(),"Checked")]');
  await expect(toast1).toBeVisible();
  const checkbox=page.locator('//span[text()="Disabled"]');
  if(await checkbox.isDisabled())
  {
    console.log("checkbox is disabled");

  }
  else{
    console.log("checkbox is enabled");
  }
await page.click('//ul[@data-label="Cities"]');
await page.click('(//label[text()="Paris"])[2]')
await page.waitForTimeout(3000)
await page.click('((//label[text()="London"])[2]')
await page.click('//span[@class="ui-icon ui-icon-circle-close"]')
await page.close();
    
}

)
