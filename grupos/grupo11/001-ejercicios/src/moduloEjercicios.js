import basededatos from './basededatos';

/**
 * Obtiene la lista de materias aprobadas (nota >= 4) para el nombre de alumno dado.
 * En caso de no existir el alumno, devolver undefined.
 * En caso de que no encuentre ninguna materia para el alumno, devuelve un array vacio []
 * Ejemplo del formato del resultado suponiendo que el alumno cursa dos materias y tiene mas de 4.
 *  [
    {
      id: 1,
      nombre: 'Análisis matemático',
      profesores: [1, 2],
      universidad: 1,
    },
    {
      id: 2,
      nombre: 'Corte y confección de sabanas',
      profesores: [3],
      universidad: 2,
    }
  ]
 * @param {number} alumnoId el id del alumno
 */
export const materiasAprobadasByNombreAlumno = (nombreAlumno) => {
  // Ejemplo de como accedo a datos dentro de la base de datos
  //let salida = [];
  /*basededatos.alumnos.forEach (elemento => {
    if (elemento.nombre === nombreAlumno) {
      basededatos.calificaciones.forEach (elemento2 => {
        if (elemento2.alumno === elemento.id && elemento2.nota > 3) {
            salida.push(elemento2);
        }
      })
    }
  })*/
  const getIdAlumnoByNombre = (nombre) => basededatos.alumnos.find((a)=>a.nombre === nombre);
  const getMateriaById = (id) => basededatos.materias.find((m) => m.id = id);

  console.log(nombreAlumno);
  const alumno = getIdAlumnoByNombre(nombreAlumno).id;
  console.log("idalumno : "+alumno);
  const calificacion = basededatos.calificaciones.filter(cal => cal.alumno === alumno && cal.nota >= 4).
  //console.log(`cal${calificacion}`);
  map ((mat) =>  );
  return calificacion;
};

/**
 * Devuelve informacion ampliada sobre una universidad.
 * Si no existe la universidad con dicho nombre, devolvemos undefined.
 * Ademas de devolver el objeto universidad,
 * agregar la lista de materias dictadas por la universidad y
 * tambien agrega informacion de los profesores y alumnos que participan.
 * Ejemplo de formato del resultado (pueden no ser correctos los datos en el ejemplo):
 *{
      id: 1,
      nombre: 'Universidad del Comahue',
      direccion: {
        calle: 'Av. Siempre viva',
        numero: 2043,
        provincia: 'Neuquen',
      },
      materias: [
        {
          id: 1,
          nombre: 'Análisis matemático',
          profesores: [1, 2],
          universidad: 1,
        },
        {
          id: 4,
          nombre: 'Programación orientada a objetos',
          profesores: [1, 3],
          universidad: 1,
        },
      ],
      profesores:[
        { id: 1, nombre: 'Jorge Esteban Quito' },
        { id: 2, nombre: 'Marta Raca' },
        { id: 3, nombre: 'Silvia Torre Negra' },
      ],
      alumnos: [
         { id: 1, nombre: 'Rigoberto Manchu', edad: 22, provincia: 1 },
         { id: 2, nombre: 'Alina Robles', edad: 21, provincia: 2 },
      ]
    }
 * @param {string} nombreUniversidad
 */
export const expandirInfoUniversidadByNombre = (nombreUniversidad) => {
    let data;
    let materiasUniversidad = [];
    let profesoresUniversidad = [];
    let materiasCalificaciones = [];
    let alumnosUniversidad = [];

    let universidad = basededatos.universidades.find((universidad) => universidad.nombre === nombreUniversidad);

    basededatos.materias.forEach((materia) => {
        if (materia.universidad === universidad.id) materiasUniversidad.push(materia);
    });

    basededatos.profesores.forEach((profesor) => {
        materiasUniversidad.forEach((mat) => {
            mat.profesores.forEach((prof) => {
                if ((prof === profesor.id) && !(estaInluido(profesor,profesoresUniversidad))) {
                    profesoresUniversidad.push(profesor);
                }
            });
        });
    });

    basededatos.calificaciones.forEach((calificacion) => {
        materiasUniversidad.forEach((materia) => {
            if ((materia.id === calificacion.materia) && !(estaInluido(calificacion.alumno,materiasCalificaciones))) {
                materiasCalificaciones.push(calificacion.alumno);
            }
        });
    });

    basededatos.alumnos.forEach((alumno) => {
        materiasCalificaciones.forEach((matcal) => {
            if ((alumno.id === matcal) && !(estaInluido(alumno,alumnosUniversidad))) {
                alumnosUniversidad.push(alumno);
            }
        });
    });

    data = {
        universidad,
        materias: materiasUniversidad,
        profesores: profesoresUniversidad,
        alumnos: alumnosUniversidad
    };


    return data;
};

const estaInluido = (elemento,arreglo) => {
  for (let i = 0;i < arreglo.length; i++) {
    if (arreglo[i] === elemento) {
      return true;
    }
  }
}

// /**
//  * Devuelve el promedio de edad de los alumnos.
//  */
export const promedioDeEdad = () => {
  let suma = 0;
  let cantidad = 0;
  basededatos.alumnos.forEach((alumno) => {
    suma += alumno.edad;
    cantidad ++;
  });
  return suma/cantidad;
};

// /**
//  * Devuelve la lista de alumnos con promedio mayor al numero pasado
//  * por parametro.
//  * @param {number} promedio
//  */
export const alumnosConPromedioMayorA = (promedio) => {
  let salida = [];
  basededatos.alumnos.forEach((alumno) => {
    //console.log(promedioAlumno(alumno.id));
    if (promedioAlumno(alumno.id) > promedio) {
      salida.push(alumno);
    }
  })
return salida;
};

const promedioAlumno = (idalumno) => {
  let sumaCalificaciones = 0;
  let cantidadCalificaciones = 0;
  basededatos.calificaciones.forEach((calificacion) => {
    if (calificacion.alumno === idalumno) {
      sumaCalificaciones += calificacion.nota;
      cantidadCalificaciones ++;
    }
  })
  //console.log("promedio " + idalumno + " " + sumaCalificaciones/cantidadCalificaciones);
    return sumaCalificaciones/cantidadCalificaciones;
}

// /**
//  * Devuelve la lista de materias sin alumnos
//  */
export const materiasSinAlumnosAnotados = () => {
  let salida = [];
  basededatos.materias.forEach((materia) => {
    if (!(existenAlumnos(materia.id))) {
      salida.push(materia);
    }
  })
  return salida;
};

const existenAlumnos = (idmateria) => {
  for (let i = 0; i < basededatos.calificaciones.length; i++) {
    if (basededatos.calificaciones[i].materia === idmateria) {
      return true;
    }
  }
  return false;
}
// /**
//  * Devuelve el promdedio de edad segun el id de la universidad.
//  * @param {number} universidadId
//  */
export const promedioDeEdadByUniversidadId = (universidadId) => {
  let idMateriasUniversidad = [];
  let idAlumnosUniversidad = [];
  let sumaEdades = 0;

  basededatos.materias.forEach((materia) => {
    if ((materia.universidad === universidadId) && !(estaInluido(materia.id,idMateriasUniversidad))) {
      idMateriasUniversidad.push(materia.id);
    };
  });

  basededatos.calificaciones.forEach((calificacion) => {
    if (estaInluido(calificacion.materia,idMateriasUniversidad) && !(estaInluido(calificacion.alumno,idAlumnosUniversidad))) {
      idAlumnosUniversidad.push(calificacion.alumno);
    };
  });

  idAlumnosUniversidad.forEach((alUni) => {
    let alumno = basededatos.alumnos.find((alu) => alu.id === alUni );
    sumaEdades += alumno.edad;
  })
  return sumaEdades/idAlumnosUniversidad.length;
};
