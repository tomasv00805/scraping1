const comedy = require("comedy");
const puppeteer = require("puppeteer");
const { scraplocal, scrapremoto } = require("./scraping.js");

const actors = comedy;

class LocalActor {
  async showMessage() {
    return scraplocal();
  }
}

class RemoteActor {
  async showMessage() {
    return "scrapremoto()";
  }
  async scrapremoto(){
    const puppeteer = require("puppeteer");
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    const url = 'https://be.synxis.com/?_ga=2.127104389.947984554.1693120390-1294367758.1691678089&_gl=1*u5599*_ga*MTI5NDM2Nzc1OC4xNjkxNjc4MDg5*_ga_V7T9W9V7T3*MTY5MzEyMDM4OS4zLjEuMTY5MzEyMDM5OC41MS4wLjA.&adult=1&arrive=2024-01-07&chain=12125&child=0&currency=USD&depart=2024-01-13&hotel=6465&level=hotel&locale=en-US&rooms=1&shell=GCF3&start=availresults';
    const targetClassName = 'thumb-cards_price';
    await page.goto(url);
    await page.waitForSelector(`.${targetClassName}`);
    const pricesArray = [];

    const elements = await page.$$(`.${targetClassName} span`);
    for (const element of elements) {
        const text = await element.evaluate(el => el.textContent.trim()); // Utilizamos trim() para eliminar espacios en blanco al inicio y final
        pricesArray.push(text);
    }
    return pricesArray;
  }
}
function eliminarEspaciosEnBlanco(arr) {
    // Utilizamos el método filter() para crear un nuevo array sin espacios en blanco
    const resultado = arr.filter(elemento => elemento.trim() !== '');
  
    return resultado;
}
function eliminarSignoPesos(arr) {
    // Utilizamos el método map() para crear un nuevo array con los elementos modificados
    const resultado = arr.map(elemento => elemento.replace(/\$/g, ''));
  
    return resultado;
  }
  function encontrarNumeroMasBajo(arr1, arr2) {
    // Función para convertir un valor en número de punto flotante y eliminar las comas
    function convertirANumero(valor) {
      return parseFloat(valor.replace(',', ''));
    }
  
    const numeros1 = arr1.map(convertirANumero);
    const numeros2 = arr2.map(convertirANumero);
  
    const minimo1 = Math.min(...numeros1);
    const minimo2 = Math.min(...numeros2);
  
    if (minimo1 < minimo2) {
      return { numeroMasBajo$: minimo1, ubicacion: 'Array local hotel the betsy' };
    } else if (minimo2 < minimo1) {
      return { numeroMasBajo$: minimo2, ubicacion: 'Array remoto hotel Segamore' };
    } else {
      return { numeroMasBajo$: minimo1, ubicacion: 'Ambos arrays tienen el número más bajo' };
    }
  }

async function main() {
  const actorSystem = actors();

  try {
    const rootActor = await actorSystem.rootActor();

    // Crear un actor local para mostrar el mensaje "pc".
    const localActor = await rootActor.createChild(LocalActor);
    const localMessage = await localActor.sendAndReceive('showMessage');
    const localMessagesin$ = eliminarSignoPesos(localMessage)
    console.log('Local Actor Message:', localMessage);

    // Crear un actor remoto para mostrar el mensaje "laptop".
    const remoteActor = await rootActor.createChild(RemoteActor, { mode: 'remote', host: '192.168.0.105' });
    const remoteMessage = await remoteActor.sendAndReceive('scrapremoto');
    const resultadosinespacio =eliminarEspaciosEnBlanco(remoteMessage)
    const resultadosremotosin$= eliminarSignoPesos(resultadosinespacio)
   // pricesArray =extractTextFromElements(remoteMessage)
    console.log('Remote Actor Message:', resultadosinespacio);
    console.log(encontrarNumeroMasBajo(localMessagesin$, resultadosremotosin$));
  } catch (err) {
    console.error(err);
  } finally {
    actorSystem.destroy();
  }
}

main();
