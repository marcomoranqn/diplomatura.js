export class Collection {
  constructor(coleccionInicial) {
    if (coleccionInicial) this.array = coleccionInicial;
    else this.array = [];
  }
  add(elemento) {
    this.array.push(elemento); 
  }
  delete(elemento) {
    const pos = this.array.indexOf(elemento);
    this.array.splice(pos, 1);
  }

  has(elemento) {
    return this.array.indexOf(elemento) !== -1;
  }

  mostrar() {
    for (let i = 0; i <= this.array.lenght; i++) {
      console.log(this.array[i]);
    }
  }
}
