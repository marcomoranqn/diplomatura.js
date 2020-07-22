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
