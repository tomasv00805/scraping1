const puppeteer = require('puppeteer');//Imporar la libreria de scraping

async function scraplocal() {//Segunda semana de enero
  const browser = await puppeteer.launch();//abre un motor de busqueda
  const page = await browser.newPage();//abre una pagina web
  //url para el scraping
  const url = 'https://www.thebetsyhotel.com/book?adults=2&children=0&clientId=thebetsy&currency=USD&endDate=2024-01-13&exactMatchOnly=false&hotelCode=63570&hotelProvider=1&numRooms=1&primaryLangId=en&startDate=2024-01-07&theme=null';
  const targetClassName = 'price';//string con el nombre de la clase que queremos scrapear

  await page.goto(url);//que la pagina se direccione a la url solicitada
  await page.waitForSelector(`.${targetClassName}`);//busca las clase precios

  const elements = await page.$$(`.${targetClassName}`);//almacena las clase precios
  const pricesArray = [];

  for (const element of elements) {
    const text = await element.evaluate(el => el.textContent);//guardar el texto que se encuentra en la clase precio
    pricesArray.push(text);//se guarda en el array
  }

  await browser.close();//cierra el navegador
  return pricesArray;//retornea el array de precios
}
async function scraplocal2() {//Tercer semana de enero
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const url = 'https://www.thebetsyhotel.com/book?adults=2&children=0&clientId=thebetsy&currency=USD&endDate=2024-01-20&exactMatchOnly=false&hotelCode=63570&hotelProvider=1&numRooms=1&primaryLangId=en&startDate=2024-01-14&theme=null';
  const targetClassName = 'price';

  await page.goto(url);
  await page.waitForSelector(`.${targetClassName}`);

  const elements = await page.$$(`.${targetClassName}`);
  const pricesArray = [];

  for (const element of elements) {
    const text = await element.evaluate(el => el.textContent);
    pricesArray.push(text);
  }

  await browser.close();
  return pricesArray;
}
async function scraplocal3() {//primer semana de enerAo
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const url = 'https://www.thebetsyhotel.com/book?adults=2&children=0&clientId=thebetsy&currency=USD&endDate=2024-01-06&exactMatchOnly=false&hotelCode=63570&hotelProvider=1&numRooms=1&primaryLangId=en&startDate=2024-01-01&theme=null';
  const targetClassName = 'price';

  await page.goto(url);
  await page.waitForSelector(`.${targetClassName}`);

  const elements = await page.$$(`.${targetClassName}`);
  const pricesArray = [];

  for (const element of elements) {
    const text = await element.evaluate(el => el.textContent);
    pricesArray.push(text);
  }

  await browser.close();
  return pricesArray;
}
async function scrapremoto(){
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const url = 'https://be.synxis.com/?_ga=2.127104389.947984554.1693120390-1294367758.1691678089&_gl=1*u5599*_ga*MTI5NDM2Nzc1OC4xNjkxNjc4MDg5*_ga_V7T9W9V7T3*MTY5MzEyMDM4OS4zLjEuMTY5MzEyMDM5OC41MS4wLjA.&adult=1&arrive=2024-01-07&chain=12125&child=0&currency=USD&depart=2024-01-13&hotel=6465&level=hotel&locale=en-US&rooms=1&shell=GCF3&start=availresults';
  const targetClassName = 'thumb-cards_price';

  await page.goto(url);
  await page.waitForSelector(`.${targetClassName}`);

  const elements = await page.$$(`.${targetClassName} span`);
  const pricesArray = [];

  for (const element of elements) {
    const text = await element.evaluate(el => el.textContent.trim()); // Utilizamos trim() para eliminar espacios en blanco al inicio y final
    if (text) { // Verificamos si el texto no está vacío después de la limpieza
      pricesArray.push(text);
    }
  }

  await browser.close();
  return pricesArray;
}

module.exports = {
  scraplocal,
  scrapremoto,
  scraplocal2,
  scraplocal3
};
