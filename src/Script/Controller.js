import Draw from "./Draw";

export default class Controller {
  constructor() {
    this.drawingList = [];
  }

  setCtx(ctx) {
    this.ctx = ctx;
  }

  refresh() {
    console.log("works");
    // Draw(this.ctx, this.drawingList);
  }

  removeFromList(index) {
    this.drawingList.splice(index, 1);
  }

  addToList(object) {
    this.drawingList.push(object);
  }
}
