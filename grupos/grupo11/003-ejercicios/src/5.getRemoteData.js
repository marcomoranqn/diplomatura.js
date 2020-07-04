import fetch from 'node-fetch';
export async function getRemoteData() {
  try {
    const resultado = fetch('https://jsonplaceholder.typicode.com/users');
    const resultadoJson = resultado.json();
    const usuarios = (resultadoJson) => {
      resultadoJson.forEach((element) => {
        console.log(
          '{ name: ' + element.name + ', city: ' + element.address.city + ' }'
        );
      });
    };
  } catch (error) {
    console.error(error);
  }
}
