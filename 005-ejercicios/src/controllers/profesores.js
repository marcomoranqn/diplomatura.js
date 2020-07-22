import express from 'express';
const router = express.Router();

router.get('/', function(req, res) {
    req.db
        .collection('profesores')
        .find()
        .toArray((err, getProfesores) => {
            res.json(getProfesores);
        });
});

router.get('/:id', function(req, res) {
    let query = { id: parseInt(req.params.id) };
    req.db
        .collection('profesores')
        .find(query)
        .toArray((err, getProfesores) => {
            res.json(getProfesores);
        });
});

router.post('/', function(req, res) {
    // TIP: En req.body viene los datos
    // Completar
    //Tengo que definirlo afuera sino no reconoce el parseInt
    let idProfesor = parseInt(req.body.id);

    //Creo un let con los datos del alumno que se va a agregar.
    let nuevoProfesor = {
        id: idProfesor,
        nombre: req.body.nombre,
    };
    let query = { id: parseInt(req.body.id) };

    //Busco el profesor que quiero cargar para asegurarme que no este
    req.db
        .collection('profesores')
        .findOne(query)
        .then((result) => {
            //Si el profesor no esta lo cargo
            if (!result) {
                req.db.collection('profesores').insert(nuevoProfesor);
                res.json({ mensaje: 'Profesor cargado' });
                /* req.db.collection("profesores").find().toArray((err, getProfesores) => {
                                    res.json(getProfesores);
                                }); */
            } else {
                res.json({ mensaje: 'Profesor repetido' });
            }
        })
        .catch((err) => console.error('Failed to find document: ${err}'));
});

// Completar el resto de los métodos
// router....

router.put('/:id', function(req, res) {
    // Completar
});

export default router;