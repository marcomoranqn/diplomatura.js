import express from 'express';
import bodyParser from 'body-parser';
import alumnosRoutes from './controllers/alumnos';
import profesoresRoutes from './controllers/profesores';
import materiasRoutes from './controllers/materias';
import calificacionesRoutes from './controllers/calificaciones';
import expressMongoDb from 'express-mongo-db';

const PORT = 8080;
const app = express();
app.use(bodyParser.json());

//import expressMongoDb from 'express-mongo-db';
//let expressMongoDb = require('express-mongo-db');
app.use(expressMongoDb('mongodb://localhost:27017/diplomatura'));

app.use('/alumnos', alumnosRoutes);
app.use('/profesores', profesoresRoutes);
app.use('/materias', materiasRoutes);
app.use('/calificaciones', calificacionesRoutes);

app.get('/', function(req, res) {
    res.json({ mensaje: 'Bienvenido al servidor de la Universidad' });
});

app.listen(PORT);
console.log(`Express started on port ${PORT}`);