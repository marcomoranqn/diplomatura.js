import fetch from 'node-fetch';

// fetch('..... aquí va la url')
// recordar que fetch devuelve una promise, entonces puede hacer fetch(....).then(resultado => {.... })

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