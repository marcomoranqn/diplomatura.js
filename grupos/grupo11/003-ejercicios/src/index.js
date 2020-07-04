import { Collection } from './1.collection';
import { Vector } from './2.vector';
import { delay, run } from './3.delay';
import { api } from './4.api';
import { getRemoteData } from './5.getRemoteData';

//ejercicio 1
/*const lista = new Collection([1, 2]);
console.log('1 ' + lista);
lista.mostrar();
lista.add(3);
console.log('2 ' + lista);
lista.delete(1);
console.log('3 ' + lista);
console.log('4 ' + lista.has(2));
lista.mostrar();
*/
//Ejercicio 2
/*console.log(new Vector(1, 2));

console.log(new Vector(1, 2).sumar(new Vector(2, 3)));
*/
//Ejercicio 3
/*delay('hola 4', 2000);
console.log('Hola1');
setTimeout(() => {
  console.log('Hola 2');
}, 3000);
console.log('hola3');

run();
*/

//Ejercicio 4
//api();

//Ejercicio 5
getRemoteData();
