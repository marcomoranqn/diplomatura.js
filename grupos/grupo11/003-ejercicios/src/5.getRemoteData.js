import fetch from 'node-fetch';

export async function getRemoteData() {
  try {
    console.log('antes del fetch');
    const resultado = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log('antes resultado.json');
    const resultadoJson = await resultado.json();
    console.log('antes resultadoJson');
    const usuarios = await resultadoJson.forEach((element) => {
      console.log(
        '{ name: ' + element.name + ', city: ' + element.address.city + ' }'
      );
    });
  } catch (error) {
    console.error(error);
  }
}
