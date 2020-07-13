import express, { response } from 'express';
import { getPostsFull, getPostById } from './api';

var postApi = express.Router();

postApi.get('/', function (req, res) {
  getPostsFull()
    .then( (result) => res.json(result) );
});

postApi.get('/:id', function (req, res) {
  getPostById(req.params.id)
    .then( (result) => res.json(result) );
});

export default postApi;
