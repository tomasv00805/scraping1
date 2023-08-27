const actors = require('comedy');
const puppeteer = require('puppeteer');

class LocalActor {
  showMessage() {
    return "pc";
  }
}

class RemoteActor {
  showMessage() {
    return "laptop";
  }
}

async function main() {
  const actorSystem = actors();
    
  try {
    const rootActor = await actorSystem.rootActor();

    // Crear un actor local para mostrar el mensaje "pc".
    const localActor = await rootActor.createChild(LocalActor);
    const localMessage = await localActor.sendAndReceive('showMessage');
    console.log('Local Actor Message:', localMessage);

    // Crear un actor remoto para mostrar el mensaje "laptop".
    const remoteActor = await rootActor.createChild(RemoteActor, { mode: 'remote', host: '192.168.1.41' });
    const remoteMessage = await remoteActor.sendAndReceive('showMessage');
    console.log('Remote Actor Message:', remoteMessage);
  } catch (err) {
    console.error(err);
  } finally {
    actorSystem.destroy();
  }
}

main();