export function delay(mensaje, milisegundos) {
  setTimeout(() => {
    console.log(mensaje);
  }, milisegundos);
}

export function run() {
  console.log(1);
  delay('Terminó 1', 1000);
  console.log(2);
  delay('Terminó 2', 1000);
  console.log(3);
  delay('Terminó 3', 1000);
}
export const delay = function(msg, ms) { 
    setTimeout( () => console.log(msg)
        , ms)
};
