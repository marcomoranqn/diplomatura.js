import fetch from 'node-fetch';

// fetch('..... aquí va la url')
// recordar que fetch devuelve una promise, entonces puede hacer fetch(....).then(resultado => {.... })
export function api() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (resultado) {
      return resultado.json();
    })
    //    .then(function (myJson) {
    //      console.log(myJson);
    //    })
    .then((users) => {
      users.forEach((element) => {
        console.log(
          '{ name: ' + element.name + ', city: ' + element.address.city + ' }'
        );
      });
    })
    .catch((error) => console.error(error));
}
