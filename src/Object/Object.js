export class DrawingObject {
  // posx and posy are the coordinates of the top left corner of the object
  // size will determine the hitbox of the object

  //the refresh time interval is set to 100ms
  constructor(pos_x, pos_y, ctr) {
    this.pos_x = pos_x;
    this.pos_y = pos_y;
    this.ctr = ctr;
    this.dir = [0, -1]; //default facing direction of the object is up
  }

  resize(x, y) {
    this.size_x = x;
    this.size_y = y;
  }

  draw(context) {
    console.log("drawing unit");
  }
}

export class Unit extends DrawingObject {
  constructor(pos_x, pos_y) {
    super();
    this.size_x = 50;
    this.size_y = 50;
    this.hp = 100;
    this.max_hp = 100;
    this.att = 10;
    this.__speed = 0;
    this.ammo = [];
  }

  x_move(amount) {
    if (amount > 0) {
      this.dir = [1, 0];
    } else {
      this.dir = [-1, 0];
    }
    if (this.ctr.notifyMovesX(this, amount)) {
      this.pos_x += amount;
    }
  }

  y_move(amount) {
    if (amount > 0) {
      this.dir = [0, 1];
    } else {
      this.dir = [0, -1];
    }
    if (this.ctr.notifyMovesY(this, amount)) {
      this.pos_y += amount;
    }
  }

  HP_change(amount) {
    this.hp += amount;
    if (this.hp <= 0) {
      this.hp = 0;
      this.ctr.notifyDeath(this);
    }
  }
}

export class Obstacle extends DrawingObject {
  constructor(pos_x, pos_y, size_x, size_y, type) {
    super();
  }
}

export class bullet extends DrawingObject {
  constructor(pos_x, pos_y, dir) {
    super();
    this.speed = 50;
    this.size_x = 10;
    this.size_y = 10;
    this.initDirection(dir[0], dir[1]);
  }

  //x y is the direction of the bullet
  initDirection(x, y) {
    if (x === 0) {
      if (y === -1) {
        this.dir = [0, -1];
      } else if (y === 1) {
        this.dir = [0, 1];
      } else {
        throw new Error("invalid direction");
      }
    } else if (y === 0) {
      if (x === -1) {
        this.dir = [-1, 0];
      } else if (x === 1) {
        this.dir = [1, 0];
      } else {
        throw new Error("invalid direction");
      }
    } else {
      throw new Error("invalid direction");
    }
  }
}
