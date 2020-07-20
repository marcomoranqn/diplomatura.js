import express from 'express';
import { connect, connectCollection } from './conexion';
import { getElementById, getElementByNombre, getElements } from './helpers';

const router = express.Router();
const dbName = 'Diplomatura';
//const client = await connect();
//const collection = client.db(dbName).collection('profesores');
//const collection = connectCollection('profesores');

router.get('/', async function (req, res) {
  const collection = await connectCollection('profesores');
  let resultado = '';
  if (req.query.id) {
    console.log('Encontró ID');
    resultado = await getElementById(collection, parseInt(req.query.id)).then(
      (result) => {
        console.log('resultado1: ' + result);
        return result;
      }
    );
    console.log('resultado ID ' + resultado);
  } else {
    if (req.query.nombre) {
      console.log('Encontró Nombre');
      resultado = await getElementByNombre(collection, req.query.nombre);
    } else {
      console.log('Todos los profesores');
      resultado = await getElements(collection)
        .then((result) => result)
        .catch((err) => console.log('error :' + err));
    }
  }
  console.log('resultado final: ' + resultado);
  res.json(resultado);
});

export default router;
