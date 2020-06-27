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
