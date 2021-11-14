export class DrawingObject {
  constructor(pos_x, pos_y, size_x, size_y, type) {
    this.size_x = size_x;
    this.size_y = size_y;
    this.pos_x = pos_x;
    this.pos_y = pos_y;
    this.type = type;
  }

  resize(x, y) {
    this.size_x = x;
    this.size_y = y;
  }
}

export class Unit extends DrawingObject {
  constructor(pos_x, pos_y, size_x, size_y, type) {
    super();
  }

  x_move(amount) {
    this.size_x += amount;
  }

  y_move(amount) {
    this.size_y += amount;
  }

  draw(context) {
    context.fillStyle = "#FF0000";
    context.fillRect(
      50,
      50,
      context.canvas.width - 100,
      context.canvas.height - 100
    );
  }
}

export class Obstacle extends DrawingObject {
  constructor(pos_x, pos_y, size_x, size_y, type) {
    super();
  }

  draw(ctx) {
    ctx.fillStyle = "#000000";
    ctx.fillRect(50, 50, ctx.canvas.width - 100, ctx.canvas.height - 100);
  }
}

export class Player extends Unit {
  constructor(pos_x, pos_y, size_x, size_y, type) {
    super();
  }

  action(event) {
    if ((event = "a")) {
      this.x_move(-5);
    }
    if ((event = "d")) {
      this.x_move(5);
    }
    if ((event = "s")) {
      this.x_move(-5);
    }
    if ((event = "w")) {
      this.x_move(5);
    }
  }

  draw(context) {
    console.log("drawing player");
  }
}
