import fetch from 'node-fetch';

// fetch('..... aquí va la url')
// recordar que fetch devuelve una promise, entonces puede hacer fetch(....).then(resultado => {.... })

export const getUserByIdAsync = async function(idUser){
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        const user =await  users.find( user => user.id === idUser);

        console.log(`Usuario: ${user.name}
Dirección: ${user.address.city}`);
};