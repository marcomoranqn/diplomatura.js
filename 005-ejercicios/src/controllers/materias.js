import express from 'express';
const router = express.Router();

router.get('/', function(req, res) {
    req.db
        .collection('materias')
        .find()
        .toArray((err, getMaterias) => {
            res.json(getMaterias);
        });
});

router.get('/:id', function(req, res) {
    let query = { id: parseInt(req.params.id) };
    req.db
        .collection('materias')
        .find(query)
        .toArray((err, getMaterias) => {
            res.json(getMaterias);
        });
});

router.post('/', function(req, res) {
    // TIP: En req.body viene los datos
    // Completar
    //Tengo que definirlo afuera sino no reconoce el parseInt
    let idMaterias = parseInt(req.body.id);
    let idUniversidad = parseInt(req.body.universidad);

    //Creo un let con los datos del alumno que se va a agregar.
    let nuevaMateria = {
        id: idMaterias,
        nombre: req.body.nombre,
        profesores: req.body.profesores,
        universidad: idUniversidad,
    };
    let query = { id: parseInt(req.body.id) };
    let query2 = { id: parseInt(req.body.universidad) };
    let valido = true;

    //Busco la universidad para asegurarme que exista
    req.db
        .collection('universidades')
        .findOne(query2)
        .then((resp) => {
            if (resp) {
                let i = 0;
                //Recorro el arreglo de profesores y busco cada uno para ver si existen
                while (valido && i < nuevaMateria.profesores.length) {
                    let query3 = { id: parseInt(nuevaMateria.profesores[i]) };
                    req.db
                        .collection('profesores')
                        .findOne(query3)
                        .then((resp) => {
                            if (!resp) {
                                valido = false;
                                res.json({ mensaje: 'Profesor no cargado' });
                            }
                        })
                        .catch((err) => console.error('Error al buscar el profesor'));
                    i++;
                }
                if (valido) {
                    //Busco la materia que quiero cargar para asegurarme que no este
                    req.db
                        .collection('materias')
                        .findOne(query)
                        .then((result) => {
                            //Si la materia no esta lo cargo
                            if (!result) {
                                req.db.collection('materias').insert(nuevaMateria);
                                res.json({ mensaje: 'Materias cargada' });
                                /* req.db.collection("materias").find().toArray((err, getMaterias) => {
                                                                    res.json(getMaterias);
                                                                }); */
                            } else {
                                res.json({ mensaje: 'Materia repetida' });
                            }
                        })
                        .catch((err) => console.error('Error al buscar la materia'));
                }
            } else {
                res.json({ mensaje: 'Universidad no cargada' });
            }
        });
});

// Completar el resto de los métodos
// router....

router.put('/:id', function(req, res) {
    // Completar
});

export default router;