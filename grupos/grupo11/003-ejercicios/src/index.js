// EJ #1
import {Collection} from "./1.collection";

const col = new Collection();
const col2 = new Collection([1,2,3]);

console.log(`##########################
#    EJ 01) Collection
##########################

coleccion vacia: ${col}
coleccion con items: ${col2.toString()}`);

if (col2.has(2)){
    col2.delete(2);
} else {
    col2.add(5);
}

console.log(`coleccion modificada: ${col2.toString()}`);


// EJ #2
import {Vector} from "./2.vector";

const a = new Vector(2,3);
const b = new Vector(1,-3);
const c = a.sumar(b);

console.log(`

##########################
#    EJ 02) Vector
##########################

Vector A: (${a.x},${a.y})
Vector B: (${b.x},${b.y})
Vector A+B: (${c.x},${c.y})
`);


// EJ #3
import {delay} from "./3.delay";

console.log(`

#################################
#    EJ 03) Delay con callbacks
#################################

=================================
corrida 1
`);

let run = () => {
    console.log(1);
    delay('Terminó 1.1', 1000);
    console.log(2);
    delay('Terminó 1.2', 1000);
    console.log(3);
    delay('Terminó 1.3', 1000);
};

run();

console.log(`

=================================
corrida 2
`);

run = () => {
    console.log(1);
    delay('Terminó 2.1', 3000);
    console.log(2);
    delay('Terminó 2.2', 2000);
    console.log(3);
    delay('Terminó 2.3', 1000);
};

run();

// EJ #4
import {getUserById} from "./4.api";

console.log(`

######################################
#    EJ 04) API con Promise chaining
######################################

`);

getUserById(1);

// EJ #5
import {getUserByIdAsync} from "./5.api_async";

console.log(`

######################################
#    EJ 05) API con Async/await
######################################

`);

getUserByIdAsync(2);

// EJ #6
import {delay_async} from "./6.delay async";

console.log(`

######################################
#    EJ 06) Delay con Promises
######################################

`);

run = () => {
    console.log(1);
    delay_async(1500)
        .then( () => console.log('Terminó 3.1') );
    console.log(2);
    delay_async(1500)
        .then( () => console.log('Terminó 3.2') );
    console.log(3);
    delay_async(1500)
        .then( () => console.log('Terminó 3.3') );
};

run();
