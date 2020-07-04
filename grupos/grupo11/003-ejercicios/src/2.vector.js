<<<<<<< HEAD
export class Vector {
  constructor(valorX = 0, valorY = 0) {
    this.Vector = { x: valorX, y: valorY };
  }

  sumar(newVector) {
    return new Vector(
      this.Vector.x + newVector.Vector.x,
      this.Vector.y + newVector.Vector.y
    );
  }
}
=======
export class Vector{
    constructor(coordX = 0, coordY = 0){
        this.x = coordX;
        this.y = coordY;
    }

    x(){
        return this.x;
    }

    y(){
        return this.y;
    }

    sumar(vector){
        if(! vector instanceof Vector){
            console.log("ERROR: el argumento no es de tipo Vector");
            return -1;
        }

        return new Vector(
            this.x + vector.x,
            this.y + vector.y
        ); 
    }

    toString(){ 
        //return this.lista.toString();
    }
};
>>>>>>> 84fc77038c2d9dfa1d03980cd05b2b69a468cafd
