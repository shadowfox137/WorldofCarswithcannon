import Draw from "./Draw";

/*
  * @class Controller
  * @description Controller class for the game
  * @param {number} width - width of the canvas
  * @param {number} height - height of the canvas
  * @param {number} numObjects - number of objects to be drawn

  The map will be split into a grid of squares of 32 x 18. Each square will be representing
  one drawing unit of the game. The Hit box of each unit will be a square of 50 pixels by 
  50 pixels.

*/
class Controller {
  constructor() {
    this.drawingList = [];
    this.ctx = null;
  }

  notifyPlayerKeyDown(key) {
    console.log(key);

    if ((key = "w")) {
      this.drawingList.push(new Draw(0, -1));
    }
  }

  getObject() {
    return 10;
  }
}

export default Controller;
