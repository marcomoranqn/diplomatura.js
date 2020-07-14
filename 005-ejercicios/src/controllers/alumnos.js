import express from 'express';

import bd from 'baseDeDatos';

var alumno = bd.alumno;

const router = express.Router();

router.get('/', function(req, res) {
    // Completar

    res.json(bd.alumno.find());
});

router.get('/:id', function(req, res) {
    // Completar
    res.json(bd.alumno.findById(req.params.id));
});

router.post('/', function(req, res) {
    // TIP: En req.body viene los datos

    // Completar
    res.json({});
});

// Completar el resto de los métodos
// router....

export default router;