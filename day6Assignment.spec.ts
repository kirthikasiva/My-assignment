import{test}from '@playwright/test'
test("launch the testleafbrowser",async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main");
await page.locator('//label[@for="username"]').fill('Demosalesmanager');
await page.locator('input[id="password"]').fill('crmsfa');
await page.locator('//input[@type="submit"]').click();
await page.click('//a[@style="color: black;"]');
await page.click('//a[text()="Leads"]');
await page.click('//a[text()="Create Lead"]')
await page.locator('//input[@id="createLeadForm_companyName"]').fill('TestLeaf');
await page.locator('//input[@id="createLeadForm_firstName"]').fill('Kirthika');
await page.locator('//input[@id="createLeadForm_lastName"]').fill('B');
await page.locator('//input[@id="createLeadForm_personalTitle"]').fill('y');
await page.locator('//input[@id="createLeadForm_generalProfTitle"]').fill('Business');
await page.locator('//input[@id="createLeadForm_annualRevenue"]').fill('30lpa');
await page.locator('//input[@name="departmentName"]').fill('Income Tax')
await page.locator('//input[@id="createLeadForm_primaryPhoneNumber"]').fill('812345957');
await page.click('//input[@value="Create Lead"]');



}
)