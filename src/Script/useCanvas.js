import React, { useState, useEffect, useRef } from "react";
import Draw from "./Draw";

export const canvasWidth = window.innerWidth * 0.5;
export const canvasHeight = window.innerHeight * 0.5;

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
