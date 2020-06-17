
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