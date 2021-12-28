import Unit from "./Object.js";
import bullet from "./Objects.js";

export class Player extends Unit {
  constructor() {
    super();
    this.__speed = 50;
  }

  // control player tank action by keyboard
  // 0, 0 represent up, left in canvas
  Move(key) {
    if (key === "w") {
      this.y_move(-this.__speed);
    } else if (key === "s") {
      this.y_move(this.__speed);
    } else if (key === "a") {
      this.x_move(-this.__speed);
    } else if (key === "d") {
      this.x_move(this.__speed);
    }
  }

  y_move(amount) {
    this.pos_y += amount;
  }

  x_move(amount) {
    this.pos_x += amount;
  }

  HP_change(amount) {
    this.hp += amount;
    this.ctr.notifyPlayerHPChange(this, amount);
    if (this.hp <= 0) {
      this.hp = 0;
      this.ctr.notifyDeath(this);
    }
  }

  shoot() {
    let bul = new bullet(this.pos_x, this.pos_y, this.size_x, this.size_y);
    this.ammo.push(bul);
    this.ctr.notifyBulletCreate(bul);
  }
}
