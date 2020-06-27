import fetch from 'node-fetch';

// fetch('..... aquí va la url')
// recordar que fetch devuelve una promise, entonces puede hacer fetch(....).then(resultado => {.... })

export const users = function(){
    fetch("https://jsonplaceholder.typicode.com/users")
        .then( response => console.log(response.json()))
//        .catch()
//        .finally()
};