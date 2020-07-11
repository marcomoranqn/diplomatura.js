import express from 'express';
import fetch from 'node-fetch';

var postApi = express.Router();

postApi.get('/', async function (req, res) {
  let respuesta;
try {
  const todosPosts = await fetch('https://jsonplaceholder.typicode.com/posts/');

  const todosPostJson = await todosPosts.json();

  const todosUsuarios = await fetch('https://jsonplaceholder.typicode.com/users/');

  const todosUsuariosJson = await todosUsuarios.json();

  const respuesta = await todosPostJson.map((elemento)=>{
    return {
      id: elemento.id,
      title: elemento.title,
      body: elemento.body,
      user: todosUsuariosJson.find((usuario) => usuario.id===elemento.userId),
    }
  });
  res.json(respuesta);
  }
  catch (error) {return error}; 

  
});

postApi.get('/:id', async function (req, res) {
  let respuesta;
  try {
    const postById = await fetch('https://jsonplaceholder.typicode.com/posts/'+req.params.id);
    const postByIdJson = await postById.json();

    const commentById = await fetch('https://jsonplaceholder.typicode.com/posts/'+req.params.id+'/comments');
    const commentByIdJson = await commentById.json();

    respuesta = {
      userId: postByIdJson.userId,
      id: postByIdJson.id,
      title: postByIdJson.title,
      body: postByIdJson.body,
      posts: commentByIdJson,
    }

    res.json(respuesta);
  }
  catch(error) {console.log(error)};
  //res.send(`Hola post ${req.params.id}.`);
});

export default postApi;
