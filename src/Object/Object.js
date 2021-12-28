export class DrawingObject {
  // posx and posy are the coordinates of the top left corner of the object
  // size will determine the hitbox of the object
  constructor(pos_x, pos_y, size_x, size_y, type, ctr) {
    this.size_x = size_x;
    this.size_y = size_y;
    this.pos_x = pos_x;
    this.pos_y = pos_y;
    this.type = type;
    this.ctr = ctr;
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
  constructor(pos_x, pos_y, size_x, size_y, type) {
    super();
    this.hp = 100;
    this.max_hp = 100;
    this.att = 10;
    this.__speed = 0;
  }

  x_move(amount) {
    this.pos_x += amount;
  }

  y_move(amount) {
    this.pos_y += amount;
  }

  dmg_taken(amount) {
    this.hp -= amount;
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

export class cannon_ball extends DrawingObject {
  constructor(pos_x, pos_y, size_x, size_y, type) {
    super();
    this.t_dir = [0, 0];
    this.speed = 50;
  }

  travel(x, y) {
    if (this.ctr.notifyMoves(this, x, y)) {
      this.pos_x += x;
      this.pos_y += y;
    }
  }
}
