<<<<<<< HEAD
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
=======
export class Collection{
    constructor(col = []){
        this.lista = col;
    }

    add(element){
        this.lista.push(element);
    }

    delete(element){
        this.lista.splice(this.lista.indexOf(element),1);
    }

    has(element){
        return this.lista.indexOf(element) !== -1;
    }

    toString(){ 
        return this.lista.toString();
    }
};
>>>>>>> 84fc77038c2d9dfa1d03980cd05b2b69a468cafd
