const {test}= require('@playwright/test');

test('Browser Context Playwrite test',async ({browser})=>
{

 const context = await browser.newContext();
 const page    = await context.newPage();
 await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

});

test('Page Playwrite test',async ({browser,page})=>
{

await page.goto("https://google.com/")


});

