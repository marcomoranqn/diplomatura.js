import express, { query } from 'express';
import { connect, connectCollection } from './conexion';
import { getElementById, getElementByNombre, getElements } from './helpers';

const router = express.Router();
const dbName = 'Diplomatura';
//const client = await connect();
//const collection = client.db(dbName).collection('profesores');
//const collection = connectCollection('profesores');

router.get('/', async function (req, res) {
  console.log('Entró a buscar materias');
  const collection = await connectCollection('materias');
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
      console.log('Todos las materias');
      resultado = await getElements(collection)
        .then((result) => result)
        .catch((err) => console.log('error :' + err));
    }
  }
  console.log('resultado final: ' + resultado);
  res.json(resultado);
});

// EndPoint para agregar materia
router.post('/', async function (req, res) {
  const collection = await connectCollection('materias');

  let nuevaMateria = {
    id: parseInt(req.body.id),
    nombre: req.body.nombre,
    profesores: req.body.profesores,
    universidad: req.body.universidad,
  };
  console.log('nuevaMateria ' + nuevaMateria);
  await getElementById(collection, parseInt(req.body.id))
    .then(async (result) => {
      console.log(result);
      if (!result) {
        let condicion = false;
        console.log('No encontró materia');
        const collectionU = await connectCollection('universidades');
        await getElementById(collectionU, nuevaMateria.universidad)
          .then((resultU) => {
            if (resultU) {
              console.log('Encontró Universidad');
              condicion = true;
            }
          })
          .catch((err) => console.log(err));
        if (condicion) {
          const collectionP = await connectCollection('profesores');
          const profesores = await getElements(collectionP).then(
            (elementoP) => {
              return elementoP;
            }
          );
          console.log('profesores ' + profesores);
          for (let prof of nuevaMateria.profesores) {
            let resultado = profesores.find((profes) => profes.id === prof);
            console.log(`profesor ${prof} resultado = ${resultado}`);
            if (!resultado) {
              condicion = false;
              break;
            }
          }
        }

        if (condicion) {
          collection.insertOne(nuevaMateria);
          res.json({ ok: 'OK' });
        } else {
          console.log('No existe universidad o profesor/a');
          res.json({ ok: 'NO' });
        }
      } else {
        console.log('Materia repetida');
        res.json({ ok: 'NO' });
      }
    })
    .catch((err) => console.error(`Failed to find document:${err}`));

  //client.close();
});

// Método PUT para modificar el ID enviado por post con los datos enviados por body
router.put('/', async function (req, res) {
  const collection = await connectCollection('materias');

  //Busco que esté el profesor
  const materia = await getElementById(collection, parseInt(req.query.id))
    .then(async (result) => {
      if (result) {
        console.log(`Successfully found id document: ${result}.`);
        let query = { id: parseInt(req.query.id) };

        if (req.body.nombre) {
          query.nombre = req.body.nombre;
        }
        // Chequeo que los profesores y universidad existan
        let condicion = true;
        if (req.body.universidad) {
          //query.unversidad = req.body.universidad;
          const collectionU = await connectCollection('universidades');
          await getElementById(collectionU, req.body.universidad)
            .then((resultU) => {
              if (resultU) {
                console.log('Encontró Universidad');
                condicion = true;
                query.unversidad = req.body.universidad;
              } else {
                console.log('No encontró Universidad');
                condicion = false;
              }
            })
            .catch((err) => console.log(err));
        }
        if (condicion && req.body.profesores) {
          const collectionP = await connectCollection('profesores');
          const profesores = await getElements(collectionP).then(
            (elementoP) => {
              return elementoP;
            }
          );
          console.log('profesores ' + profesores);
          for (let prof of req.body.profesores) {
            let resultado = profesores.find((profes) => profes.id === prof);
            console.log(`profesor ${prof} resultado = ${resultado}`);
            if (!resultado) {
              condicion = false;
              break;
            }
          }
          if (condicion) {
            query.profesores = req.body.profesores;
            console.log('Encontró todos los profesores');
          } else {
            console.log('No encontró Profesores');
          }
        }

        try {
          collection
            .updateOne({ id: parseInt(req.query.id) }, { $set: query })
            .then((materiaInsertada) => res.json(materiaInsertada))
            .catch((e) => console.log(e));
        } catch (e) {
          console.log(e);
        }
      } else {
        console.log('No id document matches the provided query.');
        console.log('No existe la materia');
        res.json({ ok: 'NO' });
      }
      return result;
    })
    .catch((err) => console.error(`Failed to find id document: ${err}`));

  //client.close();
});

// Eliminar la materia indicado en "id" y devolver un objeto JSON {ok: true}
router.delete('/', async function (req, res) {
  const collection = await connectCollection('materias');

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
