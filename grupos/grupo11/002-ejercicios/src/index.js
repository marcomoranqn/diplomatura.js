// 1) Importar el objeto 'database' del archivo "./basededatos"
import { database } from './baseDeDatos';
import { helpers } from "./helpers";

// 2) Implementar una función que obtenga una universidad por Id
// 🤓 Tip: pueden ir probando las funciones usando console.log() asegurándose que los resultados sean los esperados

export const getUniversidadById = (id) => database.universidades.find((u) => u.id === id);
//console.log(getUniversidadById(2));


// 3) Implementar una función que obtenga un profesor por Id
export const getProfesorById = (id) => database.profesores.find(p => p.id === id);
//console.log(getProfesorById(2));

// 4) Implementar una función que obtenga una materia por Id
// 🤓 Tip: Comparar con la función del ejercicio (3) y ver si se les ocurre una función genérica que sirva para cualquier tabla
export const getById = (tabla,id) => {return database[tabla].find(element => element.id === id)};

//console.log(getById("materias",2));


// 5) Crear un objeto 'helpers' que contenga las funciones como métodos
/*
const helpers = {
    getUniversidadById: getUniversidadById(idU),
    getProfesorById: getProfesorById(idP),
    getById: getById(T,idT),
};
*/
// 6) Mover helpers y el todo el co´digo a un módulo, creando un nuevo archivo helpers.js

// 7) Crear un nuevo método en helpers que devuelva el último ID utilizado en una tabla

// 8) Importar helpers desde su propio módulo

// 9) Implementar una función que permite insertar una nueva provincia en la base de datos
//    La función tomará como parámetro el nombre de la provincia y devolverá el ID de la nueva provincia
// 🤓 Tip: Reusar una o más funciones de helper
const insertNuevaProvincia = (nombreProvincia) => {
    if (!(helpers.getByNombre('provincias',nombreProvincia))) {
        let idNuevo = helpers.ultimoId('provincias') + 1;
        database.provincias.push({id:idNuevo,nombre:nombreProvincia});
        return idNuevo
    }
}
//console.log(database.provincias);
//let nuevo = insertNuevaProvincia ('Catamarca');
//console.log('nuevo id : '+nuevo);
//console.log(database.provincias);
// 10) Implementar una función que reciba el id de una materia y devuelva la materia con los ids de 
// universidad y profesores resueltos a sus nombres
const materias = (idMateria) => {
    let materia = helpers.getById('materias',idMateria);
    console.log('materia1 :'+materia.profesores);
    let data = {
        id: materia.id,
        nombre: materia.nombre,
        profesores: materia.profesores.map(mat => helpers.getProfesorById(mat).nombre),
        universidad: helpers.getUniversidadById(materia.universidad).nombre,
    };
    return data;
}

//let materia2 = materias(1);
//console.log(materia2);
//console.log(materia2.profesores);
//console.log(materia2.universidad);
// 11) Implementar una función que muestre en consola la información para todos los alumnos de 
// la siguiente manera:
// NOTAS DE ALUMNOS
// ----------------
// RIGOBERTO MANCHU        <-- En mayúsculas
// Análisis matemático: 5
// ....
// ALUMNO 2
// ...

const mostrarNotasAlumnos = () => {
    let data= 'NOTAS DE ALUMNOS \n----------------\n';
    //console.log('NOTAS DE ALUMNOS \n----------------')
    database.alumnos.forEach((alumno) => {
        data += alumno.nombre.toUpperCase()+'\n'; 
        //console.log(alumno.nombre.toUpperCase());
        database.calificaciones.forEach((cal) => {
            if (cal.alumno === alumno.id) {
                data += database.materias.find((mat) => mat.id === cal.materia).nombre + ': ' + cal.nota + '\n';
            };
        });
    })
    return data;
}

//console.log(mostrarNotasAlumnos());
// 12) Implementar una función que guarde la calificación de un alumno y una materia
//     La función recibirá: 'nombre del alumno', 'nombre de la materia', 'nota'
//     Si el alumno y/o la materia no existen deberán crearlos en sus respectivas tablas

const addCalificacion = (nombreAlumno, nombreMateria, nota) => {
    let idAlumno, idMateria = 0;
    let materia = helpers.getByNombre('materias',nombreMateria);
    if (materia === undefined) {
        idMateria = helpers.ultimoId('materias') +1;
        database.materias.push({id:idMateria, nombre:nombreMateria});
    } else {idMateria = materia.id}

    let alumno = helpers.getByNombre('alumnos',nombreAlumno);
    console.log(alumno);
    if (alumno === undefined) {
        idAlumno = helpers.ultimoId('alumnos') +1;
        console.log('id1 '+ idAlumno);
        database.alumnos.push({id:idAlumno, nombre:nombreAlumno});
    } else {idAlumno = alumno.id}
    console.log('id2 '+idAlumno);
    database.calificaciones.push({alumno: idAlumno, materia: idMateria, nota: nota});
}

//let resp = helpers.getByNombre('alumnos','Marta Raca');
//console.log(resp);
//console.log(database.alumnos);
//console.log(database.calificaciones);
//console.log(addCalificacion('Marta Raca','Análisis matemático',10));
//console.log(database.alumnos);
//console.log(database.calificaciones);