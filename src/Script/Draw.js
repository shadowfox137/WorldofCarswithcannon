import React from "react";
import "../Object/Object";
import { Obstacle } from "../Object/Object";

function Draw(context) {
  const objects = [];
  let ob1 = new Obstacle(0, 0, 1, 1, "object");
  objects.push(ob1);
  for (let i = 0; i < objects.length; i += 1) {
    objects[i].draw(context);
  }
}

export default Draw;
