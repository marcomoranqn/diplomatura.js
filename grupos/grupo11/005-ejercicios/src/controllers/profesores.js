import express, { query } from 'express';
import { connect, connectCollection } from './conexion';
import { getElementById, getElementByNombre, getElements } from './helpers';

const router = express.Router();
const dbName = 'Diplomatura';
//const client = await connect();
//const collection = client.db(dbName).collection('profesores');
//const collection = connectCollection('profesores');

router.get('/', async function (req, res) {
  console.log('entró a buscar profesores');
  const collection = await connectCollection('profesores');
  let resultado = '';
  if (req.query.id) {
    console.log('Encontró ID');
    resultado = await getElementById(collection, parseInt(req.query.id))
      .then((result) => result)
      .catch((err) => console.log('error :' + err));
    //console.log('resultado ID ' + resultado);
  } else {
    if (req.query.nombre) {
      console.log('Encontró Nombre');
      resultado = await getElementByNombre(collection, req.query.nombre)
        .then((result) => result)
        .catch((err) => console.log('error :' + err));
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

// EndPoint para agregar profesor
router.post('/', async function (req, res) {
  const collection = await connectCollection('profesores');

  let nuevoProfesor = {
    id: parseInt(req.body.id),
    nombre: req.body.nombre,
  };

  await getElementById(collection, parseInt(req.body.id))
    .then((result) => {
      console.log(result);
      if (!result) {
        collection.insertOne(nuevoProfesor);
        res.json({ ok: 'OK' });
      } else {
        console.log('Profesor repetido');
        res.json({ ok: 'NO' });
      }
    })
    .catch((err) => console.error(`Failed to find document:${err}`));

  //client.close();
});

// Método PUT para modificar el ID enviado por post con los datos enviados por body
router.put('/', async function (req, res) {
  const collection = await connectCollection('profesores');

  //Busco que esté el profesor
  const profesor = await getElementById(collection, parseInt(req.query.id))
    .then((result) => {
      if (result) {
        console.log(`Successfully found id document: ${result}.`);
        let query = { id: parseInt(req.query.id) };

        if (req.body.nombre) {
          query.nombre = req.body.nombre;
        }

        try {
          collection
            .updateOne({ id: parseInt(req.query.id) }, { $set: query })
            .then((profesorInsertado) => res.json(profesorInsertado))
            .catch((e) => console.log(e));
        } catch (e) {
          console.log(e);
        }
      } else {
        console.log('No id document matches the provided query.');
        console.log('No existe el profesor');
        res.json({ ok: 'NO' });
      }
      return result;
    })
    .catch((err) => console.error(`Failed to find id document: ${err}`));

  //client.close();
});

// Eliminar el profesor indicado en "id" y devolver un objeto JSON {ok: true}
router.delete('/', async function (req, res) {
  const collection = await connectCollection('profesores');

  //Busco que esté el profesor
  await getElementById(collection, parseInt(req.query.id))
    .then((result) => {
      if (result) {
        console.log(`Successfully found id document: ${result}.`);
        try {
          collection.deleteOne({ id: parseInt(req.query.id) });
        } catch (e) {
          console.log(e);
        }
        console.log('elemento borrado');
        res.json({ ok: true });
      } else {
        console.log('No id document matches the provided query.');
        res.json({ ok: false });
      }
      return result;
    })
    .catch((err) => {
      console.error(`Failed to find id document: ${err}`);
      res.json({ ok: false });
    });

  //client.close();
  console.log('Consulta OK');
});

export default router;
