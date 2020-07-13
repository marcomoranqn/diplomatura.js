import express from 'express';
import { getAlbumsFull, getAlbumById } from './api';

var albumsApi = express.Router();

albumsApi.get('/', function (req, res) {
  getAlbumsFull()
    .then( (result) => res.json(result) );
});

albumsApi.get('/:id', function (req, res) {
  getAlbumById(req.params.id)
    .then( (result) => res.json(result) );
});

export default albumsApi;
