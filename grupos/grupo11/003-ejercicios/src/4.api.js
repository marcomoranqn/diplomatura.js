import fetch from 'node-fetch';

// fetch('..... aquí va la url')
// recordar que fetch devuelve una promise, entonces puede hacer fetch(....).then(resultado => {.... })
<<<<<<< HEAD
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
          '{ name: ' + element.name + ', city: ' + element.address.city + '}'
        );
      });
    })
    .catch((error) => console.error(error));
}
=======

export const getUserById = function(idUser){
    fetch("https://jsonplaceholder.typicode.com/users")
        .then( response => response.json())
        .then( users => {
            let user = users.find( user => user.id === idUser);
            console.log(`Usuario: ${user.name}
Dirección: ${user.address.city}`);
            }
        )
    };
>>>>>>> 84fc77038c2d9dfa1d03980cd05b2b69a468cafd
