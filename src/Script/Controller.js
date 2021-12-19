import Draw from "./Draw";

class Controller {
  constructor() {
    this.drawingList = [];
    this.ctx = null;
  }

  setCtx(ctx) {
    this.ctx = ctx;
    console.log("1");
    // this.ctx.fillStyle = "#000000";
    // this.ctx.fillRect(50, 50, ctx.canvas.width - 100, ctx.canvas.height - 100);
    console.log("2");
  }

  refresh() {
    console.log("works");
    Draw(this.ctx, this.drawingList);
  }

  removeFromList(index) {
    this.drawingList.splice(index, 1);
  }
  y;
  addToList(object) {
    this.drawingList.push(object);
  }

  getObject() {
    return 10;
  }
}

export default Controller;
