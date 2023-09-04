const puppeteer = require('puppeteer');

class RemoteActor {
  async showMessage() {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto('https://www.thebetsyhotel.com/book?adults=2&children=0&clientId=thebetsy&currency=USD&endDate=2024-01-13&exactMatchOnly=false&hotelCode=63570&hotelProvider=1&numRooms=1&primaryLangId=en&startDate=2024-01-07&theme=null');
      
      // Realiza acciones de navegación web aquí.
      
      await browser.close();
      
      return 'Navegación web exitosa';
    } catch (error) {
      console.error('Error en la navegación web:', error);
      return 'Error en la navegación web';
    }
  }
}

module.exports = RemoteActor;

