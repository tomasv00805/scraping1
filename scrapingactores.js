const comedy = require('comedy');
const RemoteActor = require('./remoteActor.js'); // Utiliza la extensión .js

const actors = comedy;

async function main() {
  const actorSystem = actors();
    
  try {
    const rootActor = await actorSystem.rootActor();

    // Crear un actor remoto utilizando el módulo.
    const remoteActor = await rootActor.createChild(RemoteActor, {
      mode: 'remote',
      host: '192.168.0.105',
    });
 
    // Llamar a la función del actor remoto.
    const remoteMessage = await remoteActor.sendAndReceive('showMessage');
    console.log('Remote Actor Message:', remoteMessage);
  } catch (err) {
    console.error(err);
    console.error('Error en la comunicación con el actor remoto:');
  } finally {
    actorSystem.destroy();
  }
}

main();
  