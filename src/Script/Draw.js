import React from "react";
import "../Object/Object";
import { Obstacle } from "../Object/Object";

function Draw(context, drawingList) {
  const objects = [];
  let ob1 = new Obstacle(0, 0, 1, 1, "object");
  objects.push(ob1);
  for (let i = 0; i < drawingList.length; i += 1) {
    drawingList[i].draw(context);
  }
}

export default Draw;
