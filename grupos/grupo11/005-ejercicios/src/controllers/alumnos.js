import express from 'express';
import { connect } from './conexion';

const router = express.Router();
const dbName = 'Diplomatura';

// Se puede hacer
// const {nombre, edad, provincia} = req.body
// para obtener los datos enviados por body

// GET http://localhost/alumnos/
router.get('/', async function (req, res) {
  // Completar
  //console.log('parametros1 ' + req.query.nombre);
  const client = await connect();
  const collection = client.db(dbName).collection('alumnos');
  let resultado = '';
  if (req.query.id) {
    console.log('Encontró ID');
    resultado = await collection
      .findOne({ id: parseInt(req.query.id) })
      .then((result) => {
        if (result) {
          console.log(`Successfully found id document: ${result}.`);
        } else {
          console.log('No id document matches the provided query.');
        }
        return result;
      })
      .catch((err) => console.error(`Failed to find id document: ${err}`));
  } else {
    if (req.query.nombre) {
      console.log('Encontró Nombre');
      resultado = await collection
        .findOne({ nombre: req.query.nombre })
        .then((result) => {
          if (result) {
            console.log(`Successfully found nombre document: ${result}.`);
          } else {
            console.log('No nombre document matches the provided query.');
          }
          return result;
        })
        .catch((err) =>
          console.error(`Failed to find nombre document: ${err}`)
        );
    } else {
      console.log('Todos los alumnos');
      resultado = await collection
        .find({})
        .toArray()
        .then((docs) => docs);
    }
  }
  res.json(resultado);
  client.close();
});

// EndPoint GET http://localhost:8080/alumnos/x
router.get('/:id', async function (req, res) {
  // Completar
  const client = await connect();
  const collection = client.db(dbName).collection('alumnos');
  const resultado = await collection
    .findOne({ id: parseInt(req.params.id) })
    .then((result) => {
      if (result) {
        console.log(`Successfully found document: ${result}.`);
      } else {
        console.log('No document matches the provided query.');
      }
      return result;
    })
    .catch((err) => console.error(`Failed to find document: ${err}`));

  console.log(resultado);
  res.send(resultado);
  client.close();
});

router.post('/', async function (req, res) {
  const client = await connect();
  const collection = client.db(dbName).collection('alumnos');
  let nuevoAlumno = {
    id: parseInt(req.body.id),
    nombre: req.body.nombre,
    edad: parseInt(req.body.edad),
    provincia: req.body.provincia,
  };
  //let query = { id: parseInt(req.body.id) };

  await collection
    .findOne({ id: req.body.id })
    .then((result) => {
      console.log(result);
      if (!result) {
        collection.insertOne(nuevoAlumno);
        res.json({ ok: 'OK' });
      } else {
        console.log('alumno repetido');
        res.json({ ok: 'NO' });
      }
    })
    .catch((err) => console.error(`Failed to find document:${err}`));
  // Completar

  client.close();
});

// Método PUT para modificar el ID enviado por post con los datos enviados por body
router.put('/', async function (req, res) {
  const client = await connect();
  const collection = client.db(dbName).collection('alumnos');

  //Busco que esté el alumno
  const alumno = await collection
    .findOne({ id: parseInt(req.query.id) })
    .then((result) => {
      if (result) {
        console.log(`Successfully found id document: ${result}.`);
        let query = { id: parseInt(req.query.id) };

        if (req.body.nombre) {
          query.nombre = req.body.nombre;
        }
        if (req.body.edad) {
          query.edad = req.body.edad;
        }
        if (req.body.provincia) {
          query.provincia = req.body.provincia;
        }

        try {
          collection
            .updateOne({ id: parseInt(req.query.id) }, { $set: query })
            .then((alumnoInsertado) => res.json(alumnoInsertado))
            .catch((e) => console.log(e));
        } catch (e) {
          console.log(e);
        }
      } else {
        console.log('No id document matches the provided query.');
        console.log('No existe el alumno');
        res.json({ ok: 'NO' });
      }
      return result;
    })
    .catch((err) => console.error(`Failed to find id document: ${err}`));

  client.close();
});

// Eliminar el alumno indicado en "id" y devolver un objeto JSON {ok: true}
router.delete('/', async function (req, res) {
  const client = await connect();
  const collection = client.db(dbName).collection('alumnos');

  //Busco que esté el alumno
  const alumno = await collection
    .findOne({ id: parseInt(req.query.id) })
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

  client.close();
  console.log('Consulta OK');
});

export default router;
