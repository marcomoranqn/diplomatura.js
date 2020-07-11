import express from 'express';
import fetch from 'node-fetch';

var albumsApi = express.Router();

albumsApi.get('/', async function (req, res) {
  try {
    const albumsTodos = await fetch('https://jsonplaceholder.typicode.com/albums/');
    const albumsJson = await albumsTodos.json();

    const usersTodos = await fetch('https://jsonplaceholder.typicode.com/users/');
    const usersJson = await usersTodos.json();

    const respuesta = albumsJson.map((elemento) => {
      return{
        id: elemento.id,
        title: elemento.title,
        user: usersJson.find((usuario)=> usuario.id === elemento.userId),
      }
    });
    res.json(respuesta);
  } 
  catch (error) {console.log(error)};
  //res.send('Hola albums!.');
});

albumsApi.get('/:id',async function (req, res) {
  try {
    const albumsTodos = await fetch('https://jsonplaceholder.typicode.com/albums/'+req.params.id);
    const albumsJson = await albumsTodos.json();

    const fotosTodas = await fetch('https://jsonplaceholder.typicode.com/albums/'+req.params.id+'/photos');
    const fotosJson = await fotosTodas.json();

    const resultado = {
      id: albumsJson.id,
      userId: albumsJson.userId,
      title: albumsJson.title,
      photos: fotosJson,
    };
    res.json(resultado);
    //res.send(`Hola album ${req.params.id}.`);
  }
  catch(error){console.log(error)};
});

export default albumsApi;
