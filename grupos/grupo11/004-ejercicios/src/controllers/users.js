import express, { response } from 'express';
import { getUsersFull, getUserById } from './api';

var userApi = express.Router();

userApi.get('/', function (req, res) {
  getUsersFull()
    .then( (result) => res.json(result) );
});

userApi.get('/:id', function (req, res) {
  getUserById(req.params.id)
    .then( (result) => res.json(result) );
});

export default userApi;
