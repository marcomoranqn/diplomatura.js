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
