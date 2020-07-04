
<<<<<<< HEAD
import { database } from "./baseDeDatos";

export const helpers = {
    getUniversidadById: (id) => database.universidades.find((u) => u.id === id),
    getProfesorById: (id) => database.profesores.find((p) => p.id === id),
    getById: (tabla,id) => {return database[tabla].find(element => element.id === id)},
    ultimoId: (tabla) => {
        let max = 0
        database[tabla].forEach(element => {
            if (element.id > max) {max = element.id};
        });
        return max;
    },
    getByNombre: (tabla,nombre) => {return database[tabla].find(element => element.nombre === nombre)},
};

//console.log(helpers.ultimoId('profesores'));
=======
import { database } from './baseDeDatos';

const getTablaByProp = (table, prop, val) => database[table].find(x => x[prop] === val);

export const helpers = {
    getTabla: table => database[table],

    getUniversidadById: id => getTablaByProp('universidades', 'id', id),

    getProfesorById: id => getTablaByProp('profesores', "id", id),

    getMateriaById: id => getTablaByProp('materias', "id", id),
    getMateriaByNombre: nombre => getTablaByProp('materias', "nombre", nombre),

    getAlumnoById: id => getTablaByProp('alumnos', "id", id),
    getAlumnoByNombre: nombre => getTablaByProp('alumnos', "nombre", nombre),

    getUltimoId: table => database[table].sort((a,b) => b.id-a.id)[0]
};
>>>>>>> 84fc77038c2d9dfa1d03980cd05b2b69a468cafd
