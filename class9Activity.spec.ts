import{test}from '@playwright/test'
test('plywright loacter',async({page})=>{
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
//     click on forgot login info? using getByRole locator
await page.getByRole('link',{name:'Forgot login info?',exact:true}).click();
// cick on Parabank logo using getByAltText locator or click on parabank logo using getByTitle locator
await page.getByAltText("ParaBank").click();
// click on locations using getByText locator
await page.getByText('Locations').first().click();
// click on search icon in the navigated page using getByrole
await page.getByRole('button',{name:'Search'}).click();
// click on search textbox using getByPlaceholder and enter the location name as "chennai"
await page.getByRole('textbox',{name: "Search",exact:true}).fill('chennai');


})
 





