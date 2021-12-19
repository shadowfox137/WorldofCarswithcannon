import { useState, useEffect, useRef } from "react";
import Draw from "./Draw";

export const canvasWidth = 1600;
export const canvasHeight = 900;

export function UpdateCanvas() {
  const canvasRef = useRef(null);
  const initialState = [10];
  const [objects, setObjects] = useState(initialState);

  useEffect(() => {
    const canvasObj = canvasRef.current;
    const ctx = canvasObj.getContext("2d");
    // clear the canvas area before rendering the coordinates held in state
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // draw all coordinates held in state
    //objects.forEach((obj) => {
    //Draw(ctx, obj);
    //});
  });

  return [objects, setObjects, canvasRef, canvasWidth, canvasHeight];
}
