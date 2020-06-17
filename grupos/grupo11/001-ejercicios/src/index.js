import {
  materiasAprobadasByNombreAlumno,
  expandirInfoUniversidadByNombre,
  promedioDeEdad,
  alumnosConPromedioMayorA,
  materiasSinAlumnosAnotados,
  promedioDeEdadByUniversidadId
} from './moduloEjercicios';

import baseDeDatos from './basededatos';

// materiasAprobadasByNombreAlumno
console.log('-----------------------------------------------------');
console.log('Ejecutando ejercicios materiasAprobadasByNombreAlumno.');

const materiasAprobadasPorSuzana = materiasAprobadasByNombreAlumno(
  'Suzana Mendez'
);
console.log('Materias aprobadas por Suzana:', materiasAprobadasPorSuzana);

const materiasAprobadasPorAlina = materiasAprobadasByNombreAlumno(
  'Alina Robles'
);
console.log('Materias aprobadas por Alina:', materiasAprobadasPorAlina);

// expandirInfoUniversidadByNombre
console.log('------------------------------------------------------');
console.log('Ejecutando ejercicios expandirInfoUniversidadByNombre.');

//const infoUniversidadComahue = expandirInfoUniversidadByNombre(
//  'Universidad del Comahue'
//);
//console.log('Info comahue:', infoUniversidadComahue);

//const infoUniversidadRio = expandirInfoUniversidadByNombre(
//  'Universidad de Rio Negro'
//);
//console.log('Info rio negro:', infoUniversidadRio);

/*console.log('------------------------------------------------------');
console.log('Ejecutando ejercicios promedioDeEdad');

const promedioAlumnos = promedioDeEdad();
console.log('Info Promedio: ', promedioAlumnos);

console.log('------------------------------------------------------');
console.log('Ejecutando ejercicios alumnosConPromedioMayorA ');

const promedioMayor3 = alumnosConPromedioMayorA(3);
console.log('Info Promedio mayor a 3: ', promedioMayor3);

const promedioMayor5 = alumnosConPromedioMayorA(5);
console.log('Info Promedio mayor a 5: ', promedioMayor5);

const promedioMayor7 = alumnosConPromedioMayorA(7);
console.log('Info Promedio mayor a 7: ', promedioMayor7);


console.log('------------------------------------------------------');
console.log('Ejecutando ejercicios materiasSinAlumnosAnotados ');

const materiaSinAlumnos = materiasSinAlumnosAnotados();
console.log('Info Materias sin alumnos anotados: ', materiaSinAlumnos);


console.log('------------------------------------------------------');
console.log('Ejecutando ejercicios promedioDeEdadByUniversidadId ');

const promUncoma = promedioDeEdadByUniversidadId(1);
console.log('Info promedio edad alumnos Uncoma: ', promUncoma);

const promUNRN = promedioDeEdadByUniversidadId(2);
console.log('Info promedio edad alumnos UNRN: ', promUNRN);
*/
