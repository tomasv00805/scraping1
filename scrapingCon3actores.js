const comedy = require("comedy");
const puppeteer = require("puppeteer");
const { scraplocal, scrapremoto,scraplocal2,scraplocal3  } = require("./scraping.js");

const actors = comedy;

class LocalActor {
  async scrap1() {
    return scraplocal();
  }
  async scrap2() {
    return scraplocal2();
  }
  async scrap3() {
    return scraplocal3();
  }
}

class RemoteActor {
  constructor(variable) {
    this.variable = variable;
  }
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
  async scrapremoto2(){
    const puppeteer = require("puppeteer");
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    const url = 'https://be.synxis.com/?_ga=2.127104389.947984554.1693120390-1294367758.1691678089&_gl=1*u5599*_ga*MTI5NDM2Nzc1OC4xNjkxNjc4MDg5*_ga_V7T9W9V7T3*MTY5MzEyMDM4OS4zLjEuMTY5MzEyMDM5OC41MS4wLjA.&adult=1&arrive=2024-01-14&chain=12125&child=0&currency=USD&depart=2024-01-20&hotel=6465&level=hotel&locale=en-US&rooms=1&sbe_rc=MTY0OTJjM2MtYWI1Yi00YjdiLWI1OTEtNzUwNTU4ZTFiNWRj&shell=GCF3&start=availresults';
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
  async scrapremoto3(){
    const puppeteer = require("puppeteer");
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    const url = 'https://be.synxis.com/?_ga=2.127104389.947984554.1693120390-1294367758.1691678089&_gl=1*u5599*_ga*MTI5NDM2Nzc1OC4xNjkxNjc4MDg5*_ga_V7T9W9V7T3*MTY5MzEyMDM4OS4zLjEuMTY5MzEyMDM5OC41MS4wLjA.&adult=1&arrive=2024-01-01&chain=12125&child=0&currency=USD&depart=2024-01-06&hotel=6465&level=hotel&locale=en-US&rooms=1&sbe_rc=MTY0OTJjM2MtYWI1Yi00YjdiLWI1OTEtNzUwNTU4ZTFiNWRj&shell=GCF3&start=availresults';
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
  function encontrarNumeroMasBajo(arr1, arr2, arr3, arr4, arr5, arr6) {
    // Función para convertir un valor en número de punto flotante y eliminar las comas
    function convertirANumero(valor) {
      return parseFloat(valor.replace(',', ''));
    }
  
    const numeros1 = arr1.map(convertirANumero);
    const numeros2 = arr2.map(convertirANumero);
    const numeros3 = arr3.map(convertirANumero);
    const numeros4 = arr4.map(convertirANumero);
    const numeros5 = arr5.map(convertirANumero);
    const numeros6 = arr6.map(convertirANumero);
  
    const minimo1 = Math.min(...numeros1);
    const minimo2 = Math.min(...numeros2);
    const minimo3 = Math.min(...numeros3);
    const minimo4 = Math.min(...numeros4);
    const minimo5 = Math.min(...numeros5);
    const minimo6 = Math.min(...numeros6);
  
    const resultados = [
      { numeroMasBajo: minimo1, ubicacion: 'Local Actor Semana 1 besty' },
      { numeroMasBajo: minimo2, ubicacion: 'Local Actor Semana 2 besty' },
      { numeroMasBajo: minimo3, ubicacion: 'Local Actor Semana 3 besty' },
      { numeroMasBajo: minimo4, ubicacion: 'Remote Actor Semana 1 segamore' },
      { numeroMasBajo: minimo5, ubicacion: 'Remote Actor Semana 2 segamore' },
      { numeroMasBajo: minimo6, ubicacion: 'Remote Actor Semana 3 segamore' },
    ];
  
    resultados.sort((a, b) => a.numeroMasBajo - b.numeroMasBajo);

  // Obtener los tres resultados más bajos
  const tresResultadosMasBajos = resultados.slice(0, 3);

  return tresResultadosMasBajos;
}

async function main() {
  const actorSystem = actors();

  try {
    const rootActor = await actorSystem.rootActor();

    // Crear un actor local para mostrar el mensaje "pc".
    const localActor = await rootActor.createChild(LocalActor);
    const semana1Enerobesty = await localActor.sendAndReceive('scrap3');//hace q el actor haga una funcion
    const semana2Enerobesty = await localActor.sendAndReceive('scrap1');//hace q el actor haga una funcion
    const semana3Enerobesty = await localActor.sendAndReceive('scrap2');//hace q el actor haga una funcion
    const semana1Enerobestysin$ = eliminarSignoPesos(semana1Enerobesty)
    const semana2Enerobestysin$ = eliminarSignoPesos(semana2Enerobesty)
    const semana3Enerobestysin$ = eliminarSignoPesos(semana3Enerobesty)
    console.log('Local Actor Message:', semana1Enerobesty);

    // Crear un actor remoto para mostrar el mensaje "laptop".
    const remoteActor = await rootActor.createChild(RemoteActor, { mode: 'remote', host: 'cambia esto' });
    const remoteActor2 = await rootActor.createChild(RemoteActor, { mode: 'remote', host: 'cambia esto' });
    const remoteActor3 = await rootActor.createChild(RemoteActor, { mode: 'remote', host: 'cambia esto' });
    const semana1Enero = await remoteActor.sendAndReceive('scrapremoto3');
    const semana2Enero = await remoteActor2.sendAndReceive('scrapremoto');
    const semana3Enero = await remoteActor3.sendAndReceive('scrapremoto2');
    const semana1Enerolisto= eliminarSignoPesos(eliminarEspaciosEnBlanco(semana1Enero))
    const semana2Enerolisto= eliminarSignoPesos(eliminarEspaciosEnBlanco(semana2Enero))
    const semana3Enerolisto= eliminarSignoPesos(eliminarEspaciosEnBlanco(semana3Enero))
   // pricesArray =extractTextFromElements(remoteMessage)
    console.log('Remote Actor Message:', eliminarEspaciosEnBlanco(semana1Enero));
    const resultadoComparacion = encontrarNumeroMasBajo(
      semana1Enerobestysin$,
      semana2Enerobestysin$,
      semana3Enerobestysin$,
      semana1Enerolisto,
      semana2Enerolisto,
      semana3Enerolisto
    );
    console.log('Los tres precios más bajos y sus ubicaciones son:');
    resultadoComparacion.forEach(resultado => {
      console.log(`Precio: $${resultado.numeroMasBajo}, Ubicación: ${resultado.ubicacion}`);
    });
  } catch (err) {
    console.error(err);
  } finally {
    actorSystem.destroy();
  }
}

main();