import {Collection} from "./1.collection";

// EJ #1
const col = new Collection();
console.log("col vacia:" + col);

const col2 = new Collection([1,2,3]);
console.log("col con items:" + col2.toString());

if (col2.has(2)){
    col2.delete(2);
} else {
    col2.add(5);
}
console.log("nuevo col:" + col2.toString());


// EJ #3
import {delay} from "./3.delay";

console.log("=========");
console.log("corrida 1");

let run = () => {
    console.log(1);
    delay('Terminó 1.1', 1000);
    console.log(2);
    delay('Terminó 1.2', 1000);
    console.log(3);
    delay('Terminó 1.3', 1000);
};

run();

console.log("=========");
console.log("corrida 2");

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
import {users} from "./4.api";

users();
//console.log("=========");
