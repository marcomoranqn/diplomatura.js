import express from 'express';
const router = express.Router();

router.get('/', function(req, res) {
    req.db
        .collection('calificaciones')
        .find()
        .toArray((err, getCalificaciones) => {
            res.json(getCalificaciones);
        });
});

router.get('/:id', function(req, res) {
    let query = { id: parseInt(req.params.id) };
    req.db
        .collection('calificaciones')
        .find(query)
        .toArray((err, getCalificaciones) => {
            res.json(getCalificaciones);
        });
});

router.post('/', function(req, res) {
    // TIP: En req.body viene los datos
    // Completar
    //Creo un let con los datos de la calificaion que se va a agregar.
    //Tengo que definirlo afuera sino no reconoce el parseInt
    let idMateria = parseInt(req.body.materia);
    let idAlumno = parseInt(req.body.alumno);

    let nuevaCalificacion = {
        alumno: idAlumno,
        materia: idMateria,
        nota: req.body.nota,
    };

    let query2 = { id: parseInt(req.body.alumno) };

    //Busco la universidad para asegurarme que exista
    req.db
        .collection('alumnos')
        .findOne(query2)
        .then((resp) => {
            if (resp) {
                let query3 = { id: parseInt(req.body.materia) };
                req.db
                    .collection('materias')
                    .findOne(query3)
                    .then((resp) => {
                        if (resp) {
                            //ver como no cargar 2 veces la misma calificacion.
                            let query = {
                                materia: parseInt(req.body.materia),
                                alumno: parseInt(req.body.alumno),
                            };

                            req.db
                                .collection('calificaciones')
                                .findOne(query)
                                .then((resp) => {
                                    if (!resp) {
                                        req.db
                                            .collection('calificaciones')
                                            .insert(nuevaCalificacion);
                                        res.json({ mensaje: 'Calificacion cargada' });
                                    } else {
                                        res.json({
                                            mensaje: 'El alumno ya posee una calificacion en esa materia',
                                        });
                                    }
                                })
                                .catch((err) =>
                                    console.error('Error al buscar la calificacion')
                                );
                        } else {
                            res.json({ mensaje: 'Materia no cargada' });
                        }
                    })
                    .catch((err) => console.error('Error al buscar la materia'));
            } else {
                res.json({ mensaje: 'Alumno no cargado' });
            }
        })
        .catch((err) => console.error('Error al buscar el alumno'));
});

// Completar el resto de los métodos
// router....

router.put('/:id', function(req, res) {
    // Completar
});

export default router;