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
    delay('Terminó 1.1', 100);
    console.log(2);
    delay('Terminó 1.2', 100);
    console.log(3);
    delay('Terminó 1.3', 100);
};

run();

console.log(`

=================================
corrida 2
`);

run = () => {
    console.log(1);
    delay('Terminó 2.1', 300);
    console.log(2);
    delay('Terminó 2.2', 200);
    console.log(3);
    delay('Terminó 2.3', 100);
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
import {delay_prom} from "./6.delay async";

run = () => {
    //job 1
    delay_prom( 2000 )
    .then( function job1(){
            console.log( 1 );
            return delay_prom( 100 );
        } 
    )
    .then( function job2(){
            console.log( "Terminó 1" );
            console.log( 2 );
            return delay_prom( 100 );
        } 
    )
    .then( function job3(){
            console.log( "Terminó 2" );
            console.log( 3 );
            return delay_prom( 100 );
        } 
    )
    .then( function job4(){
            console.log( "Terminó 3" );
        } 
    )
};

delay_prom( 2000 )
.then( function (){
    console.log(`

######################################
#    EJ 06) Delay con Promises
######################################

`);
})
.then( run() );

//run();
