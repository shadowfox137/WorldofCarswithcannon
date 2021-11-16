import React from "react";
import "../Object/Object";
import { Obstacle } from "../Object/Object";

function Draw(ctx, location) {
  ctx.fillStyle = "red";
  ctx.fillRect(location.x, location.y, location.width, location.height);
}

export default Draw;
