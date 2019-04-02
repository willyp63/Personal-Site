export class WPVector {
  get x() { return this._x; }
  get y() { return this._y; }

  constructor(private _x: number, private _y: number) {}

  distanceTo(otherVector: WPVector) {
    return Math.sqrt(Math.pow(this.x - otherVector.x, 2) + Math.pow(this.y - otherVector.y, 2));
  }

  // tslint:disable:no-bitwise
  approxDistanceTo(otherVector: WPVector) {
    let dx = this.x - otherVector.x,
      dy = this.y - otherVector.y;

    if (dx < 0) { dx = -dx; }
    if (dy < 0) { dy = -dy; }

    let min, max;

    if (dx < dy) {
      min = dx;
      max = dy;
    } else {
      min = dy;
      max = dx;
    }

    let approx = ( max * 1007 ) + ( min * 441 );
    if ( max < ( min << 4 )) {approx -= ( max * 40 ); }

    // add 512 for proper rounding
    return (( approx + 512 ) >> 10 );
  }
  // tslint:enable:no-bitwise
}
