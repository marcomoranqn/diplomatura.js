import express from 'express';
const app = express();
import postsRoutes from './controllers/posts';
import albumRoutes from './controllers/albums';
import userRoutes from './controllers/users';
import {osInfo} from './controllers/osInfo'; 

const PORT = 8080;

app.use('/posts', postsRoutes);
app.use('/albums', albumRoutes);
app.use('/users', userRoutes);

// Implementar el endpoint de stats aca. GET "/"
app.get('/', async function (req, res) {
  res.json(osInfo);
});

app.listen(PORT);
console.log(`Express started on port ${PORT}`);
