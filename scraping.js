const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const url = 'https://www.thebetsyhotel.com/book?adults=2&children=0&clientId=thebetsy&currency=USD&endDate=2024-01-13&exactMatchOnly=false&hotelCode=63570&hotelProvider=1&numRooms=1&primaryLangId=en&startDate=2024-01-07&theme=null';
  const targetClassName = 'price';

  await page.goto(url);
  await page.waitForSelector(`.${targetClassName}`);

  const elements = await page.$$(`.${targetClassName}`);

  for (const element of elements) {
    const text = await element.evaluate(el => el.textContent);
    console.log(text);
  }

  await browser.close();
})();