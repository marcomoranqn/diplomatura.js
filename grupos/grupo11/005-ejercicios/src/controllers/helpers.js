// modulo helper

export async function getElementById(collection, id) {
  return await collection
    .findOne({ id: id })
    .then((result) => {
      if (result) {
        console.log(`Successfully found id document: ${result}.`);
      } else {
        console.log('No id document matches the provided query.');
      }
      console.log('resultado2: ' + result.nombre);
      return result;
    })
    .catch((err) => {
      console.error(`Failed to find id document: ${err}`);
      return false;
    });
}

export async function getElementByNombre(collection, nombre) {
  return await collection
    .findOne({ nombre: nombre })
    .then((result) => {
      if (result) {
        console.log(`Successfully found nombre document: ${result}.`);
      } else {
        console.log('No nombre document matches the provided query.');
      }
      return result;
    })
    .catch((err) => {
      console.error(`Failed to find nombre document: ${err}`);
      return { ok: 'NO' };
    });
}

export async function getElements(collection) {
  return await collection
    .find({})
    .toArray()
    .then((result) => {
      if (result) {
        console.log(`Successfully found documents: ${result}.`);
      } else {
        console.log('No documents matches the provided query.');
      }
      return result;
    })
    .catch((err) => {
      console.error(`Failed to find documents: ${err}`);
      return { ok: 'NO' };
    });
}
