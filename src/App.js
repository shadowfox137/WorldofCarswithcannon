import "./CSS/App.css";
import React, { useEffect } from "react";
import Mainmenu from "./Component/Mainmenu";
import { useCanvas } from "./Script/useCanvas";
import Controller from "./Script/Controller";

const HOOK_SVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
    />
  </svg>
);

const HOOK_PATH = new Path2D(HOOK_SVG);
const SCALE = 0.3;
const OFFSET = 80;

function draw(ctx, location) {
  ctx.fillStyle = "deepskyblue";
  ctx.shadowColor = "dodgerblue";
  ctx.shadowBlur = 20;
  ctx.save();
  ctx.scale(SCALE, SCALE);
  ctx.translate(location.x / SCALE - OFFSET, location.y / SCALE - OFFSET);
  ctx.fill(HOOK_PATH);
  ctx.restore();
}

function App() {
  const ctr = new Controller();
  const [coordinates, setCorrdinates, canvasRef, canvasWidth, canvasHeight] =
    useCanvas();

  const handleCanvasClick = (event) => {
    const currentCoord = { x: event.clientX, y: event.clientY };
    setCorrdinates([...coordinates, currentCoord]);
  };

  const handleClearCanvas = (event) => {
    setCorrdinates([]);
    console.log("clear");
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(canvasWidth);
    console.log(canvasHeight);
  };

  useEffect(() => {
    // ctr.refresh();
  });

  // Set drawing interval
  setInterval(function () {
    // ctr.refresh();
  }, 3000);

  /*
        <div className="button">
        <button onClick={handleClearCanvas}> CLEAR </button>
        </div>

  */

  return (
    <main className="App-main">
      <canvas
        className="App-canvas"
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        onClick={handleCanvasClick}
      />
    </main>
  );
}
export default App;
