import React, { useState, useEffect, useRef } from "react";
import Draw from "./Draw";

//leaving one px at the between the edges of the canvas
export const canvasWidth = 1582;
export const canvasHeight = 839;

export function useCanvas() {
  const canvasRef = useRef(null);
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    const canvasObj = canvasRef.current;
    const ctx = canvasObj.getContext("2d");
    // clear the canvas area before rendering the coordinates held in state
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // draw all coordinates held in state
    coordinates.forEach((coordinate) => {
      Draw(ctx, coordinate);
    });
  });

  return [coordinates, setCoordinates, canvasRef, canvasWidth, canvasHeight];
}
