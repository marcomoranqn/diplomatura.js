import express from 'express'; 
const app = express();
import postsRoutes from './controllers/posts';
import albumRoutes from './controllers/albums';
import moment from 'moment';
import os from 'os';

const PORT = 8080;
const fecha = new Date();
app.use('/posts', postsRoutes);
app.use('/albums', albumRoutes);

// Implementar el endpoint de stats aca. GET "/"
//const os = require('os');
//const fechas = require('mo');
app.get('/', function (req, res) {
  
  moment.locale('es');
  const result = {
    serverCurrentTime: moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'),
    serverStartUpTime: moment(fecha).format('MMMM Do YYYY, h:mm:ss a'),
    serverUpTime: moment(fecha).fromNow(),
    status: {
      freemem: os.freemem(),
      totalmem: os.totalmem(),
      uptime: os.uptime(),
      hostname: os.hostname(),
      platform: os.platform(),
    }
  }
  res.json(result);
  //res.json({ mensaje: 'Hello world!' });
});

//  2.1 - "/posts/"
// Este endpoint debe devolver los posts como https://jsonplaceholder.typicode.com/posts/ pero 
// reemplazando userId, por el objeto user completo.


app.listen(PORT);
console.log(`Express started on port ${PORT}`);
