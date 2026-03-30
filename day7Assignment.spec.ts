
//   import{test}from '@playwright/test'
//   test('launch the testleaf to check dropdown',async({page})=>{
//    await page.goto("http://leaftaps.com/opentaps/control/main")
//       await page.locator('//input[@id="username"]').fill('Demosalesmanager');
//     await page.locator('//input[@id="password"]').fill('crmsfa');
//       await page.click('//input[@value="Login"]')
//       await page.click('//a[@style="color: black;"]')
//       await page.click('//a[text()="Leads"]')
//       await page.click('//a[text()="Create Lead"]');
//       await page.locator('//input[@id="createLeadForm_companyName"]').fill('Testleaf')
//       await page.locator('//input[@id="createLeadForm_firstName"]').fill('Kirthi')
//       await page.locator('//input[@id="createLeadForm_lastName"]').fill('siva');
//       await page.click('//input[@value="Create Lead"]');
//       await page.click('//a[text()="Edit"]');
//       await page.locator('//input[@id="updateLeadForm_companyName"]').clear();
//       await page.locator('//input[@id="updateLeadForm_companyName"]').fill('Qeagle');
//       await page.click('//input[@value="Update"]');

//   }

//  )


// //////Salesforce APP////
 import{expect, test}from '@playwright/test'
  test('launch the salesforce application',async({page})=>{
  await page.goto('https://login.salesforce.com/');
  await page.locator('//input[@id="username"]').fill('dilipkumar.rajendran@testleaf.com')
  await page.locator('//input[@id="password"]').fill('TestLeaf@2025');
  await page.click('//input[@name="Login"]');
  await page.click('//div[@class="slds-icon-waffle"]')
  await page.locator('//button[@aria-label="View All Applications"]')
  await page.click;
 await page.waitForTimeout(10000);
  await page.locator('//p[text()="Sales"]');
  await page.waitForTimeout(3000);  
  await page.click;
  await page.locator('//a[@title="Leads"]');
  await page.waitForTimeout(3000);  
  await page.click;
  await page.locator('(//div[@class="slds-context-bar__label-action slds-p-left_none"])[2]');
  await page.click;
  await page.waitForTimeout(5000); 
  await page.locator('//span[text()="New Lead"]');
  await page.waitForTimeout(5000); 
  await page.click;
  await page.locator('//button[@aria-label="Salutation"]');
  await page.waitForTimeout(3000);
  await page.click;
  await page.locator('//span[text()="Ms."]');
  await page.waitForTimeout(3000);  
  await page.click;
  await page.locator('//input[@name="lastName"]').fill('siva');
  await page.locator('//input[@name="Company"]').fill('testleaf');
  await page.locator('(//button[@title="Save"])[2]');
  await expect(page.locator('//*[@class="forceVisualMessageQueue"]')).toHaveText('Lead "test" was created.');



  }

 )

// import{expect, test}from '@playwright/test'
// test('Create Individuals',async({page})=>{
//     await page.goto('https://login.salesforce.com/');
//  await page.locator('//input[@id="username"]').fill('dilipkumar.rajendran@testleaf.com')
//  await page.locator('//input[@id="password"]').fill('TestLeaf@2025');
//  await page.click('//input[@name="Login"]');
//  await page.click('//div[@class="slds-icon-waffle"]')
//  await page.click('//button[@aria-label="View All Applications"]')
//  await page.locator('(//span[text()="Individuals"])[2]').click();
//  await page.locator('//*[text()="Individuals"][1]').click();
//  await page.locator('//*[text()="New Individual"]').click();
//  await page.locator('//input[@placeholder="Last Name"]').fill('siva');
//  await page.click('//span[text()="Save"]');
//  await expect(page.locator('(//div[@data-aura-class="forceComponentSpinner"])[1]')).toHaveText('Individual "kk" was created.');

// }

// )
//  import{expect, test}from '@playwright/test'
//   test('launch the salesforce application',async({page})=>{
//   await page.goto('https://login.salesforce.com/');
//   await page.locator('//input[@id="username"]').fill('dilipkumar.rajendran@testleaf.com')
//   await page.locator('//input[@id="password"]').fill('TestLeaf@2025');
//   await page.click('//input[@name="Login"]');
//   //Click on the toggle menu button from the left corner
//   await page.click('//div[@class="slds-icon-waffle"]');
//    await page.waitForTimeout(10000)
//   //click View All and click Individuals from App Launcher 
//   await page.click('//button[@aria-label="View All Applications"]')
//   await page.waitForTimeout(10000)
//   // Click on the Individuals tab 
//   await page.click('//p[text()="Individuals"]');   
//   await page.waitForTimeout(10000)       
//   //Search the Individuals last name
//   await page.click('//input[@name="Individual-search-input"]').fill('kkk');
//   await page.keyboard.press('Enter')
//   await page.waitForTimeout(10000)
//   //Click on the Dropdown icon and Select Edit
//   await page.locator('(//a[@title="Show 2 more actions"])[1]').click();
//   await page.waitForTimeout(10000)
//   await page.click('(//a[@title="Edit"])[2]')
//   await page.waitForTimeout(10000)
// //Select Salutation as 'Mr'
// await page.click('(//a[@class="select"])[1]');
// //  Now enter the first name
// await page.locator('//input[@class="firstName compoundBorderBottom form-element__row input"]').fill('Kirthi')
// //  Click on Save and Verify the first name 
// await page.click('//span[text()="Save"]');


//   }
// )

