import express from 'express';
const router = express.Router();

router.get('/', function(req, res) {
    req.db
        .collection('alumnos')
        .find()
        .toArray((err, getAlumnos) => {
            res.json(getAlumnos);
        });
});

router.get('/:id', function(req, res) {
    let query = { id: parseInt(req.params.id) };
    req.db
        .collection('alumnos')
        .find(query)
        .toArray((err, getAlumnos) => {
            res.json(getAlumnos);
        });
});

router.post('/', function(req, res) {
    // TIP: En req.body viene los datos
    // Completar
    //Tengo que definirlo afuer sino no lo toma
    let idAlumno = parseInt(req.body.id);
    let edadAlumno = parseInt(req.body.edad);
    //Creo un let con los datos del alumno que se va a agregar.
    let nuevoAlumno = {
        id: idAlumno,
        nombre: req.body.nombre,
        edad: edadAlumno,
        provincia: req.body.provincia,
    };
    let query = { id: parseInt(req.body.id) };

    req.db
        .collection('alumnos')
        .findOne(query)
        .then((result) => {
            //Si el alumno no esta lo cargo
            if (!result) {
                req.db.collection('alumnos').insert(nuevoAlumno);
                res.json({ mensaje: 'Alumno cargado' });
                /* req.db.collection("alumnos").find().toArray((err, getAlumnos) => {
                                                    res.json(getAlumnos);
                                                }); */
            } else {
                res.json({ mensaje: 'Alumno repetido' });
            }
        })
        .catch((err) => console.error('Failed to find document: ${err}'));
});

// Completar el resto de los métodos
// router....

router.put('/:id', function(req, res) {
    // Completar
    let query = { id: parseInt(req.param.id) };
    req.bd
        .collection('alumnos')
        .find(query)
        .then((result) => {
            //Si existe el alumno lo actualizo
            if (!result) {
                req.bd.collection('alumnos').update(query);
            }
        });
    res.json(bd.alumno.findById(req.params.id));
});

export default router;