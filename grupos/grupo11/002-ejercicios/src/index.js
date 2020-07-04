// 1) Importar el objeto 'database' del archivo "./basededatos"
<<<<<<< HEAD
import { database } from './baseDeDatos';
import { helpers } from "./helpers";
=======
import { helpers } from './helpers';
import { database } from './baseDeDatos';
>>>>>>> 84fc77038c2d9dfa1d03980cd05b2b69a468cafd

// 2) Implementar una función que obtenga una universidad por Id
// 🤓 Tip: pueden ir probando las funciones usando console.log() asegurándose que los resultados sean los esperados

<<<<<<< HEAD
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
=======
console.log('------------------------------------------------------');
console.log('Inc 2) universidad por ID');
console.log(helpers.getUniversidadById(2));

// 3) Implementar una función que obtenga un profesor por Id
console.log('------------------------------------------------------');
console.log('Inc 3) profesor por ID');
console.log(helpers.getProfesorById(1));

// 4) Implementar una función que obtenga una materia por Id
// 🤓 Tip: Comparar con la función del ejercicio (3) y ver si se les ocurre una función genérica que sirva para cualquier tabla
console.log('------------------------------------------------------');
console.log('Inc 4) materia por ID');
console.log(helpers.getMateriaById(3));

// 5) Crear un objeto 'helpers' que contenga las funciones como métodos
console.log('------------------------------------------------------');
console.log('Inc 5) objeto helpers');
console.log('helpers {');
for (const prop in helpers) {
    console.log('\t ' + prop);
}
console.log('}');

// 6) Mover helpers y el todo el co´digo a un módulo, creando un nuevo archivo helpers.js

// 7) Crear un nuevo método en helpers que devuelva el último ID utilizado en una tabla
console.log('------------------------------------------------------');
console.log('Inc 7) ultimo ID en una tabla (materias)');
console.log(helpers.getUltimoId('materias'));
>>>>>>> 84fc77038c2d9dfa1d03980cd05b2b69a468cafd

// 8) Importar helpers desde su propio módulo

// 9) Implementar una función que permite insertar una nueva provincia en la base de datos
//    La función tomará como parámetro el nombre de la provincia y devolverá el ID de la nueva provincia
// 🤓 Tip: Reusar una o más funciones de helper
<<<<<<< HEAD
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
=======
console.log('------------------------------------------------------');
console.log('Inc 9) insertar provincia ("Chubut")');
const addProvincia = prov => {
    const newProv = {
        id: helpers.getUltimoId('provincias').id + 1,
        nombre: prov
    };
    helpers.getTabla('provincias').push(newProv);
    return helpers.getUltimoId('provincias').id;
};

console.log(addProvincia('Chubut'));

// 10) Implementar una función que reciba el id de una materia y devuelva la materia son los ids de universidad y profesores resueltos a sus nombres
console.log('------------------------------------------------------');
console.log('Inc 10) Info de materia');

const getMateriaDetallada = idMateria => {
    const materia = helpers.getMateriaById(idMateria);
    const nombresProfesores = [];
    
    materia.profesores.forEach( id => 
        nombresProfesores.push(helpers.getProfesorById(id).nombre)
    );

    return {
        id: idMateria,
        nombre: materia.nombre,
        profesores: nombresProfesores,
        universidad: helpers.getUniversidadById(materia.universidad).nombre
    } 
};

console.log(getMateriaDetallada(1));
// 11) Implementar una función que muestre en consola la información para todos los alumnos de la siguiente manera:
>>>>>>> 84fc77038c2d9dfa1d03980cd05b2b69a468cafd
// NOTAS DE ALUMNOS
// ----------------
// RIGOBERTO MANCHU        <-- En mayúsculas
// Análisis matemático: 5
// ....
// ALUMNO 2
// ...
<<<<<<< HEAD

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
=======
console.log('------------------------------------------------------');
console.log('Inc 11) Info de materias x alumno');

const alumnos = helpers.getTabla('alumnos');
const calificaciones = helpers.getTabla('calificaciones');

alumnos.getInfoMaterias = () => {
    console.log("NOTAS DE ALUMNOS");
    console.log("----------------");
    
    alumnos.forEach(alumno => {
        console.log("\n" + alumno.nombre.toUpperCase());

        calificaciones
            .filter(c => c.alumno === alumno.id)
            .map(({materia, nota}) => {
                console.log(helpers.getMateriaById(materia).nombre + " : " + nota);
                }
            )
        }
    );
};
alumnos.getInfoMaterias(); 

// 12) Implementar una función que guarde la calificación de un alumno y una materia
//     La función recibirá: 'nombre del alumno', 'nombre de la materia', 'nota'
//     Si el alumno y/o la materia no existen deberán crearlos en sus respectivas tablas
console.log('------------------------------------------------------');
console.log('Inc 12) agrega calificacion de alumno y materia');

const addCalificacion = (nombreAlumno, nombreMateria, calificacion) => {
    const alumno = helpers.getAlumnoByNombre(nombreAlumno);
    if (! alumno){
        //tabla alumnos definida en inc 11)
        //console.log('alumno no existe');
        alumnos.push({
            id: helpers.getUltimoId('alumnos').id + 1,
            nombre: nombreAlumno
        });
        //console.log(alumnos);
    }

    const materia = helpers.getMateriaByNombre(nombreMateria);
    if (! materia){
        const materias = helpers.getTabla('materias');
        //console.log('materia no existe');
        materias.push({
            id: helpers.getUltimoId('materias').id + 1,
            nombre: nombreMateria
        });
        //console.log(materias);
    }

    //console.log(helpers.getAlumnoByNombre(nombreAlumno).id);
    //console.log(helpers.getMateriaByNombre(nombreMateria).id);

    //tabla calificaciones definida en inc 11)
    calificaciones.push(
        {
            alumno: helpers.getAlumnoByNombre(nombreAlumno).id,
            materia: helpers.getMateriaByNombre(nombreMateria).id,
            nota: calificacion
        }
    )
}

addCalificacion('Gabriel', 'Ciencias Sociales', 7);
console.log(calificaciones);
>>>>>>> 84fc77038c2d9dfa1d03980cd05b2b69a468cafd
