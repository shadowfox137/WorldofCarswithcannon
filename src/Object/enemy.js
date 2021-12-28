import Unit from "./unit.js";

export class enemy extends Unit {
  constructor() {
    super();
    this.__speed = 50;
  }

  // control enemy tank action by random

  AutoMove() {
    // determine
    let action = Math.floor(Math.random() * 2 + 1);
    if ((action = 1)) {
      this.x_move(this.__speed);
    } else {
      this.y_move(this.__speed);
    }
  }
}
